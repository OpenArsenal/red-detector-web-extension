import type { TechnologyDefinition } from '../../types';

export const flexboxLayoutTechnologyDefinition = {
	id: "flexbox-layout",
	name: "CSS Flexbox Layout",
	website: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
	description: "Uses CSS Flexible Box layout declarations.",
	categories: [
		"styling-processor",
	],
	rules: [
		{
			id: "flexbox-layout:html:0",
			kind: "html",
			pattern: new RegExp("display\\s*:\\s*(?:inline-)?flex\\b|flex-direction\\s*:|align-items\\s*:|justify-content\\s*:", "i"),
			confidence: 70,
			description: "Inline CSS uses Flexbox layout.",
		},
		{
			id: "flexbox-layout:stylesheetContent:0",
			kind: "stylesheetContent",
			pattern: new RegExp("display\\s*:\\s*(?:inline-)?flex\\b|flex-direction\\s*:|align-items\\s*:|justify-content\\s*:", "i"),
			confidence: 85,
			description: "Stylesheet CSS uses Flexbox layout.",
		},
	],
} as const satisfies TechnologyDefinition;
