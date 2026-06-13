import type { TechnologyDefinition } from '../types';

export const advertisingPaidMediaTechnologyDefinitions = [
	{
		id: "33across",
		name: "33Across",
		website: "https://www.33across.com",
		description: "33Across is a technology company focused on solving the challenge of consumer attention for automated advertising.",
		icon: "33Across.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "33across:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.33across\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "33across:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tynt\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "33across:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("\\.33across\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "33across:dom:3",
				kind: "dom",
				selector: "iframe[src*='.33across.com'], link[href*='.33across.com'], link[href*='.tynt.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "33across:jsGlobal:4",
				kind: "jsGlobal",
				property: "Tynt",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "a8-net",
		name: "A8.net",
		website: "https://www.a8.net",
		description: "A8.net is an affiliate marketing network.",
		icon: "A8.net.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "a8-net:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("statics\\.a8\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "a8-net:dom:1",
				kind: "dom",
				selector: "img[src*='.a8.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "a8-net:jsGlobal:2",
				kind: "jsGlobal",
				property: "A8salesCookieRepository",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "a8-net:jsGlobal:3",
				kind: "jsGlobal",
				property: "a8sales",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "a8-net:jsGlobal:4",
				kind: "jsGlobal",
				property: "map_A8",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "aarki",
		name: "Aarki",
		website: "https://www.aarki.com",
		description: "Aarki is an AI platform that develops advertising solutions aimed at increasing mobile revenue growth.",
		icon: "Aarki.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "aarki:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.aarki\\.net"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "accesstrade",
		name: "AccessTrade",
		website: "https://accesstrade.global/",
		description: "AccessTrade is an affiliate marketing platform based on the CPA model developed by Interspace Co.",
		icon: "AccessTrade.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "accesstrade:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("accesstrade\\.net\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "accesstrade:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("click\\.accesstra\\.de\\/js\\/nct\\/lp\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "accesstrade:dom:2",
				kind: "dom",
				selector: "img[src*='.accesstrade.net'],img[data-src*='.accesstrade.net']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "acuityads",
		name: "AcuityAds",
		website: "https://www.acuityads.com",
		description: "AcuityAds offers automatic solutions to marketers willing to connect through clients across mobile, social, and online display advertising campaigns.",
		icon: "AcuityAds.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "acuityads:jsGlobal:0",
				kind: "jsGlobal",
				property: "acuityAdsEventQueue",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acuityads:jsGlobal:1",
				kind: "jsGlobal",
				property: "acuityAdsPixelKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acuityads:header:2",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.acuityplatform\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "acuityads:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.acuityplatform\\.com", "i"),
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
		id: "ad-ebis",
		name: "AD EBiS",
		website: "https://www.ebis.ne.jp",
		description: "AD EBiS is an advertising and marketing platform that offers advertisement effectiveness measurement, access and user analysis.",
		icon: "ebis.png",
		categories: [
			"advertising-paid-media",
			"marketing-automation",
		],
		rules: [
			{
				id: "ad-ebis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ebis\\.ne\\.jp\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ad-ebis:dom:1",
				kind: "dom",
				selector: "a[href*='.ebis.ne.jp/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ad-ebis:jsGlobal:2",
				kind: "jsGlobal",
				property: "ebis.c.pageurl",
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
		id: "ad-lightning",
		name: "Ad Lightning",
		website: "https://www.adlightning.com",
		description: "Ad Lightning is an programmatic ads monitoring and audit service.",
		icon: "Ad Lightning.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "ad-lightning:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adlightning\\.com"),
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
		id: "adalyser",
		name: "Adalyser",
		website: "https://adalyser.com/",
		description: "Adalyser is an online platform offering the tools needed to get up and running with TV advertising.",
		icon: "Adalyser.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adalyser:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c5\\.adalyser\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adalyser:jsGlobal:1",
				kind: "jsGlobal",
				property: "adalyserModules",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "adara",
		name: "Adara",
		website: "https://adara.com",
		description: "Adara is a tourism advertising system.",
		icon: "Adara.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adara:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adara\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adara:jsGlobal:1",
				kind: "jsGlobal",
				property: "adara",
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
		id: "adbridg",
		name: "AdBridg",
		website: "https://www.adbridg.com",
		description: "AdBridg is a bidding solutions provider for publishers looking to maximize their programmatic revenues.",
		icon: "AdBridg.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adbridg:jsGlobal:0",
				kind: "jsGlobal",
				property: "AdBridg.cmd",
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
		id: "adcash",
		name: "Adcash",
		website: "https://adcash.com",
		icon: "Adcash.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adcash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^[^\\/]*\\/\\/(?:[^\\/]+\\.)?adcash\\.com\\/(?:script|ad)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adcash:url:1",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/(?:[^\\/]+\\.)?adcash\\.com\\/script\\/pop_"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "adcash:jsGlobal:2",
				kind: "jsGlobal",
				property: "SuLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adcash:jsGlobal:3",
				kind: "jsGlobal",
				property: "SuUrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adcash:jsGlobal:4",
				kind: "jsGlobal",
				property: "ac_bgclick_URL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adcash:jsGlobal:5",
				kind: "jsGlobal",
				property: "ct_nOpp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adcash:jsGlobal:6",
				kind: "jsGlobal",
				property: "ct_nSuUrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adcash:jsGlobal:7",
				kind: "jsGlobal",
				property: "ct_siteunder",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adcash:jsGlobal:8",
				kind: "jsGlobal",
				property: "ct_tag",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "adex",
		name: "Adex",
		website: "https://theadex.com",
		description: "Adex is a data management platform (DMP) system utilized for organizing and analyzing large volumes of data to optimize targeted advertising campaigns.",
		icon: "Adex.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dmp\\.theadex\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adex:dom:1",
				kind: "dom",
				selector: "link[href*='.theadex.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "adex:jsGlobal:2",
				kind: "jsGlobal",
				property: "_adexc",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adex:jsGlobal:3",
				kind: "jsGlobal",
				property: "adex.v",
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
		id: "adform",
		name: "Adform",
		website: "https://site.adform.com",
		description: "Adform is an all-in-one platform for digital advertising.",
		icon: "Adform.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adform\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adform:dom:1",
				kind: "dom",
				selector: "link[href*='.adformdsp.net'], link[href*='.adform.net']",
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
		id: "adfox",
		name: "ADFOX",
		website: "https://adfox.yandex.ru",
		description: "ADFOX is an advertising management platform for media publishers.",
		icon: "ADFOX.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adfox:jsGlobal:0",
				kind: "jsGlobal",
				property: "AdFox_getCodeScript",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adfox:jsGlobal:1",
				kind: "jsGlobal",
				property: "Site.adFoxParams",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adfox:jsGlobal:2",
				kind: "jsGlobal",
				property: "adFoxParams",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adfox:jsGlobal:3",
				kind: "jsGlobal",
				property: "adfoxAsyncParams",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adfox:jsGlobal:4",
				kind: "jsGlobal",
				property: "adfoxBiddersMap",
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
		id: "adglare",
		name: "AdGlare",
		website: "https://www.adglare.com",
		description: "AdGlare is an ad serving solution designed for advertisers, publishers, and agencies.",
		icon: "AdGlare.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adglare:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adglare\\.net\\/"),
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
		id: "adinfinity",
		name: "AdInfinity",
		website: "https://adinfinity.com.au",
		icon: "AdInfinity.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adinfinity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("adinfinity\\.com\\.au"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "adition",
		name: "Adition",
		website: "https://www.adition.com",
		description: "Adition is a provider of programmatic advertising solutions.",
		icon: "Adition.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adition:dom:0",
				kind: "dom",
				selector: "link[href*='.adition.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "adition:jsGlobal:1",
				kind: "jsGlobal",
				property: "adition",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adition:jsGlobal:2",
				kind: "jsGlobal",
				property: "initialize_adition",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "adloox",
		name: "Adloox",
		website: "https://www.adloox.com",
		description: "Adloox is an European-born buy-side ad verification and insights company.",
		icon: "Adloox.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adloox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adlooxtracking\\.com\\/"),
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
		id: "admitad",
		name: "Admitad",
		website: "https://www.admitad.com",
		description: "Admitad is an affiliate network that acts as an intermediary between advertisers and publishers.",
		icon: "Admitad.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "admitad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("artfut\\.com\\/static\\/(?:tracking|crossdevice)\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "admitad:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.admitad\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "admitad:jsGlobal:2",
				kind: "jsGlobal",
				property: "ADMITAD",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "admitad:jsGlobal:3",
				kind: "jsGlobal",
				property: "admitad",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "admixer",
		name: "Admixer",
		website: "https://admixer.com",
		description: "Admixer is an independent adtech company developing an ecosystem of full-stack programmatic solutions.",
		icon: "Admixer.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "admixer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.admixer\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "admixer:jsGlobal:1",
				kind: "jsGlobal",
				property: "admixerAds",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "admixer:jsGlobal:2",
				kind: "jsGlobal",
				property: "admixerML",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "admo-tv",
		name: "Admo.tv",
		website: "https://www.admo.tv",
		description: "Admo.tv is a company developing a TV and radio analytics platform.",
		icon: "Admo.tv.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "admo-tv:dom:0",
				kind: "dom",
				selector: "link[href*='.admo.tv'], a[href*='.admo.tv'][target='_blank'], iframe[src*='.admo.tv/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "admo-tv:jsGlobal:1",
				kind: "jsGlobal",
				property: "ADMO_TT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "admo-tv:jsGlobal:2",
				kind: "jsGlobal",
				property: "ADMO_config",
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
		id: "admost",
		name: "Admost",
		website: "https://admost.com/",
		description: "Admost is a full-cycle monetisation system for app publishers, featuring mediation, revenue analytics, and cross-promotion through a single SDK.",
		icon: "Admost.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "admost:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("run\\.admost\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "adnegah",
		name: "Adnegah",
		website: "https://adnegah.net",
		description: "Adnegah is a digital marketing and internet advertising agency.",
		icon: "Adnegah.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adnegah:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adnegah\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adnegah:dom:1",
				kind: "dom",
				selector: "iframe[scr*='adnegah.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "adnegah:header:2",
				kind: "header",
				key: "X-Advertising-By",
				valuePattern: new RegExp("adnegah\\.net", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "adnegah:header:3",
				kind: "header",
				key: "x-advertising-by",
				valuePattern: new RegExp("adnegah\\.net", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "adocean",
		name: "AdOcean",
		website: "https://adocean-global.com",
		icon: "AdOcean.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adocean:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("adocean\\.pl\\/files\\/js\\/ado\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adocean:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("adocean\\.pl"),
				confidence: 80,
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adocean:jsGlobal:2",
				kind: "jsGlobal",
				property: "ado.master",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adocean:jsGlobal:3",
				kind: "jsGlobal",
				property: "ado.placement",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adocean:jsGlobal:4",
				kind: "jsGlobal",
				property: "ado.slave",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"gemius",
		],
	},
	{
		id: "adomik",
		name: "Adomik",
		website: "https://www.adomik.com",
		description: "Adomik is a tool that assists digital publishers in enhancing their programmatic and real-time bidding (RTB) yield management, functioning as a programmatic ad network.",
		icon: "Adomik.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adomik:jsGlobal:0",
				kind: "jsGlobal",
				property: "Adomik",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "adrecover",
		name: "AdRecover",
		website: "https://www.adrecover.com",
		description: "AdRecover is a tool that helps online publishers monetise their Adblock inventory.",
		icon: "adrecover.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adrecover:jsGlobal:0",
				kind: "jsGlobal",
				property: "adRecover.ap",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "adriver",
		name: "AdRiver",
		website: "https://adriver.ru",
		description: "AdRiver is a company which provide internet advertising management and audit software.",
		icon: "AdRiver.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adriver:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adriver\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adriver:dom:1",
				kind: "dom",
				selector: "link[href*='.adriver.ru'], img[src*='.adriver.ru'], iframe[src*='.adriver.ru']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "adriver:jsGlobal:2",
				kind: "jsGlobal",
				property: "AdriverCounter",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adriver:jsGlobal:3",
				kind: "jsGlobal",
				property: "AdriverPrebid",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adriver:jsGlobal:4",
				kind: "jsGlobal",
				property: "adfoxBiddersMap.adriver",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adriver:jsGlobal:5",
				kind: "jsGlobal",
				property: "adriver",
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
		id: "adroll",
		name: "AdRoll",
		website: "https://adroll.com",
		description: "AdRoll is a digital marketing technology platform that specializes in retargeting.",
		icon: "AdRoll.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adroll:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:a|s)\\.adroll\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adroll:dom:1",
				kind: "dom",
				selector: "link[href*='.adroll.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "adroll:jsGlobal:2",
				kind: "jsGlobal",
				property: "adroll_adv_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adroll:jsGlobal:3",
				kind: "jsGlobal",
				property: "adroll_pix_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adroll:jsGlobal:4",
				kind: "jsGlobal",
				property: "adroll_version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adroll:scriptContent:5",
				kind: "scriptContent",
				pattern: new RegExp("(?:d|s)\\.adroll\\.com\\/"),
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
		id: "adscale",
		name: "AdScale",
		website: "https://www.adscale.com",
		description: "AdScale is a cloud-based, AI-powered performance optimisation platform which utilises machine learning to automate and optimise AdWords campaigns across Google Search, Google Shopping, Google Display, and YouTube.",
		icon: "AdScale.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adscale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adscale\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adscale:jsGlobal:1",
				kind: "jsGlobal",
				property: "_adscale",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adscale:jsGlobal:2",
				kind: "jsGlobal",
				property: "adscaleAddToCart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adscale:jsGlobal:3",
				kind: "jsGlobal",
				property: "adscaleViewProduct",
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
		id: "adthrive",
		name: "AdThrive",
		website: "https://www.adthrive.com",
		description: "AdThrive is an online advertising network aka ad provider for bloggers for blog monetisation.",
		icon: "AdThrive.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adthrive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ads\\.adthrive\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adthrive:jsGlobal:1",
				kind: "jsGlobal",
				property: "adthrive",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adthrive:jsGlobal:2",
				kind: "jsGlobal",
				property: "adthriveVideosInjected",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "advally",
		name: "Advally",
		website: "https://www.advally.com",
		description: "Advally is an advertising platform for publishers.",
		icon: "Advally.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "advally:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.adligature\\.com\\/.+\\/advally-([\\d.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "advally:jsGlobal:1",
				kind: "jsGlobal",
				property: "advally",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "advert-stream",
		name: "Advert Stream",
		website: "https://www.advertstream.com",
		icon: "Advert Stream.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "advert-stream:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:ad\\.advertstream\\.com|adxcore\\.com)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "advert-stream:jsGlobal:1",
				kind: "jsGlobal",
				property: "advst_is_above_the_fold",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "adverticum",
		name: "Adverticum",
		website: "https://adverticum.net",
		description: "Adverticum is the developer and operator of Hungary's market leading online ad serving solution, the Adverticum AdServer.",
		icon: "Adverticum.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "adverticum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adverticum\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adverticum:dom:1",
				kind: "dom",
				selector: "a[href*='ad.adverticum.net'], div.goAdverticum",
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
		id: "affilae",
		name: "Affilae",
		website: "https://affilae.com",
		description: "Affilae is an affiliate marketing platform that enables brands to connect, collaborate with influencers and affiliates.",
		icon: "Affilae.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "affilae:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.affilae\\.com\\/(?:.+v([\\d\\.]+)|.+)?\\.js"),
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
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "affiliate-b",
		name: "Affiliate B",
		website: "https://affiliate-b.com",
		description: "Affiliate B is an advertising system that allows site operators (HP, blogs, e-mail newsletters, etc.) to place advertiser advertisements on their own sites.",
		icon: "Affiliate B.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "affiliate-b:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("t\\.afi-b\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "affiliate-b:dom:1",
				kind: "dom",
				selector: "img[src*='www.afi-b.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "affiliate-future",
		name: "Affiliate Future",
		website: "https://affiliatefuture.com",
		description: "Affiliate Future is a provider of advertisers with marketing solution through its affiliate network and tools.",
		icon: "Affiliate Future.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "affiliate-future:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tags\\.affiliatefuture\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "affiliate-future:dom:1",
				kind: "dom",
				selector: "img[src*='banners.affiliatefuture.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "affiliatly",
		name: "Affiliatly",
		website: "https://www.affiliatly.com",
		description: "Affiliatly is an affiliate marketing software for ecommerce store owners.",
		icon: "Affiliatly.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "affiliatly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.affiliatly\\.com\\/"),
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
		id: "affilio",
		name: "Affilio",
		website: "https://affilio.ir",
		description: "Affilio is an Iranian affiliate marketing platform.",
		icon: "Affilio.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "affilio:dom:0",
				kind: "dom",
				selector: "a[href*='.affilio.ir/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "affilio:jsGlobal:1",
				kind: "jsGlobal",
				property: "Affilio.widget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "affilo",
		name: "Affilo",
		website: "https://affilo.io",
		description: "Affilo is an all-in-one solution for referrals and affiliate marketing.",
		icon: "Affilo.png",
		categories: [
			"advertising-paid-media",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "affilo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/affilo\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "amazon-advertising",
		name: "Amazon Advertising",
		website: "https://advertising.amazon.com",
		description: "Amazon Advertising (formerly AMS or Amazon Marketing Services) is a service that works in a similar way to pay-per-click ads on Google.",
		icon: "Amazon.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "amazon-advertising:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.amazon-adsystem\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amazon-advertising:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.amazon-adsystem\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "amazon-advertising:dom:2",
				kind: "dom",
				selector: "iframe[src*='.amazon-adsystem.com/']",
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
		id: "amazon-associates",
		name: "Amazon Associates",
		website: "https://affiliate-program.amazon.com",
		description: "Amazon Associates is an affiliate marketing program that allows website owners and bloggers to create links and earn referral fees when customers click through and buy products from Amazon.",
		icon: "Amazon.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "amazon-associates:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.associates-amazon\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amazon-associates:dom:1",
				kind: "dom",
				selector: "a[href*='amazon.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "amazon-associates:dom:2",
				kind: "dom",
				selector: "a[href*='amzn.to']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "amobee",
		name: "Amobee",
		website: "https://www.amobee.com",
		description: "Amobee is a cloud-based advertising and data management platform.",
		icon: "Amobee.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "amobee:dom:0",
				kind: "dom",
				selector: "img[src*='.turn.com/r/beacon']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "anetwork",
		name: "Anetwork",
		website: "https://www.anetwork.ir",
		icon: "Anetwork.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "anetwork:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static-cdn\\.anetwork\\.ir\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "aniview-ad-server",
		name: "Aniview Ad Server",
		website: "https://aniview.com/video-ad-servers/",
		description: "Aniview Ad Server is a technology developed by Aniview, a company that specialises in providing video advertising solutions. The Aniview Ad Server is a platform designed to manage and serve video ads to publishers, advertisers, and agencies.",
		icon: "Aniview.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "aniview-ad-server:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^(?!.*player).*aniview\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aniview-ad-server:dom:1",
				kind: "dom",
				selector: "link[href*='aniview.com']",
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
		id: "anura",
		name: "Anura",
		website: "https://www.anura.io",
		description: "Anura is an ad fraud detection solution designed to identify and mitigate fraudulent activity across digital advertising platforms.",
		icon: "Anura.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "anura:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.anura\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "anura:jsGlobal:1",
				kind: "jsGlobal",
				property: "Anura",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "anura:jsGlobal:2",
				kind: "jsGlobal",
				property: "_anuraResFun",
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
		id: "anyclip",
		name: "AnyClip",
		website: "https://www.anyclip.com",
		description: "AnyClip is a video engagement platform that uses an AI-driven content analysis engine to analyze and categorize video content in real-time to create personalised video feeds.",
		icon: "AnyClip.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "anyclip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.anyclip\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "anyclip:dom:1",
				kind: "dom",
				selector: "img[src*='.anyclip.com'], video[poster*='.anyclip.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "anyclip:jsGlobal:2",
				kind: "jsGlobal",
				property: "anyclip",
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
		id: "appier",
		name: "Appier",
		website: "https://www.appier.com",
		description: "Appier is a platform that helps clients optimize advertising ROI.",
		icon: "Appier.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "appier:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.appier\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "appier:dom:1",
				kind: "dom",
				selector: "link[href*='.appier.net'][rel='dns-prefetch']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "appier:jsGlobal:2",
				kind: "jsGlobal",
				property: "APPIER_LOG",
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
		id: "applovin",
		name: "APPLOVIN",
		website: "https://www.applovin.com/",
		description: "APPLOVIN is an advertising platform.",
		icon: "APPLOVIN.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "applovin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.applovin\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "appnexus",
		name: "AppNexus",
		website: "https://appnexus.com",
		description: "AppNexus is a cloud-based software platform that enables and optimizes programmatic online advertising.",
		icon: "AppNexus.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "appnexus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("adnxs\\.(?:net|com)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "appnexus:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("prebid\\.adnxs\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "appnexus:dom:2",
				kind: "dom",
				selector: "iframe[src*='.adnxs.com'], img[src*='.adnxs.com'], link[href*='.adnxs.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "appnexus:jsGlobal:3",
				kind: "jsGlobal",
				property: "appnexus",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "appnexus:jsGlobal:4",
				kind: "jsGlobal",
				property: "appnexusVideo",
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
		id: "arcspan",
		name: "ArcSpan",
		website: "https://www.arcspan.com",
		description: "ArcSpan is an audience monetization DMP platform enabling direct sold and programmatic deal results for the world’s finest publishers and retail media networks.",
		icon: "ArcSpan.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "arcspan:jsGlobal:0",
				kind: "jsGlobal",
				property: "aspan",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arcspan:jsGlobal:1",
				kind: "jsGlobal",
				property: "aspan_extern",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arcspan:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^arcid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "arcspan:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^aspan_s$", "i"),
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
		id: "assertive-yield",
		name: "Assertive Yield",
		website: "https://www.assertiveyield.com",
		description: "Assertive Yield is a SaaS company that specialises in helping SSPs (Supply-Side Platforms), publishers, and ad networks optimise their advertising revenue through real-time attribution and yield optimisation strategies.",
		icon: "Assertive Yield.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "assertive-yield:jsGlobal:0",
				kind: "jsGlobal",
				property: "assertive.predict",
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
		id: "audiohook",
		name: "Audiohook",
		website: "https://www.audiohook.com",
		description: "Audiohook specializes in programmatic audio advertising.",
		icon: "Audiohook.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "audiohook:dom:0",
				kind: "dom",
				selector: "img[src*='listen.audiohook.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "automatad",
		name: "Automatad",
		website: "https://automatad.com/",
		description: "Automatad is a digital media products company that provides a suite of programmatic monetisation solutions.",
		icon: "automatad.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "automatad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/go\\.automatad\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "awin",
		name: "AWIN",
		website: "https://www.awin.com",
		description: "AWIN is a global affiliate marketing network.",
		icon: "AWIN.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "awin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dwin1\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "awin:jsGlobal:1",
				kind: "jsGlobal",
				property: "AWIN.Tracking",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "awin:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^BAGawin$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "awin:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^_aw_xid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "awin:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("zanox\\.com\\/scripts\\/zanox\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "awin:dom:5",
				kind: "dom",
				selector: "img[src*='add.zanox.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "awin:jsGlobal:6",
				kind: "jsGlobal",
				property: "zanox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "awin:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^bagawin$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "backstage",
		name: "Backstage",
		website: "https://yourbackstage.io",
		description: "Backstage is a provider of premium marketing templates designed for affiliates, offering ready-made emails, videos, and funnels to streamline campaign performance.",
		icon: "Backstage.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "backstage:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.yourbackstage\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "basis-technologies",
		name: "Basis Technologies",
		website: "https://basis.net/",
		description: "Basis Technologies, formerly ‘Centro,’ provides cloud-based workflow automation and business intelligence software for marketing.",
		icon: "Basis.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "basis-technologies:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn01\\.basis\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "beeswax",
		name: "Beeswax",
		website: "https://www.beeswax.com/",
		description: "Beeswax offers Bidder-as-a-Service solution.",
		icon: "Beeswax.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "beeswax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("segment\\.prod\\.bidr\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "bidmatic",
		name: "Bidmatic",
		website: "https://bidmatic.io",
		description: "Bidmatic is a platform providing publisher-centric monetisation solutions, enabling publishers to manage their ad stack and maximise revenue through high-quality demand sources and advanced optimisation technology.",
		icon: "Bidmatic.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "bidmatic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bidmatic\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bidmatic:jsGlobal:1",
				kind: "jsGlobal",
				property: "nobidVersion",
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
				"poa",
			],
		},
	},
	{
		id: "bittads",
		name: "BittAds",
		website: "https://bittads.com",
		icon: "BittAds.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "bittads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bittads\\.com\\/js\\/bitt\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bittads:jsGlobal:1",
				kind: "jsGlobal",
				property: "bitt",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "blokid",
		name: "BlokID",
		website: "https://www.blokid.com",
		description: "BlokID is a real-time digital ad auditing tool, ensuring accurate tracking of all ad interactions with secure records.",
		icon: "BlokID.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "blokid:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixel\\.blokid\\.com\\/"),
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
		id: "blue",
		name: "Blue",
		website: "https://web.getblue.io/en/",
		description: "Blue is an ecommerce data marketing, lead generation, real time bidding and recommendation solutions.",
		icon: "Blue.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "blue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getblue\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blue:dom:1",
				kind: "dom",
				selector: "iframe[src*='.getblue.io']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "blue:jsGlobal:2",
				kind: "jsGlobal",
				property: "blueProductId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blue:jsGlobal:3",
				kind: "jsGlobal",
				property: "bluecpy_id",
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
		id: "booking-com",
		name: "Booking.com",
		website: "https://www.booking.com/affiliate-program/v2/selfmanaged.html",
		description: "Booking.com is one of the largest ecommerce travel companies in the world. As an affiliate member, you can make up to 40% commission.",
		icon: "Booking.com.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "booking-com:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("aff\\.bstatic\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "broadstreet",
		name: "Broadstreet",
		website: "https://broadstreetads.com",
		description: "Broadstreet is an ad manager that caters specifically to the needs of direct, digital ad sales.",
		icon: "Broadstreet.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "broadstreet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.broadstreetads\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "broadstreet:jsGlobal:1",
				kind: "jsGlobal",
				property: "broadstreet",
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
		id: "buysellads",
		name: "BuySellAds",
		website: "https://buysellads.com",
		description: "BuySellAds is a marketplace for advertising, newsletter sponsorships, and publisher monetization.",
		icon: "BuySellAds.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "buysellads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/s\\d\\.buysellads\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buysellads:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("servedby-buysellads\\.com\\/monetization(?:\\.[\\w\\d]+)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buysellads:jsGlobal:2",
				kind: "jsGlobal",
				property: "_bsa",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "buysellads:jsGlobal:3",
				kind: "jsGlobal",
				property: "_bsaPRO",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "buysellads:jsGlobal:4",
				kind: "jsGlobal",
				property: "_bsap",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "buysellads:jsGlobal:5",
				kind: "jsGlobal",
				property: "_bsap_serving_callback",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "captify",
		name: "Captify",
		website: "https://www.captifytechnologies.com",
		description: "Captify is a platform that offers search retargeting by combining keyword-based search marketing with the reach of display advertising.",
		icon: "Captify.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "captify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("data\\.captifymedia\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "carbon-ads",
		name: "Carbon Ads",
		website: "https://carbonads.net",
		description: "Carbon Ads is an ad tech company, that connects advertisers to users through targeted verticals called Circles.",
		icon: "Carbon Ads.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "carbon-ads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.carbonads\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "carbon-ads:dom:1",
				kind: "dom",
				selector: "div#carbonads-container",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "carbon-ads:jsGlobal:2",
				kind: "jsGlobal",
				property: "_carbonads",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "carbon-ads:jsGlobal:3",
				kind: "jsGlobal",
				property: "_carbonads_go",
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
		id: "cellxpert",
		name: "Cellxpert",
		website: "https://www.cellxpert.com",
		description: "Cellxpert is a SaaS platform for affiliate and partner program management, providing tools for tracking, reporting, and optimizing performance-based marketing campaigns.",
		icon: "Cellxpert.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "cellxpert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cellxpert\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cellxpert:dom:1",
				kind: "dom",
				selector: "link[href*='.cellxpert.com/']",
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
		id: "chitika",
		name: "Chitika",
		website: "https://chitika.com",
		icon: "Chitika.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "chitika:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.chitika\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chitika:jsGlobal:1",
				kind: "jsGlobal",
				property: "ch_client",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chitika:jsGlobal:2",
				kind: "jsGlobal",
				property: "ch_color_site_link",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "clickaine",
		name: "Clickaine",
		website: "https://clickaine.com",
		description: "Clickaine is a traffic ad network that helps advertisers drive targeted traffic to their websites through various digital marketing solutions, offering a platform for publishers to monetize their traffic effectively.",
		icon: "Clickaine.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "clickaine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.clickaine\\.com\\/"),
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
		id: "clickbank",
		name: "Clickbank",
		website: "https://www.clickbank.com/",
		description: "ClickBank is an affiliate marketplace and ecommerce platform for digital products.",
		icon: "Clickbank.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "clickbank:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("r\\.wdfl\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clickbank:dom:1",
				kind: "dom",
				selector: "a[href*='pay.clickbank.net?cbfid'], img[width='1'][src*='hop.clickbank.net?affiliate']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "clickbank:jsGlobal:2",
				kind: "jsGlobal",
				property: "cbtb",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "clickbrainiacs",
		name: "Clickbrainiacs",
		website: "https://www.clickbrainiacs.com",
		description: "Clickbrainiacs is a click fraud monitoring software for AdWords PPC campaigns that detects and helps prevent invalid or malicious ad clicks.",
		icon: "Clickbrainiacs.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "clickbrainiacs:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.clickbrainiacs\\.com"),
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
		id: "clickfreeze",
		name: "ClickFreeze",
		website: "https://www.clickfreeze.io",
		description: "ClickFreeze is a tool that detects and blocks click fraud in Google Ads campaigns to improve performance and reduce wasted ad spend.",
		icon: "ClickFreeze.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "clickfreeze:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.clickfreeze\\.io"),
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
		id: "clickguard",
		name: "ClickGUARD",
		website: "https://www.clickguard.com",
		description: "ClickGUARD is anti-click fraud prevention software designed to detect and block invalid or fraudulent clicks in online advertising campaigns.",
		icon: "ClickGUARD.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "clickguard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("io\\.clickguard\\.com"),
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
		id: "clicktripz",
		name: "Clicktripz",
		website: "https://site.clicktripz.com",
		description: "Clicktripz is a platform that provides innovative software solutions to serve the needs of suppliers, publishers, advertisers and travelers.",
		icon: "Clicktripz.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "clicktripz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.clicktripz\\.com\\/"),
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
		id: "cluep",
		name: "Cluep",
		website: "https://cluep.com/",
		description: "Cluep's artificially intelligent mobile ad platform targets people based on what they are sharing, how they are feeling and where they go in the physical world.",
		icon: "Cluep.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "cluep:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cas\\.cluep\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "collective-audience",
		name: "Collective Audience",
		website: "https://beop.collectiveaudience.co",
		description: "Collective Audience is a cloud ecosystem for media and brands on the open web, formerly known as BeOp.",
		icon: "CollectiveAudience.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "collective-audience:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.beop\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "collective-audience:jsGlobal:1",
				kind: "jsGlobal",
				property: "BeOpSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "collective-audience:jsGlobal:2",
				kind: "jsGlobal",
				property: "beOpinionAsyncInit",
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
		id: "concert",
		name: "Concert",
		website: "https://concert.io",
		description: "Concert is a publisher-led marketplace for ads by Vox Media.",
		icon: "Concert.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "concert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.concert\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "concert:jsGlobal:1",
				kind: "jsGlobal",
				property: "CONCERT_ADS_CONFIG",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "concert:jsGlobal:2",
				kind: "jsGlobal",
				property: "ConcertAds",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"vox-media",
		],
	},
	{
		id: "container-media-group",
		name: "Container Media Group",
		website: "https://containermedia.net",
		description: "Container Media Group offers technical solutions for agencies and brands to plan, execute, optimise, and report on advertising campaigns. They specialise in creating engaging custom creatives and utilise advanced tracking pixels to monitor user advertising activity across media channels.",
		icon: "Container Media Group.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "container-media-group:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.containermedia\\.net\\/"),
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
		id: "convertiser",
		name: "Convertiser",
		website: "https://convertiser.com",
		description: "Convertiser is a website monetization platform from Poland that helps publishers and advertisers optimize revenue through performance-based marketing solutions.",
		icon: "Convertiser.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "convertiser:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.convertiser\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "convertiser:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.convertiser\\.com"),
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
		id: "cpabuild",
		name: "CPABuild",
		website: "https://cpabuild.com",
		description: "CPABuild is a next generation CPA network with integrated template building and sharing functionality.",
		icon: "CPABuild.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "cpabuild:jsGlobal:0",
				kind: "jsGlobal",
				property: "CPABuildLock",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "criteo",
		name: "Criteo",
		website: "https://criteo.com",
		description: "Criteo provides personalised retargeting that works with Internet retailers to serve personalised online display advertisements to consumers who have previously visited the advertiser's website.",
		icon: "Criteo.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "criteo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/(?:cas\\.criteo\\.com|(?:[^/]\\.)?criteo\\.net)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "criteo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/static\\.criteo\\.net\\/js\\/ld\\/ld\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "criteo:dom:2",
				kind: "dom",
				selector: "link[href*='.criteo.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "criteo:jsGlobal:3",
				kind: "jsGlobal",
				property: "Criteo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "criteo:jsGlobal:4",
				kind: "jsGlobal",
				property: "criteo_pubtag",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "criteo:jsGlobal:5",
				kind: "jsGlobal",
				property: "criteo_q",
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
		id: "cross-pixel",
		name: "Cross Pixel",
		website: "https://crosspixel.net",
		description: "Cross Pixel is an advertising platform through which advertisers can leverage the marriage of partner audience synergies with the power of retargeting.",
		icon: "Cross Pixel.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "cross-pixel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.crsspxl\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cross-pixel:jsGlobal:1",
				kind: "jsGlobal",
				property: "cp_C4w1ldN2d9PmVrkN",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "dable",
		name: "Dable",
		website: "https://dable.io",
		description: "Dable is a content discovery platform for the open web that uses AI to deliver engaging content through native advertising.",
		icon: "Dable.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "dable:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("static\\.dable\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "dable:jsGlobal:1",
				kind: "jsGlobal",
				property: "dable.q",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "danads",
		name: "DanAds",
		website: "https://danads.com",
		description: "DanAds is an infrastructure platform that enables customization and automation of ad sales, operations, and creative management.",
		icon: "DanAds.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "danads:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("danads-event"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dealer-spike",
		name: "Dealer Spike",
		website: "https://www.dealerspike.com",
		description: "Dealer Spike is a digital marketing and advertising company focused that helps dealers grow their business.",
		icon: "Dealer Spike.svg",
		categories: [
			"advertising-paid-media",
			"marketing-automation",
		],
		rules: [
			{
				id: "dealer-spike:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.dealerspike\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dealer-spike:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.dealerspike\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "dealer-spike:dom:2",
				kind: "dom",
				selector: "meta[name='author'][content*='Dealer Spike']",
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
		id: "dianomi",
		name: "Dianomi",
		website: "https://www.dianomi.com",
		description: "Dianomi is an advertiser campaign management software for financial services, premium lifestyle, technology and corporate sectors.",
		icon: "Dianomi.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "dianomi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dianomi\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dianomi:dom:1",
				kind: "dom",
				selector: "iframe[src*='.dianomi.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "digistore24",
		name: "Digistore24",
		website: "https://www.digistore24.com",
		description: "Digistore24 is a German digital reselling and affiliate marketing platform.",
		icon: "Digistore24.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "digistore24:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("digistore\\/digistore\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "digistore24:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.digistore24\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "digistore24:dom:2",
				kind: "dom",
				selector: "a[href*='www.digistore24.com'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "digistore24:jsGlobal:3",
				kind: "jsGlobal",
				property: "DIGISTORE_LINK_ID_KEY",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "digistore24:jsGlobal:4",
				kind: "jsGlobal",
				property: "DIGISTORE_VENDORKEY",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "digistore24:jsGlobal:5",
				kind: "jsGlobal",
				property: "getTheSourceForDigistoreLinks",
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
		id: "district-m",
		name: "District M",
		website: "https://districtm.net",
		description: "District M is a programmatic advertising exchange.",
		icon: "District M.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "district-m:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.districtm\\.io"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "district-m:dom:1",
				kind: "dom",
				selector: "iframe[src*='.districtm.io']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dolead",
		name: "Dolead",
		website: "https://www.dolead.com",
		description: "Dolead is an ad-based lead generation platform that helps businesses acquire potential customers through targeted advertising campaigns.",
		icon: "Dolead.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "dolead:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dolead\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dolead:jsGlobal:1",
				kind: "jsGlobal",
				property: "dolead_affiliate_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dolead:jsGlobal:2",
				kind: "jsGlobal",
				property: "dolead_custom",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "doubleclick-ad-exchange-adx",
		name: "DoubleClick Ad Exchange (AdX)",
		website: "https://www.doubleclickbygoogle.com/solutions/digital-marketing/ad-exchange/",
		description: "DoubleClick Ad Exchange is a real-time marketplace to buy and sell display advertising space.",
		icon: "DoubleClick.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "doubleclick-ad-exchange-adx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("googlesyndication\\.com\\/pagead\\/show_ads\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "doubleclick-ad-exchange-adx:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("tpc\\.googlesyndication\\.com\\/safeframe"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "doubleclick-ad-exchange-adx:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("googlesyndication\\.com.*abg\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "doubleclick-campaign-manager-dcm",
		name: "DoubleClick Campaign Manager (DCM)",
		website: "https://www.doubleclickbygoogle.com/solutions/digital-marketing/campaign-manager/",
		icon: "DoubleClick.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "doubleclick-campaign-manager-dcm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("2mdn\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "doubleclick-floodlight",
		name: "DoubleClick Floodlight",
		website: "https://support.google.com/ds/answer/6029713?hl=en",
		icon: "DoubleClick.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "doubleclick-floodlight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/fls\\.doubleclick\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "doubleclick-floodlight:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.doubleclick\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "doubleclick-floodlight:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("fls\\.doubleclick\\.net"),
				description: "Script content contains a bounded technology signature.",
			},
		],
	},
	{
		id: "doubleclick-for-publishers-dfp",
		name: "DoubleClick for Publishers (DFP)",
		website: "https://www.google.com/dfp",
		description: "DoubleClick for Publishers (DFP) is a hosted ad serving platform that streamlines your ad management.",
		icon: "DoubleClick.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "doubleclick-for-publishers-dfp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("googletagservices\\.com\\/tag\\/js\\/gpt(?:_mobile)?\\.js"),
				description: "Script source URL matches a known technology marker.",
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
		id: "doubleverify",
		name: "DoubleVerify",
		website: "https://doubleverify.com",
		description: "DoubleVerify is a software platform for digital media measurement, data, and analytics.",
		icon: "DoubleVerify.svg",
		categories: [
			"advertising-paid-media",
			"analytics",
		],
		rules: [
			{
				id: "doubleverify:dom:0",
				kind: "dom",
				selector: "link[href*='.doubleverify.com']",
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
		id: "dovetale",
		name: "Dovetale",
		website: "https://dovetale.com/",
		description: "Dovetale (Acquired by Shopify) helps e-commerce stores recruit, manage, & grow their sales with communities of people who love their products.",
		icon: "Dovetale.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "dovetale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dttrk\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dovetale:jsGlobal:1",
				kind: "jsGlobal",
				property: "Dovetale",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "dtscout",
		name: "DTScout",
		website: "https://www.dtscout.com",
		description: "DTScout is a marketing data intelligence software.",
		icon: "DTScout.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "dtscout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dtscout\\.com\\/"),
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
		id: "duel",
		name: "Duel",
		website: "https://www.duel.tech",
		description: "Duel is a customer advocacy marketing platform.",
		icon: "Duel.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "duel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.duel\\.me\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "duel:jsGlobal:1",
				kind: "jsGlobal",
				property: "DUEL.apiURL",
				valuePattern: new RegExp("api\\.duel\\.me"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "duel:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_duelcsrf$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"onetime",
				"poa",
				"recurring",
			],
		},
		implies: [
			"angular",
			"mongodb",
			"node-js",
		],
	},
	{
		id: "dynad",
		name: "DynAd",
		website: "https://dynad.net",
		description: "DynAd is a service for advertising and dynamic content optimisation.",
		icon: "DynAd.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "dynad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("t\\.dynad\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dynad:dom:1",
				kind: "dom",
				selector: "link[href*='t.dynad.net/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ebay-partner-network",
		name: "eBay Partner Network",
		website: "https://partnernetwork.ebay.com",
		description: "eBay Partner Network is an online referral program where eBay pays commissions to referrers on sales generated by customers they’ve referred.",
		icon: "eBay.svg",
		categories: [
			"advertising-paid-media",
			"marketing-automation",
		],
		rules: [
			{
				id: "ebay-partner-network:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("epnt\\.ebay\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "ebay-store",
		name: "eBay Store",
		website: "https://www.ebay.com",
		description: "eBay is a platform that either redirects users to eBay or displays a link to an eBay store.",
		icon: "eBay.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "ebay-store:jsGlobal:0",
				kind: "jsGlobal",
				property: "$ebay.tracking",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ebay-store:jsGlobal:1",
				kind: "jsGlobal",
				property: "ebay.gadgetMonitoring",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ebay-store:header:2",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^ebay server$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ebay-store:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^ebay server$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "effiliation",
		name: "Effiliation",
		website: "https://www.effiliation.com",
		description: "Effiliation is a performance marketing platform and affiliate network that facilitates partnerships between advertisers and publishers for commission-based promotion of products and services.",
		icon: "Effiliation.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "effiliation:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.effiliation\\.com\\/"),
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
		id: "epom",
		name: "Epom",
		website: "https://epom.com",
		description: "Epom is an ad serving and ad management platform for publishers, advertisers, and networks.",
		icon: "Epom.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "epom:url:0",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/(?:[^/]+\\.)?ad(?:op)?shost1\\.com\\/"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "epom:jsGlobal:1",
				kind: "jsGlobal",
				property: "epomCustomParams",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "erate",
		name: "eRate",
		website: "https://www.eratead.com",
		description: "eRate is a provider of digital advertising tools and inventory within global ad networks.",
		icon: "ErateAd.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "erate:dom:0",
				kind: "dom",
				selector: "iframe[src*='rep.erate.co']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ethicalads",
		name: "EthicalAds",
		website: "https://www.ethicalads.io/",
		description: "EthicalAds is a privacy-focused advertising network for developer and technical audiences.",
		icon: "EthicalAds.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "ethicalads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("media\\.ethicalads\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "evermos",
		name: "Evermos",
		website: "https://evermos.com",
		description: "Evermos is a connected commerce platform that enables resellers and drop shippers to earn commissions.",
		icon: "Evermos.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "evermos:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("assets\\.evermos\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "excel-impact",
		name: "Excel Impact",
		website: "https://excelimpact.com",
		description: "Excel Impact is a provider of lead generation systems and advertiser solutions.",
		icon: "ExcelImpact.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "excel-impact:dom:0",
				kind: "dom",
				selector: "link[href*='api.excelimpact.com'][rel='preconnect']",
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
		id: "exit-bee",
		name: "Exit Bee",
		website: "https://www.exitbee.com",
		description: "Exit Bee is a platform that uses pattern recognition and machine learning to detect when users disengage from website content and are more likely to interact with ad campaigns.",
		icon: "ExitBee.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "exit-bee:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.exitbee\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "exoclick",
		name: "ExoClick",
		website: "https://www.exoclick.com",
		description: "ExoClick is a Barcelona-based online advertising company, which provides online advertising services to both advertisers and publishers.",
		icon: "ExoClick.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "exoclick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.exoclick\\.com\\/"),
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
		id: "facebook-ads",
		name: "Facebook Ads",
		website: "https://www.facebook.com/business/ads",
		description: "Facebook Ads is an online advertising platform developed by Facebook.",
		icon: "Facebook.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "fasttony",
		name: "FastTony",
		website: "https://fasttony.com",
		description: "FastTony is an application that facilitates promotion and sales through Facebook and Instagram.",
		icon: "FastTony.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "fasttony:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fasttony\\.(?:es|com)\\/"),
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
		id: "felmat",
		name: "Felmat",
		website: "https://www.felmat.net/",
		description: "Felmat is an advertising network that connects advertisers with publishers to facilitate performance-based marketing across digital platforms.",
		icon: "Felmat.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "felmat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.felmat\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "felmat:jsGlobal:1",
				kind: "jsGlobal",
				property: "felmat_report_conversion",
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
		id: "financeads",
		name: "FinanceAds",
		website: "https://www.financeads.com",
		description: "FinanceAds is a performance marketing agency that has grown affiliate network for the financial sector.",
		icon: "Financeads.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "financeads:dom:0",
				kind: "dom",
				selector: "link[href*='js.financeads.net'], link[href*='js.financeads.com'], a[href*='www.financeads.net/tc.php']",
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
		id: "firstimpression-io",
		name: "FirstImpression.io",
		website: "https://www.firstimpression.io",
		description: "FirstImpression.io is a customized ad placements for publisher websites on their platform, with zero technical work.",
		icon: "FirstImpression.io.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "firstimpression-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.firstimpression\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "firstimpression-io:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.firstimpression\\.io"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "firstimpression-io:jsGlobal:2",
				kind: "jsGlobal",
				property: "FI.options",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "firstimpression-io:jsGlobal:3",
				kind: "jsGlobal",
				property: "fiPrebidAnalyticsHandler",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "firstpromoter",
		name: "FirstPromoter",
		website: "https://firstpromoter.com",
		description: "FirstPromoter is a software platform that helps businesses to create, manage and track their affiliate marketing programs.",
		icon: "FirstPromoter.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "firstpromoter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.firstpromoter\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "firstpromoter:dom:1",
				kind: "dom",
				selector: "link[href*='//firstpromoter.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "firstpromoter:jsGlobal:2",
				kind: "jsGlobal",
				property: "FirstPromoterAPI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "firstpromoter:jsGlobal:3",
				kind: "jsGlobal",
				property: "fprom_obj_",
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
		id: "fixel",
		name: "Fixel",
		website: "https://fixel.ai",
		description: "Fixel is a remarketing and segmentation campaign builder utilising AI technology.",
		icon: "Fixel.svg",
		categories: [
			"advertising-paid-media",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "fixel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.fixel\\.ai\\/"),
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
		id: "freakout",
		name: "FreakOut",
		website: "https://www.fout.co.jp",
		description: "FreakOut is a marketing technology company with programmatic solutions (DSP,SSP) that delivers in-feed display and video formats across global publishers.",
		icon: "FreakOut.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "freakout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fout\\.jp\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "freakout:dom:1",
				kind: "dom",
				selector: "img[src*='.fout.jp/'], link[href*='.fout.jp']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "freakout:jsGlobal:2",
				kind: "jsGlobal",
				property: "FOut",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "freakout:jsGlobal:3",
				kind: "jsGlobal",
				property: "_fout_jsurl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "freakout:jsGlobal:4",
				kind: "jsGlobal",
				property: "_fout_queue",
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
		id: "fusion-ads",
		name: "Fusion Ads",
		website: "https://fusionads.net",
		icon: "Fusion Ads.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "fusion-ads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^[^\\/]*\\/\\/[ac]dn\\.fusionads\\.net\\/(?:api\\/([\\d.]+)\\/)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fusion-ads:jsGlobal:1",
				kind: "jsGlobal",
				property: "_fusion",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "geniee",
		name: "Geniee",
		website: "https://geniee.co.jp",
		description: "Geniee is an ad technology company.",
		icon: "Geniee.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "geniee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gsspcln\\.jp\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "geniee:dom:1",
				kind: "dom",
				selector: "img[src*='.gssprt.jp/'], link[href*='.gssprt.jp']",
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
		id: "geniewords",
		name: "GenieWords",
		website: "https://geniewords.com",
		description: "GenieWords is a tool that simplifies the process of advertising with Google Ads.",
		icon: "GenieWords.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "geniewords:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("admin\\.geniewords\\.com\\/"),
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
		id: "getintent",
		name: "Getintent",
		website: "https://getintent.com",
		description: "Getintent is an adtech company that offers AI-powered programmatic suite for agencies, publishers, broadcasters and content owners.",
		icon: "Getintent.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "getintent:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.adhigh\\.net"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "goaffpro",
		name: "GoAffPro",
		website: "https://goaffpro.com/",
		description: "Goaffpro is an affiliate marketing solution for ecommerce stores.",
		icon: "GoAffPro.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "goaffpro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.goaffpro\\.com\\/loader\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "goaffpro:jsGlobal:1",
				kind: "jsGlobal",
				property: "gfp_api_server",
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
		id: "google-ads",
		name: "Google Ads",
		website: "https://ads.google.com",
		description: "Google Ads is an online advertising platform developed by Google.",
		icon: "Google Ads.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "google-adsense",
		name: "Google AdSense",
		website: "https://www.google.com/adsense/start/",
		description: "Google AdSense is a program run by Google through which website publishers serve advertisements that are targeted to the site content and audience.",
		icon: "Google AdSense.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "google-adsense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("googlesyndication\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-adsense:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("ad\\.ca\\.doubleclick\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-adsense:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("2mdn\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-adsense:jsGlobal:3",
				kind: "jsGlobal",
				property: "Goog_AdSense_",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-adsense:jsGlobal:4",
				kind: "jsGlobal",
				property: "Goog_AdSense_OsdAdapter",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-adsense:jsGlobal:5",
				kind: "jsGlobal",
				property: "__google_ad_urls",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-adsense:jsGlobal:6",
				kind: "jsGlobal",
				property: "adsbygoogle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-adsense:jsGlobal:7",
				kind: "jsGlobal",
				property: "google_ad_",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-adsense:dom:8",
				kind: "dom",
				selector: "amp-ad[type='adsense']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "google-publisher-tag",
		name: "Google Publisher Tag",
		website: "https://developers.google.com/publisher-tag/guides/get-started",
		description: "Google Publisher Tag (GPT) is an ad tagging library for Google Ad Manager which is used to dynamically build ad requests.",
		icon: "Google Developers.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "google-publisher-tag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("googletagservices\\.com\\/tag\\/js\\/gpt\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-publisher-tag:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("securepubads\\.g\\.doubleclick\\.net\\/gpt"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-publisher-tag:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("securepubads\\.g\\.doubleclick.net\\/tag\\/js\\/gpt\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-publisher-tag:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("pagead2\\.googlesyndication\\.com\\/tag\\/js\\/gpt\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "gumgum",
		name: "GumGum",
		website: "https://gumgum.com",
		description: "GumGum is a technology and media company specializing in contextual intelligence.",
		icon: "GumGum.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "gumgum:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.gumgum\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "gumgum:dom:1",
				kind: "dom",
				selector: "iframe[src*='gumgum.com'], img[src*='gumgum.com']",
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
		id: "gunosy",
		name: "Gunosy",
		website: "https://gunosy.com",
		description: "Gunosy is a Japan-based readable news summary advertising system that delivers sponsored content in a format designed to resemble concise news articles within digital media platforms.",
		icon: "Gunosy.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "gunosy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("ad\\.gunosy\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "hashtag-labs",
		name: "Hashtag Labs",
		website: "https://hashtag-labs.com",
		description: "Hashtag Labs is a full-service digital ad operations company.",
		icon: "Hashtag Labs.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "hashtag-labs:dom:0",
				kind: "dom",
				selector: "link[href*='//htlbid.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "hashtag-labs:jsGlobal:1",
				kind: "jsGlobal",
				property: "htlbid.cmd",
				description: "Page-owned global matches a known technology marker.",
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
		id: "header-bidding-ai",
		name: "Header Bidding Ai",
		website: "https://headerbidding.ai",
		description: "Header Bidding Ai is a provider of an automated and managed header bidding solution. Header bidding cutting-edge technique where publishers offer their ad inventory to many ad exchanges.",
		icon: "Header Bidding Ai.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "header-bidding-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.headerbidding\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "hotmart",
		name: "Hotmart",
		website: "https://hotmart.com",
		description: "HotMart is a Brazilian-based affiliate marketing system.",
		icon: "Hotmart.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "hotmart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hotmart\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hotmart:jsGlobal:1",
				kind: "jsGlobal",
				property: "HotmartLauncherObject",
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
		id: "hypelab",
		name: "HypeLab",
		website: "https://www.hypelab.com",
		description: "HypeLab is a platform that supports audience development by enhancing visibility, fostering recognition, and helping establish a loyal community.",
		icon: "HypeLab.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "hypelab:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.hypelab\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hypelab:jsGlobal:1",
				kind: "jsGlobal",
				property: "HypeLab.Environment",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "i-mobile",
		name: "i-mobile",
		website: "https://www2.i-mobile.co.jp",
		description: "i-mobile is an advertising platform for clients to advertise their product and for publishers to monetize their cyberspace.",
		icon: "i-mobile.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "i-mobile:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.i-mobile\\.co\\.jp\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "i-mobile:dom:1",
				kind: "dom",
				selector: "img[src*='.i-mobile.co.jp/']",
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
		id: "id5",
		name: "ID5",
		website: "https://id5.io/",
		description: "ID5 is a company that offers an identity solution for digital advertising, providing a Universal ID that enables privacy-compliant user recognition and tracking across websites without relying on personal information or third-party cookies.",
		icon: "ID5.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "id5:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https:\\/\\/(?:cdn\\.)?id5-sync\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "id5:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp(".*id5-sync\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "id5:jsGlobal:2",
				kind: "jsGlobal",
				property: "ID5._version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "id5:jsGlobal:3",
				kind: "jsGlobal",
				property: "__id5_instances",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "id5:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^id5$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "impact",
		name: "Impact",
		website: "https://impact.com/",
		description: "Impact helps businesses contract and pay partners.",
		icon: "Impact.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "impact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("d\\.impactradius-event\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "impact:jsGlobal:1",
				kind: "jsGlobal",
				property: "ImpactRadiusEvent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "impact:jsGlobal:2",
				kind: "jsGlobal",
				property: "irEvent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "index-exchange",
		name: "Index Exchange",
		website: "https://www.indexexchange.com",
		description: "Index Exchange is a customizable exchange technology that enables sell side media firms to monetize ad inventories programmatically and in real time.",
		icon: "Index Exchange.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "index-exchange:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.casalemedia\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
	},
	{
		id: "infolinks",
		name: "Infolinks",
		website: "https://www.infolinks.com",
		description: "Infolinks is an online advertising platform for publishers and advertisers.",
		icon: "Infolinks.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "infolinks:jsGlobal:0",
				kind: "jsGlobal",
				property: "infolinks_pid",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "infolinks:jsGlobal:1",
				kind: "jsGlobal",
				property: "infolinks_wsid",
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
		id: "innervate",
		name: "Innervate",
		website: "https://www.innervate.com",
		description: "Innervate is a company that provides a plug-and-play solution for dynamic customer experience orchestration across various formats and channels, leveraging existing systems, data, and teams to enhance and streamline customer interactions.",
		icon: "Innervate.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "innervate:dom:0",
				kind: "dom",
				selector: "link[href*='.revjet.com']",
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
		id: "innovid-advertising-measurement",
		name: "Innovid Advertising Measurement",
		website: "https://www.innovid.com/solutions/advertising-measurement",
		description: "Innovid Advertising Measurement is a solution for assessing and analyzing the performance of advertising campaigns across different platforms and devices.",
		icon: "Innovid.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "innovid-advertising-measurement:dom:0",
				kind: "dom",
				selector: "link[href*='.tvsquared.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "innovid-advertising-measurement:jsGlobal:1",
				kind: "jsGlobal",
				property: "TV2Track",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "innovid-advertising-measurement:jsGlobal:2",
				kind: "jsGlobal",
				property: "_tvq",
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
		id: "integral-ad-science",
		name: "Integral Ad Science",
		website: "https://integralads.com",
		description: "Integral Ad Science is an American publicly owned technology company that analyses the value of digital advertising placements.",
		icon: "Integral Ad Science.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "integral-ad-science:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adsafeprotected\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "integral-ad-science:dom:1",
				kind: "dom",
				selector: "link[href*='.adsafeprotected.com']",
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
		id: "internet-brands",
		name: "Internet Brands",
		website: "https://www.internetbrands.com",
		description: "Internet Brands is a technology company that operates a variety of web portals and online communities, providing information and services to consumers and businesses across a range of industries.",
		icon: "Internet Brands.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "internet-brands:dom:0",
				kind: "dom",
				selector: "footer > div > form",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "internet-brands:text:1",
				kind: "text",
				pattern: new RegExp("Internet Brands"),
				description: "Page text contains a known technology marker.",
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
		id: "janet",
		name: "JANet",
		website: "https://j-a-net.jp",
		description: "JANet is an affiliate marketing network.",
		icon: "JANet.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "janet:dom:0",
				kind: "dom",
				selector: "img[src*='.j-a-net.jp'],img[data-src*='.j-a-net.jp']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "juicyads",
		name: "JuicyAds",
		website: "https://www.juicyads.com",
		description: "JuicyAds is a legitimate advertising network that specializes in adult content.",
		icon: "JuicyAds.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "juicyads:jsGlobal:0",
				kind: "jsGlobal",
				property: "adsbyjuicy",
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
		id: "kevel",
		name: "Kevel",
		website: "https://www.kevel.com",
		description: "Kevel (formerly Adzerk) is a developer of ad-serving APIs to help developers build server-side ad platforms.",
		icon: "Kevel.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "kevel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("adzerk\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kevel:dom:1",
				kind: "dom",
				selector: "iframe[src*='adzerk.net'], link[href*='adzerk.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kevel:jsGlobal:2",
				kind: "jsGlobal",
				property: "ados",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kevel:jsGlobal:3",
				kind: "jsGlobal",
				property: "adosResults",
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
		id: "klickly",
		name: "Klickly",
		website: "https://www.klickly.com",
		description: "Klickly is an invite-only, commission-based advertising platform.",
		icon: "Klickly.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "klickly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.klickly\\.com\\/pixel\\.js\\?v=([\\d\\.]+)"),
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
		id: "klook",
		name: "Klook",
		website: "https://www.klook.com",
		description: "Klook is a travel affiliate system designed to connect users with various travel services and experiences.",
		icon: "Klook.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "klook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.klook\\.com\\/"),
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
		id: "kueez",
		name: "Kueez",
		website: "https://weare.kueez.com",
		description: "Kueez is a platform offering data-driven solutions tailored for publishers to enhance advertising strategies.",
		icon: "Kueez.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "kueez:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kueez\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "leadbit",
		name: "Leadbit",
		website: "https://leadbit.com",
		description: "Leadbit is an offer-based ad system designed to target users with specific ads based on their engagement and preferences.",
		icon: "Leadbit.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "leadbit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.leadbit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "leadbit:dom:1",
				kind: "dom",
				selector: "form[action*='wapi.leadbit.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "leaddyno",
		name: "LeadDyno",
		website: "https://www.leaddyno.com",
		description: "LeadDyno is a platform that provides affiliate marketing and tracking services, allowing businesses to set up, manage, and analyse their affiliate programs.",
		icon: "LeadDyno.svg",
		categories: [
			"advertising-paid-media",
			"analytics",
		],
		rules: [
			{
				id: "leaddyno:jsGlobal:0",
				kind: "jsGlobal",
				property: "LeadDyno",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "leaddyno:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_leaddyno_session$", "i"),
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
		id: "line2",
		name: "Line2",
		website: "https://www.line2.com",
		description: "Line2 is an affiliate network that enables travel-related publishers and partners to monetize web traffic through targeted travel offers and commissions.",
		icon: "Line2.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "line2:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/Line2Text\\.Me\\/s\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "line2:jsGlobal:1",
				kind: "jsGlobal",
				property: "Line2_W_OBJ",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "line2:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/line2text\\.me\\/s\\/"),
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
		id: "linkedin-ads",
		name: "Linkedin Ads",
		website: "https://business.linkedin.com/marketing-solutions/ads",
		description: "Linkedin Ads is a paid marketing tool that offers access to Linkedin social networks through various sponsored posts and other methods.",
		icon: "Linkedin.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "linkedin-ads:html:0",
				kind: "html",
				pattern: new RegExp("<img [^>]*src=\"[^/]*\\/\\/[^/]*px\\.ads\\.linkedin\\.com"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "linkedin-ads:dom:1",
				kind: "dom",
				selector: "img[src*='dc.ads.linkedin.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "linkedin-ads:dom:2",
				kind: "dom",
				selector: "link[href*='px.ads.linkedin.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "linkedin-ads:header:3",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("px\\.ads\\.linkedin\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "linkedin-ads:header:4",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("px\\.ads\\.linkedin\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "linksmart",
		name: "LinkSmart",
		website: "http://linksmart.com",
		icon: "LinkSmart.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "linksmart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/cdn\\.linksmart\\.com\\/linksmart_([\\d.]+?)(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "linksmart:jsGlobal:1",
				kind: "jsGlobal",
				property: "LS_JSON",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "linksmart:jsGlobal:2",
				kind: "jsGlobal",
				property: "LinkSmart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "linksmart:jsGlobal:3",
				kind: "jsGlobal",
				property: "_mb_site_guid",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "linx-impulse",
		name: "Linx Impulse",
		website: "https://www.linx.com.br/linx-impulse",
		description: "Linx Impulse is a personalisation, media and retargeting solutions built by Linx.",
		icon: "Linx.png",
		categories: [
			"advertising-paid-media",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "linx-impulse:dom:0",
				kind: "dom",
				selector: "link[href*='.linximpulse.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "linx-impulse:jsGlobal:1",
				kind: "jsGlobal",
				property: "linx.banner",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "linx-impulse:jsGlobal:2",
				kind: "jsGlobal",
				property: "linxImpulse.config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "linx-impulse:jsGlobal:3",
				kind: "jsGlobal",
				property: "linxImpulseInitialized",
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
		id: "liveramp-dpm",
		name: "LiveRamp DPM",
		website: "https://liveramp.com/data-plus-math",
		description: "LiveRamp DPM is a TV advertising metrics and analytics platform.",
		icon: "LiveRamp.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "liveramp-dpm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c\\.tvpixel\\.com\\/js\\/current\\/dpm_pixel_min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "liveramp-dpm:jsGlobal:1",
				kind: "jsGlobal",
				property: "dpmComscoreVars",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "lkqd",
		name: "LKQD",
		website: "https://wiki.lkqd.com",
		description: "LKQD is a video advertising platform that enables publishers to serve video ads across multiple devices and formats.",
		icon: "LKQD.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "lkqd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lkqd\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lkqd:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.lkqd\\.net"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "lkqd:dom:2",
				kind: "dom",
				selector: "iframe[src*='.lkqd.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "lkqd:jsGlobal:3",
				kind: "jsGlobal",
				property: "lkqdCall",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lkqd:jsGlobal:4",
				kind: "jsGlobal",
				property: "lkqdErrorCount",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lkqd:jsGlobal:5",
				kind: "jsGlobal",
				property: "lkqdSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lkqd:jsGlobal:6",
				kind: "jsGlobal",
				property: "lkqd_http_response",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "madadsmedia",
		name: "MadAdsMedia",
		website: "https://madadsmedia.com",
		icon: "MadAdsMedia.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "madadsmedia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/(?:ads-by|pixel)\\.madadsmedia\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "madadsmedia:jsGlobal:1",
				kind: "jsGlobal",
				property: "setMIframe",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "madadsmedia:jsGlobal:2",
				kind: "jsGlobal",
				property: "setMRefURL",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "magnite",
		name: "Magnite",
		website: "https://www.magnite.com",
		description: "Magnite is an independent sell-side advertising platform that provides technology for publishers to monetize digital advertising inventory across various formats.",
		icon: "Magnite.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "magnite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.spotx\\.tv"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "magnite:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.spotx(?:change|cdn)\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "magnite:dom:2",
				kind: "dom",
				selector: "link[href*='.spotxchange.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "magnite:jsGlobal:3",
				kind: "jsGlobal",
				property: "SpotX.VERSION",
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
		id: "mainad",
		name: "MainAd",
		website: "https://www.mainad.com",
		description: "MainAd is an international advertising technology company specialising in real-time bidding and programmatic ad retargeting.",
		icon: "MainAd.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "mainad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mainadv\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mainad:dom:1",
				kind: "dom",
				selector: "iframe[src*='.mainadv.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "manatee",
		name: "Manatee",
		website: "https://www.manatee.io",
		description: "Manatee is a tool designed to enhance online advertising revenue by optimising ad placements and targeting strategies, increasing click-through rates and overall ad performance.",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "manatee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.manatee\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "manatee:jsGlobal:1",
				kind: "jsGlobal",
				property: "adsbymanatee",
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
		id: "mantis",
		name: "Mantis",
		website: "https://www.mantisadnetwork.com",
		description: "Mantis is an end-to-end advertising network catering to brands operating in the legal cannabis industry and ancillary markets.",
		icon: "Mantis.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "mantis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mantisadnetwork\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mantis:jsGlobal:1",
				kind: "jsGlobal",
				property: "mantis",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mantis:jsGlobal:2",
				kind: "jsGlobal",
				property: "mantistimer",
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
		id: "meazy",
		name: "Meazy",
		website: "https://meazy.co",
		description: "Meazy is a tool that provides automated remarketing solutions tailored for online stores.",
		icon: "Meazy.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "meazy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.meazy\\.co\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "media-net",
		name: "Media.net",
		website: "https://www.media.net",
		description: "Media.net is an advertising company focused on providing monetization products to digital publishers.",
		icon: "Media.net.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "media-net:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.media\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "media-net:dom:1",
				kind: "dom",
				selector: "link[href*='.media.net']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mediavine",
		name: "Mediavine",
		website: "https://www.mediavine.com",
		description: "Mediavine is a full service ad management platform.",
		icon: "Mediavine.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "mediavine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mediavine\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mediavine:jsGlobal:1",
				kind: "jsGlobal",
				property: "$mediavine.web",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mediavine:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^mediavine_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
	},
	{
		id: "mgid",
		name: "MGID",
		website: "https://www.mgid.com",
		description: "MGID is a programmatic advertising platform frequently used by misinformation websites.",
		icon: "MGID.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "mgid:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mgid\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mgid:jsGlobal:1",
				kind: "jsGlobal",
				property: "MgSensor.mgqWorker",
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
		id: "microsoft-advertising",
		name: "Microsoft Advertising",
		website: "https://ads.microsoft.com",
		description: "Microsoft Advertising is an online advertising platform developed by Microsoft.",
		icon: "Microsoft.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "microsoft-advertising:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bat\\.bing\\.com\\/bat\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "microsoft-advertising:dom:1",
				kind: "dom",
				selector: "link[href*='.bing.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "microsoft-advertising:jsGlobal:2",
				kind: "jsGlobal",
				property: "UET",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "microsoft-advertising:jsGlobal:3",
				kind: "jsGlobal",
				property: "uetq",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "microsoft-advertising:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^_uetsid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "microsoft-advertising:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^_uetvid$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "mile-tech",
		name: "Mile.tech",
		website: "https://www.mile.tech",
		description: "Mile.tech is a digital media products company that provides a suite of programmatic monetisation solutions.",
		icon: "Mile.tech.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "mile-tech:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/go\\.automatad\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "mntn",
		name: "MNTN",
		website: "https://mountain.com",
		description: "MNTN (formerly SteelHouse) is a marketing technology company that provides a platform for digital advertising, including tools for programmatic advertising, creative management, and campaign optimization.",
		icon: "mntn.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "mntn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.steelhousemedia\\.com\\/(?:spx\\?dxver=([\\d.]+))?"),
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
				"poa",
			],
		},
	},
	{
		id: "moshimo",
		name: "Moshimo",
		website: "https://af.moshimo.com",
		description: "Moshimo is a free affiliate service for individuals.",
		icon: "Moshimo.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "moshimo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.moshimo\\.com\\/af\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "moshimo:dom:1",
				kind: "dom",
				selector: "link[href*='i.moshimo.com'], img[src*='i.moshimo.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "mountain",
		name: "Mountain",
		website: "https://mountain.com/",
		description: "MNTN Performance TV is a CTV advertising platform with targeting, measurement, and optimization for amplifying marketers' performance goals.",
		icon: "Mountain.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "mountain:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dx\\.mountain\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mountain:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("px\\.mountain\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "narrativ",
		name: "Narrativ",
		website: "https://narrativ.com/",
		description: "Narrativ is a subscription technology platform for brands to acquire new customers through trusted creators.",
		icon: "Narrativ.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "narrativ:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.narrativ\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "nativo",
		name: "Nativo",
		website: "https://www.nativo.com",
		description: "Nativo is an advertising technology provider.",
		icon: "Nativo.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "nativo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ntv\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nativo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.postrelease\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nativo:dom:2",
				kind: "dom",
				selector: "link[href*='.postrelease.com/'], img[src*='.postrelease.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "nativo:jsGlobal:3",
				kind: "jsGlobal",
				property: "ntvConfig",
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
		id: "nextdoor-ads",
		name: "Nextdoor Ads",
		website: "https://help.nextdoor.com/s/article/About-Neighborhood-Ad-Center-NAC-Conversion-Pixel",
		description: "Nextdoor Ads is an easy-to-use expansion of Nextdoor’s proprietary self-serve campaign management platform, designed to help small and medium-sized businesses (SMBs) advertise on Nextdoor.",
		icon: "Nextdoor Ads.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "nextdoor-ads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ads\\.nextdoor\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "notix",
		name: "Notix",
		website: "https://notix.co",
		description: "Notix is a web push notifications service for audience re-engagement.",
		icon: "Notix.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "notix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("notix\\.io\\/ent"),
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
		id: "onetag",
		name: "OneTag",
		website: "https://onetag.com",
		description: "OneTag is an advertizing platform that automates the buying and selling of online ad space.",
		icon: "OneTag.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "onetag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("signal-beacon\\.s-onetag\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onetag:dom:1",
				kind: "dom",
				selector: "link[href*='.s-onetag.com']",
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
		id: "oniad",
		name: "ONiAD",
		website: "https://oniad.com",
		description: "ONiAd is a software platform that connects brands with their audience through omnichannel advertising.",
		icon: "ONiAD.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "oniad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("track\\.oniad\\.com"),
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
		id: "open-adstream",
		name: "Open AdStream",
		website: "https://www.xaxis.com",
		icon: "Open AdStream.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "open-adstream:jsGlobal:0",
				kind: "jsGlobal",
				property: "OAS_AD",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "openweb",
		name: "OpenWeb",
		website: "https://www.openweb.com",
		description: "OpenWeb is a social engagement platform that builds online communities around digital content.",
		icon: "OpenWeb.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "openweb:jsGlobal:0",
				kind: "jsGlobal",
				property: "SPOTIM.initConversation",
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
		id: "openx",
		name: "OpenX",
		website: "https://openx.com",
		description: "OpenX is a programmatic advertising technology company.",
		icon: "OpenX.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "openx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/[^/]*\\.openx\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "openx:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/[^/]*\\.servedbyopenx\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "openx:dom:2",
				kind: "dom",
				selector: "iframe[src*='.openx.net'], img[src*='.openx.net'], link[href*='.openx.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "openx:jsGlobal:3",
				kind: "jsGlobal",
				property: "openx.name",
				valuePattern: new RegExp("openx"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			cpe: "cpe:2.3:a:openx:openx:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "optimise",
		name: "Optimise",
		website: "https://www.optimisemedia.com",
		description: "Optimize Media Group is an UK-based performance advertising network.",
		icon: "Optimise.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "optimise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("track\\.omguk\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "optimise:jsGlobal:1",
				kind: "jsGlobal",
				property: "OMID",
				valuePattern: new RegExp("^[0-9]+$"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "osi-tracker",
		name: "OSI Tracker",
		website: "https://ositracker.com",
		description: "OSI Tracker is an affiliate marketing and tracking software.",
		icon: "OSITracker.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "osi-tracker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ositracker\\.com\\/"),
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
		id: "partner-driven",
		name: "Partner Driven",
		website: "https://partnerdriven.com",
		description: "Partner Driven is a real estate investment approach that involves partnerships between investors to pool resources and share risks, aimed at maximizing returns through collaborative efforts.",
		icon: "PartnerDriven.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "partner-driven:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.partnerdriven\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "partnerize",
		name: "Partnerize",
		website: "https://prf.hn",
		description: "Partnerize is the only partnership management solution for marketers seeking high quality, scalable subsidies to primary channels.",
		icon: "Partnerize.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "partnerize:dom:0",
				kind: "dom",
				selector: "a[href*='prf.hn/click'], img[src*='.prf.hn/']",
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
		id: "partnero",
		name: "Partnero",
		website: "https://www.partnero.com",
		description: "Partnero is a partnership management platform designed for relationship-building.",
		icon: "Partnero.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "partnero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.partnero\\.com\\/"),
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
		id: "partnerstack",
		name: "PartnerStack",
		website: "https://partnerstack.com",
		description: "PartnerStack is a platform facilitating SaaS brand growth through streamlined partner management.",
		icon: "PartnerStack.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "partnerstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.growsumo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "partnerstack:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.partnerstack\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "partnerstack:jsGlobal:2",
				kind: "jsGlobal",
				property: "growsumo",
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
		id: "pebblepost",
		name: "PebblePost",
		website: "https://www.pebblepost.com",
		description: "PebblePost provides marketers a way to transform recent online data into intelligent direct mail programs that perform.",
		icon: "PebblePost.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pebblepost:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pbbl\\.co\\/"),
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
		id: "pepperjam",
		name: "Pepperjam",
		website: "https://www.pepperjam.com",
		description: "Pepperjam is an affiliate marketing solutions provider.",
		icon: "Pepperjam.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pepperjam:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pepperjam\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pepperjam:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pepperjam",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pepperjam:jsGlobal:2",
				kind: "jsGlobal",
				property: "PepperjamTracking",
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
		id: "picreel",
		name: "Picreel",
		website: "https://www.picreel.com",
		description: "Picreel is a conversion optimisation software.",
		icon: "Picreel.svg",
		categories: [
			"advertising-paid-media",
			"widgets-misc",
		],
		rules: [
			{
				id: "picreel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.picreel\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "picreel:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.picreel.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "picreel:jsGlobal:2",
				kind: "jsGlobal",
				property: "picreel",
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
		id: "pinterest-ads",
		name: "Pinterest Ads",
		website: "https://ads.pinterest.com/",
		description: "Pinterest Ads is an online advertising platform developed by Pinterest.",
		icon: "Pinterest.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pinterest-ads:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("ct\\.pinterest\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
	},
	{
		id: "pixeleze",
		name: "Pixeleze",
		website: "https://pixeleze.com",
		description: "Pixeleze is an affiliate-based tracking system for ecommerce that records referral activity and links sales performance to corresponding affiliate sources.",
		icon: "Pixeleze.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pixeleze:jsGlobal:0",
				kind: "jsGlobal",
				property: "Pixeleze",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "placed",
		name: "Placed",
		website: "https://www.placed.com",
		description: "Placed is a solution that provides advertising insights to help businesses understand and measure the impact of their marketing efforts.",
		icon: "Placed.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "placed:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.placed\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "podsights",
		name: "Podsights",
		website: "https://podsights.com/",
		description: "Podsights is attribution technology platform that brands and agencies use to measure and scale their podcast advertising.",
		icon: "Podsights.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "podsights:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pdst\\.fm"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "post-affiliate-pro",
		name: "Post Affiliate Pro",
		website: "https://www.postaffiliatepro.com",
		description: "Post Affiliate Pro is a software built for online stores and ecommerce websites that need to track and monitor their affiliate network.",
		icon: "Post Affiliate Pro.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "post-affiliate-pro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("postaffiliatepro\\.com\\/scripts\\/trackjs\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "post-affiliate-pro:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:affiliate|associate)\\..+\\/scripts\\/trackjs\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "post-affiliate-pro:jsGlobal:2",
				kind: "jsGlobal",
				property: "PostAffAction",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "post-affiliate-pro:jsGlobal:3",
				kind: "jsGlobal",
				property: "PostAffCookie",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "post-affiliate-pro:jsGlobal:4",
				kind: "jsGlobal",
				property: "PostAffInfo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "post-affiliate-pro:jsGlobal:5",
				kind: "jsGlobal",
				property: "PostAffTracker",
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
		id: "prebid",
		name: "Prebid",
		website: "https://prebid.org",
		description: "Prebid is an open-source header bidding wrapper. It forms the core of our Nucleus ad platform, helping maximize revenue and performance for publishers.",
		icon: "Prebid.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "prebid:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/prebid\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prebid:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("adnxs\\.com\\/[^\"]*(?:prebid|\\/pb\\.js)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prebid:jsGlobal:2",
				kind: "jsGlobal",
				property: "PREBID_TIMEOUT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prebid:jsGlobal:3",
				kind: "jsGlobal",
				property: "pbjs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prebid:jsGlobal:4",
				kind: "jsGlobal",
				property: "pbjs.version",
				valuePattern: new RegExp("v([\\d\\.]+)"),
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
		id: "premion",
		name: "Premion",
		website: "https://premion.com",
		description: "Premion is an over-the-top (OTT) advertising platform that enables advertisers to deliver targeted ads across premium streaming content.",
		icon: "Premion.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "premion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("px\\.premion\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "primis",
		name: "Primis",
		website: "https://www.primis.tech",
		description: "Primis is a video discovery platform for publishers.",
		icon: "Primis.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "primis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sekindo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "primis:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.sekindo\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "primis:dom:2",
				kind: "dom",
				selector: "iframe[src*='.sekindo.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "primis:dom:3",
				kind: "dom",
				selector: "img[src*='.sekindo.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "primis:jsGlobal:4",
				kind: "jsGlobal",
				property: "SekindoNativeSkinApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "primis:jsGlobal:5",
				kind: "jsGlobal",
				property: "sekindoDisplayedPlacement",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "primis:jsGlobal:6",
				kind: "jsGlobal",
				property: "sekindoFlowingPlayerOn",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "project-wonderful",
		name: "Project Wonderful",
		website: "https://projectwonderful.com",
		icon: "Project Wonderful.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "project-wonderful:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/(?:www\\.)?projectwonderful\\.com\\/(?:pwa\\.js|gen\\.php)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "project-wonderful:html:1",
				kind: "html",
				pattern: new RegExp("<div[^>]+id=\"pw_adbox_"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "project-wonderful:jsGlobal:2",
				kind: "jsGlobal",
				property: "pw_adloader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "project-wonderful:dom:3",
				kind: "dom",
				selector: "div[id*='pw_adbox_']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "pubguru",
		name: "PubGuru",
		website: "https://pubguru.com",
		description: "PubGuru is a header wrapper and ad ops platform.",
		icon: "PubGuru.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pubguru:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pubguru\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pubguru:jsGlobal:1",
				kind: "jsGlobal",
				property: "pg.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				confidence: 25,
				version: {
					source: "match",
					template: "$1\\",
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
		id: "publy",
		name: "Publy",
		website: "http://ppc.publy.net",
		description: "Publy is a provider of solutions for publishers and advertisers.",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "publy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.publy\\.net\\/"),
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
		id: "pubmatic",
		name: "PubMatic",
		website: "https://www.pubmatic.com/",
		description: "PubMatic is a company that develops and implements online advertising software and strategies for the digital publishing and advertising industry.",
		icon: "PubMatic.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pubmatic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/[^/]*\\.pubmatic\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pubmatic:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.pubmatic\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "pubmatic:dom:2",
				kind: "dom",
				selector: "iframe[src*='.pubmatic.com'], link[href*='.pubmatic.com']",
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
		id: "pubstack",
		name: "Pubstack",
		website: "https://www.pubstack.io",
		description: "Pubstack is a platform that provides tools for managing and optimizing digital advertising, offering solutions for real-time analytics, ad performance monitoring, and revenue optimization.",
		icon: "Pubstack.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pubstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pubstack\\.io\\/"),
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
		id: "purpleads",
		name: "PurpleAds",
		website: "https://purpleads.io",
		description: "PurpleAds is an online advertising solution that businesses use to promote their products and services on Google Search, YouTube and other sites across the web.",
		icon: "PurpleAds.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "purpleads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.purpleads\\.io\\/"),
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
		id: "pushub",
		name: "Pushub",
		website: "https://pushub.net",
		description: "Pushub is a self-serve demand side platform (DSP) designed for affiliates and agencies.",
		icon: "Pushub.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pushub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pushub\\.net\\/"),
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
		id: "q1media",
		name: "Q1Media",
		website: "https://www.q1media.com",
		description: "Q1Media is a platform that facilitates the creation, demand, and supply of digital advertising.",
		icon: "Q1Media.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "q1media:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/q1mediahydraplatform\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "qbrick",
		name: "Qbrick",
		website: "https://www.qbrick.com",
		description: "Qbrick is a video advertising system.",
		icon: "Qbrick.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "qbrick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.qbrick\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "qbrick:jsGlobal:1",
				kind: "jsGlobal",
				property: "Qbrick",
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
		id: "quon",
		name: "Quon",
		website: "https://www.quon.ru",
		description: "Quon is a platform that provides control over website advertising and sales, integrating an end-to-end analytics system to optimize advertising management.",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "quon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("counter\\.quon\\.ru\\/"),
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
		id: "rakuten",
		name: "Rakuten",
		website: "https://www.rakuten.com/",
		description: "Rakuten (formerly Ebates) allows you to earn cash-back rewards.",
		icon: "Rakuten.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "rakuten:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.rmp\\.rakuten\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rakuten:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.linksynergy\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rakuten:jsGlobal:2",
				kind: "jsGlobal",
				property: "rakutenRanMID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rakuten:jsGlobal:3",
				kind: "jsGlobal",
				property: "rakutenSource",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rakuten:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^rakuten\\-source$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
	},
	{
		id: "rakuten-advertising",
		name: "Rakuten Advertising",
		website: "https://rakutenadvertising.com/",
		icon: "Rakuten Advertising.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "rakuten-advertising:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.rmp\\.rakuten\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "raptive",
		name: "Raptive",
		website: "https://raptive.com",
		description: "Raptive is a company formed from the merger of CafeMedia, AdThrive, and CafeMedia Ad Management, focusing on supporting digital creators and publishers​.",
		icon: "Raptive.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "raptive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ads\\.adthrive\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "raptive:jsGlobal:1",
				kind: "jsGlobal",
				property: "adthrive",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "raptive:jsGlobal:2",
				kind: "jsGlobal",
				property: "adthriveVideosInjected",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "reddit-ads",
		name: "Reddit Ads",
		website: "https://advertising.reddithelp.com/",
		description: "Reddit Ads is an online advertising offering from Reddit.",
		icon: "Reddit.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "reddit-ads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.redditstatic\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "reditus",
		name: "Reditus",
		website: "https://www.getreditus.com",
		description: "Reditus is a partner management tool for B2B SaaS companies.",
		icon: "Reditus.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "reditus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getreditus\\.com\\/"),
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
		id: "refersion",
		name: "Refersion",
		website: "https://refersion.com",
		description: "Refersion is an affiliate management app.",
		icon: "Refersion.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "refersion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.refersion\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "refersion:dom:1",
				kind: "dom",
				selector: "a[href*='.refersion.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "refersion:dom:2",
				kind: "dom",
				selector: "img[src*='cdn.refersion.com'],img[src*='s3.amazonaws.com/refersion_client/']",
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
		id: "relap",
		name: "Relap",
		website: "https://relap.io",
		description: "Relap is an advertising effectiveness system that focuses on optimizing content recommendations and increasing user engagement.",
		icon: "Relap.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "relap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/relap\\.io\\/v([\\d]+)\\/relap\\.js"),
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
		id: "revbid",
		name: "RevBid",
		website: "https://revbid.net",
		description: "RevBid is a header bidding platform designed for publishers to optimize ad revenue.",
		icon: "RevBid.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "revbid:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.revbid\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "revcontent",
		name: "RevContent",
		website: "https://www.revcontent.com",
		description: "RevContent is a monetization and recommendation engine that connects advertisers to highly engaged audiences on the web's leading publisher sites.",
		icon: "revcontent.png",
		categories: [
			"advertising-paid-media",
			"widgets-misc",
		],
		rules: [
			{
				id: "revcontent:dom:0",
				kind: "dom",
				selector: "link[href*='.revcontent.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "revcontent:jsGlobal:1",
				kind: "jsGlobal",
				property: "revcontent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "revenue-roll",
		name: "Revenue Roll",
		website: "https://www.revenueroll.com",
		description: "Revenue Roll is an identification and retargeting service designed to recognize website visitors and deliver targeted advertising based on user behavior.",
		icon: "RevenueRoll.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "revenue-roll:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.revenueroll\\.com"),
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
		id: "revenuehunt",
		name: "RevenueHunt",
		website: "https://revenuehunt.com",
		description: "RevenueHunt is an affiliate marketing and advertising company specializing in paid surveys and cost per lead campaigns.",
		icon: "RevenueHunt.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "revenuehunt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("admin\\.revenuehunt\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "revjet",
		name: "RevJet",
		website: "https://www.revjet.com",
		description: "RevJet is the first comprehensive Ad Experience Platform, for every audience, channel, format, inventory, and device.",
		icon: "RevJet.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "revjet:dom:0",
				kind: "dom",
				selector: "link[href*='.revjet.com']",
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
		id: "rewardful",
		name: "Rewardful",
		website: "https://www.getrewardful.com/",
		description: "Rewardful is a way for SaaS companies to setup affiliate and referral programs with Stripe.",
		icon: "Rewardful.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "rewardful:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("r\\.wdfl\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rewardful:jsGlobal:1",
				kind: "jsGlobal",
				property: "Rewardful",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "rontar",
		name: "Rontar",
		website: "https://www.rontar.com",
		description: "Rontar is a provider of ad management solutions catering to businesses seeking effective advertising strategies and optimization tools.",
		icon: "Rontar.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "rontar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rontar\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rontar:jsGlobal:1",
				kind: "jsGlobal",
				property: "RontarAddToCartFunction",
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
		id: "rtb-house",
		name: "RTB House",
		website: "https://www.rtbhouse.com",
		description: "RTB House is a company that provides learning-powered retargeting solutions for brands and agencies.",
		icon: "RTB House.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "rtb-house:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.creativecdn\\.com"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "rubicon-project",
		name: "Rubicon Project",
		website: "https://rubiconproject.com/",
		description: "Rubicon Project is an advertising automation platform enabling publishers to transact advertising brands.",
		icon: "Rubicon Project.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "rubicon-project:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/[^/]*\\.rubiconproject\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rubicon-project:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.rubiconproject\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "rubicon-project:dom:2",
				kind: "dom",
				selector: "iframe[src*='.rubiconproject.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "rubicon-project:dom:3",
				kind: "dom",
				selector: "img[src*='.rubiconproject.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sabavision",
		name: "SabaVision",
		website: "https://www.sabavision.com",
		description: "SabaVision, one of the core products of SabaIdea, is Iran's largest online advertising agency.",
		icon: "SabaVision.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sabavision:jsGlobal:0",
				kind: "jsGlobal",
				property: "SabavisionElement",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sabavision:jsGlobal:1",
				kind: "jsGlobal",
				property: "__SABAVISION_GET_ADD_TIMEOUT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sabavision:jsGlobal:2",
				kind: "jsGlobal",
				property: "sabaVisionWebsiteID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sabavision:jsGlobal:3",
				kind: "jsGlobal",
				property: "sabaVisionWebsitePage",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "sharethrough",
		name: "Sharethrough",
		website: "https://www.sharethrough.com",
		description: "Sharethrough is a software company that powers in-feed advertising for brands and publishers.",
		icon: "Sharethrough.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sharethrough:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sharethrough\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sharethrough:dom:1",
				kind: "dom",
				selector: "link[href*='.sharethrough.com']",
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
		id: "sharpspring-ads",
		name: "SharpSpring Ads",
		website: "https://sharpspring.com/ads",
		description: "SharpSpring Ads is an all-in-one retargeting platform.",
		icon: "SharpSpring.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sharpspring-ads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.perfectaudience\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sharpspring-ads:jsGlobal:1",
				kind: "jsGlobal",
				property: "_pa",
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
		id: "she-media",
		name: "SHE Media",
		website: "https://www.shemedia.com",
		description: "SHE Media is an ad network, which means that they basically serve as a coordinator between advertisers and publishers (bloggers).",
		icon: "SHE Media.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "she-media:jsGlobal:0",
				kind: "jsGlobal",
				property: "SheMedia",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "she-media:jsGlobal:1",
				kind: "jsGlobal",
				property: "blogherads.adq",
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
		id: "shoutout",
		name: "ShoutOut",
		website: "https://www.shoutout.global",
		description: "ShoutOut is a multi-level marketing SaaS solution that allows tracking of affiliates.",
		icon: "ShoutOut.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "shoutout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.shoutout\\.global\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "simpli-fi",
		name: "Simpli.fi",
		website: "https://simpli.fi/",
		description: "Simpli.fi is a programmatic advertising and agency management software.",
		icon: "Simplifi.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "simpli-fi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.simpli\\.fi"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "sixads",
		name: "Sixads",
		website: "https://sixads.net",
		description: "Sixads is a platform that facilitates the exchange of product ads between webstores.",
		icon: "Sixads.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sixads:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.sixads\\.net"),
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
		id: "sizmek",
		name: "Sizmek",
		website: "https://sizmek.com",
		icon: "Sizmek.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sizmek:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("serving-sys\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sizmek:html:1",
				kind: "html",
				pattern: new RegExp("(?:<a [^>]*href=\"[^/]*\\/\\/[^/]*serving-sys\\.com\\/|<img [^>]*src=\"[^/]*\\/\\/[^/]*serving-sys\\.com\\/)"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "skimlinks",
		name: "Skimlinks",
		website: "https://skimlinks.com",
		description: "Skimlinks is a content monetization platform for online publishers.",
		icon: "Skimlinks.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "skimlinks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.skimresources\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "skimlinks:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.skimresources\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "skimlinks:jsGlobal:2",
				kind: "jsGlobal",
				property: "__SKIM_JS_GLOBAL__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "skimlinks:jsGlobal:3",
				kind: "jsGlobal",
				property: "addSkimlinks",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "skimlinks:jsGlobal:4",
				kind: "jsGlobal",
				property: "skimlinksAPI",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "smart-ad-server",
		name: "Smart Ad Server",
		website: "https://smartadserver.com",
		description: "Smart Ad Server is an adserving and RTB platform.",
		icon: "Smart Ad Server.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "smart-ad-server:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sascdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "smart-ad-server:dom:1",
				kind: "dom",
				selector: "img[src*='smartadserver.com/'], link[href*='.smartadserver.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "smart-ad-server:jsGlobal:2",
				kind: "jsGlobal",
				property: "SmartAdServer",
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
		id: "smarter-click",
		name: "Smarter Click",
		website: "https://smarterclick.com",
		description: "Smarter Click is a marketing technology company.",
		icon: "Smarter Click.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "smarter-click:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.?smct\\.(?:io|co)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "smarter-click:jsGlobal:1",
				kind: "jsGlobal",
				property: "$smcInstall",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "smarter-click:jsGlobal:2",
				kind: "jsGlobal",
				property: "$smcT5",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "smarter-click:jsGlobal:3",
				kind: "jsGlobal",
				property: "$smctData",
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
		id: "snap-pixel",
		name: "Snap Pixel",
		website: "https://businesshelp.snapchat.com/s/article/snap-pixel-about",
		description: "Snap Pixel is a piece of JavaScript code that helps advertisers measure the cross-device impact of campaigns.",
		icon: "Snap Pixel.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "snap-pixel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("intg\\.snapchat\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "snap-pixel:jsGlobal:1",
				kind: "jsGlobal",
				property: "__SnapPixel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "snap-pixel:jsGlobal:2",
				kind: "jsGlobal",
				property: "snaptr.pixelIdList",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "snap-pixel:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("_snapchat_pixel_id"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "snigel-adengine",
		name: "snigel AdEngine",
		website: "https://www.snigel.com/adengine/",
		description: "snigel AdEngine is a header bidding solution product from snigel.",
		icon: "snigel.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "snigel-adengine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:staging-)?cdn\\.snigelweb\\.com\\/adengine\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "snigel-adengine:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("adengine\\.snigelweb\\.com"),
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
		id: "social-snowball",
		name: "Social Snowball",
		website: "https://socialsnowball.io",
		description: "Social Snowball is an affiliate and referral marketing platform tailored for ecommerce brands.",
		icon: "SocialSnowball.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "social-snowball:jsGlobal:0",
				kind: "jsGlobal",
				property: "snowballTrackScript",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "social-snowball:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_omappvp$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "social-snowball:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^social_snowball_session$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "socioh",
		name: "Socioh",
		website: "https://socioh.com",
		description: "Socioh is a social media marketing and retargeting platform designed to help businesses increase visibility, engagement, and conversions through targeted advertising and campaign management.",
		icon: "Socioh.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "socioh:dom:0",
				kind: "dom",
				selector: "link[href*='socioh.com'] [rel='canonical']",
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
		id: "sonobi",
		name: "Sonobi",
		website: "https://sonobi.com",
		description: "Sonobi is an ad technology developer that designs advertising tools and solutions for the media publishers, brand advertisers and media agencies.",
		icon: "Sonobi.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sonobi:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("apex\\.go\\.sonobi\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sortable",
		name: "Sortable",
		website: "https://sortable.com",
		description: "Sortable is a broad-spectrum platform that helps publishers unify demand partners, data, and tools.",
		icon: "Sortable.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sortable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.deployads\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sortable:jsGlobal:1",
				kind: "jsGlobal",
				property: "deployads",
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
		id: "sovrn",
		name: "Sovrn",
		website: "https://www.sovrn.com",
		description: "Sovrn is an advertising products and services provider for publishers.",
		icon: "Sovrn.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sovrn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lijit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sovrn:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.lijit\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "sovrn:jsGlobal:2",
				kind: "jsGlobal",
				property: "sovrn",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sovrn:jsGlobal:3",
				kind: "jsGlobal",
				property: "sovrn_render",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sovrn:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("\\.(?:linksmart|lijit)\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sovrn-commerce",
		name: "Sovrn//Commerce",
		website: "https://www.sovrn.com/publishers/commerce/",
		description: "Sovrn//Commerce is  a content monetization tool for publishers.",
		icon: "Sovrn.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sovrn-commerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:^[^/]*\\/\\/[^/]*viglink\\.com\\/api\\/|vglnk\\.js)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sovrn-commerce:jsGlobal:1",
				kind: "jsGlobal",
				property: "vglnk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sovrn-commerce:jsGlobal:2",
				kind: "jsGlobal",
				property: "vl_cB",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sovrn-commerce:jsGlobal:3",
				kind: "jsGlobal",
				property: "vl_disable",
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
		id: "spotx",
		name: "SpotX",
		website: "https://www.spotx.tv",
		description: "SpotX is a video advertising platform.",
		icon: "SpotX.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "spotx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.spotx\\.tv"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spotx:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.spotx(?:change|cdn)\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "spotx:dom:2",
				kind: "dom",
				selector: "link[href*='.spotxchange.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "spotx:jsGlobal:3",
				kind: "jsGlobal",
				property: "SpotX.VERSION",
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
		id: "squadata",
		name: "Squadata",
		website: "https://www.squadata.net",
		description: "Squadata provides data based marketing and advertising solutions including email retargeting, CRM onboarding, data monetisation, data management platform.",
		icon: "Squadata.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "squadata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/asset\\.easydmp\\.net\\/"),
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
		id: "stackadapt",
		name: "StackAdapt",
		website: "https://www.stackadapt.com",
		description: "StackAdapt is a platform that provides a content advertising strategy solution for planning, executing, and optimizing digital campaigns.",
		icon: "StackAdapt.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "stackadapt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("srv\\.stackadapt\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "steelhouse",
		name: "SteelHouse",
		website: "https://steelhouse.com",
		description: "SteelHouse is an advertising software company which provides services for brands, agencies, and direct marketers.",
		icon: "SteelHouse.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "steelhouse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.steelhousemedia\\.com\\/(?:spx\\?dxver=([\\d.]+))?"),
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
				"poa",
			],
		},
	},
	{
		id: "stn-video",
		name: "STN Video",
		website: "https://www.stnvideo.com",
		description: "STN Video is an online video platform that solves digital video for publishers, content creators, and advertisers.",
		icon: "STN Video.png",
		categories: [
			"advertising-paid-media",
			"media-video",
		],
		rules: [
			{
				id: "stn-video:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.sendtonews\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stn-video:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("embed\\.sendtonews\\.com\\/"),
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
		id: "struq",
		name: "Struq",
		website: "http://struq.com",
		description: "Struq is a personalized retargeting solution that serves as an alternative to standard display advertising.",
		icon: "Struq.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "struq:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.struq\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sublime",
		name: "Sublime",
		website: "https://www.sublime.xyz",
		description: "Sublime (formerly Sublime Skinz) operator of an advertising agency intended to offer skin-based advertising services to clients.",
		icon: "Sublime.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "sublime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ayads\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sublime:jsGlobal:1",
				kind: "jsGlobal",
				property: "loadSublimeSkinz",
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
		id: "swoop",
		name: "Swoop",
		website: "https://www.swoop.com",
		description: "Swoop is a search targeting advertising system.",
		icon: "Swoop.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "swoop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.swoop\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swoop:dom:1",
				kind: "dom",
				selector: "link[href*='ardrone.swoop.com'], script#swoop_sdk",
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
		id: "taboola",
		name: "Taboola",
		website: "https://www.taboola.com",
		description: "Taboola is a content discovery & native advertising platform for publishers and advertisers.",
		icon: "Taboola.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "taboola:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.taboola\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "taboola:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.taboola\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "taboola:dom:2",
				kind: "dom",
				selector: "link[href*='.taboola.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "taboola:jsGlobal:3",
				kind: "jsGlobal",
				property: "_taboola",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "taboola:jsGlobal:4",
				kind: "jsGlobal",
				property: "_taboolaNetworkMode",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "taboola:jsGlobal:5",
				kind: "jsGlobal",
				property: "taboola_view_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "taboola:jsGlobal:6",
				kind: "jsGlobal",
				property: "TRCImpl.global",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "taboola:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^taboola_session_id$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "tagtoo",
		name: "Tagtoo",
		website: "https://tagtoo.com",
		description: "Tagtoo is an ad platform that provides businesses with digital advertising solutions, specializing in targeted display and programmatic ads to help brands reach their audience more across various online channels.",
		icon: "Tagtoo.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tagtoo:jsGlobal:0",
				kind: "jsGlobal",
				property: "tagtoo_advertiser_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tagtoo:jsGlobal:1",
				kind: "jsGlobal",
				property: "tagtoo_ga",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tagtoo:jsGlobal:2",
				kind: "jsGlobal",
				property: "tagtoo_s",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tapad",
		name: "Tapad",
		website: "https://www.tapad.com",
		description: "Tapad is a venture-funded startup company that develops and markets software and services for cross-device advertising and content delivery.",
		icon: "Tapad.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tapad:dom:0",
				kind: "dom",
				selector: "link[href*='pixel.tapad.com'], img[src*='pixel.tapad.com']",
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
		id: "tapfiliate",
		name: "Tapfiliate",
		website: "https://tapfiliate.com",
		description: "Tapfiliate is a cloud-based affiliate marketing software that helps businesses to create, track, and optimise their own affiliate marketing programs.",
		icon: "Tapfiliate.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tapfiliate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tapfiliate\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tapfiliate:jsGlobal:1",
				kind: "jsGlobal",
				property: "TapfiliateObject",
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
		id: "tapsell",
		name: "Tapsell",
		website: "https://tapsell.com",
		description: "Tapsell is an Iranian digital advertising platform that enables businesses to manage and deliver targeted ads across digital channels.",
		icon: "Tapsell.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tapsell:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.mediaad\\.org"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tatari",
		name: "Tatari",
		website: "https://www.tatari.tv",
		description: "Tatari is a data and analytics company focused on buying and measuring ads across TV and streaming platforms.",
		icon: "Tatari.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tatari:jsGlobal:0",
				kind: "jsGlobal",
				property: "tatari",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "teads",
		name: "Teads",
		website: "https://www.teads.com",
		description: "Teads is a technology provider that sells ads on publisher websites.",
		icon: "Teads.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "teads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("teads\\.tv"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "teads:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.teads\\.tv"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
	},
	{
		id: "the-arena-group",
		name: "The Arena Group",
		website: "https://thearenagroup.net",
		description: "The Arena Group is a media coalition of professional content destinations. It operates on a shared digital publishing, advertising, and distribution platform, providing a major media-scale alternative to news and information distributed on social platforms.",
		icon: "The Arena Group.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "the-arena-group:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Tempest\\s-\\smaven\\.io$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "the-arena-group:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^tempest\\s-\\smaven\\.io$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "the-monetyzer",
		name: "The Monetyzer",
		website: "https://www.themoneytizer.com",
		description: "The Monetyzer is a global advertising platform for publishers.",
		icon: "TheMonetyzer.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "the-monetyzer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.themoneytizer\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "the-rave",
		name: "The Rave",
		website: "https://therave.co",
		description: "The Rave is a platform offering affiliate, referral, and user-generated content tools to set up post-purchase incentives.",
		icon: "TheRave.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "the-rave:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.therave\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "the-rave:jsGlobal:1",
				kind: "jsGlobal",
				property: "raveStateManager",
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
		id: "thetradedesk",
		name: "theTradeDesk",
		website: "https://www.thetradedesk.com",
		description: "theTradeDesk is an technology company that markets a software platform used by digital ad buyers to purchase data-driven digital advertising campaigns across various ad formats and devices.",
		icon: "theTradeDesk.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "thetradedesk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adsrvr\\.org\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thetradedesk:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("adsvr\\.org"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "thetradedesk:dom:2",
				kind: "dom",
				selector: "iframe[src*='insight.adsrvr.org']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "thetradedesk:jsGlobal:3",
				kind: "jsGlobal",
				property: "TTDUniversalPixelApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "thetradedesk:jsGlobal:4",
				kind: "jsGlobal",
				property: "ttd_dom_ready",
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
		id: "thor-media",
		name: "Thor-Media",
		website: "https://thor-media.ru",
		description: "Thor-Media is a Russian-based affiliate advertising system that connects advertisers with affiliates for performance-based marketing campaigns.",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "thor-media:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("t\\.thor-media\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "titan",
		name: "Titan",
		website: "https://titan360.com",
		icon: "Titan.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "titan:jsGlobal:0",
				kind: "jsGlobal",
				property: "titan",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "titan:jsGlobal:1",
				kind: "jsGlobal",
				property: "titanEnabled",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "tolt",
		name: "Tolt",
		website: "https://tolt.io",
		description: "Tolt is an affiliate marketing software designed for SaaS startups.",
		icon: "Tolt.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tolt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tolt\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tolt:jsGlobal:1",
				kind: "jsGlobal",
				property: "toltAPI",
				valuePattern: new RegExp("\\.tolt\\.io\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tolt:jsGlobal:2",
				kind: "jsGlobal",
				property: "tolt_referral",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tolt:jsGlobal:3",
				kind: "jsGlobal",
				property: "toltio",
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
		id: "tradedoubler",
		name: "Tradedoubler",
		website: "https://www.tradedoubler.com/",
		description: "Tradedoubler is a global affiliate marketing network.",
		icon: "Tradedoubler.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tradedoubler:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("swrap\\.tradedoubler\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tradedoubler:dom:1",
				kind: "dom",
				selector: "a[href*='clk.tradedoubler.com/click']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tradedoubler:dom:2",
				kind: "dom",
				selector: "img[src*='impes.tradedoubler.com/imp']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "trafficguard",
		name: "TrafficGuard",
		website: "https://trafficguard.ai",
		description: "TrafficGuard is a platform that protects digital marketing campaigns by detecting and preventing invalid traffic and ad fraud.",
		icon: "TrafficGuard.svg",
		categories: [
			"advertising-paid-media",
			"security",
		],
		rules: [
			{
				id: "trafficguard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tgtag\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trafficguard:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("trafficguard\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trafficguard:jsGlobal:2",
				kind: "jsGlobal",
				property: "dataTrafficGuard",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "trafficstars",
		name: "TrafficStars",
		website: "https://trafficstars.com",
		description: "TrafficStars is a self-served ad network and ad exchange that operates mainly in adult-related verticals.",
		icon: "TrafficStars.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "trafficstars:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tsyndicate\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trafficstars:dom:1",
				kind: "dom",
				selector: "img[src*='tsyndicate.com/'], a[href*='trafficstars.com']",
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
		id: "travelpayouts",
		name: "TravelPayouts",
		website: "https://www.travelpayouts.com",
		description: "TravelPayouts is a global affiliate network that helps monetize travel-related web traffic through partnerships with airlines, hotels, and other travel service providers.",
		icon: "TravelPayouts.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "travelpayouts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.travelpayouts\\.com"),
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
		id: "triplelift",
		name: "TripleLift",
		website: "https://triplelift.com",
		description: "TripleLift is an advertising technology company providing native programmatic to buyers and sellers.",
		icon: "TripleLift.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "triplelift:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.3lift\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "triplelift:dom:1",
				kind: "dom",
				selector: "iframe[src*='.3lift.com']",
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
		id: "tsa-commerce",
		name: "TSA Commerce",
		website: "https://tsacommerce.com",
		description: "TSA Commerce is a Turbo SEO Affiliate Commerce plugin for WordPress that integrates search engine optimization with affiliate marketing to enhance site monetization.",
		icon: "TSACommerce.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tsa-commerce:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/tsa-commerce/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tvsquared",
		name: "TVSquared",
		website: "https://www.tvsquared.com",
		description: "TVSquared is a cross-platform TV ad measurement, analytics and optimisation platform.",
		icon: "TVSquared.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tvsquared:dom:0",
				kind: "dom",
				selector: "link[href*='.tvsquared.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tvsquared:jsGlobal:1",
				kind: "jsGlobal",
				property: "TV2Track",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tvsquared:jsGlobal:2",
				kind: "jsGlobal",
				property: "_tvq",
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
		id: "twiago",
		name: "Twiago",
		website: "https://www.twiago.com",
		description: "Twiago is a digital advertising solution that provides transparency and is tailored to specific business needs.",
		icon: "Twiago.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "twiago:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.twiago\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "twitter-ads",
		name: "Twitter Ads",
		website: "https://ads.twitter.com",
		description: "Twitter Ads is an advertising platform for Twitter 'microblogging' system.",
		icon: "Twitter.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "twitter-ads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.ads-twitter\\.com\\/uwt\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twitter-ads:jsGlobal:1",
				kind: "jsGlobal",
				property: "twttr",
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
		id: "unruly",
		name: "Unruly",
		website: "https://unruly.co",
		description: "Unruly is a video advertising platform.",
		icon: "Unruly.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "unruly:dom:0",
				kind: "dom",
				selector: "link[href*='.unrulymedia.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "unruly:jsGlobal:1",
				kind: "jsGlobal",
				property: "unruly.native",
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
		id: "upfluence",
		name: "Upfluence",
		website: "https://www.upfluence.com",
		description: "Upfluence is the all-in-one affiliate and influencer marketing platform for ecommerce and direct-to-consumer brands.",
		icon: "Upfluence.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "upfluence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.upfluence\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "upfluence:dom:1",
				kind: "dom",
				selector: "link[href*='//uploader-upfluence-assets.s3']",
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
		id: "upravel",
		name: "Upravel",
		website: "https://upravel.com",
		description: "Upravel is a marketing advertising system.",
		icon: "Upravel.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "upravel:dom:0",
				kind: "dom",
				selector: "link[href*='.upravel.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "upravel:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^user_id\\-legacy$", "i"),
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
		id: "utiq",
		name: "Utiq",
		website: "https://utiq.com/",
		description: "Utiq empowers brands and publishers to address audiences through Telco-powered first-party identifier.",
		icon: "Utiq.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "utiq:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/utiqloader\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "utiq:jsGlobal:1",
				kind: "jsGlobal",
				property: "Utiq",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "utiq:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/utiqLoader\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: false,
		},
	},
	{
		id: "uzerly",
		name: "Uzerly",
		website: "https://uzerly.fr",
		description: "Uzerly is a technology-focused company specializing in retargeting.",
		icon: "Uzerly.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "uzerly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.userly\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "uzerly:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.u(?:s|z)erly\\.net", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "valuad",
		name: "Valuad",
		website: "https://valuad.io",
		description: "Valuad is a platform that provides algorithm-based header bidding for publishers to optimize advertising revenue.",
		icon: "Valuad.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "valuad:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.valuad\\.cloud"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "valuecommerce",
		name: "ValueCommerce",
		website: "https://www.valuecommerce.co.jp",
		description: "ValueCommerce is a pay-per-performance advertising affiliate marketing network.",
		icon: "ValueCommerce.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "valuecommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.valuecommerce\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "valuecommerce:dom:1",
				kind: "dom",
				selector: "a[href*='ap.valuecommerce.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "valuecommerce:dom:2",
				kind: "dom",
				selector: "img[src*='ap.valuecommerce.com'],img[data-src*='ap.valuecommerce.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "vdx-tv",
		name: "VDX.tv",
		website: "https://vdx.tv",
		description: "VDX.tv (formerly Exponential) is a global advertising technology company that is transforming the way brands connect with relevant audiences in today's converging video landscape.",
		icon: "VDX.tv.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "vdx-tv:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tribalfusion\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vdx-tv:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.exponential\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vdx-tv:dom:2",
				kind: "dom",
				selector: "link[href*='.tribalfusion.com'], link[href*='.exponential.com']",
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
		id: "veoxa",
		name: "Veoxa",
		website: "https://veoxa.com",
		icon: "Veoxa.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "veoxa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tracking\\.veoxa\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "veoxa:html:1",
				kind: "html",
				pattern: new RegExp("<img [^>]*src=\"[^\"]+tracking\\.veoxa\\.com"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "veoxa:jsGlobal:2",
				kind: "jsGlobal",
				property: "VuVeoxaContent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "verizon-media",
		name: "Verizon Media",
		website: "https://www.verizonmedia.com",
		description: "Verizon Media is a tech and media company with global assets for advertisers, consumers and media companies.",
		icon: "Verizon Media.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "verizon-media:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.advertising\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "verizon-media:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.vidible\\.tv\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "verizon-media:dom:2",
				kind: "dom",
				selector: "img[src*='pixel.advertising.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "verticalscope",
		name: "VerticalScope",
		website: "https://www.verticalscope.com",
		description: "VerticalScope is a Canadian-based technology company that owns and operates a network of online communities and discussion forums focused on a variety of interests and hobbies, such as cars, pets, sports, and technology. VerticalScope generates revenue primarily through advertising, including banner ads, sponsored content, and affiliate marketing.",
		icon: "VerticalScope.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "verticalscope:html:0",
				kind: "html",
				pattern: new RegExp("VerticalScope(?:\\s+Inc\\.)?", "i"),
				confidence: 90,
				description: "Document HTML contains VerticalScope branding.",
			},
			{
				id: "verticalscope:text:1",
				kind: "text",
				pattern: new RegExp("VerticalScope Inc\\."),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "vidazoo",
		name: "Vidazoo",
		website: "https://www.vidazoo.com",
		description: "Vidazoo is a video content and yield management platform.",
		icon: "Vidazoo.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "vidazoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.vidazoo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vidazoo:jsGlobal:1",
				kind: "jsGlobal",
				property: "__vidazooPlayer__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vidazoo:jsGlobal:2",
				kind: "jsGlobal",
				property: "vidazoo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vidazoo:jsGlobal:3",
				kind: "jsGlobal",
				property: "vidazoo.version",
				valuePattern: new RegExp("(.+)"),
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
		id: "wazimo",
		name: "Wazimo",
		website: "https://wazimo.com",
		description: "Wazimo is a digital media company focused on combining engaging content with advanced real-time tendering (RTB) capabilities.",
		icon: "wazimo.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "wazimo:jsGlobal:0",
				kind: "jsGlobal",
				property: "wz.mmConfig.buildVersion",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "webgains",
		name: "Webgains",
		website: "https://www.webgains.com/",
		description: "Webgains is an affiliate marketing network.",
		icon: "Webgains.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "webgains:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.webgains\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "webgains:jsGlobal:1",
				kind: "jsGlobal",
				property: "ITCLKQ",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "webica",
		name: "Webica",
		website: "https://webica.pro",
		description: "Webica is a web-based platform designed to manage online advertising campaigns for your website.",
		icon: "Webica.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "webica:jsGlobal:0",
				kind: "jsGlobal",
				property: "WebicaWidget",
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
		id: "wehaa",
		name: "Wehaa",
		website: "https://www.wehaa.com",
		description: "Wehaa is a platform providing revenue management and monetization solutions designed to help media companies optimize earnings and streamline their business operations.",
		icon: "Wehaa.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "wehaa:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.aws\\.wehaa\\.net\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "widerplanet",
		name: "WiderPlanet",
		website: "https://widerplanet.com",
		description: "WiderPlanet is a real-time advertising platform that utilises user behaviour data to deliver targeted advertisements.",
		icon: "WiderPlanet.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "widerplanet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.widerplanet\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "wordads",
		name: "WordAds",
		website: "https://wordads.co",
		description: "WordAds is an advertising platform run by Automatic that allows bloggers and website owners to place advertisements on their blogs and websites.",
		icon: "WordAds.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "wordads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pubmine\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wordads:dom:1",
				kind: "dom",
				selector: "link[href*='.pubmine.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "yahoo-advertising",
		name: "Yahoo Advertising",
		website: "https://www.adtech.yahooinc.com",
		description: "Yahoo Advertising includes a comprehensive suite of web, mobile, and video ad products across native, audience, and premium display, which are accessible through a new buying platform.",
		icon: "Yahoo.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "yahoo-advertising:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:adinterax|adserver\\.yahoo)\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yahoo-advertising:dom:1",
				kind: "dom",
				selector: "link[href*='bc.yahoo.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "yahoo-advertising:jsGlobal:2",
				kind: "jsGlobal",
				property: "adxinserthtml",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yahoo-advertising:jsGlobal:3",
				kind: "jsGlobal",
				property: "yahooCvLoad",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yahoo-advertising:jsGlobal:4",
				kind: "jsGlobal",
				property: "yahoo_retargeting_pv_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yahoo-advertising:jsGlobal:5",
				kind: "jsGlobal",
				property: "yahoo_ydn_conv_label",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yahoo-advertising:jsGlobal:6",
				kind: "jsGlobal",
				property: "yahoo_ydn_conv_transaction_id",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "yandex-direct",
		name: "Yandex.Direct",
		website: "https://ads.yandex.com",
		description: "Yandex Direct is the platform designed for sponsored ad management.",
		icon: "Yandex.Direct.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "yandex-direct:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/an\\.yandex\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yandex-direct:html:1",
				kind: "html",
				pattern: new RegExp("<yatag class=\"ya-partner__ads\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yandex-direct:jsGlobal:2",
				kind: "jsGlobal",
				property: "yandex_ad_format",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yandex-direct:jsGlobal:3",
				kind: "jsGlobal",
				property: "yandex_partner_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yandex-direct:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/an\\.yandex\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yandex-direct:dom:5",
				kind: "dom",
				selector: "yatag[class*='ya-partner__ads']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "yektanet",
		name: "Yektanet",
		website: "https://www.yektanet.com",
		description: "Yektanet is the biggest and most advanced native advertising network in Iran.",
		icon: "Yektanet.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "yektanet:jsGlobal:0",
				kind: "jsGlobal",
				property: "yektanet",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "yieldlab",
		name: "Yieldlab",
		website: "https://yieldlab.de",
		description: "Yieldlab is a German company that provides programmatic advertising technology solutions to optimize ad performance and maximize digital ad spend returns.",
		icon: "Yieldlab.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "yieldlab:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/(?:[^/]+\\.)?yieldlab\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "zanox",
		name: "Zanox",
		website: "https://zanox.com",
		icon: "Zanox.png",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "zanox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zanox\\.com\\/scripts\\/zanox\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zanox:html:1",
				kind: "html",
				pattern: new RegExp("<img [^>]*src=\"[^\"]+ad\\.zanox\\.com"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "zanox:jsGlobal:2",
				kind: "jsGlobal",
				property: "zanox",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "zeus-technology",
		name: "Zeus Technology",
		website: "https://www.zeustechnology.com",
		description: "Zeus Technology is a media monetisation platform that levels the playing field for publishers and advertisers of all sizes.",
		icon: "Zeus Technology.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "zeus-technology:jsGlobal:0",
				kind: "jsGlobal",
				property: "zeus.version",
				valuePattern: new RegExp("v([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zeus-technology:jsGlobal:1",
				kind: "jsGlobal",
				property: "zeusAdUnitPath",
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
		id: "zucks",
		name: "Zucks",
		website: "https://zucks.co.jp",
		description: "Zucks is an advertising platform that connects advertisers with publishers seeking to place and manage digital advertisements across various channels.",
		icon: "Zucks.svg",
		categories: [
			"advertising-paid-media",
		],
		rules: [
			{
				id: "zucks:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.zucks\\.net"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
] as const satisfies readonly TechnologyDefinition[];
