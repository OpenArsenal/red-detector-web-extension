import type { TechnologyDefinition } from '../types';

export const bundlerTechnologyDefinitions = [
	{
		id: "bool-typescript",
		name: "Bool TypeScript",
		website: "https://boolts.dev",
		description: "Bool TypeScript is a framework optimized for high performance, leveraging Bun.sh to accelerate JavaScript and TypeScript application development.",
		icon: "BoolTypeScript.svg",
		categories: [
			"bundler",
			"transpiler",
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "bool-typescript:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Bool Typescript$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "turbopack",
		name: "Turbopack",
		website: "https://nextjs.org/docs/app/api-reference/turbopack",
		description: "Turbopack is an incremental bundler for JavaScript and TypeScript, written in Rust and integrated into the Next.js framework for optimized build performance.",
		icon: "Turbopack.svg",
		categories: [
			"bundler",
			"transpiler",
			"developer-tooling"
		],
		rules: [
			{
				id: "turbopack:pageGlobal:0",
				kind: "pageGlobal",
				property: "TURBOPACK.push",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"next-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "vike",
		name: "Vike",
		website: "https://vike.dev",
		description: "Vike is a framework that enhances Vite applications with server-side rendering (SSR) and static site generation (SSG) capabilities, allowing for flexible integration and progressive enhancement​.",
		icon: "Vike.svg",
		categories: [
			"bundler",
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "vike:dom:0",
				kind: "dom",
				selector: "script#vike_pageContext",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vike:pageGlobal:1",
				kind: "pageGlobal",
				property: "__vike",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"vite",
			"typescript"
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
