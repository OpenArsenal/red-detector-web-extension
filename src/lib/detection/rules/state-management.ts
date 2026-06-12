import type { TechnologyDefinition } from '../types';

export const stateManagementTechnologyDefinitions = [
	{
		id: "mobx",
		name: "MobX",
		website: "https://mobx.js.org",
		icon: "MobX.svg",
		categories: [
			"state-management",
			"developer-tooling"
		],
		rules: [
			{
				id: "mobx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/([\\d\\.]+))?/mobx(?:\\.[a-z]+){0,2}\\.js(?:$|\\?)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mobx:pageGlobal:1",
				kind: "pageGlobal",
				property: "__mobxGlobal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mobx:pageGlobal:2",
				kind: "pageGlobal",
				property: "__mobxGlobals",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mobx:pageGlobal:3",
				kind: "pageGlobal",
				property: "__mobxInstanceCount",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "redux",
		name: "Redux",
		website: "https://redux.js.org",
		description: "Redux is a predictable state container for JavaScript applications.",
		icon: "Redux.svg",
		categories: [
			"state-management",
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "redux:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/redux(@|/)([\\d.]+)(?:/[a-z]+)?/redux(?:.min)?\\.js"),
				version: { source: "match", group: 2 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "redux:dom:1",
				kind: "dom",
				selector: "link[href*='//redux.js.org']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "redux:pageGlobal:2",
				kind: "pageGlobal",
				property: "ReactRedux",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "redux:pageGlobal:3",
				kind: "pageGlobal",
				property: "Redux.applyMiddleware",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "redux:pageGlobal:4",
				kind: "pageGlobal",
				property: "__REDUX_DEVTOOLS_EXTENSION__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
