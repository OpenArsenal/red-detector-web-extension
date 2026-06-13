import type { TechnologyDefinition } from '../../types';

export const babelMinifyTechnologyDefinition = {
	id: "babel-minify",
	name: "Babel Minify",
	website: "https://babeljs.io/docs/en/babel-minify",
	description: "Minify JavaScript using Babel",
	categories: [
		"minifier",
	],
	rules: [
		{
			id: "babel-minify:scriptContent:modern:0",
			kind: "scriptContent",
			pattern: new RegExp("\\([$_a-z]=\\d+,[$_a-z]=\\d+,[$_a-z][+\\-*/][$_a-z]\\)"),
			confidence: 55,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "babel-minify:scriptContent:modern:1",
			kind: "scriptContent",
			pattern: new RegExp("\\|\\s*0(?!\\d)"),
			confidence: 55,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "babel-minify:scriptContent:modern:2",
			kind: "scriptContent",
			pattern: new RegExp("[\"']production[\"']===[\"']production[\"']\\&\\&"),
			confidence: 55,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "babel-minify:resourceUrl:modern:3",
			kind: "resourceUrl",
			pattern: new RegExp("\\.babel\\.min\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
		{
			id: "babel-minify:resourceUrl:modern:4",
			kind: "resourceUrl",
			pattern: new RegExp("\\.min\\.babel\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
	],
} as const satisfies TechnologyDefinition;
