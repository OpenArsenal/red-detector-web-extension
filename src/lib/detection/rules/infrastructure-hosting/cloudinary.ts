import type { TechnologyDefinition } from '../../types';

export const cloudinaryTechnologyDefinition = {
	id: "cloudinary",
	name: "Cloudinary",
	website: "https://cloudinary.com",
	description: "Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimisations to delivery.",
	icon: "Cloudinary.svg",
	categories: [
		"infrastructure-hosting",
		"media-video",
	],
	rules: [
		{
			id: "cloudinary:dom:0",
			kind: "dom",
			selector: "img[src*='.cloudinary.com/'], img[data-src*='.cloudinary.com/']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "cloudinary:jsGlobal:1",
			kind: "jsGlobal",
			property: "_cloudinary",
			description: "Page-owned global matches a known technology marker.",
		},
		{
			id: "cloudinary:header:2",
			kind: "header",
			key: "Content-Security-Policy",
			valuePattern: new RegExp("player\\.cloudinary\\.com", "i"),
			description: "Response header matches a known technology marker.",
		},
		{
			id: "cloudinary:dom:3",
			kind: "dom",
			selector: "img[src*='.cloudinary.com/'], img[data-src*='.cloudinary.com/'], link[href*='.cloudinary.com/']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "cloudinary:header:4",
			kind: "header",
			key: "content-security-policy",
			valuePattern: new RegExp("player\\.cloudinary\\.com", "i"),
			description: "Response header matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"freemium",
			"mid",
			"poa",
			"recurring",
		],
	},
} as const satisfies TechnologyDefinition;
