import type { TechnologyDefinition } from '../types';

export const domainParkingTechnologyDefinitions = [
	{
		id: "arsys-domain-parking",
		name: "Arsys Domain Parking",
		website: "https://www.arsys.es",
		description: "Arsys is a Spanish domain registrar.",
		icon: "arsys.svg",
		categories: [
			"domain-parking"
		],
		rules: [
			{
				id: "arsys-domain-parking:dom:0",
				kind: "dom",
				selector: "link[rel='stylesheet'][href*='arsys.es/css/parking2.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "godaddy-domain-parking",
		name: "GoDaddy Domain Parking",
		website: "https://www.godaddy.com",
		description: "GoDaddy is used as a web host and domain registrar.",
		icon: "GoDaddy.svg",
		categories: [
			"domain-parking"
		],
		rules: [
			{
				id: "godaddy-domain-parking:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("wsimg\\.com/parking-lander"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "js-org",
		name: "JS.org",
		website: "https://js.org",
		description: "JS.org is a provider of free subdomains for JavaScript-based projects.",
		icon: "JSOrg.svg",
		categories: [
			"domain-parking"
		],
		rules: [
			{
				id: "js-org:dom:0",
				kind: "dom",
				selector: "link[href*='.js.org/'][rel='canonical']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "verisign",
		name: "Verisign",
		website: "https://www.verisign.com",
		description: "Verisign is a provider of internet infrastructure services, known for its secure domain name registry.",
		icon: "Verisign.svg",
		categories: [
			"domain-parking"
		],
		rules: [
			{
				id: "verisign:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("seal\\.verisign\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	}
] as const satisfies readonly TechnologyDefinition[];
