import type { TechnologyDefinition } from '../../types';

export const terserTechnologyDefinition = {
	id: "terser",
	name: "Terser",
	website: "https://terser.org/",
	description: "JavaScript parser, mangler, compressor, and beautifier toolkit",
	categories: [
		"minifier",
	],
	rules: [
		{
			id: "terser:scriptContent:modern:0",
			kind: "scriptContent",
			pattern: new RegExp("^\\(\\(\\)\\s*=>\\s*\\{\"use strict\";(?:var|let|const)\\s+[a-zA-Z$_]\\s*=\\s*\\{"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "terser:scriptContent:modern:1",
			kind: "scriptContent",
			pattern: new RegExp("(?:return|[=!]=)\\s*void\\s*0\\b"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "terser:scriptContent:modern:2",
			kind: "scriptContent",
			pattern: new RegExp("(?:\\(|function\\s*)[a-zA-Z$_][a-zA-Z0-9$_]*,\\s*\\.\\.\\.[$_a-z]\\)\\s*[={]"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "terser:scriptContent:modern:3",
			kind: "scriptContent",
			pattern: new RegExp(",([a-zA-Z$_][a-zA-Z0-9$_]*)\\s*:\\s*\\1(?=\\}|,)"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "terser:resourceUrl:modern:4",
			kind: "resourceUrl",
			pattern: new RegExp("\\.terser\\.(?:min\\.)?js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
		{
			id: "terser:resourceUrl:modern:5",
			kind: "resourceUrl",
			pattern: new RegExp("\\.min\\.[a-f0-9]{8}\\.terser\\.js$"),
			confidence: 45,
			description: "Resource filename or URL matches a modern tooling marker.",
		},
	],
} as const satisfies TechnologyDefinition;
