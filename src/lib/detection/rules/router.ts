import type { TechnologyDefinition } from '../types';

export const routerTechnologyDefinitions = [
{
		id: "page-js",
		name: "Page.js",
		website: "https://github.com/visionmedia/page.js",
		description: "Page.js is a micro client-side router designed to handle client-side routing within web applications.",
		categories: [
			"router",
			"developer-tooling"
		],
		rules: [
{
			id: "page-js:pageGlobal:0",
			kind: "pageGlobal",
			property: "page.Route",
			description: "Page-owned global matches a known technology marker."
		}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
{
		id: "tanstack",
		name: "TanStack",
		website: "https://tanstack.com",
		description: "TanStack is a set of headless JavaScript libraries for building web application features such as data fetching, tables, routing, virtualization, and state management.",
		icon: "TanStack.svg",
		categories: [
			"router",
			"developer-tooling"
		],
		rules: [
{
			id: "tanstack:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("/static/.*npm\\.tanstack.*\\.js"),
			description: "Script source URL matches a known technology marker."
		},
{
			id: "tanstack:scriptContent:1",
			kind: "scriptContent",
			pattern: new RegExp("(?:https?:)?\\/\\/(?:www\\.)?tanstack\\.com(?:\\/[^\"'>]*)?"),
			description: "Script content contains a bounded technology signature."
		},
{
			id: "tanstack:dom:2",
			kind: "dom",
			selector: "link[href*='@tanstack']",
			description: "DOM selector matches a known technology marker."
		}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
{
		id: "umijs",
		name: "UmiJs",
		website: "https://umijs.org",
		description: "UmiJs is a scalable, enterprise-class frontend application framework that supports both configuration and conventional routing while maintaining functional completeness, such as dynamic routing, nested routing, and permission routing.",
		icon: "UmiJs.svg",
		categories: [
			"router",
			"ui-library",
			"framework"
		],
		rules: [
{
			id: "umijs:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("/umi(\\.[\\w\\d]{8})?\\.js"),
			description: "Script source URL matches a known technology marker."
		},
{
			id: "umijs:pageGlobal:1",
			kind: "pageGlobal",
			property: "g_umi.version",
			valuePattern: new RegExp("([\\d\\.]+)"),
			version: { source: "match", group: 1 },
			description: "Page-owned global matches a known technology marker."
		}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
