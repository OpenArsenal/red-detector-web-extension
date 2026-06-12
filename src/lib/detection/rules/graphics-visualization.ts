import type { TechnologyDefinition } from '../types';

export const graphicsVisualizationTechnologyDefinitions = [
	{
		id: "a-frame",
		name: "A-Frame",
		website: "https://aframe.io",
		description: "A-Frame is an open-source web framework that simplifies building cross-platform virtual reality (VR) experiences using HTML and JavaScript.",
		icon: "A-Frame.svg",
		categories: [
			"graphics-visualization",
			"media-video"
		],
		rules: [
			{
				id: "a-frame:html:0",
				kind: "html",
				pattern: new RegExp("<a-scene[^<>]*>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "a-frame:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/?([\\d.]+)?/aframe(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "a-frame:pageGlobal:2",
				kind: "pageGlobal",
				property: "AFRAME.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "a-frame:pageGlobal:3",
				kind: "pageGlobal",
				property: "aframeStats",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"three-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "amcharts",
		name: "amCharts",
		website: "https://amcharts.com",
		description: "amCharts is a JavaScript-based interactive charts and maps programming library and tool.",
		icon: "amCharts.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "amcharts:html:0",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>JavaScript chart by amCharts ([\\d.]*)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "amcharts:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("amcharts.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "amcharts:pageGlobal:2",
				kind: "pageGlobal",
				property: "AmCharts",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "antv-g2",
		name: "AntV G2",
		website: "https://g2plot.antv.vision",
		description: "AntV G2 is a highly interactive data-driven visualisation grammar for statistical charts.",
		icon: "AntV.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "antv-g2:dom:0",
				kind: "dom",
				selector: "div.g2-tooltip",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "antv-g2:pageGlobal:1",
				kind: "pageGlobal",
				property: "G2.Chart",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "antv-g2:pageGlobal:2",
				kind: "pageGlobal",
				property: "G2.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "antv-g6",
		name: "AntV G6",
		website: "https://g6.antv.vision",
		description: "AntV G6 is a graph visualisation framework in JavaScript.",
		icon: "AntV.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "antv-g6:pageGlobal:0",
				kind: "pageGlobal",
				property: "g6.Graph",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "antv-g6:pageGlobal:1",
				kind: "pageGlobal",
				property: "g6.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "apexcharts-js",
		name: "ApexCharts.js",
		website: "https://apexcharts.com",
		description: "ApexCharts is a modern JavaScript charting library that empowers developers to build interactive data visualizations for commercial and non-commercial projects.",
		icon: "apexcharts.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "apexcharts-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "ApexCharts",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "arbor-js",
		name: "Arbor.js",
		website: "https://arborjs.org",
		description: "Arbor.js is a graph visualization library that uses web workers for performance and relies on jQuery for DOM manipulation and interaction.",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "arbor-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "arbor",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "babylon-js",
		name: "Babylon.js",
		website: "https://www.babylonjs.com/",
		description: "Babylon.js is a real time 3D engine using a JavaScript library for displaying 3D graphics in a web browser via HTML5. The source code is available on GitHub and distributed under the Apache License 2.0.",
		icon: "babylonjs.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "babylon-js:dom:0",
				kind: "dom",
				selector: "canvas[data-engine*='Babylon.js']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "babylon-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "BABYLON.AddressMode",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "backstretch",
		name: "Backstretch",
		website: "https://www.jquery-backstretch.com/",
		description: "A simple jQuery plugin that allows you to add a dynamically-resized, slideshow-capable background image to any page or element.",
		categories: [
			"graphics-visualization",
			"developer-tooling"
		],
		rules: [
			{
				id: "backstretch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?(?:jquery\\.)?backstretch(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "bokeh",
		name: "Bokeh",
		website: "https://bokeh.org",
		icon: "Bokeh.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "bokeh:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bokeh.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bokeh:pageGlobal:1",
				kind: "pageGlobal",
				property: "Bokeh",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bokeh:pageGlobal:2",
				kind: "pageGlobal",
				property: "Bokeh.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "canvasjs",
		name: "CanvasJS",
		website: "https://canvasjs.com",
		description: "CanvasJS charts is a data visualisation library that runs across multiple devices and browsers.",
		icon: "canvasjs.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "canvasjs:pageGlobal:0",
				kind: "pageGlobal",
				property: "CanvasJS.Chart",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "canvasjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "CanvasJS.Chart.version",
				valuePattern: new RegExp("^v(.+)$"),
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
		id: "chart-js",
		name: "Chart.js",
		website: "https://www.chartjs.org",
		description: "Chart.js is an open-source JavaScript library that allows you to draw different types of charts by using the HTML5 canvas element.",
		icon: "Chart.js.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "chart-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/Chart(?:\\.bundle)?(?:\\.min)?\\.js"),
				confidence: 75,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chart-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("chartjs\\.org/dist/([\\d.]+(?:-[^/]+)?|master|latest)/Chart.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chart-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com/ajax/libs/Chart\\.js/([\\d.]+(?:-[^/]+)?)/Chart.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chart-js:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net/(?:npm|gh/chartjs)/chart\\.js@([\\d.]+(?:-[^/]+)?|latest)/dist/Chart.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chart-js:pageGlobal:4",
				kind: "pageGlobal",
				property: "Chart",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "chart-js:pageGlobal:5",
				kind: "pageGlobal",
				property: "Chart.defaults.doughnut",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "chart-js:pageGlobal:6",
				kind: "pageGlobal",
				property: "chart.ctx.bezierCurveTo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "d3",
		name: "D3",
		website: "https://d3js.org",
		description: "D3.js is a JavaScript library for producing dynamic, interactive data visualisations in web browsers.",
		icon: "D3.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "d3:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/d3(?:\\.v\\d+)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "d3:pageGlobal:1",
				kind: "pageGlobal",
				property: "d3.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:d3.js_project:d3.js:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "dc-js",
		name: "dc.js",
		website: "https://dc-js.github.io/dc.js/",
		description: "A multi-dimensional charting library built to work natively with crossfilter and rendered using d3.js",
		icon: "dc.js.png",
		categories: [
			"graphics-visualization",
			"developer-tooling"
		],
		rules: [
			{
				id: "dc-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:dc\\/)?)?dc(?:\\.leaflet)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dc-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "dcAPIKey",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "echarts",
		name: "ECharts",
		website: "https://echarts.apache.org/",
		description: "ECharts is an open-source JavaScript visualisation library.",
		icon: "echarts.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "echarts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/echarts\\.min\\.[a-zA-Z0-9]*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "echarts:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/echarts(?:\\.simple)?(?:\\.esm)?(?:\\.common)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "echarts:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net/(?:npm|gh/apache)/echarts@([\\d.]+(?:-[^/]+)?|latest)/dist/echarts.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "echarts:dom:3",
				kind: "dom",
				selector: "div[_echarts_instance_]",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "epoch",
		name: "Epoch",
		website: "https://fastly.github.io/epoch",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "epoch:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+?href=\"[^\"]+epoch(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "epoch:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("epoch(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "epoch:dom:2",
				kind: "dom",
				selector: "link[href*='epoch.css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "epoch:dom:3",
				kind: "dom",
				selector: "link[href*='epoch.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"d3"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "exhibit",
		name: "Exhibit",
		website: "https://simile-widgets.org/exhibit/",
		icon: "Exhibit.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "exhibit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("exhibit.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "exhibit:pageGlobal:1",
				kind: "pageGlobal",
				property: "Exhibit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "exhibit:pageGlobal:2",
				kind: "pageGlobal",
				property: "Exhibit.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "flipclock-js",
		name: "FlipClock.js",
		website: "https://flipclock.readthedocs.io/en/dev-1.0.0/CHANGE%20LOG/",
		description: "FlipClock.js is a JavaScript library, offering a modern twist to displaying time and countdowns on web applications.",
		categories: [
			"graphics-visualization",
			"developer-tooling"
		],
		rules: [
			{
				id: "flipclock-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("flipclock(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "flot",
		name: "Flot",
		website: "https://flotcharts.org/",
		description: "Flot is a JavaScript plotting library for jQuery that provides interactive charts and graphs using HTML canvas.",
		icon: "Flot.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "flot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:jquery\\.)?)?flot(?:\\/curvedLines)?(?:\\/excanvas)?(?:\\/jquery)?(?:\\.categories)?(?:\\.pack)?(?:\\.pie)?(?:\\.resize)?(?:\\.selection)?(?:\\.spline)?(?:\\.symbol)?(?:\\.time)?(?:\\.tooltip)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "flot:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:(?:jquery\\.)?)?flot(?:\\/curvedLines)?(?:\\/excanvas)?(?:\\/jquery)?(?:\\.categories)?(?:\\.pack)?(?:\\.pie)?(?:\\.resize)?(?:\\.selection)?(?:\\.spline)?(?:\\.symbol)?(?:\\.time)?(?:\\.tooltip)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "flourish",
		name: "Flourish",
		website: "https://flourish.studio",
		description: "Flourish is a data visualisation and storytelling platform that enables users to create interactive data visualisations, charts, and presentations.",
		icon: "Flourish.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "flourish:pageGlobal:0",
				kind: "pageGlobal",
				property: "Flourish.environment",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flourish:pageGlobal:1",
				kind: "pageGlobal",
				property: "FlourishConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flourish:pageGlobal:2",
				kind: "pageGlobal",
				property: "FlourishLoaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flourish:pageGlobal:3",
				kind: "pageGlobal",
				property: "_Flourish_template_id",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"poa"
			]
		}
	},
	{
		id: "fusioncharts",
		name: "FusionCharts",
		website: "https://www.fusioncharts.com/charts",
		description: "FusionCharts is a comprehensive charting solution for websites.",
		icon: "fusion_charts.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "fusioncharts:pageGlobal:0",
				kind: "pageGlobal",
				property: "FusionCharts",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fusioncharts:pageGlobal:1",
				kind: "pageGlobal",
				property: "FusionChartsDataFormats",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fusioncharts:pageGlobal:2",
				kind: "pageGlobal",
				property: "FusionMaps",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "gojs",
		name: "GoJS",
		website: "https://gojs.net/",
		icon: "GoJS.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "gojs:pageGlobal:0",
				kind: "pageGlobal",
				property: "go.GraphObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gojs:pageGlobal:1",
				kind: "pageGlobal",
				property: "go.version",
				valuePattern: new RegExp("(.*)"),
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
		id: "google-charts",
		name: "Google Charts",
		website: "https://developers.google.com/chart/",
		description: "Google Charts is an interactive web service that creates graphical charts from user-supplied information.",
		icon: "Google Charts.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "google-charts:pageGlobal:0",
				kind: "pageGlobal",
				property: "__googleVisualizationAbstractRendererElementsCount__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-charts:pageGlobal:1",
				kind: "pageGlobal",
				property: "__gvizguard__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "highstock",
		name: "Highstock",
		website: "https://highcharts.com/products/highstock",
		icon: "Highcharts.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "highstock:html:0",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>Created with Highstock ([\\d.]*)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "highstock:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("highstock[.-]?([\\d\\.]*\\d).*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "javascript-infovis-toolkit",
		name: "JavaScript Infovis Toolkit",
		website: "https://philogb.github.io/jit/",
		icon: "JavaScript Infovis Toolkit.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "javascript-infovis-toolkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jit(?:-yc)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "javascript-infovis-toolkit:pageGlobal:1",
				kind: "pageGlobal",
				property: "$jit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "javascript-infovis-toolkit:pageGlobal:2",
				kind: "pageGlobal",
				property: "$jit.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "jqplot",
		name: "jqPlot",
		website: "https://www.jqplot.com",
		icon: "jqPlot.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "jqplot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jqplot.*\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jquery-sparklines",
		name: "jQuery Sparklines",
		website: "https://omnipotent.net/jquery.sparkline/",
		description: "jQuery Sparklines is a plugin that generates sparklines (small inline charts) directly in the browser using data supplied either inline in the HTML, or via javascript.",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "jquery-sparklines:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.sparkline.*\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "js-charts",
		name: "JS Charts",
		website: "https://www.jscharts.com",
		description: "JS Charts is a JavaScript-based tool for creating customizable charts, such as bar, pie, and line charts, with minimal coding required for integration into web projects.",
		icon: "JS Charts.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "js-charts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jscharts.{0,32}\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "js-charts:pageGlobal:1",
				kind: "pageGlobal",
				property: "JSChart",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "katex",
		name: "KaTeX",
		website: "https://katex.org/",
		description: "KaTeX is a cross-browser JavaScript library that displays mathematical notation in web browsers.",
		icon: "KaTeX.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "katex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("katex(@|/)[0-9.]+(?:/dist)?/katex(?:\\.min)?\\.(mjs|js|css)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "katex:pageGlobal:2",
				kind: "pageGlobal",
				property: "katex",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "katex:pageGlobal:3",
				kind: "pageGlobal",
				property: "katex.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "kineticjs",
		name: "KineticJS",
		website: "https://github.com/ericdrowell/KineticJS/",
		icon: "KineticJS.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "kineticjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("kinetic(?:-v?([\\d.]+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kineticjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "Kinetic",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kineticjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "Kinetic.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "konva-js",
		name: "Konva.js",
		website: "https://konvajs.org",
		description: "Konva.js is a JavaScript library for creating 2D canvas applications on both desktop and mobile platforms, utilising HTML5.",
		icon: "KonvaJS.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "konva-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "Konva",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "konva-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Konva.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "localfocus",
		name: "LocalFocus",
		website: "https://www.localfocus.nl/en/",
		description: "LocalFocus is a data visualization platform that allows users to create interactive maps, charts, and infographics from various data sources.",
		icon: "LocalFocus.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "localfocus:html:0",
				kind: "html",
				pattern: new RegExp("<iframe[^>]+\\blocalfocus\\b"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "localfocus:dom:1",
				kind: "dom",
				selector: "iframe[src*='//localfocus2.appspot.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "localfocus:pageGlobal:2",
				kind: "pageGlobal",
				property: "LFlegacyManipulate",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"angular",
			"d3"
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
		id: "mathjax",
		name: "MathJax",
		website: "https://www.mathjax.org",
		description: "MathJax is a cross-browser JavaScript library that displays mathematical notation in web browsers, using MathML, LaTeX and ASCIIMathML markup.",
		icon: "MathJax.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "mathjax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d.]+)?/mathjax\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mathjax:pageGlobal:1",
				kind: "pageGlobal",
				property: "MathJax",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mathjax:pageGlobal:2",
				kind: "pageGlobal",
				property: "MathJax.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:mathjax:mathjax:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mermaid",
		name: "Mermaid",
		website: "https://mermaidjs.github.io/",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "mermaid:html:0",
				kind: "html",
				pattern: new RegExp("<div [^>]*class=[\"']mermaid[\"']>"),
				confidence: 90,
				description: "HTML contains a known technology marker."
			},
			{
				id: "mermaid:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/mermaid(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mermaid:dom:2",
				kind: "dom",
				selector: "div[class*='mermaid']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mermaid:pageGlobal:3",
				kind: "pageGlobal",
				property: "mermaid",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "nvd3",
		name: "NVD3",
		website: "https://nvd3.org",
		description: "NVD3 is a JavaScript visualisation library that is a free open-source tool.",
		icon: "NVD3.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "nvd3:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=[^>]+nv\\.d3(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "nvd3:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("nv\\.d3(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nvd3:dom:2",
				kind: "dom",
				selector: "link[href*='nv.d3.css'], link[href*='nv.d3.min.css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "nvd3:pageGlobal:3",
				kind: "pageGlobal",
				property: "nv.addGraph",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nvd3:pageGlobal:4",
				kind: "pageGlobal",
				property: "nv.version",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"d3"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "paper-js",
		name: "Paper.js",
		website: "https://paperjs.org",
		description: "Paper.js is an open-source vector graphics scripting framework that operates on the HTML5 Canvas.",
		icon: "PaperJS.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "paper-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?paper(?:-full)?(?:-core)?(?:\\.min)?(?:-[\\d\\w]{0,64})?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "paper-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "paper",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "paper-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "paper.PaperScope",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "particles-js",
		name: "particles.js",
		website: "https://github.com/VincentGarreau/particles.js",
		description: "Particles.js is a JavaScript library for creating particles.",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "particles-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/particles(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "particles-js:dom:1",
				kind: "dom",
				selector: "div#particles-js",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "particles-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "particlesJS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "paths-js",
		name: "Paths.js",
		website: "https://github.com/andreaferretti/paths-js",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "paths-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("paths(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pixijs",
		name: "PIXIjs",
		website: "https://www.pixijs.com",
		description: "PIXIjs is a free open-source 2D engine used to make animated websites and HTML5 games.",
		icon: "PIXIjs.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "pixijs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixi(?:\\.min|-legacy)?\\.js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pixijs:url:1",
				kind: "url",
				pattern: new RegExp(".+\\.pixijs\\.com"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "pixijs:dom:2",
				kind: "dom",
				selector: "div[class*='pixi-hitbox']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "pixijs:pageGlobal:3",
				kind: "pageGlobal",
				property: "PIXI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixijs:pageGlobal:4",
				kind: "pageGlobal",
				property: "PIXI.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixijs:pageGlobal:5",
				kind: "pageGlobal",
				property: "PIXI_WEBWORKER_URL",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixijs:pageGlobal:6",
				kind: "pageGlobal",
				property: "webpackChunkpixi_docusaurus",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "plotly",
		name: "Plotly",
		website: "https://plot.ly/javascript/",
		description: "Plotly is a data visualization library and platform that enables the creation of interactive, high-quality charts, graphs, and dashboards for web applications and data analysis using languages like JavaScript, Python, and R.",
		icon: "Plotly.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "plotly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?://cdn\\.plot\\.ly/plotly"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "plotly:pageGlobal:1",
				kind: "pageGlobal",
				property: "Plotly.version",
				valuePattern: new RegExp("([\\d.])"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"d3"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "protovis",
		name: "Protovis",
		website: "https://mbostock.github.io/protovis",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "protovis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("protovis.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "protovis:pageGlobal:1",
				kind: "pageGlobal",
				property: "protovis",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "raphael",
		name: "Raphael",
		website: "https://dmitrybaranovskiy.github.io/raphael/",
		description: "Raphael is a cross-browser JavaScript library that draws Vector graphics for websites.",
		icon: "Raphael.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "raphael:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("raphael(?:-([\\d.]+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "raphael:pageGlobal:1",
				kind: "pageGlobal",
				property: "Raphael.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "rickshaw",
		name: "Rickshaw",
		website: "https://code.shutterstock.com/rickshaw/",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "rickshaw:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rickshaw(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rickshaw:pageGlobal:1",
				kind: "pageGlobal",
				property: "Rickshaw",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"d3"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "shine-js",
		name: "shine.js",
		website: "https://bigspaceship.github.io/shine.js/",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "shine-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("shine(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "shine-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Shine",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "spin-js",
		name: "spin.js",
		website: "https://spin.js.org/",
		description: "Configurable JavaScript/CSS spinner that can be used as a resolution-independent loading indicator",
		icon: "spin.js.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "spin-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("spin(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "spline",
		name: "Spline",
		website: "https://spline.design",
		description: "Spline is a platform for designing and collaborating on 3D content in real time.",
		icon: "Spline.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "spline:dom:0",
				kind: "dom",
				selector: "div[data-spline-url*='prod.spline.design/']",
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
		id: "supersized",
		name: "Supersized",
		website: "https://buildinternet.com/project/supersized",
		icon: "Supersized.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "supersized:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("supersized(?:\\.([\\d.]*[\\d]))?.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "teechart",
		name: "TeeChart",
		website: "http://216.92.101.67/product/html5",
		description: "TeeChart is a JavaScript charting library that plots graphs in compatible browsers using native JavaScript and the HTML5 Canvas element.",
		icon: "TeeChart.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "teechart:pageGlobal:0",
				kind: "pageGlobal",
				property: "Tee.Animation",
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
		id: "three-js",
		name: "Three.js",
		website: "https://threejs.org",
		description: "Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.",
		icon: "Three.js.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "three-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("three(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "three-js:dom:1",
				kind: "dom",
				selector: "canvas[data-engine*='three.js']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "three-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "THREE.REVISION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "three-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "__THREE__",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "timeplot",
		name: "Timeplot",
		website: "https://www.simile-widgets.org/timeplot/",
		icon: "Timeplot.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "timeplot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("timeplot.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "timeplot:pageGlobal:1",
				kind: "pageGlobal",
				property: "Timeplot",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tradingview",
		name: "TradingView",
		website: "https://www.tradingview.com",
		description: "TradingView is used to show world chart, chats and trades markets.",
		icon: "trading_view.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "tradingview:dom:0",
				kind: "dom",
				selector: "iframe[src*='.tradingview.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "uplot",
		name: "uPlot",
		website: "https://leeoniya.github.io/uPlot",
		description: "uPlot is a small, fast chart for time series, lines, areas, ohlc and bars.",
		icon: "uPlot.png",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "uplot:pageGlobal:0",
				kind: "pageGlobal",
				property: "uPlot",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "variance",
		name: "Variance",
		website: "https://variancecharts.com",
		description: "Variance is a provider of custom charting data graphics tools for web platforms, utilizing HTML and CSS.",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "variance:dom:0",
				kind: "dom",
				selector: "link[href*='variancecharts.com/'], script#variance-js",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "xcharts",
		name: "xCharts",
		website: "https://tenxer.github.io/xcharts/",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "xcharts:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=\"[^\"]*xcharts(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "xcharts:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("xcharts\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "xcharts:dom:2",
				kind: "dom",
				selector: "link[href*='xcharts.css'], link[href*='xcharts.min.css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "xcharts:pageGlobal:3",
				kind: "pageGlobal",
				property: "xChart",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"d3"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "xzero-js",
		name: "Xzero JS",
		website: "https://xzerojs.org",
		description: "Xzero JS is a JavaScript library (ES6 module) for displaying 3D models, scenes and 360° panoramas on the web.",
		icon: "XzeroJS.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "xzero-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("xzero-js@([\\d.]+)/xzero\\.min\\.js.*"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "zingchart",
		name: "ZingChart",
		website: "https://www.zingchart.com",
		description: "ZingChart is a open-source and free JavaScript library for building interactive and intuitive charts.",
		icon: "ZingChart.svg",
		categories: [
			"graphics-visualization"
		],
		rules: [
			{
				id: "zingchart:pageGlobal:0",
				kind: "pageGlobal",
				property: "zingchart",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"recurring",
				"mid"
			]
		}
	}
] as const satisfies readonly TechnologyDefinition[];
