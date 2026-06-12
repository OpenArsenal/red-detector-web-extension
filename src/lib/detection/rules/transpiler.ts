import type { TechnologyDefinition } from '../types';

export const transpilerTechnologyDefinitions = [
	{
		id: "canyon",
		name: "Canyon",
		website: "https://docs.canyonjs.io",
		description: "Canyon is a tool that enables JavaScript coverage collection and real-time report generation through Babel configuration, addressing coverage-gathering challenges in end-to-end testing.",
		icon: "Canyon.svg",
		categories: [
			"transpiler",
			"developer-tooling"
		],
		rules: [
			{
				id: "canyon:pageGlobal:0",
				kind: "pageGlobal",
				property: "__coverage__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "canyon:pageGlobal:1",
				kind: "pageGlobal",
				property: "canyonShowDecorations",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "wijmo",
		name: "Wijmo",
		website: "https://developer.mescius.com/wijmo",
		description: "Wijmo is a JavaScript UI component library built in TypeScript, ideal for developing lightweight, high-speed HTML5/JavaScript applications with no dependencies, and designed for enterprise use.",
		icon: "Wijmo.svg",
		categories: [
			"transpiler",
			"developer-tooling"
		],
		rules: [
			{
				id: "wijmo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/Scripts/Acts/Wijmo/wijmo\\.min\\.js\\?v=([\\d]+\\.\\d+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wijmo:pageGlobal:1",
				kind: "pageGlobal",
				property: "wijmo",
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
	}
] as const satisfies readonly TechnologyDefinition[];
