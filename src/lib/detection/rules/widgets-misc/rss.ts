import type { TechnologyDefinition } from '../../types';

export const rssTechnologyDefinition = {
	id: "rss",
	name: "RSS",
	website: "https://www.rssboard.org/rss-specification",
	description: "RSS is a family of web feed formats used to publish frequently updated works—such as blog entries, news headlines, audio, and video—in a standardized format.",
	icon: "RSS.svg",
	categories: [
		"widgets-misc",
	],
	rules: [
		{
			id: "rss:dom:0",
			kind: "dom",
			selector: "link[type*='application']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "rss:dom:1",
			kind: "dom",
			selector: "rss",
			description: "DOM selector matches a known technology marker.",
		},
	],
} as const satisfies TechnologyDefinition;
