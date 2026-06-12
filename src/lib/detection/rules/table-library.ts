import type { TechnologyDefinition } from '../types';

export const tableLibraryTechnologyDefinitions = [
	{
		id: "bootstrap-table",
		name: "Bootstrap Table",
		website: "https://bootstrap-table.wenzhixin.net.cn/",
		icon: "Bootstrap Table.svg",
		categories: [
			"table-library",
			"styling-library",
			"component-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "bootstrap-table:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+href=\"[^>]*bootstrap-table(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "bootstrap-table:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("bootstrap-table(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bootstrap-table:dom:2",
				kind: "dom",
				selector: "link[href*='bootstrap-table.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"bootstrap",
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "datatables",
		name: "DataTables",
		website: "https://datatables.net",
		description: "DataTables is a plug-in for the jQuery Javascript library adding advanced features like pagination, instant search, themes, and more to any HTML table.",
		icon: "DataTables.png",
		categories: [
			"table-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "datatables:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dataTables.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "datatables:pageGlobal:1",
				kind: "pageGlobal",
				property: "$.fn.dataTable.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "datatables:pageGlobal:2",
				kind: "pageGlobal",
				property: "jQuery.fn.dataTable.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:datatables:datatables.net:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "handsontable",
		name: "Handsontable",
		website: "https://handsontable.com",
		description: "Handsontable is a JavaScript component that combines data grid features with spreadsheet-like UX.",
		icon: "Handsontable.svg",
		categories: [
			"table-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "handsontable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?(?:jquery\\.)?handsontable(?:\\.full)?(?:\\.min)?(?:\\.[\\w]+)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "handsontable:pageGlobal:1",
				kind: "pageGlobal",
				property: "Handsontable",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "masonry",
		name: "Masonry",
		website: "https://masonry.desandro.com",
		description: "Masonry is a JavaScript library that enables a cascading grid layout, positioning elements based on available vertical space for an optimized, gap-free arrangement.",
		categories: [
			"table-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "masonry:pageGlobal:0",
				kind: "pageGlobal",
				property: "Masonry.Item",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "tablesorter",
		name: "Tablesorter",
		website: "https://mottie.github.io/tablesorter/",
		description: "Flexible client-side table sorting.",
		categories: [
			"table-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "tablesorter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)[-\\/](?:dist\\/js\\/)?)?(?:jquery\\.)?tablesorter(?:[\\.\\/]pager)?(?:-custom-controls)?(?:\\.widgets)?(?:\\.min)?\\.js"),
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
		id: "tabulator",
		name: "Tabulator",
		website: "https://tabulator.info/",
		description: "Tabulator is a JavaScript tool for creating interactive tables and data grids.",
		icon: "Tabulator.svg",
		categories: [
			"table-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "tabulator:pageGlobal:0",
				kind: "pageGlobal",
				property: "Tabulator",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "wookmark",
		name: "WookMark",
		website: "https://wookmark.com",
		description: "WookMark is a plugin for laying out elements of varying heights in a column-based grid.",
		icon: "WookMark.svg",
		categories: [
			"table-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "wookmark:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wookmark\\.min\\.js(?:\\?ver=([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wookmark:pageGlobal:1",
				kind: "pageGlobal",
				property: "Wookmark",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
