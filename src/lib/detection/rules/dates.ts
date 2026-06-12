import type { TechnologyDefinition } from '../types';

export const datesTechnologyDefinitions = [
	{
		id: "day-js",
		name: "Day.js",
		website: "https://github.com/iamkun/dayjs",
		icon: "Day.js.svg",
		categories: [
			"dates",
			"developer-tooling"
		],
		rules: [
			{
				id: "day-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "dayjs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "moment-timezone",
		name: "Moment Timezone",
		website: "https://momentjs.com/timezone/",
		description: "Moment Timezone is a library built upon Moment.js, extending its capabilities to handle time zones in JavaScript. It allows developers to parse, manipulate, and display dates and times in various time zones, providing comprehensive support for time zone conversions and adjustments in web applications.",
		icon: "Moment Timezone.svg",
		categories: [
			"dates",
			"developer-tooling"
		],
		rules: [
			{
				id: "moment-timezone:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("moment-timezone(?:-data)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"moment-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "moment-js",
		name: "Moment.js",
		website: "https://momentjs.com",
		description: "Moment.js is a free and open-source JavaScript library that removes the need to use the native JavaScript Date object directly.",
		icon: "Moment.js.svg",
		categories: [
			"dates",
			"developer-tooling"
		],
		rules: [
			{
				id: "moment-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("moment(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "moment-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "moment",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "moment-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "moment.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:momentjs:moment:*:*:*:*:*:*:*:*"
		}
	}
] as const satisfies readonly TechnologyDefinition[];
