import type { TechnologyDefinition } from '../../types';

export const reactReduxTechnologyDefinition = {
	id: "react-redux",
	name: "React Redux",
	website: "https://react-redux.js.org/",
	description: "React Redux is the official React binding for Redux.",
	icon: "Redux.svg",
	categories: [
		"ui-library",
	],
	rules: [
		{
			id: "react-redux:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/react-redux(@|\\/)([\\d.]+)(?:\\/[a-z]+)?\\/react-redux(?:.min)?\\.js"),
			version: {
				source: "match",
				group: 2,
			},
			description: "Script source URL matches a known technology marker.",
		},
	],
	implies: [
		"react",
		"redux",
	],
} as const satisfies TechnologyDefinition;
