import type { TechnologyDefinition } from '../types';

export const searchTechnologyDefinitions = [
	{
		id: "addsearch",
		name: "Addsearch",
		website: "https://www.addsearch.com/",
		description: "Addsearch is a site search solution for small and large websites.",
		icon: "Addsearch.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "addsearch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//addsearch\\.com/js/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "addsearch:pageGlobal:1",
				kind: "pageGlobal",
				property: "AddSearchClient",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "addsearch:pageGlobal:2",
				kind: "pageGlobal",
				property: "AddSearchUI",
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
		id: "algolia",
		name: "Algolia",
		website: "https://www.algolia.com",
		description: "Algolia offers a hosted web search product delivering real-time results.",
		icon: "Algolia.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "algolia:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("algoliasearch"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "algolia:pageGlobal:1",
				kind: "pageGlobal",
				property: "ALGOLIA_INSIGHTS_SRC",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:pageGlobal:2",
				kind: "pageGlobal",
				property: "AlgoliaSearch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:pageGlobal:3",
				kind: "pageGlobal",
				property: "__GLOBAL__.algolia",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:pageGlobal:4",
				kind: "pageGlobal",
				property: "__NEXT_DATA__.props.pageProps.appSettings.ALGOLIA_APP_ID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:pageGlobal:5",
				kind: "pageGlobal",
				property: "__algolia",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:pageGlobal:6",
				kind: "pageGlobal",
				property: "__algolia.algoliasearch.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:pageGlobal:7",
				kind: "pageGlobal",
				property: "_didomi_vendors_consent",
				valuePattern: new RegExp("\\balgolia\\b"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:pageGlobal:8",
				kind: "pageGlobal",
				property: "algoliasearch.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:pageGlobal:9",
				kind: "pageGlobal",
				property: "didomiState.didomiVendorsConsent",
				valuePattern: new RegExp("\\balgolia\\b"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "algolia:cookie:10",
				kind: "cookie",
				key: "_ALGOLIA",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "algolia:cookie:11",
				kind: "cookie",
				key: "didomiVendorsConsent",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "algolia:responseHeader:12",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.algolia"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "apisearch",
		name: "Apisearch",
		website: "https://apisearch.io",
		description: "Apisearch is a real-time search platform for ecommerce.",
		icon: "Apisearch.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "apisearch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.apisearch\\.cloud"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "athena-search",
		name: "Athena Search",
		website: "https://www.athenasearch.io",
		description: "Athena Search is a customizable autocomplete, feature-rich dashboard, smart predictions, real-time reports search engine developed from scratch by Syncit Group’s.",
		icon: "Athena Search.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "athena-search:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content/plugins/athena-search"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "athena-search:dom:1",
				kind: "dom",
				selector: "link[href*='athena/autocomplete/css/autocomplete.css']",
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
		id: "athos-commerce",
		name: "Athos Commerce",
		website: "https://athoscommerce.com/",
		description: "Athos Commerce is a site search and merchandising platform designed to help ecommerce.",
		icon: "Athos Commerce.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "athos-commerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.searchspring\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "athos-commerce:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.klevu\\.\\w+/klevu-js-v([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "athos-commerce:pageGlobal:2",
				kind: "pageGlobal",
				property: "SearchSpring",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "athos-commerce:pageGlobal:3",
				kind: "pageGlobal",
				property: "SearchSpringConf",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "athos-commerce:pageGlobal:4",
				kind: "pageGlobal",
				property: "SearchSpringInit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "athos-commerce:pageGlobal:5",
				kind: "pageGlobal",
				property: "klevu.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "athos-commerce:pageGlobal:6",
				kind: "pageGlobal",
				property: "klevu_apiKey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "athos-commerce:pageGlobal:7",
				kind: "pageGlobal",
				property: "klevu_layout",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "athos-commerce:pageGlobal:8",
				kind: "pageGlobal",
				property: "klevu_sessionId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "athos-commerce:pageGlobal:9",
				kind: "pageGlobal",
				property: "sendKlevuAnalytics",
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
		id: "attraqt",
		name: "Attraqt",
		website: "https://www.attraqt.com/",
		description: "Attraqt provides AI-driven search, merchandising and personalisation solutions.",
		icon: "Attraqt.svg",
		categories: [
			"search",
			"marketing-automation"
		],
		rules: [
			{
				id: "attraqt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.attraqt\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "attraqt:pageGlobal:1",
				kind: "pageGlobal",
				property: "_attraqt",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "awesomplete",
		name: "Awesomplete",
		website: "https://leaverou.github.io/awesomplete/",
		description: "Awesomplete is a tool in the Javascript UI Libraries category of a tech stack.",
		categories: [
			"search"
		],
		rules: [
			{
				id: "awesomplete:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+href=\"[^>]*awesomplete(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "awesomplete:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/awesomplete\\.js(?:$|\\?)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "awesomplete:pageGlobal:2",
				kind: "pageGlobal",
				property: "Awesomplete",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "awesomplete:pageGlobal:3",
				kind: "pageGlobal",
				property: "awesomplete",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "baidu-search-box",
		name: "Baidu Search Box",
		website: "https://www.baidu.com/search/sug/sugcode.html",
		description: "Baidu Search Box is a feature integrated within web pages enabling users to conduct searches directly on the site.",
		icon: "BaiduSearchBox.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "baidu-search-box:dom:0",
				kind: "dom",
				selector: "input[value='baidu'][name='tn']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bloomreach-discovery",
		name: "Bloomreach Discovery",
		website: "https://www.bloomreach.com/en/products/discovery",
		description: "Bloomreach Discovery is a powerful combination of AI-powered site search, SEO, recommendations, and product merchandising.",
		icon: "Bloomreach.svg",
		categories: [
			"search",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "bloomreach-discovery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brsrvr\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bloomreach-discovery:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brcdn\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bloomreach-discovery:pageGlobal:2",
				kind: "pageGlobal",
				property: "BrTrk.scriptVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bloomreach-discovery:pageGlobal:3",
				kind: "pageGlobal",
				property: "br_data.acct_id",
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
		id: "boost-commerce",
		name: "Boost Commerce",
		website: "https://boostcommerce.net",
		description: "Boost Commerce provides beautiful and advanced product filter and smart site search for Shopify stores to boost sales.",
		icon: "Boost Commerce.svg",
		categories: [
			"search",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "boost-commerce:pageGlobal:0",
				kind: "pageGlobal",
				property: "bcSfFilterConfig.api.filterUrl",
				valuePattern: new RegExp("services\\.mybcapps\\.com/"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "boost-commerce:pageGlobal:1",
				kind: "pageGlobal",
				property: "boostPFSAppConfig.api.filterUrl",
				valuePattern: new RegExp("services\\.mybcapps\\.com/"),
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
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "cludo",
		name: "Cludo",
		website: "https://www.cludo.com",
		description: "Cludo is a cloud-based search solution.",
		icon: "Cludo.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "cludo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("customer\\.cludo\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cludo:pageGlobal:1",
				kind: "pageGlobal",
				property: "Cludo.getPublicSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cludo:pageGlobal:2",
				kind: "pageGlobal",
				property: "CludoSearch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cludo:pageGlobal:3",
				kind: "pageGlobal",
				property: "CludoSearchInstances",
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
		id: "constructor-io",
		name: "Constructor.io",
		website: "https://constructor.io/",
		description: "Constructor.io is a site search and merchandising platform designed to help ecommerce.",
		icon: "ConstructorIO.png",
		categories: [
			"search"
		],
		rules: [
			{
				id: "constructor-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cnstrc\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "constructor-io:pageGlobal:1",
				kind: "pageGlobal",
				property: "ConstructorioClient",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "constructor-io:pageGlobal:2",
				kind: "pageGlobal",
				property: "constructorio",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "convermax",
		name: "Convermax",
		website: "https://convermax.com",
		description: "Convermax is a search solution that enhances the search experience for ecommerce website visitors by providing more accurate and relevant results.",
		icon: "Convermax.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "convermax:pageGlobal:0",
				kind: "pageGlobal",
				property: "Convermax.addProductsHistory",
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
		id: "coveo",
		name: "Coveo",
		website: "https://www.coveo.com",
		description: "Coveo is an enterprise search and relevance platform that uses AI to enhance search capabilities and deliver personalized content across digital touchpoints.",
		icon: "Coveo.svg",
		categories: [
			"search",
			"marketing-automation"
		],
		rules: [
			{
				id: "coveo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.(?:cloud\\.coveo|goqubit)\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "coveo:pageGlobal:1",
				kind: "pageGlobal",
				property: "Coveo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "coveo:pageGlobal:2",
				kind: "pageGlobal",
				property: "__qubit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "coveo:pageGlobal:3",
				kind: "pageGlobal",
				property: "onQubitReady",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "dalue",
		name: "Dalue",
		website: "https://dalue.io/dalue",
		description: "Dalue is a cloud-based search engine developed in South Korea that enables information retrieval and indexing across online data sources.",
		icon: "Dalue.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "dalue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.dalue\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dalue:pageGlobal:1",
				kind: "pageGlobal",
				property: "DalueSearch.Consts",
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
		id: "doofinder",
		name: "Doofinder",
		website: "https://www.doofinder.com",
		description: "Doofinder is a search site solution that enables users to include advanced and smart search engine capabilities in their ecommerce website.",
		icon: "Doofinder.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "doofinder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.doofinder\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "doofinder:pageGlobal:1",
				kind: "pageGlobal",
				property: "doofinder.classic.version",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
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
		id: "elasticsearch",
		name: "Elasticsearch",
		website: "https://www.elastic.co",
		description: "Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents.",
		icon: "Elasticsearch.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "elasticsearch:dom:0",
				kind: "dom",
				selector: "div#topsearchelastic_widget",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			],
			cpe: "cpe:2.3:a:elastic:elasticsearch:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "elasticsuite",
		name: "ElasticSuite",
		website: "https://elasticsuite.io",
		description: "ElasticSuite is a merchandising suite for Magento and OroCommerce.",
		icon: "ElasticSuite.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "elasticsuite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/Smile_ElasticsuiteTracker/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "elasticsuite:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("(?:\\.elasticsuite\\.io\\/|\\/elasticsuite-tracker\\/)"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "elasticsuite:pageGlobal:2",
				kind: "pageGlobal",
				property: "smileTracker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "elasticsuite:cookie:3",
				kind: "cookie",
				key: "STUID",
				confidence: 50,
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "elasticsuite:cookie:4",
				kind: "cookie",
				key: "STVID",
				confidence: 50,
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"php",
			"elasticsearch"
		],
		requires: [
			"orocommerce",
			"magento"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "expertrec",
		name: "ExpertRec",
		website: "https://www.expertrec.com/",
		description: "ExpertRec is a collaborative Web search engine, which allows users share search histories through a web browser.",
		icon: "ExpertRec.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "expertrec:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("expertrec\\.com/api/js/ci_common\\.js\\?id=.*"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "expertrec:pageGlobal:1",
				kind: "pageGlobal",
				property: "_er_config",
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
		id: "fact-finder",
		name: "Fact Finder",
		website: "https://fact-finder.com",
		description: "Fact Finder is a platform which, combines search, navigation, and merchandising solutions to streamline online search and power sales.",
		icon: "FactFinder.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "fact-finder:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Factfinder"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "fact-finder:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("Suggest\\.ff"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fact-finder:url:2",
				kind: "url",
				pattern: new RegExp("(?:/ViewParametricSearch|ffsuggest\\.[a-z]htm)"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "fact-finder:pageGlobal:3",
				kind: "pageGlobal",
				property: "FactFinderInit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fact-finder:pageGlobal:4",
				kind: "pageGlobal",
				property: "factfinder",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fact-finder:pageGlobal:5",
				kind: "pageGlobal",
				property: "factfinder.version",
				valuePattern: new RegExp("^([\\d\\.])$"),
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
		id: "fast-esp",
		name: "FAST ESP",
		website: "https://microsoft.com/enterprisesearch",
		description: "FAST ESP is a service-oriented architecture development platform which is geared towards production searchable indexes. It provided a flexible framework for creating ETL applications for efficient indexing of searchable content.",
		icon: "FAST ESP.png",
		categories: [
			"search"
		],
		rules: [
			{
				id: "fast-esp:html:0",
				kind: "html",
				pattern: new RegExp("<form[^>]+id=\"fastsearch\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "fast-esp:dom:1",
				kind: "dom",
				selector: "form[id^='fastsearch']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "fast-search-for-sharepoint",
		name: "FAST Search for SharePoint",
		website: "https://sharepoint.microsoft.com/en-us/product/capabilities/search/Pages/Fast-Search.aspx",
		description: "FAST Search for SharePoint is the search engine for Microsoft's SharePoint collaboration platform. Its purpose is helping SharePoint users locate and retrieve stored enterprise content.",
		icon: "FAST Search for SharePoint.png",
		categories: [
			"search"
		],
		rules: [
			{
				id: "fast-search-for-sharepoint:html:0",
				kind: "html",
				pattern: new RegExp("<input[^>]+ name=\"ParametricSearch"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "fast-search-for-sharepoint:url:1",
				kind: "url",
				pattern: new RegExp("Pages/SearchResults\\.aspx\\?k="),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "fast-search-for-sharepoint:dom:2",
				kind: "dom",
				selector: "input[name*='ParametricSearch']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"microsoft-sharepoint",
			"microsoft-asp-net"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "fibosearch",
		name: "FiboSearch",
		website: "https://fibosearch.com",
		description: "FiboSearch is a WooCommerce product search plugin, formerly known as AJAX Search.",
		icon: "FiboSearch.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "fibosearch:pageGlobal:0",
				kind: "pageGlobal",
				property: "dgwt_wcas.ajax_search_endpoint",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"woocommerce"
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
		id: "findbar",
		name: "Findbar",
		website: "https://findbar.io",
		description: "Findbar specializes in advanced on-site search technology, enhancing user engagement and improving the overall user experience on websites and applications.",
		icon: "Findbar.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "findbar:pageGlobal:0",
				kind: "pageGlobal",
				property: "Findbar",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "findbar:pageGlobal:1",
				kind: "pageGlobal",
				property: "findbarScriptLoaded",
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
		id: "findberry",
		name: "Findberry",
		website: "https://www.findberry.com",
		description: "Findberry is an internal site search service designed for web developers and site owners looking to integrate a professional, ad-free search engine into their websites.",
		icon: "Findberry.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "findberry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.findberry\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "findberry:pageGlobal:1",
				kind: "pageGlobal",
				property: "jQuery_Findberry",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"jquery"
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
		id: "findify",
		name: "Findify",
		website: "https://www.findify.io",
		description: "Findify is an intelligent ecommerce search, navigation and personalisation solution.",
		icon: "Findify.svg",
		categories: [
			"search",
			"marketing-automation"
		],
		rules: [
			{
				id: "findify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("@findify/bundle@([\\d.]+)/dist/.+\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "findify:pageGlobal:1",
				kind: "pageGlobal",
				property: "FindifyAnalytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "findify:pageGlobal:2",
				kind: "pageGlobal",
				property: "findify",
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
		id: "goodsearch",
		name: "Goodsearch",
		website: "https://www.goodsearch.com",
		description: "Goodsearch is a search engine that donates 50 percent of its sponsored search revenue to charities and schools designated by users.",
		icon: "Goodsearch.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "goodsearch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.goodsearch\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "groupby",
		name: "GroupBy",
		website: "https://groupbyinc.com/",
		description: "GroupBy is a search enging for eCommerce sites.",
		icon: "Groupby.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "groupby:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.groupbycloud\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "hawksearch",
		name: "HawkSearch",
		website: "https://www.hawksearch.com",
		description: "HawkSearch is a responsive ecommerce site search solution designed to enhance product discovery and improve search functionality.",
		icon: "HawkSearch.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "hawksearch:pageGlobal:0",
				kind: "pageGlobal",
				property: "HawkCompare.addImage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hawksearch:pageGlobal:1",
				kind: "pageGlobal",
				property: "HawkSearch.BaseUrl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hawksearch:pageGlobal:2",
				kind: "pageGlobal",
				property: "hawkIntervalSearch",
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
		id: "kapa-ai",
		name: "Kapa.ai",
		website: "https://www.kapa.ai",
		description: "Kapa.ai is a platform that converts documents into an LLM-powered chatbot for information retrieval and question answering.",
		icon: "Kapa.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "kapa-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.kapa\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kapa-ai:pageGlobal:1",
				kind: "pageGlobal",
				property: "Kapa",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kapa-ai:pageGlobal:2",
				kind: "pageGlobal",
				property: "KapaWidget.init",
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
		id: "kibana",
		name: "Kibana",
		website: "https://www.elastic.co/products/kibana",
		description: "Kibana is an open-source data visualisation dashboard for Elasticsearch. It provides visualisation capabilities on top of the content indexed on an Elasticsearch cluster. Users can create bar, line and scatter plots, or pie charts and maps on top of large volumes of data.",
		icon: "kibana.svg",
		categories: [
			"search",
			"graphics-visualization"
		],
		rules: [
			{
				id: "kibana:html:0",
				kind: "html",
				pattern: new RegExp("<title>Kibana</title>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "kibana:url:1",
				kind: "url",
				pattern: new RegExp("kibana#/dashboard/"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "kibana:responseHeader:2",
				kind: "responseHeader",
				key: "kbn-name",
				valuePattern: new RegExp("kibana"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "kibana:responseHeader:3",
				kind: "responseHeader",
				key: "kbn-version",
				valuePattern: new RegExp("^([\\d.]+)$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"node-js",
			"elasticsearch"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:elasticsearch:kibana:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "klevu",
		name: "Klevu",
		website: "https://www.klevu.com",
		description: "Klevu is a highly advanced AI-Powered search solution for ecommerce platforms.",
		icon: "Klevu.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "klevu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.klevu\\.\\w+/klevu-js-v([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "klevu:pageGlobal:1",
				kind: "pageGlobal",
				property: "klevu.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "klevu:pageGlobal:2",
				kind: "pageGlobal",
				property: "klevu_apiKey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "klevu:pageGlobal:3",
				kind: "pageGlobal",
				property: "klevu_layout",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "klevu:pageGlobal:4",
				kind: "pageGlobal",
				property: "klevu_sessionId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "klevu:pageGlobal:5",
				kind: "pageGlobal",
				property: "sendKlevuAnalytics",
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
		id: "layers",
		name: "Layers",
		website: "https://www.uselayers.com/",
		description: "Layers is a site search and merchandising platform designed to help ecommerce.",
		icon: "Layers.png",
		categories: [
			"search"
		],
		rules: [
			{
				id: "layers:pageGlobal:0",
				kind: "pageGlobal",
				property: "Layers",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"shopify"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "loop54",
		name: "Loop54",
		website: "https://www.loop54.com",
		description: "Loop54 is a ecommerce search and navigation SaaS product.",
		icon: "Loop54.svg",
		categories: [
			"search",
			"marketing-automation"
		],
		rules: [
			{
				id: "loop54:pageGlobal:0",
				kind: "pageGlobal",
				property: "Loop54.config.libVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "loop54:cookie:1",
				kind: "cookie",
				key: "Loop54User",
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
		id: "mageworx-search-autocomplete",
		name: "MageWorx Search Autocomplete",
		website: "https://github.com/mageworx/search-suite-autocomplete",
		description: "MageWorx Search Autocomplete extension offers an AJAX-based popup window that displays and updates relevant search results while a customer forms his or her query.",
		icon: "MageWorx.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "mageworx-search-autocomplete:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("MageWorx_SearchSuiteAutocomplete"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mageworx-search-autocomplete:dom:1",
				kind: "dom",
				selector: "link[href*='MageWorx_SearchSuiteAutocomplete']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"magento"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mars-flag",
		name: "Mars Flag",
		website: "https://www.marsflag.com/en",
		description: "Mars Flag is a search platform provider originating from Japan, known for its leading domestic market share in website search services.",
		icon: "MarsFlag.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "mars-flag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.marsflag\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mars-flag:cookie:1",
				kind: "cookie",
				key: "marsflag-_zldp",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "meilisearch",
		name: "Meilisearch",
		website: "https://www.meilisearch.com",
		description: "Meilisearch is a search engine created by Meili, a software development company based in France.",
		icon: "Meilisearch.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "meilisearch:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.meilisearch\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "meilisearch:dom:1",
				kind: "dom",
				selector: "span.meilisearch-autocomplete",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "meilisearch:pageGlobal:2",
				kind: "pageGlobal",
				property: "MeiliSearch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "meilisearch:pageGlobal:3",
				kind: "pageGlobal",
				property: "MeiliSearchApiError",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "meilisearch:pageGlobal:4",
				kind: "pageGlobal",
				property: "MeiliSearchTimeOutError",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "meilisearch:pageGlobal:5",
				kind: "pageGlobal",
				property: "ac_apsulis_meilisearch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "meilisearch:pageGlobal:6",
				kind: "pageGlobal",
				property: "instantMeiliSearch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "meilisearch:cookie:7",
				kind: "cookie",
				key: "saas_demo_meilisearch_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "miso",
		name: "Miso",
		website: "https://miso.ai",
		description: "Miso is a real-time personalisation APIs for search, recommendation, and marketing.",
		icon: "Miso.svg",
		categories: [
			"search",
			"marketing-automation"
		],
		rules: [
			{
				id: "miso:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.askmiso\\.com/"),
				description: "Observed request URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "nova-busca",
		name: "Nova Busca",
		website: "https://novabusca.com.br",
		description: "Nova Busca is an artificial intelligence tool that enhances search functionality on ecommerce websites by improving result relevance and user experience.",
		icon: "NovaBusca.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "nova-busca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.novabusca\\.com\\.br"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "orama",
		name: "Orama",
		website: "https://oramasearch.com",
		description: "Orama is a platform offering full-text and vector search capabilities across 300 global locations.",
		icon: "OramaSearch.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "orama:dom:0",
				kind: "dom",
				selector: "li > a[href*='/@orama/orama'], link[href*='orama-search']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "pickzen",
		name: "Pickzen",
		website: "https://www.pickzen.com",
		description: "Pickzen is an AI-powered tool designed for conversational search.",
		icon: "Pickzen.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "pickzen:pageGlobal:0",
				kind: "pageGlobal",
				property: "pickzen.server",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pickzen:pageGlobal:1",
				kind: "pageGlobal",
				property: "pickzenLoaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pickzen:pageGlobal:2",
				kind: "pageGlobal",
				property: "pickzenonActivation",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "queryly",
		name: "Queryly",
		website: "https://queryly.com/",
		description: "Queryly is a cloud-based API providing site search and content recommendation functionalities, utilizing advanced algorithms to deliver quick, relevant search results and personalized content suggestions.",
		icon: "Queryly.svg",
		categories: [
			"search",
			"api-pattern"
		],
		rules: [
			{
				id: "queryly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.queryly\\.com/js/queryly\\.v([\\d\\.]+)\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "queryly:pageGlobal:1",
				kind: "pageGlobal",
				property: "queryly",
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
		id: "search-magic",
		name: "Search Magic",
		website: "https://yourstorewizards.com/app-store/search-magic",
		description: "Search Magic is an ecommerce website search solution designed to improve product discovery and enhance user experience through advanced search capabilities.",
		icon: "SearchMagic.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "search-magic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.searchmagic\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "search-magic:pageGlobal:1",
				kind: "pageGlobal",
				property: "yswSearchMagicCssUrl",
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
		id: "searchanise",
		name: "Searchanise",
		website: "https://start.searchanise.com",
		description: "Searchanise is a complete search and filter solution for ecommerce.",
		icon: "Searchanise.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "searchanise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("searchanise(?:-.+\\.kxcdn)?\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "searchanise:pageGlobal:1",
				kind: "pageGlobal",
				property: "Searchanise",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "searchine",
		name: "Searchine",
		website: "https://www.searchine.net",
		description: "Searchine is a site search system that provides insights into visitor search behaviour and offers suggestions for website improvements.",
		icon: "Searchine.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "searchine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.searchine\\.net/"),
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
		id: "searchiq",
		name: "SearchiQ",
		website: "https://www.searchiq.co",
		description: "SearchiQ is a cloud-based search engine solution that can be integrated into a website.",
		icon: "SearchiQ.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "searchiq:pageGlobal:0",
				kind: "pageGlobal",
				property: "siqConfig.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "searchiq:pageGlobal:1",
				kind: "pageGlobal",
				property: "siq_version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
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
		id: "searchspring",
		name: "Searchspring",
		website: "https://searchspring.com",
		description: "Searchspring is a site search and merchandising platform designed to help ecommerce.",
		icon: "Searchspring.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "searchspring:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.searchspring\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "searchspring:pageGlobal:1",
				kind: "pageGlobal",
				property: "SearchSpring",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "searchspring:pageGlobal:2",
				kind: "pageGlobal",
				property: "SearchSpringConf",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "searchspring:pageGlobal:3",
				kind: "pageGlobal",
				property: "SearchSpringInit",
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
		id: "searchtap",
		name: "Searchtap",
		website: "https://searchtap.io",
		description: "Searchtap is a hosted search-as-a-service platform that enables websites to integrate fast and scalable search functionality.",
		icon: "Searchtap.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "searchtap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.searchtap\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "searchtap:dom:1",
				kind: "dom",
				selector: "div[id*='shopify-section-searchtap']",
				description: "DOM selector matches a known technology marker."
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
		id: "segmentify",
		name: "Segmentify",
		website: "https://segmentify.com",
		description: "Segmentify is an ecommerce personalisation platform.",
		icon: "Segmentify.svg",
		categories: [
			"search",
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "segmentify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.segmentify\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "segmentify:pageGlobal:1",
				kind: "pageGlobal",
				property: "SegmentifyIntegration",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "segmentify:pageGlobal:2",
				kind: "pageGlobal",
				property: "SegmentifyTrackingObject",
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
		id: "seo-manager",
		name: "SEO Manager",
		website: "https://venntov.com/pages/seo-manager",
		description: "SEO Manager is a platform that optimizes Shopify websites to enhance search engine visibility and improve organic traffic.",
		icon: "SEOManager.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "seo-manager:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.seomanager\\.com/"),
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
		id: "site-search-360",
		name: "Site Search 360",
		website: "https://www.sitesearch360.com/",
		description: "Site Search 360 is a site search as a service solution.",
		icon: "Site Search 360.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "site-search-360:pageGlobal:0",
				kind: "pageGlobal",
				property: "ss360Config",
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
		id: "sniperfast",
		name: "SniperFast",
		website: "https://www.sniperfast.com",
		description: "SniperFast is instant search system for ecommerce sites.",
		icon: "SniperFast.png",
		categories: [
			"search"
		],
		rules: [
			{
				id: "sniperfast:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sniperfast\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sniperfast:pageGlobal:1",
				kind: "pageGlobal",
				property: "sniperEnableSearch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sniperfast:pageGlobal:2",
				kind: "pageGlobal",
				property: "sniper_search_key",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sniperfast:pageGlobal:3",
				kind: "pageGlobal",
				property: "sniperfast_page_id",
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
		id: "swiftype",
		name: "Swiftype",
		website: "https://swiftype.com",
		description: "Swiftype provides search software for organisations, websites, and computer programs.",
		icon: "Swiftype.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "swiftype:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("swiftype\\.com/embed\\.js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "swiftype:pageGlobal:1",
				kind: "pageGlobal",
				property: "Swiftype",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "trivago",
		name: "Trivago",
		website: "https://www.trivago.com",
		description: "Trivago is a hotel search and booking engine that allows users to compare accommodation options and prices from various travel websites, helping them find the best deals.",
		icon: "Trivago.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "trivago:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.trivago\\.it"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "typesense",
		name: "Typesense",
		website: "https://typesense.org",
		description: "Typesense is an open-source, typo-tolerant search-engine optimized for speed and relevance.",
		icon: "Typesense.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "typesense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/typesense@([\\d\\.]+)/dist/typesense\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "typesense:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("typesense-api"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "typesense:dom:2",
				kind: "dom",
				selector: "section[data-version*='typesense']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "typesense:pageGlobal:3",
				kind: "pageGlobal",
				property: "Typesense",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "typesense:pageGlobal:4",
				kind: "pageGlobal",
				property: "typesenseBlogPostCollection",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "typesense:pageGlobal:5",
				kind: "pageGlobal",
				property: "typesenseHost",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "typesense:pageGlobal:6",
				kind: "pageGlobal",
				property: "typesenseSearchKey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "typesense:pageGlobal:7",
				kind: "pageGlobal",
				property: "typesenseSettings",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "vufind",
		name: "VuFind",
		website: "https://vufind.org",
		description: "VuFind is a library resource portal designed and developed by Villanova University library.",
		icon: "VuFind.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "vufind:pageGlobal:0",
				kind: "pageGlobal",
				property: "VuFind.defaultSearchBackend",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vufind:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^VuFind\\s([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "wizsoft",
		name: "WizSoft",
		website: "https://www.wizsoft.com",
		description: "WizSoft is a search engine designed for embedding in ecommerce websites and other platforms where data are stored in records.",
		categories: [
			"search"
		],
		rules: [
			{
				id: "wizsoft:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wizsoft\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "wizzy",
		name: "Wizzy",
		website: "https://wizzy.ai",
		description: "Wizzy is a tool that simplifies ecommerce site search, enabling users to find relevant products, pages, and information.",
		icon: "Wizzy.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "wizzy:pageGlobal:0",
				kind: "pageGlobal",
				property: "WizzyFrontend",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wizzy:pageGlobal:1",
				kind: "pageGlobal",
				property: "foundWizzyConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wizzy:pageGlobal:2",
				kind: "pageGlobal",
				property: "wizzyConfig.analytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wizzy:pageGlobal:3",
				kind: "pageGlobal",
				property: "wizzyScriptLoaded",
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
		id: "yext",
		name: "Yext",
		website: "https://www.yext.com",
		description: "Yext is a technology company that provides a cloud-based platform for managing digital knowledge and online reputation.",
		icon: "Yext.svg",
		categories: [
			"search",
			"widgets-misc"
		],
		rules: [
			{
				id: "yext:dom:0",
				kind: "dom",
				selector: "form.yxt-SearchBar-form",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "yext:pageGlobal:1",
				kind: "pageGlobal",
				property: "ANSWERS._analyticsReporterService._baseUrl",
				valuePattern: new RegExp("\\.yext-pixel\\.com"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yext:pageGlobal:2",
				kind: "pageGlobal",
				property: "Yext.BaseUrl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yext:pageGlobal:3",
				kind: "pageGlobal",
				property: "YextAnalyticsObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yext:pageGlobal:4",
				kind: "pageGlobal",
				property: "yext.analytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yext:pageGlobal:5",
				kind: "pageGlobal",
				property: "yextAnalyticsEnabled",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yext:pageGlobal:6",
				kind: "pageGlobal",
				property: "yext_analytics",
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
		id: "zevi",
		name: "Zevi",
		website: "https://www.zevi.ai",
		description: "Zevi is an AI-powered site search and discovery platform designed to enhance product discovery.",
		icon: "Zevi.svg",
		categories: [
			"search"
		],
		rules: [
			{
				id: "zevi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zevi\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zevi:cookie:1",
				kind: "cookie",
				key: "zevi-_zldt",
				description: "Cookie name matches a known technology marker."
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
	}
] as const satisfies readonly TechnologyDefinition[];
