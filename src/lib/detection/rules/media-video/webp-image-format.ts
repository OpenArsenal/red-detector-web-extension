import type { TechnologyDefinition } from '../../types';

export const webpImageFormatTechnologyDefinition = {
	id: "webp-image-format",
	name: "WebP Image Assets",
	website: "https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image",
	description: "References WebP image assets.",
	categories: [
		"media-video",
	],
	rules: [
		{
			id: "webp-image-format:html:0",
			kind: "html",
			pattern: new RegExp("\\.webp(?:[?\"\\'\\s>)])", "i"),
			confidence: 90,
			description: "Document references WebP assets.",
		},
		{
			id: "webp-image-format:resourceUrl:0",
			kind: "resourceUrl",
			pattern: new RegExp("\\.webp(?:\\?|$)", "i"),
			confidence: 100,
			description: "Loaded resource URL references a WebP asset.",
		},
	],
} as const satisfies TechnologyDefinition;
