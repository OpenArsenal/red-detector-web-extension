import type { TechnologyDefinition } from '../../types';

export const ewwwImageOptimizerTechnologyDefinition = {
	id: "ewww-image-optimizer",
	name: "EWWW Image Optimizer",
	website: "https://github.com/nosilver4u/ewww-image-optimizer",
	description: "EWWW Image Optimizer is an image optimisation WordPress plugin designed to improve the performance of your website.",
	icon: "EWWW Image Optimizer.png",
	categories: [
		"wordpress-ecosystem",
		"monitoring-error-tracking",
	],
	rules: [
		{
			id: "ewww-image-optimizer:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/ewww-image-optimizer\\/"),
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "ewww-image-optimizer:jsGlobal:1",
			kind: "jsGlobal",
			property: "ewww_webp_supported",
			description: "Page-owned global matches a known technology marker.",
		},
	],
	metadata: {
		oss: true,
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
