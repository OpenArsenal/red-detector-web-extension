import type { TechnologyDefinition } from '../../types';

export const cssGridLayoutTechnologyDefinition = {
	id: "css-grid-layout",
	name: "CSS Grid Layout",
	website: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
	description: "Uses CSS Grid layout declarations.",
	categories: [
		"styling-processor",
	],
	rules: [
		{
			id: "css-grid-layout:html:0",
			kind: "html",
			pattern: new RegExp("display\\s*:\\s*(?:inline-)?grid\\b|grid-template-(?:columns|rows)\\s*:", "i"),
			confidence: 80,
			description: "Inline CSS uses CSS Grid layout.",
		},
		{
			id: "css-grid-layout:stylesheetContent:0",
			kind: "stylesheetContent",
			pattern: new RegExp("display\\s*:\\s*(?:inline-)?grid\\b|grid-template-(?:columns|rows)\\s*:", "i"),
			confidence: 90,
			description: "Stylesheet CSS uses CSS Grid layout.",
		},
	],
} as const satisfies TechnologyDefinition;
