import type { TechnologyDefinition } from '../../types';

export const priorityHintsTechnologyDefinition = {
	id: "priority-hints",
	name: "Priority Hints",
	website: "https://wicg.github.io/priority-hints/",
	description: "Priority Hints exposes a mechanism for developers to signal a relative priority for browsers to consider when fetching resources.",
	icon: "Priority Hints.svg",
	categories: [
		"widgets-misc",
	],
	rules: [
		{
			id: "priority-hints:dom:0",
			kind: "dom",
			selector: "iframe[fetchpriority], img[fetchpriority], script[fetchpriority], link[fetchpriority]",
			confidence: 45,
			description: "DOM uses the fetchpriority attribute. This is a browser resource-loading hint, not monitoring/error-tracking technology, so keep it below the default display threshold.",
		},
	],
} as const satisfies TechnologyDefinition;
