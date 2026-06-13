import type { TechnologyDefinition } from '../../types';

export const vuexTechnologyDefinition = {
	id: "vuex",
	name: "Vuex",
	website: "https://vuex.vuejs.org/",
	description: "Vuex is a state management pattern + library for Vue.js applications.",
	icon: "vue.svg",
	categories: [
		"widgets-misc",
	],
	rules: [
		{
			id: "vuex:jsGlobal:0",
			kind: "jsGlobal",
			property: "Vuex.version",
			valuePattern: new RegExp("(.*)"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Page-owned global matches a known technology marker.",
		},
	],
	metadata: {
		oss: true,
	},
	implies: [
		"vue-js",
	],
} as const satisfies TechnologyDefinition;
