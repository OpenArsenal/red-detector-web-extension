import type { TechnologyDefinition } from '../../types';

export const buddypressTechnologyDefinition = {
	id: "buddypress",
	name: "BuddyPress",
	website: "https://buddypress.org",
	description: "BuddyPress is designed to allow schools, companies, sports teams, or any other niche community to start their own social network or communication tool.",
	icon: "BuddyPress.svg",
	categories: [
		"wordpress-ecosystem",
	],
	rules: [
		{
			id: "buddypress:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/buddypress\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Script source URL matches a known technology marker.",
		},
	],
	metadata: {
		cpe: "cpe:2.3:a:buddypress:buddypress:*:*:*:*:*:wordpress:*:*",
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
