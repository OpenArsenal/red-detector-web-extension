import type { TechnologyDefinition } from '../../types';

export const closureTechnologyDefinition = {
	id: "closure",
	name: "Closure",
	website: "https://developers.google.com/closure/compiler",
	description: "JavaScript minifier and optimizer",
	categories: [
		"minifier",
	],
	rules: [
		{
			id: "closure:scriptContent:modern:0",
			kind: "scriptContent",
			pattern: new RegExp("var [$_a-z]_=function\\([$_a-z]_,[$_a-z]_\\)\\{return [$_a-z]_[+\\-*/][$_a-z]_\\}"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "closure:scriptContent:modern:1",
			kind: "scriptContent",
			pattern: new RegExp("this\\.[$_a-z]_=\\d+(?:,this\\.[$_a-z]_=\\d+){1,}"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "closure:scriptContent:modern:2",
			kind: "scriptContent",
			pattern: new RegExp("[\"']undefined[\"']==typeof [$_a-z]\\b"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "closure:scriptContent:modern:3",
			kind: "scriptContent",
			pattern: new RegExp("[=!]=(?:=)?!(?:0|1)(?!\\d)(?:&&|\\|\\||\\}|\\))"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "closure:scriptContent:modern:4",
			kind: "scriptContent",
			pattern: new RegExp("\\{[$_a-z]:(?:\\d+|!0|!1)(?:,[$_a-z]:(?:\\d+|!0|!1))*\\}"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "closure:resourceUrl:modern:5",
			kind: "resourceUrl",
			pattern: new RegExp("\\.closure\\.min\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
		{
			id: "closure:resourceUrl:modern:6",
			kind: "resourceUrl",
			pattern: new RegExp("\\.cc\\.min\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
		{
			id: "closure:resourceUrl:modern:7",
			kind: "resourceUrl",
			pattern: new RegExp("\\.[a-f0-9]{8}\\.closure\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
	],
} as const satisfies TechnologyDefinition;
