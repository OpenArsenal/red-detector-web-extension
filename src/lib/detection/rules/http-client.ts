import type { TechnologyDefinition } from '../types';

export const httpClientTechnologyDefinitions = [
	{
		id: "axios",
		name: "Axios",
		website: "https://github.com/axios/axios",
		description: "Promise based HTTP client for the browser and node.js",
		icon: "Axios.svg",
		categories: [
			"http-client",
			"developer-tooling"
		],
		rules: [
			{
				id: "axios:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/axios(@|/)([\\d.]+)(?:/[a-z]+)?/axios(?:.min)?\\.js"),
				version: { source: "match", group: 2 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "axios:pageGlobal:1",
				kind: "pageGlobal",
				property: "axios.get",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:axios:axios:*:*:*:*:*:node.js:*:*"
		}
	}
] as const satisfies readonly TechnologyDefinition[];
