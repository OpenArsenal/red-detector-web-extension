import type { TechnologyDefinition } from '../types';

export const searchTechnologyDefinitions = [
	{
		id: "addsearch",
		name: "Addsearch",
		website: "https://www.addsearch.com/",
		description: "Addsearch is a site search solution for small and large websites.",
		icon: "Addsearch.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "addsearch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/addsearch\\.com\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "addsearch:jsGlobal:1",
				kind: "jsGlobal",
				property: "AddSearchClient",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "addsearch:jsGlobal:2",
				kind: "jsGlobal",
				property: "AddSearchUI",
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
		id: "algolia",
		name: "Algolia",
		website: "https://www.algolia.com",
		description: "Algolia offers a hosted web search product delivering real-time results.",
		icon: "Algolia.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "algolia:jsGlobal:0",
				kind: "jsGlobal",
				property: "ALGOLIA_INSIGHTS_SRC",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:jsGlobal:1",
				kind: "jsGlobal",
				property: "AlgoliaSearch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:jsGlobal:2",
				kind: "jsGlobal",
				property: "__GLOBAL__.algolia",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:jsGlobal:3",
				kind: "jsGlobal",
				property: "__NEXT_DATA__.props.pageProps.appSettings.ALGOLIA_APP_ID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:jsGlobal:4",
				kind: "jsGlobal",
				property: "__algolia",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:jsGlobal:5",
				kind: "jsGlobal",
				property: "algoliasearch.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^_ALGOLIA$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "algolia:header:7",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.algolia", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "algolia:scriptContent:8",
				kind: "scriptContent",
				pattern: new RegExp("algoliasearch"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "algolia:jsGlobal:9",
				kind: "jsGlobal",
				property: "__algolia.algoliasearch.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:jsGlobal:10",
				kind: "jsGlobal",
				property: "_didomi_vendors_consent",
				valuePattern: new RegExp("\\balgolia\\b"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:jsGlobal:11",
				kind: "jsGlobal",
				property: "didomiState.didomiVendorsConsent",
				valuePattern: new RegExp("\\balgolia\\b"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia:cookie:12",
				kind: "cookie",
				keyPattern: new RegExp("^didomiVendorsConsent$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "algolia:cookie:13",
				kind: "cookie",
				keyPattern: new RegExp("^_algolia$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "algolia:header:14",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.algolia", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "apisearch",
		name: "Apisearch",
		website: "https://apisearch.io",
		description: "Apisearch is a real-time search platform for ecommerce.",
		icon: "Apisearch.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "apisearch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.apisearch\\.cloud"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"mid",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "athena-search",
		name: "Athena Search",
		website: "https://www.athenasearch.io",
		description: "Athena Search is a customizable autocomplete, feature-rich dashboard, smart predictions, real-time reports search engine developed from scratch by Syncit Group’s.",
		icon: "Athena Search.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "athena-search:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/athena-search"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "athena-search:dom:1",
				kind: "dom",
				selector: "link[href*='athena/autocomplete/css/autocomplete.css']",
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
		id: "athos-commerce",
		name: "Athos Commerce",
		website: "https://athoscommerce.com/",
		description: "Athos Commerce is a site search and merchandising platform designed to help ecommerce.",
		icon: "Athos Commerce.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "athos-commerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.searchspring\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "athos-commerce:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.klevu\\.\\w+\\/klevu-js-v([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "athos-commerce:jsGlobal:2",
				kind: "jsGlobal",
				property: "SearchSpring",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "athos-commerce:jsGlobal:3",
				kind: "jsGlobal",
				property: "SearchSpringConf",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "athos-commerce:jsGlobal:4",
				kind: "jsGlobal",
				property: "SearchSpringInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "athos-commerce:jsGlobal:5",
				kind: "jsGlobal",
				property: "klevu.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "athos-commerce:jsGlobal:6",
				kind: "jsGlobal",
				property: "klevu_apiKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "athos-commerce:jsGlobal:7",
				kind: "jsGlobal",
				property: "klevu_layout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "athos-commerce:jsGlobal:8",
				kind: "jsGlobal",
				property: "klevu_sessionId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "athos-commerce:jsGlobal:9",
				kind: "jsGlobal",
				property: "sendKlevuAnalytics",
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
		id: "attraqt",
		name: "Attraqt",
		website: "https://www.attraqt.com/",
		description: "Attraqt provides AI-driven search, merchandising and personalisation solutions.",
		icon: "Attraqt.png",
		categories: [
			"search",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "attraqt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.attraqt\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "attraqt:jsGlobal:1",
				kind: "jsGlobal",
				property: "_attraqt",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "awesomplete",
		name: "Awesomplete",
		website: "https://leaverou.github.io/awesomplete/",
		description: "Awesomplete is a tool in the Javascript UI Libraries category of a tech stack.",
		categories: [
			"search",
		],
		rules: [
			{
				id: "awesomplete:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/awesomplete\\.js(?:$|\\?)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "awesomplete:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]+href=\"[^>]*awesomplete(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "awesomplete:jsGlobal:2",
				kind: "jsGlobal",
				property: "awesomplete",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "awesomplete:jsGlobal:3",
				kind: "jsGlobal",
				property: "Awesomplete",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "baidu-search-box",
		name: "Baidu Search Box",
		website: "https://www.baidu.com/search/sug/sugcode.html",
		description: "Baidu Search Box is a feature integrated within web pages enabling users to conduct searches directly on the site.",
		icon: "BaiduSearchBox.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "baidu-search-box:dom:0",
				kind: "dom",
				selector: "input[value='baidu'][name='tn']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bloomreach-discovery",
		name: "Bloomreach Discovery",
		website: "https://www.bloomreach.com/en/products/discovery",
		description: "Bloomreach Discovery is a powerful combination of AI-powered site search, SEO, recommendations, and product merchandising.",
		icon: "Bloomreach.svg",
		categories: [
			"search",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "bloomreach-discovery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brsrvr\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bloomreach-discovery:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brcdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bloomreach-discovery:jsGlobal:2",
				kind: "jsGlobal",
				property: "BrTrk.scriptVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bloomreach-discovery:jsGlobal:3",
				kind: "jsGlobal",
				property: "br_data.acct_id",
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
		id: "boost-commerce",
		name: "Boost Commerce",
		website: "https://boostcommerce.net",
		description: "Boost Commerce provides beautiful and advanced product filter and smart site search for Shopify stores to boost sales.",
		icon: "Boost Commerce.png",
		categories: [
			"search",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "boost-commerce:jsGlobal:0",
				kind: "jsGlobal",
				property: "bcSfFilterConfig.api.filterUrl",
				valuePattern: new RegExp("services\\.mybcapps\\.com\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "boost-commerce:jsGlobal:1",
				kind: "jsGlobal",
				property: "boostPFSAppConfig.api.filterUrl",
				valuePattern: new RegExp("services\\.mybcapps\\.com\\/"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "cludo",
		name: "Cludo",
		website: "https://www.cludo.com",
		description: "Cludo is a site search platform with analytics and content optimization tools.",
		icon: "Cludo.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "cludo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("customer\\.cludo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cludo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Cludo.getPublicSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cludo:jsGlobal:2",
				kind: "jsGlobal",
				property: "CludoSearch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cludo:jsGlobal:3",
				kind: "jsGlobal",
				property: "CludoSearchInstances",
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
		id: "constructor-io",
		name: "Constructor.io",
		website: "https://constructor.io/",
		description: "Constructor.io is a site search and merchandising platform designed to help ecommerce.",
		icon: "ConstructorIO.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "constructor-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cnstrc\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "constructor-io:jsGlobal:1",
				kind: "jsGlobal",
				property: "ConstructorioClient",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "constructor-io:jsGlobal:2",
				kind: "jsGlobal",
				property: "constructorio",
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
		id: "convermax",
		name: "Convermax",
		website: "https://convermax.com",
		description: "Convermax is a search solution that enhances the search experience for ecommerce website visitors by providing more accurate and relevant results.",
		icon: "Convermax.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "convermax:jsGlobal:0",
				kind: "jsGlobal",
				property: "Convermax.addProductsHistory",
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
		id: "coveo",
		name: "Coveo",
		website: "https://www.coveo.com/",
		description: "Coveo is an enterprise search and relevance platform that uses AI to enhance search capabilities and deliver personalized content across digital touchpoints.",
		icon: "Coveo.png",
		categories: [
			"search",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "coveo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.cloud\\.coveo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "coveo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Coveo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "coveo:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.(?:cloud\\.coveo|goqubit)\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "coveo:jsGlobal:3",
				kind: "jsGlobal",
				property: "__qubit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "coveo:jsGlobal:4",
				kind: "jsGlobal",
				property: "onQubitReady",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dalue",
		name: "Dalue",
		website: "https://dalue.io/dalue",
		description: "Dalue is a cloud-based search engine developed in South Korea that enables information retrieval and indexing across online data sources.",
		icon: "Dalue.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "dalue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.dalue\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dalue:jsGlobal:1",
				kind: "jsGlobal",
				property: "DalueSearch.Consts",
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
		id: "doofinder",
		name: "Doofinder",
		website: "https://www.doofinder.com",
		description: "Doofinder is a search site solution that enables users to include advanced and smart search engine capabilities in their ecommerce website.",
		icon: "Doofinder.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "doofinder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.doofinder\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "doofinder:jsGlobal:1",
				kind: "jsGlobal",
				property: "doofinder.classic.version",
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
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "elasticsearch",
		name: "Elasticsearch",
		website: "https://www.elastic.co",
		description: "Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents.",
		icon: "Elasticsearch.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "elasticsearch:dom:0",
				kind: "dom",
				selector: "div#topsearchelastic_widget",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"recurring",
			],
			cpe: "cpe:2.3:a:elastic:elasticsearch:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "elasticsuite",
		name: "ElasticSuite",
		website: "https://elasticsuite.io",
		description: "ElasticSuite is a merchandising suite for Magento and OroCommerce.",
		icon: "ElasticSuite.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "elasticsuite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/Smile_ElasticsuiteTracker\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "elasticsuite:jsGlobal:1",
				kind: "jsGlobal",
				property: "smileTracker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "elasticsuite:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^STUID$", "i"),
				confidence: 50,
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "elasticsuite:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^STVID$", "i"),
				confidence: 50,
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "elasticsuite:scriptContent:4",
				kind: "scriptContent",
				pattern: new RegExp("(?:\\.elasticsuite\\.io\\/|\\/elasticsuite-tracker\\/)"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "elasticsuite:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("\\/smile_elasticsuitetracker\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "elasticsuite:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^stuid$", "i"),
				confidence: 50,
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "elasticsuite:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^stvid$", "i"),
				confidence: 50,
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "elasticsuite:scriptContent:8",
				kind: "scriptContent",
				pattern: new RegExp("\\.elasticsuite\\.io\\/|\\/elasticsuite-tracker\\/|Lmc_ElasticSuiteCatalog\\\\"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"elasticsearch",
			"php",
		],
		requires: [
			"magento",
			"orocommerce",
		],
	},
	{
		id: "expertrec",
		name: "ExpertRec",
		website: "https://www.expertrec.com/",
		description: "ExpertRec is a collaborative Web search engine, which allows users share search histories through a web browser.",
		icon: "ExpertRec.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "expertrec:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("expertrec\\.com\\/api\\/js\\/ci_common\\.js\\?id=.*"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "expertrec:jsGlobal:1",
				kind: "jsGlobal",
				property: "_er_config",
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
		id: "fact-finder",
		name: "Fact Finder",
		website: "https://fact-finder.com",
		description: "Fact Finder is a platform which, combines search, navigation, and merchandising solutions to streamline online search and power sales.",
		icon: "Fact Finder.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "fact-finder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("Suggest\\.ff"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fact-finder:html:1",
				kind: "html",
				pattern: new RegExp("<!-- Factfinder"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "fact-finder:url:2",
				kind: "url",
				pattern: new RegExp("(?:\\/ViewParametricSearch|ffsuggest\\.[a-z]htm)"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "fact-finder:jsGlobal:3",
				kind: "jsGlobal",
				property: "FactFinderInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fact-finder:jsGlobal:4",
				kind: "jsGlobal",
				property: "factfinder",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fact-finder:jsGlobal:5",
				kind: "jsGlobal",
				property: "factfinder.version",
				valuePattern: new RegExp("^([\\d\\.])$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fact-finder:scriptSrc:6",
				kind: "scriptSrc",
				pattern: new RegExp("suggest\\.ff"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fact-finder:html:7",
				kind: "html",
				pattern: new RegExp("<!-- factfinder"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "fast-esp",
		name: "FAST ESP",
		website: "https://microsoft.com/enterprisesearch",
		description: "FAST ESP is a service-oriented architecture development platform which is geared towards production searchable indexes. It provided a flexible framework for creating ETL applications for efficient indexing of searchable content.",
		icon: "FAST ESP.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "fast-esp:html:0",
				kind: "html",
				pattern: new RegExp("<form[^>]+id=\"fastsearch\""),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "fast-esp:dom:1",
				kind: "dom",
				selector: "form[id^='fastsearch']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "fast-search-for-sharepoint",
		name: "FAST Search for SharePoint",
		website: "https://sharepoint.microsoft.com/en-us/product/capabilities/search/Pages/Fast-Search.aspx",
		description: "FAST Search for SharePoint is the search engine for Microsoft's SharePoint collaboration platform. Its purpose is helping SharePoint users locate and retrieve stored enterprise content.",
		icon: "FAST Search for SharePoint.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "fast-search-for-sharepoint:html:0",
				kind: "html",
				pattern: new RegExp("<input[^>]+ name=\"ParametricSearch"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "fast-search-for-sharepoint:url:1",
				kind: "url",
				pattern: new RegExp("Pages\\/SearchResults\\.aspx\\?k="),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "fast-search-for-sharepoint:dom:2",
				kind: "dom",
				selector: "input[name*='ParametricSearch']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fast-search-for-sharepoint:html:3",
				kind: "html",
				pattern: new RegExp("<input[^>]+ name=\"parametricsearch"),
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"microsoft-asp-net",
			"microsoft-sharepoint",
		],
	},
	{
		id: "fibosearch",
		name: "FiboSearch",
		website: "https://fibosearch.com",
		description: "FiboSearch is a WooCommerce product search plugin, formerly known as AJAX Search.",
		icon: "FiboSearch.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "fibosearch:jsGlobal:0",
				kind: "jsGlobal",
				property: "dgwt_wcas.ajax_search_endpoint",
				description: "Page-owned global matches a known technology marker.",
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
		requires: [
			"woocommerce",
		],
	},
	{
		id: "findbar",
		name: "Findbar",
		website: "https://findbar.io",
		description: "Findbar specializes in advanced on-site search technology, enhancing user engagement and improving the overall user experience on websites and applications.",
		icon: "Findbar.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "findbar:jsGlobal:0",
				kind: "jsGlobal",
				property: "Findbar",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "findbar:jsGlobal:1",
				kind: "jsGlobal",
				property: "findbarScriptLoaded",
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
		id: "findberry",
		name: "Findberry",
		website: "https://www.findberry.com",
		description: "Findberry is an internal site search service designed for web developers and site owners looking to integrate a professional, ad-free search engine into their websites.",
		icon: "Findberry.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "findberry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.findberry\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "findberry:jsGlobal:1",
				kind: "jsGlobal",
				property: "jQuery_Findberry",
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
		requires: [
			"jquery",
		],
	},
	{
		id: "findify",
		name: "Findify",
		website: "https://www.findify.io",
		description: "Findify is an intelligent ecommerce search, navigation and personalisation solution.",
		icon: "Findify.svg",
		categories: [
			"search",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "findify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("@findify\\/bundle@([\\d.]+)\\/dist\\/.+\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "findify:jsGlobal:1",
				kind: "jsGlobal",
				property: "FindifyAnalytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "findify:jsGlobal:2",
				kind: "jsGlobal",
				property: "findify",
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
		id: "goodsearch",
		name: "Goodsearch",
		website: "https://www.goodsearch.com",
		description: "Goodsearch is a search engine that donates 50 percent of its sponsored search revenue to charities and schools designated by users.",
		icon: "Goodsearch.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "goodsearch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.goodsearch\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "groupby",
		name: "GroupBy",
		website: "https://groupbyinc.com/",
		description: "GroupBy is a search enging for eCommerce sites.",
		icon: "Groupby.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "groupby:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.groupbycloud\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "hawksearch",
		name: "HawkSearch",
		website: "https://www.hawksearch.com",
		description: "HawkSearch is a responsive ecommerce site search solution designed to enhance product discovery and improve search functionality.",
		icon: "HawkSearch.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "hawksearch:jsGlobal:0",
				kind: "jsGlobal",
				property: "HawkCompare.addImage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hawksearch:jsGlobal:1",
				kind: "jsGlobal",
				property: "HawkSearch.BaseUrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hawksearch:jsGlobal:2",
				kind: "jsGlobal",
				property: "hawkIntervalSearch",
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
		id: "kapa-ai",
		name: "Kapa.ai",
		website: "https://www.kapa.ai",
		description: "Kapa.ai is a platform that converts documents into an LLM-powered chatbot for information retrieval and question answering.",
		icon: "Kapa.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "kapa-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.kapa\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kapa-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "Kapa",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kapa-ai:jsGlobal:2",
				kind: "jsGlobal",
				property: "KapaWidget.init",
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
		id: "kibana",
		name: "Kibana",
		website: "https://www.elastic.co/products/kibana",
		description: "Kibana is an open-source data visualisation dashboard for Elasticsearch. It provides visualisation capabilities on top of the content indexed on an Elasticsearch cluster. Users can create bar, line and scatter plots, or pie charts and maps on top of large volumes of data.",
		icon: "kibana.svg",
		categories: [
			"search",
			"graphics-visualization",
		],
		rules: [
			{
				id: "kibana:html:0",
				kind: "html",
				pattern: new RegExp("<title>Kibana<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "kibana:url:1",
				kind: "url",
				pattern: new RegExp("kibana#\\/dashboard\\/"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "kibana:header:2",
				kind: "header",
				key: "kbn-name",
				valuePattern: new RegExp("kibana", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "kibana:header:3",
				kind: "header",
				key: "kbn-version",
				valuePattern: new RegExp("^([\\d.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "kibana:html:4",
				kind: "html",
				pattern: new RegExp("<title>kibana<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:elasticsearch:kibana:*:*:*:*:*:*:*:*",
		},
		implies: [
			"elasticsearch",
			"node-js",
		],
	},
	{
		id: "klevu",
		name: "Klevu",
		website: "https://www.klevu.com",
		description: "Klevu is a highly advanced AI-Powered search solution for ecommerce platforms.",
		icon: "Klevu.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "klevu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.klevu\\.\\w+\\/klevu-js-v([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klevu:jsGlobal:1",
				kind: "jsGlobal",
				property: "klevu.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klevu:jsGlobal:2",
				kind: "jsGlobal",
				property: "klevu_apiKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klevu:jsGlobal:3",
				kind: "jsGlobal",
				property: "klevu_layout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klevu:jsGlobal:4",
				kind: "jsGlobal",
				property: "klevu_sessionId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klevu:jsGlobal:5",
				kind: "jsGlobal",
				property: "sendKlevuAnalytics",
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
		id: "kx-ai-search-and-discovery-agent",
		name: "Kx AI Search & Discovery Agent",
		website: "https://apps.shopify.com/agentic-store",
		description: "Kx AI Search & Discovery Agent is an agentic search solution that interprets product data, collections, attributes, inventory, margins, and shopper intent to support product discovery and conversion optimization.",
		icon: "KxAISearchDiscoveryAgent.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "kx-ai-search-and-discovery-agent:dom:0",
				kind: "dom",
				selector: "div#kxChatSearchBubbleBtn",
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
		id: "layers",
		name: "Layers",
		website: "https://www.uselayers.com/",
		description: "Layers is a site search and merchandising platform designed to help ecommerce.",
		icon: "Layers.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "layers:jsGlobal:0",
				kind: "jsGlobal",
				property: "Layers",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "loop54",
		name: "Loop54",
		website: "https://www.loop54.com",
		description: "Loop54 is an ecommerce search and navigation SaaS product.",
		icon: "Loop54.png",
		categories: [
			"search",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "loop54:jsGlobal:0",
				kind: "jsGlobal",
				property: "Loop54.config.libVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "loop54:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^Loop54User$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "loop54:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^loop54user$", "i"),
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
		id: "mageworx-search-autocomplete",
		name: "MageWorx Search Autocomplete",
		website: "https://github.com/mageworx/search-suite-autocomplete",
		description: "MageWorx Search Autocomplete extension offers an AJAX-based popup window that displays and updates relevant search results while a customer forms his or her query.",
		icon: "MageWorx.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "mageworx-search-autocomplete:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("MageWorx_SearchSuiteAutocomplete"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mageworx-search-autocomplete:dom:1",
				kind: "dom",
				selector: "link[href*='MageWorx_SearchSuiteAutocomplete']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mageworx-search-autocomplete:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("mageworx_searchsuiteautocomplete"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"magento",
		],
	},
	{
		id: "mars-flag",
		name: "Mars Flag",
		website: "https://www.marsflag.com/en",
		description: "Mars Flag is a search platform provider originating from Japan, known for its leading domestic market share in website search services.",
		icon: "MarsFlag.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "mars-flag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.marsflag\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mars-flag:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^marsflag\\-_zldp$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "meilisearch",
		name: "Meilisearch",
		website: "https://www.meilisearch.com",
		description: "Meilisearch is a search engine created by Meili, a software development company based in France.",
		icon: "Meilisearch.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "meilisearch:dom:0",
				kind: "dom",
				selector: "span.meilisearch-autocomplete",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "meilisearch:jsGlobal:1",
				kind: "jsGlobal",
				property: "MeiliSearch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "meilisearch:jsGlobal:2",
				kind: "jsGlobal",
				property: "MeiliSearchApiError",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "meilisearch:jsGlobal:3",
				kind: "jsGlobal",
				property: "MeiliSearchTimeOutError",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "meilisearch:jsGlobal:4",
				kind: "jsGlobal",
				property: "ac_apsulis_meilisearch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "meilisearch:jsGlobal:5",
				kind: "jsGlobal",
				property: "instantMeiliSearch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "meilisearch:scriptContent:6",
				kind: "scriptContent",
				pattern: new RegExp("\\.meilisearch\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "meilisearch:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^saas_demo_meilisearch_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "miso",
		name: "Miso",
		website: "https://miso.ai",
		description: "Miso is a real-time personalisation APIs for search, recommendation, and marketing.",
		icon: "Miso.svg",
		categories: [
			"search",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "miso:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.askmiso\\.com\\/"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "nova-busca",
		name: "Nova Busca",
		website: "https://novabusca.com.br",
		description: "Nova Busca is an artificial intelligence tool that enhances search functionality on ecommerce websites by improving result relevance and user experience.",
		icon: "NovaBusca.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "nova-busca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.novabusca\\.com\\.br"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "orama",
		name: "Orama",
		website: "https://oramasearch.com",
		description: "Orama is a platform offering full-text and vector search capabilities across 300 global locations.",
		icon: "OramaSearch.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "orama:dom:0",
				kind: "dom",
				selector: "li > a[href*='/@orama/orama'], link[href*='orama-search']",
				description: "DOM selector matches a known technology marker.",
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
		id: "pagefind",
		name: "Pagefind",
		website: "https://pagefind.app",
		description: "Pagefind is an open-source static site search library for indexing and searching website content.",
		icon: "Pagefind.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "pagefind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:^|\\/)_?pagefind\\/pagefind-ui\\.js(?:$|\\?)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pagefind:jsGlobal:1",
				kind: "jsGlobal",
				property: "PagefindUI",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "pickzen",
		name: "Pickzen",
		website: "https://www.pickzen.com",
		description: "Pickzen is an AI-powered tool designed for conversational search.",
		icon: "Pickzen.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "pickzen:jsGlobal:0",
				kind: "jsGlobal",
				property: "pickzen.server",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pickzen:jsGlobal:1",
				kind: "jsGlobal",
				property: "pickzenLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pickzen:jsGlobal:2",
				kind: "jsGlobal",
				property: "pickzenonActivation",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "prefixbox",
		name: "Prefixbox",
		website: "https://www.prefixbox.com",
		description: "Prefixbox is an AI-powered ecommerce search and product discovery platform.",
		icon: "Prefixbox.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "prefixbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("integration\\.prefixbox\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prefixbox:dom:1",
				kind: "dom",
				selector: "[id^='prefixbox-autocomplete-']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "prefixbox:jsGlobal:2",
				kind: "jsGlobal",
				property: "prefixboxAnalytics",
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
		id: "queryly",
		name: "Queryly",
		website: "https://queryly.com/",
		description: "Queryly is a cloud-based API providing site search and content recommendation functionalities, utilizing advanced algorithms to deliver quick, relevant search results and personalized content suggestions.",
		icon: "Queryly.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "queryly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.queryly\\.com\\/js\\/queryly\\.v([\\d\\.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "queryly:jsGlobal:1",
				kind: "jsGlobal",
				property: "queryly",
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
		id: "search-magic",
		name: "Search Magic",
		website: "https://yourstorewizards.com/app-store/search-magic",
		description: "Search Magic is an ecommerce website search solution designed to improve product discovery and enhance user experience through advanced search capabilities.",
		icon: "SearchMagic.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "search-magic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.searchmagic\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "search-magic:jsGlobal:1",
				kind: "jsGlobal",
				property: "yswSearchMagicCssUrl",
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
		id: "searchanise",
		name: "Searchanise",
		website: "https://start.searchanise.com",
		description: "Searchanise is a complete search and filter solution for ecommerce.",
		icon: "Searchanise.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "searchanise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("searchanise(?:-.+\\.kxcdn)?\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "searchanise:jsGlobal:1",
				kind: "jsGlobal",
				property: "Searchanise",
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
		id: "searchine",
		name: "Searchine",
		website: "https://www.searchine.net",
		description: "Searchine is a site search system that provides insights into visitor search behaviour and offers suggestions for website improvements.",
		icon: "Searchine.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "searchine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.searchine\\.net\\/"),
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
		id: "searchiq",
		name: "SearchiQ",
		website: "https://www.searchiq.co",
		description: "SearchiQ is a cloud-based search engine solution that can be integrated into a website.",
		icon: "SearchiQ.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "searchiq:jsGlobal:0",
				kind: "jsGlobal",
				property: "siqConfig.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "searchiq:jsGlobal:1",
				kind: "jsGlobal",
				property: "siq_version",
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
				"freemium",
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "searchspring",
		name: "Searchspring",
		website: "https://searchspring.com",
		description: "Searchspring is a site search and merchandising platform designed to help ecommerce.",
		icon: "Searchspring.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "searchspring:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.searchspring\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "searchspring:jsGlobal:1",
				kind: "jsGlobal",
				property: "SearchSpring",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "searchspring:jsGlobal:2",
				kind: "jsGlobal",
				property: "SearchSpringConf",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "searchspring:jsGlobal:3",
				kind: "jsGlobal",
				property: "SearchSpringInit",
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
		id: "searchtap",
		name: "Searchtap",
		website: "https://searchtap.io",
		description: "Searchtap is a hosted search-as-a-service platform that enables websites to integrate fast and scalable search functionality.",
		icon: "Searchtap.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "searchtap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.searchtap\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "searchtap:dom:1",
				kind: "dom",
				selector: "div[id*='shopify-section-searchtap']",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "segmentify",
		name: "Segmentify",
		website: "https://segmentify.com",
		description: "Segmentify is an ecommerce personalisation platform.",
		icon: "Segmentify.svg",
		categories: [
			"search",
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "segmentify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.segmentify\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "segmentify:jsGlobal:1",
				kind: "jsGlobal",
				property: "SegmentifyIntegration",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "segmentify:jsGlobal:2",
				kind: "jsGlobal",
				property: "SegmentifyTrackingObject",
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
		id: "seo-manager",
		name: "SEO Manager",
		website: "https://venntov.com/pages/seo-manager",
		description: "SEO Manager is a platform that optimizes Shopify websites to enhance search engine visibility and improve organic traffic.",
		icon: "SEOManager.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "seo-manager:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.seomanager\\.com\\/"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "site-search-360",
		name: "Site Search 360",
		website: "https://www.sitesearch360.com/",
		description: "Site Search 360 is a site search as a service solution.",
		icon: "Site Search 360.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "site-search-360:jsGlobal:0",
				kind: "jsGlobal",
				property: "ss360Config",
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
		id: "smartypilot",
		name: "Smartypilot",
		website: "https://smartypilot.ai",
		description: "Smartypilot is an ecommerce AI suite that provides semantic search, chatbot assistance, and product question answering.",
		icon: "Smartypilot.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "smartypilot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hub\\.smartypilot\\.ai\\/smartypilot-(chatbot-)?lib\\/"),
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
		id: "sniperfast",
		name: "SniperFast",
		website: "https://www.sniperfast.com",
		description: "SniperFast is instant search system for ecommerce sites.",
		icon: "SniperFast.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "sniperfast:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sniperfast\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sniperfast:jsGlobal:1",
				kind: "jsGlobal",
				property: "sniperEnableSearch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sniperfast:jsGlobal:2",
				kind: "jsGlobal",
				property: "sniper_search_key",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sniperfast:jsGlobal:3",
				kind: "jsGlobal",
				property: "sniperfast_page_id",
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
		id: "swiftype",
		name: "Swiftype",
		website: "https://swiftype.com",
		description: "Swiftype provides search software for organisations, websites, and computer programs.",
		icon: "Swiftype.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "swiftype:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("swiftype\\.com\\/embed\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swiftype:jsGlobal:1",
				kind: "jsGlobal",
				property: "Swiftype",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "trivago",
		name: "Trivago",
		website: "https://www.trivago.com",
		description: "Trivago is a hotel search and booking engine that allows users to compare accommodation options and prices from various travel websites, helping them find the best deals.",
		icon: "Trivago.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "trivago:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.trivago\\.it"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "typesense",
		name: "Typesense",
		website: "https://typesense.org",
		description: "Typesense is an open-source, typo-tolerant search-engine optimized for speed and relevance.",
		icon: "Typesense.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "typesense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/typesense@([\\d\\.]+)\\/dist\\/typesense\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "typesense:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("typesense-api"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "typesense:dom:2",
				kind: "dom",
				selector: "section[data-version*='typesense']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "typesense:jsGlobal:3",
				kind: "jsGlobal",
				property: "Typesense",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "typesense:jsGlobal:4",
				kind: "jsGlobal",
				property: "typesenseBlogPostCollection",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "typesense:jsGlobal:5",
				kind: "jsGlobal",
				property: "typesenseHost",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "typesense:jsGlobal:6",
				kind: "jsGlobal",
				property: "typesenseSearchKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "typesense:jsGlobal:7",
				kind: "jsGlobal",
				property: "typesenseSettings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "vufind",
		name: "VuFind",
		website: "https://vufind.org",
		description: "VuFind is a library resource portal designed and developed by Villanova University library.",
		icon: "VuFind.png",
		categories: [
			"search",
		],
		rules: [
			{
				id: "vufind:jsGlobal:0",
				kind: "jsGlobal",
				property: "VuFind.defaultSearchBackend",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vufind:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^VuFind\\s([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "vufind:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^vufind\\s([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "wizsoft",
		name: "WizSoft",
		website: "https://www.wizsoft.com",
		description: "WizSoft is a search engine designed for embedding in ecommerce websites and other platforms where data are stored in records.",
		categories: [
			"search",
		],
		rules: [
			{
				id: "wizsoft:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wizsoft\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "wizzy",
		name: "Wizzy",
		website: "https://wizzy.ai",
		description: "Wizzy is a tool that simplifies ecommerce site search, enabling users to find relevant products, pages, and information.",
		icon: "Wizzy.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "wizzy:jsGlobal:0",
				kind: "jsGlobal",
				property: "WizzyFrontend",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wizzy:jsGlobal:1",
				kind: "jsGlobal",
				property: "foundWizzyConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wizzy:jsGlobal:2",
				kind: "jsGlobal",
				property: "wizzyConfig.analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wizzy:jsGlobal:3",
				kind: "jsGlobal",
				property: "wizzyScriptLoaded",
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
		id: "yext",
		name: "Yext",
		website: "https://www.yext.com",
		description: "Yext is a technology company that provides a cloud-based platform for managing digital knowledge and online reputation.",
		icon: "Yext.svg",
		categories: [
			"search",
			"widgets-misc",
		],
		rules: [
			{
				id: "yext:dom:0",
				kind: "dom",
				selector: "form.yxt-SearchBar-form",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "yext:jsGlobal:1",
				kind: "jsGlobal",
				property: "ANSWERS._analyticsReporterService._baseUrl",
				valuePattern: new RegExp("\\.yext-pixel\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yext:jsGlobal:2",
				kind: "jsGlobal",
				property: "Yext.BaseUrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yext:jsGlobal:3",
				kind: "jsGlobal",
				property: "YextAnalyticsObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yext:jsGlobal:4",
				kind: "jsGlobal",
				property: "yext.analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yext:jsGlobal:5",
				kind: "jsGlobal",
				property: "yextAnalyticsEnabled",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yext:jsGlobal:6",
				kind: "jsGlobal",
				property: "yext_analytics",
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
		id: "zevi",
		name: "Zevi",
		website: "https://www.zevi.ai",
		description: "Zevi is an AI-powered site search and discovery platform designed to enhance product discovery.",
		icon: "Zevi.svg",
		categories: [
			"search",
		],
		rules: [
			{
				id: "zevi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zevi\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zevi:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^zevi\\-_zldt$", "i"),
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
] as const satisfies readonly TechnologyDefinition[];
