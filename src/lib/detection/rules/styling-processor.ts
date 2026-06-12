import type { TechnologyDefinition } from '../types';

export const stylingProcessorTechnologyDefinitions = [
	{
		id: "emotion",
		name: "Emotion",
		website: "https://emotion.sh",
		description: "Emotion is a library designed for writing CSS styles with JavaScript.",
		icon: "Emotion.svg",
		categories: [
			"styling-processor",
			"ui-library",
			"framework",
			"developer-tooling"
		],
		rules: [
			{
				id: "emotion:dom:0",
				kind: "dom",
				selector: "style[data-emotion], style[data-emotion-css]",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "semantic-ui",
		name: "Semantic UI",
		website: "https://semantic-ui.com/",
		description: "Semantic UI is a front-end development framework, powered by LESS and jQuery.",
		icon: "Semantic-ui.svg",
		categories: [
			"styling-processor",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "semantic-ui:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+semantic(?:\\.min)\\.css\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "semantic-ui:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/semantic(?:-([\\d.]+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "semantic-ui:dom:2",
				kind: "dom",
				selector: "link[href*='/semantic.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "stitches",
		name: "Stitches",
		website: "https://stitches.dev",
		description: "Stitches is a is a CSS-in-JS styling framework with near-zero runtime, SSR, and multi-variant support.",
		icon: "Stitches.svg",
		categories: [
			"styling-processor",
			"ui-library",
			"framework",
			"developer-tooling"
		],
		rules: [
			{
				id: "stitches:dom:0",
				kind: "dom",
				selector: "style#stitches",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "stitches:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^c-[A-Za-z]{5}$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "styled-components",
		name: "styled-components",
		website: "https://styled-components.com",
		description: "Styled components is a CSS-in-JS styling framework that uses tagged template literals in JavaScript.",
		icon: "styled-components.svg",
		categories: [
			"styling-processor",
			"ui-library",
			"framework",
			"developer-tooling"
		],
		rules: [
			{
				id: "styled-components:pageGlobal:1",
				kind: "pageGlobal",
				property: "styled",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"react"
		],
		metadata: {
			saas: false,
			oss: false
		}
	}
] as const satisfies readonly TechnologyDefinition[];
