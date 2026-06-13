import type { TechnologyDefinition } from '../../types';

export const prepackTechnologyDefinition = {
	id: "prepack",
	name: "Prepack",
	website: "https://prepack.io/",
	description: "Partial evaluator for JavaScript",
	categories: [
		"minifier",
	],
	rules: [
		{
			id: "prepack:scriptContent:modern:0",
			kind: "scriptContent",
			pattern: new RegExp("(?:\\b\\d+(?:\\.\\d+)?\\b[+\\-*/]){3,}\\b\\d+(?:\\.\\d+)?\\b"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "prepack:scriptContent:modern:1",
			kind: "scriptContent",
			pattern: new RegExp("if\\(!0\\)\\{(?:[^{}]|{[^{}]*})*\\}"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "prepack:scriptContent:modern:2",
			kind: "scriptContent",
			pattern: new RegExp("[\"'][a-zA-Z0-9_$]{10,}[\"']"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "prepack:scriptContent:modern:3",
			kind: "scriptContent",
			pattern: new RegExp("(?:[$_a-z]+=\\d+;){3,}"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "prepack:resourceUrl:modern:4",
			kind: "resourceUrl",
			pattern: new RegExp("\\.prepack\\.min\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
		{
			id: "prepack:resourceUrl:modern:5",
			kind: "resourceUrl",
			pattern: new RegExp("\\.pp\\.min\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
		{
			id: "prepack:resourceUrl:modern:6",
			kind: "resourceUrl",
			pattern: new RegExp("\\.[a-f0-9]{8}\\.prepack\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
	],
} as const satisfies TechnologyDefinition;
