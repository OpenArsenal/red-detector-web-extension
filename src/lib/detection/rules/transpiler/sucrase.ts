import type { TechnologyDefinition } from '../../types';

export const sucraseTechnologyDefinition = {
	id: "sucrase",
	name: "Sucrase",
	website: "https://sucrase.io/",
	description: "A JavaScript compiler that allows developers to use next-generation JavaScript, today.",
	categories: [
		"transpiler",
	],
	rules: [
		{
			id: "sucrase:scriptContent:modern:0",
			kind: "scriptContent",
			pattern: new RegExp("exports\\.__esModule\\s*=\\s*true;\\s*exports\\.\\w+\\s*=\\s*void\\s*0"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "sucrase:scriptContent:modern:1",
			kind: "scriptContent",
			pattern: new RegExp("exports\\.default\\s*=\\s*\\w+;\\s*module\\.exports\\s*=\\s*exports\\.default"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "sucrase:scriptContent:modern:2",
			kind: "scriptContent",
			pattern: new RegExp("exports\\.\\{[^}]+\\}\\s*=\\s*\\w+[;,]\\s*exports\\."),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "sucrase:scriptContent:modern:3",
			kind: "scriptContent",
			pattern: new RegExp("React\\.createElement\\(\\s*[\\w$]+,\\s*(?:\\{[^}]*\\}|null),\\s*(?:[^;,]+)\\)"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "sucrase:scriptContent:modern:4",
			kind: "scriptContent",
			pattern: new RegExp("React\\.createElement\\(React\\.Fragment,\\s*null,\\s*(?:[^;,]+)\\)"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "sucrase:scriptContent:modern:5",
			kind: "scriptContent",
			pattern: new RegExp("Object\\.defineProperty\\(\\w+,\\s*[\"']\\w+[\"'],\\s*\\{\\s*enumerable:\\s*true,\\s*value:\\s*(?:[^}]+)\\}\\)"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "sucrase:scriptContent:modern:6",
			kind: "scriptContent",
			pattern: new RegExp("var\\s+(\\w+)\\s*=\\s*(?:require\\([\"'][^\"']+[\"']\\)|\\w+)(?:\\s*,\\s*\\w+\\s*=\\s*(?:require\\([\"'][^\"']+[\"']\\)|\\w+))*;"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
		{
			id: "sucrase:scriptContent:modern:7",
			kind: "scriptContent",
			pattern: new RegExp("var\\s*\\{\\s*(?:\\w+\\s*(?::\\s*\\w+)?\\s*(?:,\\s*\\w+\\s*(?::\\s*\\w+)?)*\\s*)\\}\\s*=\\s*\\w+;"),
			confidence: 45,
			description: "Bundled script content matches a modern tooling marker.",
		},
	],
} as const satisfies TechnologyDefinition;
