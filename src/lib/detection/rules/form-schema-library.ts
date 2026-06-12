import type { TechnologyDefinition } from '../types';

export const formSchemaLibraryTechnologyDefinitions = [
	{
		id: "formalize-css",
		name: "Formalize CSS",
		website: "https://formalize.me",
		description: "Formalize CSS is a stylesheet that standardizes the appearance and behavior of HTML form elements across browsers to ensure consistent rendering.",
		icon: "Formalize.svg",
		categories: [
			"form-schema-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "formalize-css:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/js/jquery\\.formalize\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "formalize-css:pageGlobal:1",
				kind: "pageGlobal",
				property: "FORMALIZE.init",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	}
] as const satisfies readonly TechnologyDefinition[];
