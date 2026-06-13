import type { TechnologyDefinition } from '../types';

export const graphicsVisualizationTechnologyDefinitions = [
	{
		id: "model-viewer",
		name: "<model-viewer>",
		website: "https://modelviewer.dev",
		description: "<model-viewer> is an open-source web component developed by Google and maintained through GitHub. <model-viewer> aims at putting 3D content on the web easily with a few lines of HTML code. This was first introduced with Chrome 72 in July 2019 and enables users to view 3D in the browser and mobile devices.",
		icon: "model-viewer.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "model-viewer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/model-viewer\\/dist\\/model-viewer\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "model-viewer:dom:1",
				kind: "dom",
				selector: "model-viewer",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "a-frame",
		name: "A-Frame",
		website: "https://aframe.io",
		description: "A-Frame is an open-source web framework that simplifies building cross-platform virtual reality (VR) experiences using HTML and JavaScript.",
		icon: "A-Frame.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "a-frame:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/?([\\d.]+)?\\/aframe(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "a-frame:html:1",
				kind: "html",
				pattern: new RegExp("<a-scene[^<>]*>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "a-frame:jsGlobal:2",
				kind: "jsGlobal",
				property: "AFRAME.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "a-frame:jsGlobal:3",
				kind: "jsGlobal",
				property: "aframeStats",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"three-js",
		],
	},
	{
		id: "amcharts",
		name: "amCharts",
		website: "https://amcharts.com",
		description: "amCharts is a JavaScript-based interactive charts and maps programming library and tool.",
		icon: "amCharts.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "amcharts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("amcharts.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amcharts:html:1",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>JavaScript chart by amCharts ([\\d.]*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "amcharts:jsGlobal:2",
				kind: "jsGlobal",
				property: "AmCharts",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "amcharts:html:3",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>javascript chart by amcharts ([\\d.]*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "antv-g2",
		name: "AntV G2",
		website: "https://g2plot.antv.vision",
		description: "AntV G2 is a highly interactive data-driven visualisation grammar for statistical charts.",
		icon: "AntV.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "antv-g2:dom:0",
				kind: "dom",
				selector: "div.g2-tooltip",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "antv-g2:jsGlobal:1",
				kind: "jsGlobal",
				property: "G2.Chart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "antv-g2:jsGlobal:2",
				kind: "jsGlobal",
				property: "G2.VERSION",
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
			],
		},
	},
	{
		id: "antv-g6",
		name: "AntV G6",
		website: "https://g6.antv.vision",
		description: "AntV G6 is a graph visualisation framework in JavaScript.",
		icon: "AntV.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "antv-g6:jsGlobal:0",
				kind: "jsGlobal",
				property: "g6.Graph",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "antv-g6:jsGlobal:1",
				kind: "jsGlobal",
				property: "g6.version",
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
			],
		},
	},
	{
		id: "apexcharts-js",
		name: "ApexCharts.js",
		website: "https://apexcharts.com",
		description: "ApexCharts is a modern JavaScript charting library that empowers developers to build interactive data visualizations for commercial and non-commercial projects.",
		icon: "apexcharts.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "apexcharts-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "ApexCharts",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "arbor-js",
		name: "Arbor.js",
		website: "https://arborjs.org",
		description: "Arbor.js is a graph visualization library that uses web workers for performance and relies on jQuery for DOM manipulation and interaction.",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "arbor-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "arbor",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "auglio",
		name: "Auglio",
		website: "https://auglio.com",
		description: "Auglio is a virtual try-on tool enabling customers to try products using camera and augmented reality before the purchase.",
		icon: "Auglio.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "auglio:jsGlobal:0",
				kind: "jsGlobal",
				property: "VirtooalApp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "auglio:jsGlobal:1",
				kind: "jsGlobal",
				property: "loadVirtooalScript",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "auglio:jsGlobal:2",
				kind: "jsGlobal",
				property: "virtooal_logger",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "auglio:jsGlobal:3",
				kind: "jsGlobal",
				property: "virtooal_script_loaded",
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
		id: "babylon-js",
		name: "Babylon.js",
		website: "https://www.babylonjs.com/",
		description: "Babylon.js is a real time 3D engine using a JavaScript library for displaying 3D graphics in a web browser via HTML5. The source code is available on GitHub and distributed under the Apache License 2.0.",
		icon: "babylonjs.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "babylon-js:dom:0",
				kind: "dom",
				selector: "canvas[data-engine*='Babylon.js']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "babylon-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "BABYLON.AddressMode",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "backstretch",
		name: "Backstretch",
		website: "https://www.jquery-backstretch.com/",
		description: "A simple jQuery plugin that allows you to add a dynamically-resized, slideshow-capable background image to any page or element.",
		categories: [
			"graphics-visualization",
			"widgets-misc",
		],
		rules: [
			{
				id: "backstretch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?(?:jquery\\.)?backstretch(?:\\.min)?\\.js"),
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
		id: "bokeh",
		name: "Bokeh",
		website: "https://bokeh.org",
		description: "Bokeh is an open-source Python library for interactive data visualization in web browsers.",
		icon: "bokeh.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "bokeh:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bokeh.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bokeh:jsGlobal:1",
				kind: "jsGlobal",
				property: "Bokeh",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bokeh:jsGlobal:2",
				kind: "jsGlobal",
				property: "Bokeh.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:bokeh:bokeh:*:*:*:*:*:python:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "canvasjs",
		name: "CanvasJS",
		website: "https://canvasjs.com",
		description: "CanvasJS charts is a data visualisation library that runs across multiple devices and browsers.",
		icon: "canvasjs.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "canvasjs:jsGlobal:0",
				kind: "jsGlobal",
				property: "CanvasJS.Chart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "canvasjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "CanvasJS.Chart.version",
				valuePattern: new RegExp("^v(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "chart-js",
		name: "Chart.js",
		website: "https://www.chartjs.org",
		description: "Chart.js is an open-source JavaScript library that allows you to draw different types of charts by using the HTML5 canvas element.",
		icon: "Chart.js.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "chart-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/Chart(?:\\.bundle)?(?:\\.min)?\\.js"),
				confidence: 75,
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chart-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("chartjs\\.org\\/dist\\/([\\d.]+(?:-[^/]+)?|master|latest)\\/Chart.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chart-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com\\/ajax\\/libs\\/Chart\\.js\\/([\\d.]+(?:-[^/]+)?)\\/Chart.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chart-js:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net\\/(?:npm|gh\\/chartjs)\\/chart\\.js@([\\d.]+(?:-[^/]+)?|latest)\\/dist\\/Chart.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chart-js:jsGlobal:4",
				kind: "jsGlobal",
				property: "Chart",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chart-js:jsGlobal:5",
				kind: "jsGlobal",
				property: "Chart.defaults.doughnut",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chart-js:jsGlobal:6",
				kind: "jsGlobal",
				property: "chart.ctx.bezierCurveTo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chart-js:scriptSrc:7",
				kind: "scriptSrc",
				pattern: new RegExp("\\/chart(?:\\.bundle)?(?:\\.min)?\\.js"),
				confidence: 75,
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chart-js:scriptSrc:8",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net\\/(?:npm|gh\\/chartjs)\\/chart\\.js@([\\d.]+(?:-[^/]+)?|latest)\\/dist\\/chart.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chart-js:scriptSrc:9",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com\\/ajax\\/libs\\/chart\\.js\\/([\\d.]+(?:-[^/]+)?)\\/chart.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chart-js:scriptSrc:10",
				kind: "scriptSrc",
				pattern: new RegExp("chartjs\\.org\\/dist\\/([\\d.]+(?:-[^/]+)?|master|latest)\\/chart.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "cylindo",
		name: "Cylindo",
		website: "https://www.cylindo.com",
		description: "Cylindo is a provider of automated content creation for 3D assets and photorealistic images, facilitating product visualization that can be utilized in various settings.",
		icon: "Cylindo.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "cylindo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("viewer-cdn\\.cylindo\\.com\\/"),
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
		id: "d3",
		name: "D3",
		website: "https://d3js.org",
		description: "D3.js is a JavaScript library for producing dynamic, interactive data visualisations in web browsers.",
		icon: "D3.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "d3:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/d3(?:\\. v\\d+)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "d3:jsGlobal:1",
				kind: "jsGlobal",
				property: "d3.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "d3:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/d3(?:\\.v\\d+)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:d3.js_project:d3.js:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "dc-js",
		name: "dc.js",
		website: "https://dc-js.github.io/dc.js/",
		description: "A multi-dimensional charting library built to work natively with crossfilter and rendered using d3.js",
		icon: "dc.js.png",
		categories: [
			"graphics-visualization",
			"widgets-misc",
		],
		rules: [
			{
				id: "dc-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:dc\\/)?)?dc(?:\\.leaflet)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dc-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "dcAPIKey",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "deepar",
		name: "DeepAR",
		website: "https://www.deepar.ai",
		description: "DeepAR is SDK that integrates AR face filters, 3D masks, effects, and background removal into websites, apps, or games.",
		icon: "DeepAR.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "deepar:dom:0",
				kind: "dom",
				selector: "source[src*='demo.deepar.ai/']",
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
		id: "dimple",
		name: "dimple",
		website: "http://dimplejs.org/",
		description: "dimple.js is a powerful and flexible open-source charting API for d3 letting you quickly and easily create and combine bar, line, area and scatter charts.",
		categories: [
			"graphics-visualization",
			"widgets-misc",
		],
		rules: [
			{
				id: "dimple:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dimple(?:\\/lib\\/[\\w\\.]+)?(?:\\/theme\\/js\\/[\\w\\.-]+)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
		requires: [
			"d3",
		],
	},
	{
		id: "dresson",
		name: "DressOn",
		website: "https://dresson.com.br",
		description: "DressOn is an AI-powered virtual fitting room that lets online shoppers try on clothes digitally.",
		icon: "DressOn.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "dresson:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.dresson\\.com\\.br\\/widget\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"recurring",
			],
		},
	},
	{
		id: "echarts",
		name: "ECharts",
		website: "https://echarts.apache.org/",
		description: "ECharts is an open-source JavaScript charting and data visualization library.",
		icon: "echarts.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "echarts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/echarts\\.min\\.[a-zA-Z0-9]*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "echarts:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/echarts(?:\\.simple)?(?:\\.esm)?(?:\\.common)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "echarts:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net\\/(?:npm|gh\\/apache)\\/echarts@([\\d.]+(?:-[^/]+)?|latest)\\/dist\\/echarts.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "echarts:dom:3",
				kind: "dom",
				selector: "div[_echarts_instance_]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "echarts:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("\\/echarts\\.min\\.[a-za-z0-9]*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "epoch",
		name: "Epoch",
		website: "https://fastly.github.io/epoch",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "epoch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("epoch(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "epoch:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]+?href=\"[^\"]+epoch(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "epoch:dom:2",
				kind: "dom",
				selector: "link[href*='epoch.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "epoch:dom:3",
				kind: "dom",
				selector: "link[href*='epoch.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "epoch:dom:4",
				kind: "dom",
				selector: "link[href*='epoch.css'], link[href*='epoch.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"d3",
		],
	},
	{
		id: "exhibit",
		name: "Exhibit",
		website: "https://simile-widgets.org/exhibit/",
		icon: "Exhibit.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "exhibit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("exhibit.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "exhibit:jsGlobal:1",
				kind: "jsGlobal",
				property: "Exhibit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "exhibit:jsGlobal:2",
				kind: "jsGlobal",
				property: "Exhibit.version",
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
		id: "expivi",
		name: "Expivi",
		website: "https://www.expivi.com",
		description: "Expivi specialises in 3D visualisation technology for ecommerce stores.",
		icon: "Expivi.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "expivi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.expivi\\.(?:com|net)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "expivi:dom:1",
				kind: "dom",
				selector: "iframe[src*='.expivi.net/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "expivi:jsGlobal:2",
				kind: "jsGlobal",
				property: "ExpiviComponent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "expivi:jsGlobal:3",
				kind: "jsGlobal",
				property: "expivi",
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
		id: "fittingbox",
		name: "Fittingbox",
		website: "https://www.fittingbox.com",
		description: "Fittingbox is a software provider of augmented reality and 3D solutions designed for the eyewear industry.",
		icon: "Fittingbox.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "fittingbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fittingbox\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fittingbox:jsGlobal:1",
				kind: "jsGlobal",
				property: "FitMix",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "flipclock-js",
		name: "FlipClock.js",
		website: "https://flipclock.readthedocs.io/en/dev-1.0.0/CHANGE%20LOG/",
		description: "FlipClock.js is a JavaScript library, offering a modern twist to displaying time and countdowns on web applications.",
		categories: [
			"graphics-visualization",
			"widgets-misc",
		],
		rules: [
			{
				id: "flipclock-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("flipclock(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
		id: "floori",
		name: "Floori",
		website: "https://floori.io",
		description: "Floori is an online tool designed to help users visualize different types of flooring in their home.",
		icon: "Floori.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "floori:jsGlobal:0",
				kind: "jsGlobal",
				property: "webpackChunkfloori",
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
		id: "flot",
		name: "Flot",
		website: "https://flotcharts.org/",
		description: "Flot is a JavaScript plotting library for jQuery that provides interactive charts and graphs using HTML canvas.",
		icon: "Flot.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "flot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:jquery\\.)?)?flot(?:\\/curvedLines)?(?:\\/excanvas)?(?:\\/jquery)?(?:\\.categories)?(?:\\.pack)?(?:\\.pie)?(?:\\.resize)?(?:\\.selection)?(?:\\.spline)?(?:\\.symbol)?(?:\\.time)?(?:\\.tooltip)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flot:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:(?:jquery\\.)?)?flot(?:\\/curvedLines)?(?:\\/excanvas)?(?:\\/jquery)?(?:\\.categories)?(?:\\.pack)?(?:\\.pie)?(?:\\.resize)?(?:\\.selection)?(?:\\.spline)?(?:\\.symbol)?(?:\\.time)?(?:\\.tooltip)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flot:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:jquery\\.)?)?flot(?:\\/curvedlines)?(?:\\/excanvas)?(?:\\/jquery)?(?:\\.categories)?(?:\\.pack)?(?:\\.pie)?(?:\\.resize)?(?:\\.selection)?(?:\\.spline)?(?:\\.symbol)?(?:\\.time)?(?:\\.tooltip)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flot:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("(?:(?:jquery\\.)?)?flot(?:\\/curvedlines)?(?:\\/excanvas)?(?:\\/jquery)?(?:\\.categories)?(?:\\.pack)?(?:\\.pie)?(?:\\.resize)?(?:\\.selection)?(?:\\.spline)?(?:\\.symbol)?(?:\\.time)?(?:\\.tooltip)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flot:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("\\/flot\\/jquery\\.flot\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "flourish",
		name: "Flourish",
		website: "https://flourish.studio",
		description: "Flourish is a data visualisation and storytelling platform that enables users to create interactive data visualisations, charts, and presentations.",
		icon: "Flourish.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "flourish:jsGlobal:0",
				kind: "jsGlobal",
				property: "Flourish.environment",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flourish:jsGlobal:1",
				kind: "jsGlobal",
				property: "FlourishConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flourish:jsGlobal:2",
				kind: "jsGlobal",
				property: "FlourishLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flourish:jsGlobal:3",
				kind: "jsGlobal",
				property: "_Flourish_template_id",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"poa",
			],
		},
	},
	{
		id: "fusioncharts",
		name: "FusionCharts",
		website: "https://www.fusioncharts.com/charts",
		description: "FusionCharts is a comprehensive charting solution for websites.",
		icon: "fusion_charts.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "fusioncharts:jsGlobal:0",
				kind: "jsGlobal",
				property: "FusionCharts",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fusioncharts:jsGlobal:1",
				kind: "jsGlobal",
				property: "FusionChartsDataFormats",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fusioncharts:jsGlobal:2",
				kind: "jsGlobal",
				property: "FusionMaps",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "gojs",
		name: "GoJS",
		website: "https://gojs.net/",
		icon: "GoJS.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "gojs:jsGlobal:0",
				kind: "jsGlobal",
				property: "go.GraphObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gojs:jsGlobal:1",
				kind: "jsGlobal",
				property: "go.version",
				valuePattern: new RegExp("(.*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "google-charts",
		name: "Google Charts",
		website: "https://developers.google.com/chart/",
		description: "Google Charts is an interactive web service that creates graphical charts from user-supplied information.",
		icon: "Google Charts.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "google-charts:jsGlobal:0",
				kind: "jsGlobal",
				property: "__googleVisualizationAbstractRendererElementsCount__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-charts:jsGlobal:1",
				kind: "jsGlobal",
				property: "__gvizguard__",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "highcharts",
		name: "Highcharts",
		website: "https://www.highcharts.com",
		description: "Highcharts is a charting library written in pure JavaScript, for adding interactive charts to a website or web application. Highcharts meets accessibility standards and works with Python, Angular, React, iOS, Android, and more.",
		icon: "Highcharts.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "highcharts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("highcharts.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "highcharts:html:1",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>Created with Highcharts ([\\d.]*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "highcharts:jsGlobal:2",
				kind: "jsGlobal",
				property: "Highcharts",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "highcharts:jsGlobal:3",
				kind: "jsGlobal",
				property: "Highcharts.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "highcharts:html:4",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>created with highcharts ([\\d.]*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:highcharts:highcharts:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "highstock",
		name: "Highstock",
		website: "https://highcharts.com/products/highstock",
		icon: "Highcharts.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "highstock:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("highstock[.-]?([\\d\\.]*\\d).*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "highstock:html:1",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>Created with Highstock ([\\d.]*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "highstock:html:2",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>created with highstock ([\\d.]*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "javascript-infovis-toolkit",
		name: "JavaScript Infovis Toolkit",
		website: "https://philogb.github.io/jit/",
		icon: "JavaScript Infovis Toolkit.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "javascript-infovis-toolkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jit(?:-yc)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "javascript-infovis-toolkit:jsGlobal:1",
				kind: "jsGlobal",
				property: "$jit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "javascript-infovis-toolkit:jsGlobal:2",
				kind: "jsGlobal",
				property: "$jit.version",
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
		id: "jqplot",
		name: "jqPlot",
		website: "https://www.jqplot.com",
		icon: "jqPlot.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "jqplot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jqplot.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"jquery",
		],
	},
	{
		id: "js-charts",
		name: "JS Charts",
		website: "https://www.jscharts.com",
		description: "JS Charts is a JavaScript-based tool for creating customizable charts, such as bar, pie, and line charts, with minimal coding required for integration into web projects.",
		icon: "JS Charts.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "js-charts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jscharts.{0,32}\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "js-charts:jsGlobal:1",
				kind: "jsGlobal",
				property: "JSChart",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "katex",
		name: "KaTeX",
		website: "https://katex.org/",
		description: "KaTeX is a cross-browser JavaScript library that displays mathematical notation in web browsers.",
		icon: "KaTeX.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "katex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("katex(@|\\/)[0-9.]+(?:\\/dist)?\\/katex(?:\\.min)?\\.(mjs|js|css)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "katex:dom:1",
				kind: "dom",
				selector: "link[href*=katex]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "katex:jsGlobal:2",
				kind: "jsGlobal",
				property: "katex",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "katex:jsGlobal:3",
				kind: "jsGlobal",
				property: "katex.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:katex:katex:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "kineticjs",
		name: "KineticJS",
		website: "https://github.com/ericdrowell/KineticJS/",
		icon: "KineticJS.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "kineticjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("kinetic(?:-v?([\\d.]+))?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kineticjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "Kinetic",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kineticjs:jsGlobal:2",
				kind: "jsGlobal",
				property: "Kinetic.version",
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
		id: "konva-js",
		name: "Konva.js",
		website: "https://konvajs.org",
		description: "Konva.js is a JavaScript library for creating 2D canvas applications on both desktop and mobile platforms, utilising HTML5.",
		icon: "KonvaJS.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "konva-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "Konva",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "konva-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Konva.version",
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
		id: "levar",
		name: "Levar",
		website: "https://levar.io",
		description: "Levar specialises in 3D visualisation technology for ecommerce stores.",
		icon: "Levar.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "levar:jsGlobal:0",
				kind: "jsGlobal",
				property: "levARActivationHelper",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "levar:jsGlobal:1",
				kind: "jsGlobal",
				property: "levar.session_info",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "levar:jsGlobal:2",
				kind: "jsGlobal",
				property: "levar_onload_variant_id",
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
		id: "localfocus",
		name: "LocalFocus",
		website: "https://www.localfocus.nl/en/",
		description: "LocalFocus is a data visualization platform that allows users to create interactive maps, charts, and infographics from various data sources.",
		icon: "LocalFocus.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "localfocus:html:0",
				kind: "html",
				pattern: new RegExp("<iframe[^>]+\\blocalfocus\\b"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "localfocus:dom:1",
				kind: "dom",
				selector: "iframe[src*='//localfocus2.appspot.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "localfocus:jsGlobal:2",
				kind: "jsGlobal",
				property: "LFlegacyManipulate",
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
		implies: [
			"angular",
			"d3",
		],
	},
	{
		id: "luna",
		name: "Luna",
		website: "https://luna.io",
		description: "Luna is a company that sells software that aids eyewear companies sell their products online using virtual fitting.",
		icon: "Luna.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "luna:dom:0",
				kind: "dom",
				selector: "link[href*='bsdk.api.ditto.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "luna:jsGlobal:1",
				kind: "jsGlobal",
				property: "Ditto.__esModule",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "luna:jsGlobal:2",
				kind: "jsGlobal",
				property: "dittoIdLifetime",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "luna:jsGlobal:3",
				kind: "jsGlobal",
				property: "globalDittoKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "luna:jsGlobal:4",
				kind: "jsGlobal",
				property: "globalDittoServer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "luna:jsGlobal:5",
				kind: "jsGlobal",
				property: "jstextmap.DittoSdkUrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "luna:header:6",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("bsdk\\.api\\.ditto.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "luna:header:7",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("bsdk\\.api\\.ditto.com", "i"),
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
		id: "mathjax",
		name: "MathJax",
		website: "https://www.mathjax.org",
		description: "MathJax is a cross-browser JavaScript library that displays mathematical notation in web browsers, using MathML, LaTeX and ASCIIMathML markup.",
		icon: "MathJax.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "mathjax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d.]+)?\\/mathjax\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mathjax:jsGlobal:1",
				kind: "jsGlobal",
				property: "MathJax",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mathjax:jsGlobal:2",
				kind: "jsGlobal",
				property: "MathJax.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:mathjax:mathjax:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "mermaid",
		name: "Mermaid",
		website: "https://mermaidjs.github.io/",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "mermaid:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/mermaid(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mermaid:html:1",
				kind: "html",
				pattern: new RegExp("<div [^>]*class=[\"']mermaid[\"']>"),
				confidence: 90,
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mermaid:jsGlobal:2",
				kind: "jsGlobal",
				property: "mermaid",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mermaid:dom:3",
				kind: "dom",
				selector: "div[class*='mermaid']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "mirrar",
		name: "mirrAR",
		website: "https://www.mirrar.com",
		description: "mirrAR is a real-time augmented reality platform for retail brands that enables consumers to virtually try on products and experience how it feels to own them before the actual purchase, both in-store and online.",
		icon: "mirrAR.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "mirrar:jsGlobal:0",
				kind: "jsGlobal",
				property: "initMirrarUI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mirrar:jsGlobal:1",
				kind: "jsGlobal",
				property: "loadmirrAR",
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
		id: "modelo",
		name: "Modelo",
		website: "https://modelo.io",
		description: "Modelo is a 3D viewer and model platform that allows users to edit, share, and collaborate on digital models.",
		icon: "Modelo.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "modelo:jsGlobal:0",
				kind: "jsGlobal",
				property: "@pub/modelo-site-cmty-micros-common-dialogs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "modelo:jsGlobal:1",
				kind: "jsGlobal",
				property: "ModeloCommonDialogs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "modelo:meta:2",
				kind: "meta",
				key: "feBu",
				valuePattern: new RegExp("^modelo-site-cmty-home$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "modelo:meta:3",
				kind: "meta",
				key: "febu",
				valuePattern: new RegExp("^modelo-site-cmty-home$", "i"),
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
		id: "modiface",
		name: "ModiFace",
		website: "https://modiface.com",
		description: "ModiFace is a provider of Augmented Reality technology for the beauty industry.",
		icon: "ModiFace.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "modiface:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.modiface\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "modiface:dom:1",
				kind: "dom",
				selector: "iframe[src*='.modiface.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "modiface:jsGlobal:2",
				kind: "jsGlobal",
				property: "initModiface",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "modiface:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.modiface\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "nvd3",
		name: "NVD3",
		website: "https://nvd3.org",
		description: "NVD3 is a JavaScript visualisation library that is a free open-source tool.",
		icon: "NVD3.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "nvd3:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("nv\\.d3(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nvd3:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=[^>]+nv\\.d3(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "nvd3:jsGlobal:2",
				kind: "jsGlobal",
				property: "nv.addGraph",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nvd3:jsGlobal:3",
				kind: "jsGlobal",
				property: "nv.version",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nvd3:dom:4",
				kind: "dom",
				selector: "link[href*='nv.d3.css'], link[href*='nv.d3.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"d3",
		],
	},
	{
		id: "ocuco-fitmix",
		name: "Ocuco FitMix",
		website: "https://www.ocuco.com/fitmix",
		description: "Ocuco is now offering its customers FittingBox's FitMix, a virtual frame try-on tool.",
		icon: "Ocuco.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "ocuco-fitmix:jsGlobal:0",
				kind: "jsGlobal",
				property: "FitMix.WIDGET_BASE_URL",
				valuePattern: new RegExp("static\\.fittingbox\\.com"),
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
		id: "paper-js",
		name: "Paper.js",
		website: "https://paperjs.org",
		description: "Paper.js is an open-source vector graphics scripting framework that operates on the HTML5 Canvas.",
		icon: "PaperJS.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "paper-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?paper(?:-full)?(?:-core)?(?:\\.min)?(?:-[\\d\\w]{0,64})?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paper-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "paper",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paper-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "paper.PaperScope",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paper-js:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("paper(?:-full)?\\.js(?:\\/|$|\\?|\\#)|\\/paper\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "particles-js",
		name: "particles.js",
		website: "https://github.com/VincentGarreau/particles.js",
		description: "Particles.js is a JavaScript library for creating particles.",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "particles-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/particles(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "particles-js:dom:1",
				kind: "dom",
				selector: "div#particles-js",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "particles-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "particlesJS",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "paths-js",
		name: "Paths.js",
		website: "https://github.com/andreaferretti/paths-js",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "paths-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("paths(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "perfect-corp",
		name: "Perfect Corp",
		website: "https://www.perfectcorp.com/business",
		description: "Perfect Corp is a beauty augmented reality company and makeup AR technology platform that develops virtual try-on solutions for cosmetics brands.",
		icon: "PerfectCorp.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "perfect-corp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plugins-media\\.perfectcorp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pixijs",
		name: "PIXIjs",
		website: "https://www.pixijs.com",
		description: "PIXIjs is a free open-source 2D engine used to make animated websites and HTML5 games.",
		icon: "PIXIjs.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "pixijs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixi(?:\\.min|-legacy)?\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pixijs:url:1",
				kind: "url",
				pattern: new RegExp(".+\\.pixijs\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "pixijs:jsGlobal:2",
				kind: "jsGlobal",
				property: "PIXI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixijs:jsGlobal:3",
				kind: "jsGlobal",
				property: "PIXI.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixijs:jsGlobal:4",
				kind: "jsGlobal",
				property: "PIXI_WEBWORKER_URL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixijs:dom:5",
				kind: "dom",
				selector: "div[class*='pixi-hitbox']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pixijs:jsGlobal:6",
				kind: "jsGlobal",
				property: "webpackChunkpixi_docusaurus",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "plattar",
		name: "Plattar",
		website: "https://www.plattar.com",
		description: "Plattar is a 3D and augmented reality platform for businesses that facilitates product customization to help retailers increase sales and reduce returns.",
		icon: "Plattar.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "plattar:jsGlobal:0",
				kind: "jsGlobal",
				property: "PlattarARAdapter",
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
		id: "plotly",
		name: "Plotly",
		website: "https://plot.ly/javascript/",
		description: "Plotly is a data visualization library and platform that enables the creation of interactive, high-quality charts, graphs, and dashboards for web applications and data analysis using languages like JavaScript, Python, and R.",
		icon: "Plotly.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "plotly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/cdn\\.plot\\.ly\\/plotly"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "plotly:jsGlobal:1",
				kind: "jsGlobal",
				property: "Plotly.version",
				valuePattern: new RegExp("([\\d.])"),
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
		implies: [
			"d3",
		],
	},
	{
		id: "prime-ai",
		name: "Prime AI",
		website: "https://www.primeai.co.uk",
		description: "Prime AI is a platform that uses AI-powered technology to match customers' body shapes with garment SKU specifications, helping them choose the best-fitting clothing size.",
		icon: "PrimeAI.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "prime-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.primeai\\.co\\.uk"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "protovis",
		name: "Protovis",
		website: "https://mbostock.github.io/protovis",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "protovis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("protovis.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "protovis:jsGlobal:1",
				kind: "jsGlobal",
				property: "protovis",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "raphael",
		name: "Raphael",
		website: "https://dmitrybaranovskiy.github.io/raphael/",
		description: "Raphael is a cross-browser JavaScript library that draws Vector graphics for websites.",
		icon: "Raphael.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "raphael:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("raphael(?:-([\\d.]+))?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "raphael:jsGlobal:1",
				kind: "jsGlobal",
				property: "Raphael.version",
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
		id: "recharts",
		name: "Recharts",
		website: "https://recharts.org/",
		description: "Recharts is a component-based charting library, which is exclusively built for React applications.",
		icon: "Recharts.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "recharts:dom:0",
				kind: "dom",
				selector: "div > div > svg.recharts-surface",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"react",
		],
	},
	{
		id: "rickshaw",
		name: "Rickshaw",
		website: "https://code.shutterstock.com/rickshaw/",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "rickshaw:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rickshaw(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rickshaw:jsGlobal:1",
				kind: "jsGlobal",
				property: "Rickshaw",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"d3",
		],
	},
	{
		id: "rive",
		name: "Rive",
		website: "https://rive.app",
		description: "Rive is a real-time interactive design and animation tool.",
		icon: "Rive.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "rive:jsGlobal:0",
				kind: "jsGlobal",
				property: "rive.Rive",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rive:dom:1",
				kind: "dom",
				selector: "link[href*='rive.app/'][rel='canonical']",
				description: "DOM selector matches a known technology marker.",
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
		id: "shine-js",
		name: "shine.js",
		website: "https://bigspaceship.github.io/shine.js/",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "shine-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("shine(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shine-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Shine",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "sightcall",
		name: "SightCall",
		website: "https://sightcall.com",
		description: "SightCall is a platform that provides real-time AR and AI-powered guidance to help service teams resolve issues quicker.",
		icon: "SightCall.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "sightcall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sightcall\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sightcall:jsGlobal:1",
				kind: "jsGlobal",
				property: "SightcallConsole",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "spline",
		name: "Spline",
		website: "https://spline.design",
		description: "Spline is a platform for designing and collaborating on 3D content in real time.",
		icon: "Spline.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "spline:dom:0",
				kind: "dom",
				selector: "div[data-spline-url*='prod.spline.design/']",
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
		id: "supersized",
		name: "Supersized",
		website: "https://buildinternet.com/project/supersized",
		icon: "Supersized.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "supersized:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("supersized(?:\\.([\\d.]*[\\d]))?.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "tangiblee",
		name: "Tangiblee",
		website: "https://www.tangiblee.com",
		description: "Tangiblee is an enterprise-ready, immersive shopping and augmented reality ecommerce platform.",
		icon: "Tangiblee.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "tangiblee:jsGlobal:0",
				kind: "jsGlobal",
				property: "globalTangiblee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tangiblee:jsGlobal:1",
				kind: "jsGlobal",
				property: "tangiblee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tangiblee:jsGlobal:2",
				kind: "jsGlobal",
				property: "tangibleeScriptLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "teechart",
		name: "TeeChart",
		website: "http://216.92.101.67/product/html5",
		description: "TeeChart is a JavaScript charting library that plots graphs in compatible browsers using native JavaScript and the HTML5 Canvas element.",
		icon: "TeeChart.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "teechart:jsGlobal:0",
				kind: "jsGlobal",
				property: "Tee.Animation",
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
		id: "theatre-js",
		name: "Theatre.js",
		website: "https://www.theatrejs.com",
		description: "Theatre.js is a javascript animation library with a professional motion design toolset.",
		icon: "Theatre.js.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "theatre-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "__TheatreJS_CoreBundle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "theatre-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "__TheatreJS_CoreBundle.version",
				valuePattern: new RegExp("((?:\\d+\\.)+\\d+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "theatre-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "__TheatreJS_CoreBundle.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
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
		id: "three-js",
		name: "Three.js",
		website: "https://threejs.org",
		description: "Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.",
		icon: "Three.js.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "three-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("three(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "three-js:dom:1",
				kind: "dom",
				selector: "canvas[data-engine*='three.js']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "three-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "THREE.REVISION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "three-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "__THREE__",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "threekit",
		name: "Threekit",
		website: "https://www.threekit.com",
		description: "Threekit is a visual customer experience solution that enables brands to create, manage and scale photorealistic images and 3D product visuals, all from a single design file.",
		icon: "Threekit.svg",
		categories: [
			"graphics-visualization",
			"media-video",
		],
		rules: [
			{
				id: "threekit:jsGlobal:0",
				kind: "jsGlobal",
				property: "threekit.configuratorForm",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "threekit:jsGlobal:1",
				kind: "jsGlobal",
				property: "threekitAR",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "threekit:jsGlobal:2",
				kind: "jsGlobal",
				property: "threekitPlayer",
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
		id: "thridify",
		name: "Thridify",
		website: "https://www.thridify.store",
		description: "Thirdify is a tool that enables businesses to convert browsers into buyers using 3D and AR technologies, with no app installation or coding required.",
		icon: "Thridify.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "thridify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.thridify\\.store"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "thridify:jsGlobal:1",
				kind: "jsGlobal",
				property: "getThridifyFrame",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "thridify:jsGlobal:2",
				kind: "jsGlobal",
				property: "thridifyData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "thridify:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("thridify\\.com", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "timeplot",
		name: "Timeplot",
		website: "https://www.simile-widgets.org/timeplot/",
		icon: "Timeplot.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "timeplot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("timeplot.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "timeplot:jsGlobal:1",
				kind: "jsGlobal",
				property: "Timeplot",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "tradingview",
		name: "TradingView",
		website: "https://www.tradingview.com",
		description: "TradingView is used to show world chart, chats and trades markets.",
		icon: "trading_view.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "tradingview:dom:0",
				kind: "dom",
				selector: "iframe[src*='.tradingview.com/']",
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
		id: "uplot",
		name: "uPlot",
		website: "https://leeoniya.github.io/uPlot",
		description: "uPlot is a small, fast chart for time series, lines, areas, ohlc and bars.",
		icon: "uPlot.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "uplot:jsGlobal:0",
				kind: "jsGlobal",
				property: "uPlot",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "variance",
		name: "Variance",
		website: "https://variancecharts.com",
		description: "Variance is a provider of custom charting data graphics tools for web platforms, utilizing HTML and CSS.",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "variance:dom:0",
				kind: "dom",
				selector: "link[href*='variancecharts.com/'], script#variance-js",
				description: "DOM selector matches a known technology marker.",
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
		id: "vectary",
		name: "Vectary",
		website: "https://www.vectary.com",
		description: "Vectary is fully-featured 3D modeling tool with photorealistic real-time rendering, augmented reality, interactions and animations.",
		icon: "vectary.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "vectary:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.vectary.com/']",
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
		id: "virtooal",
		name: "Virtooal",
		website: "https://try.virtooal.com",
		description: "Virtooal allows shoppers to try on and combine decorative cosmetics, sunglasses, contact lenses, jewellery and fashion accessories using models, their own photo or a live webcam feed.",
		icon: "Virtooal.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "virtooal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.virtooal\\.com\\/"),
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
		id: "visx",
		name: "Visx",
		website: "https://airbnb.io/visx/",
		description: "Visx is a collection of React-based data visualisation tools developed by Airbnb.",
		icon: "Visx.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "visx:dom:0",
				kind: "dom",
				selector: "g.visx-group,g.vx-group",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"react",
		],
	},
	{
		id: "vntana",
		name: "Vntana",
		website: "https://www.vntana.com",
		description: "Vntana (stylised as VNTANA) is an American social augmented reality company.",
		icon: "Vntana.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "vntana:dom:0",
				kind: "dom",
				selector: "iframe[src*='embed.vntana.com/'], iframe[nitro-lazy-src*='embed.vntana.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "xcharts",
		name: "xCharts",
		website: "https://tenxer.github.io/xcharts/",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "xcharts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("xcharts\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xcharts:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=\"[^\"]*xcharts(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "xcharts:jsGlobal:2",
				kind: "jsGlobal",
				property: "xChart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "xcharts:dom:3",
				kind: "dom",
				selector: "link[href*='xcharts.css'], link[href*='xcharts.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"d3",
		],
	},
	{
		id: "xzero-js",
		name: "Xzero JS",
		website: "https://xzerojs.org",
		description: "Xzero JS is a JavaScript library (ES6 module) for displaying 3D models, scenes and 360° panoramas on the web.",
		icon: "XzeroJS.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "xzero-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("xzero-js@([\\d.]+)\\/xzero\\.min\\.js.*"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "youcam-makeup",
		name: "YouCam Makeup",
		website: "https://www.perfectcorp.com/business/products/virtual-makeup",
		description: "YouCam Makeup is a cross-platform virtual makeup solution for omnichannel ecommerce.",
		icon: "YouCam Makeup.png",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "youcam-makeup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plugins-media\\.(?:perfectcorp|makeupar)\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "youcam-makeup:jsGlobal:1",
				kind: "jsGlobal",
				property: "YMK.applyMakeupByLook",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "youcam-makeup:jsGlobal:2",
				kind: "jsGlobal",
				property: "YMK.calDeltaE",
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
		id: "zieny",
		name: "Zieny",
		website: "https://zieny.com",
		description: "Zieny is a platform that enables businesses to integrate 3D and augmented reality (AR) into websites, providing an interactive product experience without complex implementation.",
		icon: "Zieny.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "zieny:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ar-view-zieny\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zingchart",
		name: "ZingChart",
		website: "https://www.zingchart.com",
		description: "ZingChart is an open-source and free JavaScript library for building interactive and intuitive charts.",
		icon: "ZingChart.svg",
		categories: [
			"graphics-visualization",
		],
		rules: [
			{
				id: "zingchart:jsGlobal:0",
				kind: "jsGlobal",
				property: "zingchart",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
] as const satisfies readonly TechnologyDefinition[];
