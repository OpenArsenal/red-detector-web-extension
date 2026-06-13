import type { TechnologyDefinition } from '../../types';

export const uglifyTechnologyDefinition = {
	id: "uglify",
	name: "Uglify",
	website: "https://lisperator.net/uglifyjs/",
	description: "JavaScript parser, mangler, compressor, and beautifier toolkit",
	categories: [
		"minifier",
	],
	rules: [
		{
			id: "uglify:scriptContent:modern:0",
			kind: "scriptContent",
			pattern: new RegExp("^!function\\([a-z],\\s*[a-z]\\)\\{.{0,50}?\\}\\((?:window|this)\\)"),
			confidence: 55,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "uglify:scriptContent:modern:1",
			kind: "scriptContent",
			pattern: new RegExp("function [a-z]\\([a-z],\\s*[a-z]\\)\\{return [a-z][+\\-*/][a-z]\\}"),
			confidence: 55,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "uglify:scriptContent:modern:2",
			kind: "scriptContent",
			pattern: new RegExp("(?:[=!]=)!(?:0|1)(?!\\d)"),
			confidence: 55,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "uglify:scriptContent:modern:3",
			kind: "scriptContent",
			pattern: new RegExp("\\((?:[a-z]=(?:[a-z]\\.(?:length|id|name)),?){2,}\\s*[a-z]\\)"),
			confidence: 55,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "uglify:scriptContent:modern:4",
			kind: "scriptContent",
			pattern: new RegExp("\\[[\"'](?:[gs]et|on|handle)[^\"']+[\"']\\+[a-z]\\]"),
			confidence: 55,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "uglify:resourceUrl:modern:5",
			kind: "resourceUrl",
			pattern: new RegExp("\\.uglify(?:js)?\\.(?:min\\.)?js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
		{
			id: "uglify:resourceUrl:modern:6",
			kind: "resourceUrl",
			pattern: new RegExp("\\.min\\.[a-f0-9]{8}\\.ugly\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
	],
} as const satisfies TechnologyDefinition;
