import type { TechnologyDefinition } from '../types';

export const mapsLocationTechnologyDefinitions = [
	{
		id: "amap",
		name: "Amap",
		website: "https://amap.com",
		description: "Amap is a digital cartography platform providing detailed geographic data, navigation, and location-based services across Asian regions.",
		icon: "Amap.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "amap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("webapi\\.amap\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amap:jsGlobal:1",
				kind: "jsGlobal",
				property: "AMap.ArrayBounds",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "apple-mapkit-js",
		name: "Apple MapKit JS",
		website: "https://developer.apple.com/maps/web/",
		description: "Apple MapKit JS lets you embed interactive maps directly into your websites across platforms and operating systems, including iOS and Android.",
		icon: "Apple.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "apple-mapkit-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/cdn\\.apple-mapkit\\.com\\/mk\\/([\\d\\.\\w]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "apple-mapkit-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "mapkit._tileProvider",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apple-mapkit-js:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.apple-mapkit\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "arcgis-api-for-javascript",
		name: "ArcGIS API for JavaScript",
		website: "https://developers.arcgis.com/javascript/",
		description: "ArcGIS API for JavaScript is a tool used to embed maps and tasks in web applications.",
		icon: "arcgis_icon.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "arcgis-api-for-javascript:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.arcgis\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "arcgis-api-for-javascript:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("basemaps\\.arcgis\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "baidu-maps",
		name: "Baidu Maps",
		website: "https://map.baidu.com",
		description: "Baidu Maps is a desktop and mobile web mapping service application and technology provided by Baidu, offering satellite imagery, street maps, street view and indoor view perspectives, as well as functions such as a route planner for traveling by foot, car, or with public transportation.",
		icon: "Baidu Maps.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "baidu-maps:jsGlobal:0",
				kind: "jsGlobal",
				property: "BMAP_API_VERSION",
				valuePattern: new RegExp("(.+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "baidu-maps:jsGlobal:1",
				kind: "jsGlobal",
				property: "bmap.version",
				valuePattern: new RegExp("(.+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "bigdatacloud-ip-geolocation",
		name: "BigDataCloud IP Geolocation",
		website: "https://www.bigdatacloud.com/packages/ip-geolocation",
		description: "BigDataCloud IP Geolocation API provides detailed and accurate locality and security metrics of an IP address.",
		icon: "BigDataCloud-IPGeolocation.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "bigdatacloud-ip-geolocation:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bigdatacloud\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bigdatacloud-ip-geolocation:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("api\\.bigdatacloud\\.net"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "bullseye",
		name: "Bullseye",
		website: "https://www.bullseyelocations.com",
		description: "Bullseye is a store locator software designed for location marketers, providing tools to help customers find nearby stores easily.",
		icon: "Bullseye.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "bullseye:jsGlobal:0",
				kind: "jsGlobal",
				property: "bullseyeTracking",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bullseye:jsGlobal:1",
				kind: "jsGlobal",
				property: "bullseyelistener",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bullseye:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.bullseyelocations\\.com", "i"),
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
		id: "carto-analytics",
		name: "CARTO Analytics",
		website: "https://carto.com",
		description: "Carto is a cloud-based spatial analytics platform that enables analysis and development with spatial data at scale.",
		icon: "Carto.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "carto-analytics:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.basemaps\\.cartocdn\\.com"),
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
		id: "clustrmaps-widget",
		name: "ClustrMaps Widget",
		website: "https://clustrmaps.com/",
		description: "ClustrMaps widget is a visitor tracker, designed for general web and blog use.",
		icon: "ClustrMaps.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "clustrmaps-widget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clustrmaps\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clustrmaps-widget:dom:1",
				kind: "dom",
				selector: "img[src*='clustrmaps.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "db-ip",
		name: "db-ip",
		website: "https://db-ip.com/",
		description: "dbip is a geolocation API and database.",
		icon: "db-ip.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "db-ip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.db-ip\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "db-ip:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("api\\.db-ip\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "db-ip:jsGlobal:2",
				kind: "jsGlobal",
				property: "ENV.dbip",
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
		id: "develic-omnium-maps",
		name: "Develic Omnium Maps",
		website: "https://www.develic.com",
		description: "Develic Omnium Maps is a store locator application for Shopify stores designed to help users display and manage physical store locations.",
		icon: "Develic.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "develic-omnium-maps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("maps\\.develic\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "develic-omnium-maps:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("maps\\.develic\\.com"),
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
		id: "eagleview",
		name: "EagleView",
		website: "https://www.eagleview.com",
		description: "EagleView is a provider of GIS mapping, aerial imagery tools, and analytics used to deliver accurate geospatial data.",
		icon: "Eagleview.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "eagleview:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.eagleview\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "geo-targetly",
		name: "Geo Targetly",
		website: "https://geotargetly.com",
		description: "Geo Targetly is a website geo personalisation software.",
		icon: "Geo Targetly.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "geo-targetly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("geotargetly\\.co\\/"),
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
		id: "geoapify",
		name: "Geoapify",
		website: "https://www.geoapify.com",
		description: "Geoapify is a platform that provides APIs and location services for building location-aware applications.",
		icon: "Geoapify.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "geoapify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.geoapify\\.com"),
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
		id: "geobytes",
		name: "Geobytes",
		website: "https://geobytes.com",
		description: "Geobytes is a geolocation service that enables redirection of users and provides statistics on their geographic origin.",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "geobytes:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("gd\\.geobytes\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "google-maps",
		name: "Google Maps",
		website: "https://maps.google.com",
		description: "Google Maps is a web mapping service. It offers satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bicycle and air, or public transportation.",
		icon: "Google Maps.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "google-maps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:maps\\.google\\.com\\/maps\\?file=api(?:&v=([\\d.]+))?|maps\\.google\\.com\\/maps\\/api\\/staticmap)"),
				version: {
					source: "match",
					template: "API v$1",
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-maps:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/maps\\.google(?:apis)?\\.com\\/maps\\/api\\/js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-maps:dom:2",
				kind: "dom",
				selector: "iframe[src*='google.com/maps']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "google-maps:jsGlobal:3",
				kind: "jsGlobal",
				property: "GoogleMap",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-maps:jsGlobal:4",
				kind: "jsGlobal",
				property: "googleMapsConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "here",
		name: "Here",
		website: "https://www.here.com",
		description: "HERE is a PaaS for creating custom maps, visualize location datasets, gather insights and buy and sell location assets.",
		icon: "here.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "here:dom:0",
				kind: "dom",
				selector: "link[href*='//js\\.api\\.here\\.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "here:jsGlobal:1",
				kind: "jsGlobal",
				property: "H.buildInfo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "here:jsGlobal:2",
				kind: "jsGlobal",
				property: "H.geo",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "here:jsGlobal:3",
				kind: "jsGlobal",
				property: "H.util",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "ip-api",
		name: "ip-api",
		website: "https://ip-api.com/",
		icon: "ip-api.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ip-api:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("ip-api\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
			],
		},
	},
	{
		id: "ip2location-io",
		name: "IP2Location.io",
		website: "https://www.ip2location.io",
		description: "IP2Location.io is a web service that provides geolocation data based on IP addresses through its API, allowing developers to integrate accurate physical location information into their applications.",
		icon: "IP2Location.io.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ip2location-io:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^ip2location_redirection_first_visit$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "ipapi",
		name: "ipapi",
		website: "https://ipapi.com",
		description: "ipapi is a real-time geolocation and reverse IP lookup REST API.",
		icon: "ipapi.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipapi:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.ipapi\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
			],
		},
	},
	{
		id: "ipapi-co",
		name: "ipapi.co",
		website: "https://ipapi.co",
		description: "ipapi.co is a web analytics provider with IP address lookup and location API.",
		icon: "ipapi.co.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipapi-co:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("ipapi\\.co\\/"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
			],
		},
	},
	{
		id: "ipbase",
		name: "ipbase",
		website: "https://ipbase.com",
		description: "ipbase offers an API that supports both IPv4 and IPv6 and provides precise location data from IP addresses.",
		icon: "ipbase.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipbase:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.ipbase\\.com"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "ipdata",
		name: "ipdata",
		website: "https://ipdata.co/",
		description: "ipdata is a JSON IP Address Geolocation API that allows users to lookup the location of both IPv4 and IPv6.",
		icon: "ipdata.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipdata:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.ipdata\\.co"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "ipgeolocation",
		name: "ipgeolocation",
		website: "https://ipgeolocation.co/",
		description: "ipgeolocation is an IP Geolocation API and Accurate IP Lookup Database.",
		icon: "ipgeolocation.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipgeolocation:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.ipgeolocation\\.io"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "ipify",
		name: "ipify",
		website: "https://ipify.org",
		description: "ipify is a service which provide public IP address API, IP geolocation API, VPN and Proxy detection API products.",
		icon: "ipify.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ipify\\.org"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ipify:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("(?:api|api64|geo)\\.ipify\\.org"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "ipinfo",
		name: "IPinfo",
		website: "https://ipinfo.io",
		description: "IPinfo is an IP address data provider.",
		icon: "IPinfo.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipinfo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ipinfo\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ipinfo:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("ipinfo\\.io\\/"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "ipinfodb",
		name: "IPInfoDB",
		website: "https://www.ipinfodb.com/",
		description: "IPInfoDB is the API that returns the location of an IP address.",
		icon: "IPInfoDB.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipinfodb:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.ipinfodb\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ipstack",
		name: "ipstack",
		website: "https://ipstack.com",
		description: "ipstack is a real-time IP to geolocation API capable of looking at location data and assessing security threats originating from risky IP addresses.",
		icon: "ipstack.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "ipstack:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.ipstack\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "ipstack:jsGlobal:1",
				kind: "jsGlobal",
				property: "ENV.ipStackAccessToken",
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
		id: "leaflet",
		name: "Leaflet",
		website: "https://leafletjs.com",
		description: "Leaflet is the open-source JavaScript library for mobile-friendly interactive maps.",
		icon: "Leaflet.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "leaflet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("leaflet.{0,32}\\.js(?!.+shopify)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "leaflet:jsGlobal:1",
				kind: "jsGlobal",
				property: "L.DistanceGrid",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "leaflet:jsGlobal:2",
				kind: "jsGlobal",
				property: "L.PosAnimation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "leaflet:jsGlobal:3",
				kind: "jsGlobal",
				property: "L.version",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: {
					source: "match",
					template: "$1\\",
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "leaflet:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("(?:(?:dist\\/)?)?leaflet[\\w\\-\\.]{0,32}\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?(?!.+shopify)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "leaflet:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:dist\\/)?)?leaflet[\\w\\-\\.]{0,32}\\.js(?!.+shopify)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "leaflet:dom:6",
				kind: "dom",
				selector: "link[href*='leaflet.css'], link[href*='leaflet.js'], script[src*='leaflet.js']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "leaflet-platform",
		name: "Leaflet platform",
		website: "https://join.leaflet.co",
		description: "Leaflet is the price testing platform for Shopify.",
		icon: "Leaflet platform.png",
		categories: [
			"maps-location",
			"ecommerce-extensions",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "leaflet-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.leaflet\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "mapbox-gl-js",
		name: "Mapbox GL JS",
		website: "https://github.com/mapbox/mapbox-gl-js",
		description: "Mapbox GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.",
		icon: "Mapbox.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "mapbox-gl-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mapbox-gl\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mapbox-gl-js:dom:1",
				kind: "dom",
				selector: "link[href*='mapbox-gl.css'], div.mapboxgl-map",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mapbox-gl-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "mapboxgl.version",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: {
					source: "match",
					template: "$1\\",
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mapbox-gl-js:dom:3",
				kind: "dom",
				selector: "link[href*='mapbox-gl.css'], div.mapboxgl-map, div.mapboxgl-canvas-container, canvas.mapboxgl-canvas",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "mapbox-js",
		name: "Mapbox.js",
		website: "https://github.com/mapbox/mapbox.js",
		description: "Mapbox.js is a JavaScript library provided by Mapbox for working with interactive maps and geospatial data.",
		icon: "Mapbox.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "mapbox-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.mapbox\\.com\\/mapbox\\.js\\/v([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mapbox-js:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.mapbox\\.com\\/mapbox\\.js\\/v([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "mapbox-js:dom:2",
				kind: "dom",
				selector: "link[href*='api.mapbox.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"leaflet",
		],
	},
	{
		id: "maplibre-gl-js",
		name: "MapLibre GL JS",
		website: "https://github.com/maplibre/maplibre-gl-js",
		description: "MapLibre GL JS is an open-source library for publishing maps on your websites.",
		icon: "MapLibre.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "maplibre-gl-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("maplibre-gl@([\\d\\.]+)\\/dist\\/maplibre-gl\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "maplibre-gl-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "apex.libVersions.maplibre",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "maplibre-gl-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "maplibregl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "maplibre-gl-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "rmap2.maplibreglCompare",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "mapline",
		name: "Mapline",
		website: "https://mapline.com",
		description: "Mapline is a geo-powered analytics platform designed to deliver location-based insights worldwide.",
		icon: "Mapline.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "mapline:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.mapline.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mapline:header:1",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("app\\.mapline\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mapline:header:2",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("app\\.mapline\\.com", "i"),
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
		id: "maploco",
		name: "MapLoco",
		website: "https://maploco.com",
		description: "MapLoco is a tool that displays website visitor locations on an interactive map for analysis and tracking.",
		icon: "MapLoco.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "maploco:dom:0",
				kind: "dom",
				selector: "a[href*='m.maploco.com'] > img[src*='www.maploco.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mapme",
		name: "Mapme",
		website: "https://mapme.com",
		description: "Mapme is an interactive map builder that allows users to create custom maps.",
		icon: "Mapme.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "mapme:dom:0",
				kind: "dom",
				selector: "iframe[src*='viewer.mapme.com/']",
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
		id: "mappedin",
		name: "Mappedin",
		website: "https://www.mappedin.com",
		description: "Mappedin is an all-in-one indoor mapping platform designed for scalability.",
		icon: "Mappedin.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "mappedin:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.mappedin\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mappedin:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.mappedin\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "mapplic",
		name: "Mapplic",
		website: "https://mapplic.com",
		description: "Mapplic is a plugin for creating interactive maps based on simple image (jpg, png) or vector (svg) files.",
		icon: "Mapplic.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "mapplic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/mapplic\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mapplic:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/include\\/mapplic\\/mapplic\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mapplic:dom:2",
				kind: "dom",
				selector: "div.mapplic-layer > div.mapplic-map-image",
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
		id: "maptalks",
		name: "Maptalks",
		website: "https://maptalks.org",
		description: "Maptalks is a light and plugable JavaScript library for integrated 2D/3D maps.",
		icon: "Maptalks.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "maptalks:dom:0",
				kind: "dom",
				selector: "div.maptalks-wrapper",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "maptalks:jsGlobal:1",
				kind: "jsGlobal",
				property: "map._eventMap",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "maptalks:jsGlobal:2",
				kind: "jsGlobal",
				property: "maptalks.GeoJSON",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "maptiler",
		name: "Maptiler",
		website: "https://www.maptiler.com",
		description: "Maptiler is a mapping platform offering visual tools, global data, SDKs, and APIs for enterprise application development.",
		icon: "Maptiler.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "maptiler:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.maptiler\\.com"),
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
		id: "maxmind",
		name: "MaxMind",
		website: "https://www.maxmind.com",
		description: "MaxMind is a provider of geolocation and online fraud detection tools.",
		icon: "MaxMind.png",
		categories: [
			"maps-location",
			"privacy-compliance",
		],
		rules: [
			{
				id: "maxmind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:device|js)\\.maxmind\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "maxmind:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("geoip\\.maxmind\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "maxmind:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("geoip-js\\.com\\/.+\\/v([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "maxmind:requestUrl:3",
				kind: "requestUrl",
				pattern: new RegExp("\\.maxmind\\.com"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "microsoft-azure-maps",
		name: "Microsoft Azure Maps",
		website: "https://azure.microsoft.com/en-us/products/azure-maps/",
		description: "Microsoft Azure Maps is a cloud-based mapping and geospatial platform provided by Microsoft.",
		icon: "Microsoft.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "microsoft-azure-maps:meta:0",
				kind: "meta",
				key: "enabled-features",
				valuePattern: new RegExp("GEOJSON_AZURE_MAPS", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "microsoft-azure-maps:meta:1",
				kind: "meta",
				key: "enabled-features",
				valuePattern: new RegExp("geojson_azure_maps", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"payg",
			],
		},
		implies: [
			"azure",
		],
	},
	{
		id: "naver-maps",
		name: "Naver Maps",
		website: "https://www.ncloud.com/product/applicationService/maps",
		description: "Naver Maps help develop location-based services which provided by Naver.",
		icon: "Naver Maps.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "naver-maps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("openapi\\.map\\.naver\\.com\\/openapi\\/v([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "naver-maps:jsGlobal:1",
				kind: "jsGlobal",
				property: "naver.maps",
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
		id: "neshan",
		name: "Neshan",
		website: "https://neshan.org",
		description: "Neshan is an Iranian route-finding tool that provides users with navigation and mapping services for travel across the country.",
		icon: "Neshan.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "neshan:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.neshan\\.org"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "openlayers",
		name: "OpenLayers",
		website: "https://openlayers.org",
		description: "OpenLayers is an open-source JavaScript library for displaying map data in web browser.",
		icon: "OpenLayers.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "openlayers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("openlayers"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "openlayers:jsGlobal:1",
				kind: "jsGlobal",
				property: "OpenLayers.VERSION_NUMBER",
				valuePattern: new RegExp("([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "openlayers:jsGlobal:2",
				kind: "jsGlobal",
				property: "ol.CanvasMap",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "openlayers:jsGlobal:3",
				kind: "jsGlobal",
				property: "ol.AssertionError",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "openstreetmap",
		name: "OpenStreetMap",
		website: "https://www.openstreetmap.org",
		description: "OpenStreetMap is a free, editable map of the whole world that is being built by volunteers largely from scratch and released with an open-content license.",
		icon: "OpenStreetMap.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "openstreetmap:dom:0",
				kind: "dom",
				selector: "iframe[src*='openstreetmap.org'],iframe[data-lazy-src*='openstreetmap.org']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:openstreetmap:openstreetmap:*:*:*:*:*:wordpress:*:*",
		},
	},
	{
		id: "openweathermap",
		name: "OpenWeatherMap",
		website: "https://openweathermap.org",
		description: "OpenWeatherMap is a web-based platform that provides interactive maps displaying current weather conditions, precipitation, and related meteorological data across various geographic locations.",
		icon: "OpenWeatherMap.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "openweathermap:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.openweathermap\\.org"),
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
		id: "prolo-finder",
		name: "Prolo Finder",
		website: "https://www.prolofinder.com",
		description: "Prolo is a tool that adds a store locator feature to any website, enabling users to find nearby store locations through an interactive map or search interface.",
		icon: "ProloFinder.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "prolo-finder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.prolofinder\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prolo-finder:jsGlobal:1",
				kind: "jsGlobal",
				property: "proloConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prolo-finder:jsGlobal:2",
				kind: "jsGlobal",
				property: "proloFinderState",
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
		id: "radar",
		name: "Radar",
		website: "https://radar.com",
		description: "Radar is an all-in-one platform that integrates geofencing, maps, and geolocation.",
		icon: "Radar.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "radar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.radar\\.com\\/v([\\d.]+)\\/radar\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "radar:jsGlobal:1",
				kind: "jsGlobal",
				property: "IsRadarInitialized",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "radar:jsGlobal:2",
				kind: "jsGlobal",
				property: "Radar.autocomplete",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
			cpe: "cpe:2.3:a:f-secure:radar:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "revolvermaps",
		name: "RevolverMaps",
		website: "https://www.revolvermaps.com",
		description: "RevolverMaps is a collection of real-time visitor statistics widgets for website or blog. Interactive visitor mappings to a globe rendered by the Revolver Engine.",
		icon: "RevolverMaps.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "revolvermaps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.revolvermaps\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "seatics",
		name: "Seatics",
		website: "https://seatics.com",
		description: "Seatics is a platform that provides interactive maps for venues like arenas, stadiums, and convention centers, displaying seating arrangements, concession stands, restrooms, and other key locations.",
		icon: "Seatics.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "seatics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tn-widget\\.seatics\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "stockist",
		name: "Stockist",
		website: "https://stockist.co",
		description: "Stockist is a tool that adds a searchable store locator to a website, enabling visitors to find nearby retail locations through map-based search and filtering.",
		icon: "Stockist.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "stockist:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("stockist\\.co"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "stockist:jsGlobal:1",
				kind: "jsGlobal",
				property: "Stockist.loaded",
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
		id: "storeify-store-locator",
		name: "Storeify Store Locator",
		website: "https://storeify.app",
		description: "Storeify Store Locator is an app for Shopify that enables businesses to add a store locator feature to their online stores.",
		icon: "Storeify.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "storeify-store-locator:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.storeify\\.app"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "storeify-store-locator:jsGlobal:1",
				kind: "jsGlobal",
				property: "storeify_storelocator_form",
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
			"shopify",
		],
	},
	{
		id: "storepoint",
		name: "StorePoint",
		website: "https://storepoint.co",
		description: "StorePoint is a store locator software that allows anyone to build a store locator for their website and fully customize it to match the website theme, branding, colors, exact fonts and much more.",
		icon: "StorePoint.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "storepoint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.storepoint\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "storepoint:jsGlobal:1",
				kind: "jsGlobal",
				property: "STOREPOINT",
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
		id: "storerocket",
		name: "StoreRocket",
		website: "https://storerocket.io",
		description: "StoreRocket is a fully customizable store locator for websites, requiring no coding skills.",
		icon: "StoreRocket.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "storerocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.storerocket\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "storerocket:jsGlobal:1",
				kind: "jsGlobal",
				property: "StoreRocket",
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
		id: "terriajs",
		name: "TerriaJS",
		website: "https://terria.io/",
		description: "TerriaJS is an open-source framework for web-based geospatial catalogue explorers.",
		icon: "TerriaJS.png",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "terriajs:dom:0",
				kind: "dom",
				selector: "html[class*='terria']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "tomtom-maps",
		name: "TomTom Maps",
		website: "https://www.tomtom.com",
		description: "TomTom Maps is a web mapping service.",
		icon: "TomTom.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "tomtom-maps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.tomtom\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tomtom-maps:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("api\\.tomtom\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "tomtom-maps:jsGlobal:2",
				kind: "jsGlobal",
				property: "tomtom.Map",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "woosmap",
		name: "Woosmap",
		website: "https://www.woosmap.com",
		description: "Woosmap is a store locator widget that displays nearby business locations on a map and provides search, filtering, and geolocation features for websites and applications.",
		icon: "Woosmap.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "woosmap:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.woosmap\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "zeemaps",
		name: "ZeeMaps",
		website: "https://www.zeemaps.com",
		description: "ZeeMaps is a custom map generation service that enables users to create personalized maps with location markers, regions, and annotations.",
		icon: "ZeeMaps.svg",
		categories: [
			"maps-location",
		],
		rules: [
			{
				id: "zeemaps:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.zeemaps.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "zeemaps:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackChunkZeeMaps",
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
] as const satisfies readonly TechnologyDefinition[];
