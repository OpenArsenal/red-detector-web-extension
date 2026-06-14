import type { TechnologyDefinition } from '../../types';

export const avifImageFormatTechnologyDefinition = {
	id: "avif-image-format",
	name: "AVIF Image Assets",
	website: "https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image",
	description: "References AVIF image assets, a modern image format based on the AV1 image codec.",
	categories: [
		"media-video",
	],
	rules: [
		{
			id: "avif-image-format:html:extension",
			kind: "html",
			pattern: new RegExp("\\.avif(?:[?\"'\\s>)])", "i"),
			confidence: 90,
			description: "Document references AVIF assets.",
		},
		{
			id: "avif-image-format:resourceUrl:extension",
			kind: "resourceUrl",
			pattern: new RegExp("\\.avif(?:\\?|$)", "i"),
			confidence: 100,
			description: "Loaded resource URL references an AVIF asset.",
		},
		{
			id: "avif-image-format:link:type",
			kind: "link",
			typePattern: new RegExp("^image/avif$", "i"),
			confidence: 100,
			description: "Document links to an AVIF typed resource.",
		},
	],
} as const satisfies TechnologyDefinition;
