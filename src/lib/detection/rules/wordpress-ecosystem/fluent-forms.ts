import type { TechnologyDefinition } from '../../types';

export const fluentFormsTechnologyDefinition = {
	id: "fluent-forms",
	name: "Fluent Forms",
	website: "https://fluentforms.com",
	description: "Fluent Forms is a drag-and-drop form builder plugin for WordPress.",
	icon: "Fluent Forms.svg",
	categories: [
		"wordpress-ecosystem",
		"surveys-feedback",
	],
	rules: [
		{
			id: "fluent-forms:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/fluentform\\/assets\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "fluent-forms:dom:1",
			kind: "dom",
			selector: "form.frm-fluent-form",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "fluent-forms:dom:2",
			kind: "dom",
			selector: "input[name='__fluent_form_embded_post_id']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "fluent-forms:jsGlobal:3",
			kind: "jsGlobal",
			property: "fluentFormVars",
			description: "Page-owned global matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"freemium",
			"low",
			"recurring",
		],
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
