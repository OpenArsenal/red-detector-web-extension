import type { TechnologyDefinition } from '../../types';

export const clarityTechnologyDefinition = {
	id: "clarity",
	name: "Clarity",
	website: "https://clarity.microsoft.com/",
	description: "Free product that captures how people use your site. Setup is easy and you will start getting data in minutes.",
	categories: [
		"analytics",
	],
	rules: [
		{
			id: "clarity:scriptContent:modern:0",
			kind: "scriptContent",
			pattern: new RegExp("Error CL001: Multiple Clarity tags detected"),
			confidence: 65,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "clarity:scriptContent:modern:1",
			kind: "scriptContent",
			pattern: new RegExp("['\"]claritySheetId['\"]"),
			confidence: 65,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "clarity:scriptContent:modern:2",
			kind: "scriptContent",
			pattern: new RegExp("['\"]clarityOperationCount['\"]"),
			confidence: 65,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "clarity:resourceUrl:modern:3",
			kind: "resourceUrl",
			pattern: new RegExp("clarity\\.ms"),
			confidence: 75,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
		{
			id: "clarity:resourceUrl:modern:4",
			kind: "resourceUrl",
			pattern: new RegExp("clarity\\.js"),
			confidence: 75,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
	],
} as const satisfies TechnologyDefinition;
