import type { TechnologyDefinition } from '../types';

export const securityTechnologyDefinitions = [
	{
		id: "accertify",
		name: "Accertify",
		website: "https://www.accertify.com/",
		description: "Accertify is a platform specialising in fraud prevention and chargeback management.",
		icon: "Accertify.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "accertify:dom:0",
				kind: "dom",
				selector: "div[id*='Accertify']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "adcaptcha",
		name: "adCAPTCHA",
		website: "https://adcaptcha.com",
		description: "adCAPTCHA is a security tool that integrates marketing and user experience to block bots while enhancing brand visibility, using dynamic content for varied challenges without collecting user data.",
		icon: "adCAPTCHA.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "adcaptcha:pageGlobal:0",
				kind: "pageGlobal",
				property: "adCAPTCHA",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adcaptcha:pageGlobal:1",
				kind: "pageGlobal",
				property: "adcaptcha_vars",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "akamai-bot-manager",
		name: "Akamai Bot Manager",
		website: "https://www.akamai.com/us/en/products/security/bot-manager.jsp",
		description: "Akamai Bot Manager detect bots using device fingerprinting bot signatures.",
		icon: "Akamai.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "akamai-bot-manager:cookie:0",
				kind: "cookie",
				key: "ak_bmsc",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "akamai-bot-manager:cookie:1",
				kind: "cookie",
				key: "bm_sv",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "akamai-bot-manager:cookie:2",
				kind: "cookie",
				key: "bm_sz",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"akamai"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "akamai-web-application-protector",
		name: "Akamai Web Application Protector",
		website: "https://www.akamai.com/us/en/products/security/web-application-protector-enterprise-waf-firewall-ddos-protection.jsp",
		description: "Akamai Web Application Protector is designed for companies looking for a more automated approach to web application firewall (WAF) and distributed denial-of-service (DDoS) security.",
		icon: "Akamai.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "akamai-web-application-protector:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ds-aksb-a\\.akamaihd\\.net/aksb.min.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "akamai-web-application-protector:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("aksb\\.min\\.js"),
				confidence: 50,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "akamai-web-application-protector:pageGlobal:2",
				kind: "pageGlobal",
				property: "AKSB",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"akamai"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "alibaba-cloud-verification-code",
		name: "Alibaba Cloud Verification Code",
		website: "https://help.aliyun.com/document_detail/193141.html",
		description: "Alibaba Cloud Verification Code is a security feature provided by Alibaba Cloud to help protect user accounts from unauthorised access.",
		icon: "Alibaba Cloud.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "alibaba-cloud-verification-code:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cf\\.aliyun\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "altcha",
		name: "Altcha",
		website: "https://altcha.org",
		description: "Altcha is a spam and abuse protection solution for websites and apps, offering a privacy-friendly Captcha and other tools designed with GDPR compliance to provide strong security while safeguarding user privacy.",
		icon: "Altcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "altcha:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("altcha\\.(org|js)"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "altcha:pageGlobal:1",
				kind: "pageGlobal",
				property: "ALTCHA_WIDGET_ATTRS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"freemium"
			]
		}
	},
	{
		id: "antibot-cloud",
		name: "AntiBot.Cloud",
		website: "https://antibot.cloud",
		description: "AntiBot.Cloud is a PHP script and cloud service to protect websites from bots and junk traffic.",
		categories: [
			"security"
		],
		rules: [
			{
				id: "antibot-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/antibot8/static/peel\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "antibot-cloud:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("AntiBot\\.Cloud\\sv\\.\\s([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "anubis",
		name: "Anubis",
		website: "https://anubis.techaro.lol",
		description: "Anubis is a system that evaluates the characteristics of incoming HTTP requests to determine their legitimacy and enhance website protection.",
		icon: "Anubis.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "anubis:cookie:0",
				kind: "cookie",
				key: "techaro.lol-anubis-auth",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "anubis:cookie:1",
				kind: "cookie",
				key: "techaro.lol-anubis-cookie-verification",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "apruvd",
		name: "Apruvd",
		website: "https://apruvd.com",
		description: "Apruvd is a fraud protection system designed to detect and prevent unauthorized or suspicious transactions.",
		icon: "Apruvd.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "apruvd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.apruvd\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "arcaptcha",
		name: "ARCaptcha",
		website: "https://arcaptcha.co",
		description: "ARCaptcha is a CAPTCHA system designed to enhance online security by preventing automated bots from accessing websites.",
		icon: "ARCaptcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "arcaptcha:pageGlobal:0",
				kind: "pageGlobal",
				property: "arcaptcha.checkboxCreatorRegistered",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "arkose-labs",
		name: "Arkose Labs",
		website: "https://www.arkoselabs.com",
		description: "Arkose Labs is a toolkit for fraud prevention that provides solutions to detect and mitigate malicious activity across digital platforms.",
		icon: "ArkoseLabs.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "arkose-labs:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.arkoselabs\\.com"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "arkose-labs:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.arkoselabs\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "aws-certificate-manager",
		name: "AWS Certificate Manager",
		website: "https://aws.amazon.com/certificate-manager/",
		description: "AWS Certificate Manager is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and your internal connected resources.",
		icon: "AWS Certificate Manager.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "aws-certificate-manager:certIssuer:0",
				kind: "certIssuer",
				description: "Certificate issuer matches a known technology marker.",
			}
		],
		implies: [
			"amazon-web-services"
		],
		metadata: {
			saas: true,
			oss: false,
			cpe: "cpe:2.3:a:awstats:awstats:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "aws-waf-captcha",
		name: "AWS WAF Captcha",
		website: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-captcha.html",
		description: "AWS WAF Captcha helps block unwanted bot traffic by requiring users to successfully complete challenges before their web request are allowed to reach AWS WAF protected resources.",
		icon: "AWS WAF Captcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "aws-waf-captcha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("captcha\\.awswaf\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aws-waf-captcha:responseHeader:1",
				kind: "responseHeader",
				key: "x-amzn-waf-action",
				valuePattern: new RegExp("^captcha$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"amazon-web-services"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "basic",
		name: "Basic",
		website: "https://tools.ietf.org/html/rfc7617",
		description: "Basic is an authetication method used by some web servers.",
		categories: [
			"security"
		],
		rules: [
			{
				id: "basic:responseHeader:0",
				kind: "responseHeader",
				key: "WWW-Authenticate",
				valuePattern: new RegExp("^Basic"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "blankshield",
		name: "Blankshield",
		website: "https://danielstjules.github.io/blankshield",
		description: "Blankshield is a security tool that prevents reverse tabnabbing phishing attacks by blocking exploitation of links that open in new browser tabs using _blank targets.",
		categories: [
			"security"
		],
		rules: [
			{
				id: "blankshield:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/js/blankshield/blankshield\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "blankshield:pageGlobal:1",
				kind: "pageGlobal",
				property: "blankshield.open",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "blue-triangle",
		name: "Blue Triangle",
		website: "https://bluetriangle.com",
		description: "Blue Triangle is a connected view of marketing, web performance, and third-party tag analytics while constantly monitoring website code for security vulnerabilities.",
		icon: "Blue Triangle.svg",
		categories: [
			"security",
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "blue-triangle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.btttag\\.com/btt\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "blue-triangle:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.btttag\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "blue-triangle:pageGlobal:2",
				kind: "pageGlobal",
				property: "_bttUtil.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"high",
				"recurring"
			]
		}
	},
	{
		id: "bugcrowd",
		name: "Bugcrowd",
		website: "https://www.bugcrowd.com",
		description: "Bugcrowd is a crowdsourced cybersecurity platform.",
		icon: "Bugcrowd.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "bugcrowd:dns:0",
				kind: "dns",
				valuePattern: new RegExp("bugcrowd-verification"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "buysafe",
		name: "BuySafe",
		website: "https://www.buysafe.com",
		description: "BuySafe is a website seal that signifies adherence to stringent safety standards, ensuring secure online transactions and safeguarding user data.",
		icon: "BuySafe.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "buysafe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("seal\\.buysafe\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "buysafe:pageGlobal:1",
				kind: "pageGlobal",
				property: "buySAFE",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "c-side",
		name: "c/side",
		website: "https://cside.dev",
		description: "c/side is a security solution that protects organizations from advanced client-side threats, including script injection, data skimming, and browser-based attacks.",
		icon: "cside.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "c-side:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cside\\.dev"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "captch-me",
		name: "Captch Me",
		website: "https://captchme.com",
		icon: "Captch Me.svg",
		categories: [
			"security",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "captch-me:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?://api\\.captchme\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "captch-me:pageGlobal:1",
				kind: "pageGlobal",
				property: "Captchme",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cleantalk",
		name: "CleanTalk",
		website: "https://cleantalk.org",
		description: "CleanTalk is an anti-spam plugin system that provides spam protection for various types of websites.",
		icon: "CleanTalk.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "cleantalk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("moderate\\.cleantalk\\.org/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cleantalk:pageGlobal:1",
				kind: "pageGlobal",
				property: "ctAjaxSetupAddCleanTalkDataBeforeSendAjax",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "clear",
		name: "Clear",
		website: "https://www.clearme.com",
		description: "Clear is a platform that offers secure identity verification.",
		icon: "Clear.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "clear:pageGlobal:0",
				kind: "pageGlobal",
				property: "ClearMe.Environments",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clear:pageGlobal:1",
				kind: "pageGlobal",
				property: "clearMeClientID",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "clickcease",
		name: "ClickCease",
		website: "https://www.clickcease.com",
		description: "ClickCease is an ad fraud and click-fraud detection and protection service software.",
		icon: "ClickCease.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "clickcease:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clickcease\\.com/monitor/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clickcease:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("www\\.clickcease\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "clickreport",
		name: "ClickReport",
		website: "https://www.clickreport.com",
		description: "ClickReport is a platform that provides PPC click fraud prevention by detecting and blocking invalid or malicious ad traffic.",
		icon: "ClickReport.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "clickreport:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("service\\.clickreport\\.com"),
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
	},
	{
		id: "cloudflare-bot-management",
		name: "Cloudflare Bot Management",
		website: "https://www.cloudflare.com/en-gb/products/bot-management/",
		description: "Cloudflare bot management solution identifies and mitigates automated traffic to protect websites from bad bots.",
		icon: "CloudFlare.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "cloudflare-bot-management:cookie:0",
				kind: "cookie",
				key: "__cf_bm",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"cloudflare"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "cloudflare-turnstile",
		name: "Cloudflare Turnstile",
		website: "https://www.cloudflare.com/products/turnstile",
		description: "Turnstile is Cloudflare's smart CAPTCHA alternative.",
		icon: "CloudFlare.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "cloudflare-turnstile:pageGlobal:0",
				kind: "pageGlobal",
				property: "turnstile",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"poa"
			]
		}
	},
	{
		id: "coinhave",
		name: "Coinhave",
		website: "https://coin-have.com/",
		description: "CoinHave is a cryptocurrency mining service.",
		icon: "coinhave.png",
		categories: [
			"security"
		],
		rules: [
			{
				id: "coinhave:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?://coin-have\\.com/c/[0-9a-zA-Z]{4}\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "coinhive",
		name: "CoinHive",
		website: "https://coinhive.com",
		description: "Coinhive is a cryptocurrency mining service.",
		icon: "CoinHive.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "coinhive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(?:coinhive|(authedmine))(?:\\.min)?\\.js"),
				version: { source: "match", template: "$1?opt-in:" },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "coinhive:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("coinhive\\.com/lib"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "coinhive:url:2",
				kind: "url",
				pattern: new RegExp("https?://cnhv\\.co/"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "coinhive:pageGlobal:3",
				kind: "pageGlobal",
				property: "CoinHive",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "coinhive-captcha",
		name: "CoinHive Captcha",
		website: "https://coinhive.com",
		description: "Coinhive Captcha provides captcha service that is simple to integrate, where your users’ devices need to solve a number of hashes, adjustable by you, in order to login or post a comment to your site.",
		icon: "CoinHive.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "coinhive-captcha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?://authedmine\\.com/(?:lib/captcha|captcha)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "coinhive-captcha:dom:1",
				kind: "dom",
				selector: "div.coinhive-captcha",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "coinimp",
		name: "Coinimp",
		website: "https://www.coinimp.com",
		description: "CoinImp is a cryptocurrency mining service.",
		icon: "coinimp.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "coinimp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?://www\\.hashing\\.win/scripts/min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "coinimp:pageGlobal:1",
				kind: "pageGlobal",
				property: "Client.Anonymous",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "combahton-flowshield",
		name: "Combahton FlowShield",
		website: "https://combahton.net",
		description: "Combahton FlowShield is a network security solution designed to protect networks and servers from various cyber threats, including DDoS attacks, malware, and other types of malicious traffic.",
		icon: "Combahton.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "combahton-flowshield:cookie:0",
				kind: "cookie",
				key: "FLOWPROXY-ORIGIN",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "combahton-flowshield:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("antiddos/flowproxy"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "combahton-flowshield:responseHeader:2",
				kind: "responseHeader",
				key: "X-Flowproxy-Author",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"mid"
			]
		}
	},
	{
		id: "complyauto",
		name: "ComplyAuto",
		website: "https://complyauto.com",
		description: "ComplyAuto is a dealership compliance automation platform that helps automotive businesses manage regulatory requirements, track documentation, and maintain adherence to industry standards through automated processes.",
		icon: "ComplyAuto.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "complyauto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.complyauto\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "confiant",
		name: "Confiant",
		website: "https://www.confiant.com",
		description: "Confiant is a cybersecurity company specialising in ad security and ad quality assurance for digital publishers, programmatic platforms, and advertisers.",
		icon: "Confiant.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "confiant:pageGlobal:0",
				kind: "pageGlobal",
				property: "confiant",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "covery",
		name: "Covery",
		website: "https://covery.ai",
		description: "Covery is a risk management platform that provides KYC and device fingerprinting fraud detection tools to prevent identity theft and fraudulent transactions.",
		icon: "Covery.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "covery:pageGlobal:0",
				kind: "pageGlobal",
				property: "handleCoveryFpKey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "covery:pageGlobal:1",
				kind: "pageGlobal",
				property: "sendCoveryFpKey",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "crypto-loot",
		name: "Crypto-Loot",
		website: "https://crypto-loot.com/",
		description: "Crypto-Loot is a browser based web miner for the uPlexa Blockchain.",
		icon: "Crypto-Loot.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "crypto-loot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^/crypto-loot\\.com/lib/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crypto-loot:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("^/webmine\\.pro/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crypto-loot:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("^/cryptoloot\\.pro/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crypto-loot:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("/crlt\\.js"),
				confidence: 75,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crypto-loot:pageGlobal:4",
				kind: "pageGlobal",
				property: "CRLT.CONFIG.ASMJS_NAME",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "crypto-loot:pageGlobal:5",
				kind: "pageGlobal",
				property: "CryptoLoot",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "datadome",
		name: "DataDome",
		website: "https://datadome.co",
		description: "DataDome is a cybersecurity platform that specialises in bot protection and mitigation, offering advanced solutions to safeguard websites and mobile applications against malicious bot traffic, credential stuffing, scraping, and other automated threats.",
		icon: "DataDome.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "datadome:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https://ct\\.datadome\\.co/[a-z]\\.js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "datadome:cookie:1",
				kind: "cookie",
				key: "datadome",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "datadome:cookie:2",
				kind: "cookie",
				key: "datadome-_zldp",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "datadome:cookie:3",
				kind: "cookie",
				key: "datadome-_zldt",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "datadome:responseHeader:4",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^DataDome$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "datadome:responseHeader:5",
				kind: "responseHeader",
				key: "X-DataDome",
				description: "Response header matches a known technology marker."
			},
			{
				id: "datadome:responseHeader:6",
				kind: "responseHeader",
				key: "X-DataDome-CID",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "datagrail",
		name: "DataGrail",
		website: "https://www.datagrail.io",
		description: "DataGrail is an AI-powered privacy automation platform designed to help organizations manage data privacy compliance, automate risk assessments, and maintain regulatory alignment across data processing activities.",
		icon: "DataGrail.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "datagrail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.datagrail\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "dataships",
		name: "Dataships",
		website: "https://dataships.io",
		description: "Dataships is a platform that ensures compliance with global data privacy regulations, helping businesses manage and protect customer data according to international standards.",
		icon: "Dataships.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "dataships:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dataships\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "ddos-guard",
		name: "DDoS-Guard",
		website: "https://ddos-guard.net",
		description: "DDoS-Guard is a Russian Internet infrastructure company which provides DDoS protection, content delivery network services, and web hosting services.",
		icon: "DDoS-Guard.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "ddos-guard:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^ddos-guard$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "deepminer",
		name: "deepMiner",
		website: "https://github.com/deepwn/deepMiner",
		icon: "deepminer.png",
		categories: [
			"security"
		],
		rules: [
			{
				id: "deepminer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("deepMiner\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "deepminer:pageGlobal:1",
				kind: "pageGlobal",
				property: "deepMiner",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "detectify",
		name: "Detectify",
		website: "https://detectify.com/",
		description: "Detectify is an automated scanner that checks your web application for vulnerabilities.",
		icon: "Detectify.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "detectify:dns:0",
				kind: "dns",
				valuePattern: new RegExp("detectify-verification"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "digest",
		name: "Digest",
		website: "https://tools.ietf.org/html/rfc7616",
		description: "Digest is an authentication method based on a MD5 hash used by web servers.",
		categories: [
			"security"
		],
		rules: [
			{
				id: "digest:responseHeader:0",
				kind: "responseHeader",
				key: "WWW-Authenticate",
				valuePattern: new RegExp("^Digest"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "digicert",
		name: "DigiCert",
		website: "https://www.digicert.com/",
		icon: "DigiCert.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "digicert:certIssuer:0",
				kind: "certIssuer",
				description: "Certificate issuer matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "drata",
		name: "Drata",
		website: "https://drata.com",
		description: "Drata is an automated site compliance system designed to streamline and manage security and privacy requirements.",
		icon: "Drata.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "drata:pageGlobal:0",
				kind: "pageGlobal",
				property: "webpackChunkdrata_web",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "drata:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Drata Inc."),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "drata:meta:2",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("Drata Inc."),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "dutchis",
		name: "DutchIS",
		website: "https://dutchis.net",
		description: "DutchIS is a web application front service that monitors, protects, cleans, and secures web traffic for websites.",
		icon: "DutchIS.svg",
		categories: [
			"security"
		],
		rules: [],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "entrust",
		name: "Entrust",
		website: "https://www.entrust.com/products/digital-certificates",
		description: "Entrust is a provider of SSL certificate badge for websites.",
		icon: "Entrust.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "entrust:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("seal\\.entrust\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "entrust:pageGlobal:1",
				kind: "pageGlobal",
				property: "goEntrust",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "focus-webwall",
		name: "FOCUS WebWall",
		website: "https://appsphere.app",
		description: "FOCUS WebWall is a zero-overhead security layer designed for websites using Cloudflare.",
		icon: "FOCUSWebWall.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "focus-webwall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/focus_webwall/.*?/focus-webwall\\.js$"),
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
	},
	{
		id: "forter",
		name: "Forter",
		website: "https://www.forter.com",
		description: "Forter is a SaaS company that provides fraud prevention technology for online retailers and marketplaces.",
		icon: "Forter.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "forter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("forter\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "forter:pageGlobal:1",
				kind: "pageGlobal",
				property: "ftr__startScriptLoad",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "forter:cookie:2",
				kind: "cookie",
				key: "forterToken",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "fortinet-fortigate",
		name: "Fortinet FortiGate",
		website: "https://www.fortinet.com/products/next-generation-firewall",
		description: "Fortinet FortiGate is a family of network security appliances that provide firewall, VPN, intrusion prevention, antivirus, web filtering, and other security features to protect and secure networks and data.",
		icon: "Fortinet.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "fortinet-fortigate:cookie:0",
				kind: "cookie",
				key: "FGTServer",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "fraud-blocker",
		name: "Fraud Blocker",
		website: "https://fraudblocker.com",
		description: "Fraud Blocker is an all-in-one solution designed to reduce costs by preventing bots, competitor clicks, fake leads, and other forms of digital ad fraud.",
		icon: "FraudBlocker.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "fraud-blocker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("monitor\\.fraudblocker\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fraud-blocker:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.fraudblocker\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "fraudlabs-pro",
		name: "FraudLabs Pro",
		website: "https://www.fraudlabspro.com",
		description: "FraudLabs Pro is a fraud prevention service offered by the company FraudLabs Pro, which specialises in online fraud detection and risk management for businesses.",
		icon: "FraudLabs Pro.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "fraudlabs-pro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fraudlabspro\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fraudlabs-pro:pageGlobal:1",
				kind: "pageGlobal",
				property: "FraudLabsProAgent",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "friendly-captcha",
		name: "Friendly Captcha",
		website: "https://friendlycaptcha.com",
		description: "Friendly Captcha is a proof-of-work based solution in which the user’s device does all the work.",
		icon: "FriendlyCaptcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "friendly-captcha:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("x-frc-client\",\"js-(\\d+(\\.\\d+)+)"),
				version: { source: "match", group: 1 },
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "friendly-captcha:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("api.friendlycaptcha.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "friendly-captcha:dom:2",
				kind: "dom",
				selector: "div.frc-captcha",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "fugu",
		name: "FUGU",
		website: "https://www.fugu-it.com",
		description: "FUGU is a payment fraud prevention solution that analyzes transactions both before and after checkout.",
		icon: "FUGU.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "fugu:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.fugu-it\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "funcaptcha",
		name: "FunCaptcha",
		website: "https://www.arkoselabs.com/arkose-matchkey/",
		description: "FunCaptcha is a type of CAPTCHA, which is a security measure used to protect websites and online services from spam, bots, and other forms of automated abuse.",
		icon: "fun_captcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "funcaptcha:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.funcaptcha\\.com"),
				description: "Observed request URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "geetest",
		name: "GeeTest",
		website: "https://www.geetest.com",
		description: "GeeTest is a CAPTCHA and bot management provider, protects websites, mobile apps, and APIs from automated bot-driven attacks, like ATO, credential stuffing, web scalping, etc.",
		icon: "GeeTest.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "geetest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.geetest\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "geetest:responseHeader:1",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.geetest\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "hanko",
		name: "Hanko",
		website: "https://www.hanko.io",
		description: "Hanko is a passwordless authentication solution offering secure login integration.",
		icon: "Hanko.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "hanko:pageGlobal:0",
				kind: "pageGlobal",
				property: "_hankoStyle",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "hcaptcha",
		name: "hCaptcha",
		website: "https://www.hcaptcha.com",
		description: "hCaptcha is an anti-bot solution that protects user privacy and rewards websites.",
		icon: "hCaptcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "hcaptcha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hcaptcha\\.com/([\\d]+?)/api\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hcaptcha:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("#cf-hcaptcha-container"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "hcaptcha:dom:2",
				kind: "dom",
				selector: "link[href*='hcaptcha.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "hcaptcha:pageGlobal:3",
				kind: "pageGlobal",
				property: "hcaptcha.getRespKey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hcaptcha:pageGlobal:4",
				kind: "pageGlobal",
				property: "hcaptchaOnLoad",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hcaptcha:pageGlobal:5",
				kind: "pageGlobal",
				property: "hcaptcha_sitekey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hcaptcha:responseHeader:6",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("(?:\\.|//)hcaptcha\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"poa"
			]
		}
	},
	{
		id: "hsts",
		name: "HSTS",
		website: "https://www.rfc-editor.org/rfc/rfc6797#section-6.1",
		description: "HTTP Strict Transport Security (HSTS) informs browsers that the site should only be accessed using HTTPS.",
		categories: [
			"security"
		],
		rules: [
			{
				id: "hsts:url:0",
				kind: "url",
				pattern: new RegExp("^https://[\\w\\d\\.\\-]+(?:\\.dev)(?:/.+||/)$"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "hsts:responseHeader:1",
				kind: "responseHeader",
				key: "Strict-Transport-Security",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "human-presence",
		name: "Human Presence",
		website: "https://www.humanpresence.io",
		description: "Human Presence is a bot detection and spam protection software for WordPress and Shopify.",
		icon: "human_presence.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "human-presence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/.*\\.humanpresence\\.(?:io|app)/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "identrust",
		name: "Identrust",
		website: "https://www.identrust.com/",
		description: "denTrust is a digital identity authentication solution.",
		icon: "Identrust.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "identrust:certIssuer:0",
				kind: "certIssuer",
				description: "Certificate issuer matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "imperva",
		name: "Imperva",
		website: "https://www.imperva.com",
		description: "Imperva is a cyber security software and services company for networking, data, and application security.",
		icon: "Imperva.svg",
		categories: [
			"security",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "imperva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/_Incapsula_Resource"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "imperva:responseHeader:1",
				kind: "responseHeader",
				key: "X-CDN",
				valuePattern: new RegExp("Incapsula"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "imperva:responseHeader:2",
				kind: "responseHeader",
				key: "X-Iinfo",
				description: "Response header matches a known technology marker."
			},
			{
				id: "imperva:responseHeader:3",
				kind: "responseHeader",
				key: "x-cdn",
				valuePattern: new RegExp("^Imperva"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "imunify360",
		name: "Imunify360",
		website: "https://www.imunify360.com",
		description: "Imunify360 is a comprehensive security platform for Linux web servers which utilises machine learning technology and other advanced techniques to provide protection against various types of cyber threats, such as malware, viruses, and other attacks.",
		icon: "Imunify360.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "imunify360:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("imunify360-webshield/([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "jsecoin",
		name: "JSEcoin",
		website: "https://jsecoin.com/",
		description: "JSEcoin is a way to mine, receive payments for your goods or services and transfer cryptocurrency",
		icon: "JSEcoin.png",
		categories: [
			"security"
		],
		rules: [
			{
				id: "jsecoin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^(?:https):?//load\\.jsecoin\\.com/load/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jsecoin:pageGlobal:1",
				kind: "pageGlobal",
				property: "jseMine",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jumio",
		name: "Jumio",
		website: "https://www.jumio.com",
		description: "Jumio is an online mobile payments and identity verification company that provides card and ID scanning and validation products for mobile and web transactions.",
		icon: "Jumio.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "jumio:dom:0",
				kind: "dom",
				selector: "iframe[src*='.netverify.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "kasada",
		name: "Kasada",
		website: "https://www.kasada.io",
		description: "Kasada is a cybersecurity company that provides a platform to protect websites and web applications from bot attacks and malicious activities.",
		icon: "Kasada.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "kasada:pageGlobal:0",
				kind: "pageGlobal",
				property: "KPSDK.configure",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kasada:cookie:1",
				kind: "cookie",
				key: "KP_UIDz",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "kerberos",
		name: "Kerberos",
		website: "https://tools.ietf.org/html/rfc4559",
		description: "Kerberos is an authentication method commonly used by Windows servers",
		categories: [
			"security"
		],
		rules: [
			{
				id: "kerberos:responseHeader:0",
				kind: "responseHeader",
				key: "WWW-Authenticate",
				valuePattern: new RegExp("^Kerberos"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "keybase",
		name: "Keybase",
		website: "https://keybase.io/",
		description: "Keybase is for keeping everyone's chats and files safe, from families to communities to companies. MacOS, Windows, Linux, iPhone, and Android.",
		icon: "Keybase.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "keybase:dns:0",
				kind: "dns",
				valuePattern: new RegExp("keybase-site-verification"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium"
			],
			cpe: "cpe:2.3:a:keybase:keybase:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "kiprotect",
		name: "Kiprotect",
		website: "https://kiprotect.com",
		description: "Kiprotect is a software platform that provides data protection and data security capabilities for safeguarding digital information.",
		icon: "Kiprotect.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "kiprotect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.kiprotect\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "konduto",
		name: "Konduto",
		website: "https://www.konduto.com",
		description: "Konduto is a fraud detection service for ecommerce.",
		icon: "Konduto.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "konduto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.k-analytix\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "konduto:dom:1",
				kind: "dom",
				selector: "link[href*='.konduto.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "konduto:pageGlobal:2",
				kind: "pageGlobal",
				property: "Konduto",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "konduto:pageGlobal:3",
				kind: "pageGlobal",
				property: "getKondutoID",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "let-s-encrypt",
		name: "Let's Encrypt",
		website: "https://letsencrypt.org/",
		description: "Let's Encrypt is a free, automated, and open certificate authority.",
		icon: "Lets Encrypt.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "let-s-encrypt:certIssuer:0",
				kind: "certIssuer",
				description: "Certificate issuer matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "minero-cc",
		name: "Minero.cc",
		website: "https://minero.cc/",
		description: "Minero.cc is a bot that helps run crypto mining application.",
		categories: [
			"security"
		],
		rules: [
			{
				id: "minero-cc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//minero\\.cc/lib/minero(?:-miner|-hidden)?\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "minerstat",
		name: "Minerstat",
		website: "https://minerstat.com",
		description: "Minerstat is a software provider offering management solutions for crypto mining professionals and mining farms.",
		icon: "Minerstat.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "minerstat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.minerstat\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "mollom",
		name: "Mollom",
		website: "https://mollom.com",
		icon: "Mollom.png",
		categories: [
			"security"
		],
		rules: [
			{
				id: "mollom:html:0",
				kind: "html",
				pattern: new RegExp("<img[^>]+\\.mollom\\.com"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "mollom:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("mollom(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:acquia:mollom:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mtcaptcha",
		name: "MTCaptcha",
		website: "https://www.mtcaptcha.com",
		description: "MTCaptcha is a captcha service that is GDPR and WCAG compliant, providing the confidence of privacy and accessibility.",
		icon: "MTCaptcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "mtcaptcha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("service(?:2)?\\.mtcaptcha\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mtcaptcha:pageGlobal:1",
				kind: "pageGlobal",
				property: "mtcaptcha.getVerifiedToken",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mtcaptcha:pageGlobal:2",
				kind: "pageGlobal",
				property: "mtcaptchaConfig.sitekey",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "negate",
		name: "Negate",
		website: "https://negate.io",
		description: "Negate is a security service that provides premium bot protection for websites, blocking malicious bots in real time.",
		icon: "Negate.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "negate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sapi\\.negate\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "nexuspipe",
		name: "NexusPIPE",
		website: "https://nexuspipe.com",
		description: "NexusPIPE is a ADC and DDoS mitigation Company.",
		icon: "NexusPIPE.png",
		categories: [
			"security"
		],
		rules: [
			{
				id: "nexuspipe:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Nexuspipe.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "nofraud",
		name: "NoFraud",
		website: "https://www.nofraud.com",
		description: "NoFraud is a fraud prevention solution for ecommerce businesses.",
		icon: "NoFraud.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "nofraud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("services\\.nofraud\\.com/"),
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
	},
	{
		id: "norton-shopping-guarantee",
		name: "Norton Shopping Guarantee",
		website: "https://norton.buysafe.com",
		description: "Norton Shopping Guarantee offering a third-party shopping guarantee to customers provides added protection and validation that you are safe to buy from.",
		icon: "Norton Shopping Guarantee.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "norton-shopping-guarantee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("nsg\\.symantec\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "norton-shopping-guarantee:pageGlobal:1",
				kind: "pageGlobal",
				property: "DO_NORTON_SHOPPING",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"cart-functionality"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "ntlm",
		name: "NTLM",
		website: "https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-ntht/",
		description: "NTLM is an authentication method commonly used by Windows servers",
		categories: [
			"security"
		],
		rules: [
			{
				id: "ntlm:responseHeader:0",
				kind: "responseHeader",
				key: "WWW-Authenticate",
				valuePattern: new RegExp("^NTLM"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "onfido",
		name: "Onfido",
		website: "https://onfido.com",
		description: "Onfido is a technology company that helps businesses verify people's identities using a photo-based identity document, a selfie and artificial intelligence algorithms.",
		icon: "Onfido.svg",
		categories: [
			"security",
			"authentication-identity"
		],
		rules: [
			{
				id: "onfido:dom:0",
				kind: "dom",
				selector: "link[href*='.onfido.com'], iframe[src*='onfido.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "onfido:responseHeader:1",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("(?:api|sync)\\.onfido\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring",
				"mid"
			]
		}
	},
	{
		id: "perimeterx",
		name: "PerimeterX",
		website: "https://www.perimeterx.com",
		description: "PerimeterX is a provider of scalable, behavior-based threat protection technology for the web, cloud, and mobile.",
		icon: "PerimeterX.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "perimeterx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("client\\.a\\.pxi\\.pub/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "perimeterx:pageGlobal:1",
				kind: "pageGlobal",
				property: "_pxAppId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "perimeterx:cookie:2",
				kind: "cookie",
				key: "_px3",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "perimeterx:cookie:3",
				kind: "cookie",
				key: "_pxff_cc",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "perimeterx:cookie:4",
				kind: "cookie",
				key: "_pxhd",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "perimeterx:cookie:5",
				kind: "cookie",
				key: "_pxvid",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "picatcha",
		name: "Picatcha",
		website: "https://picatcha.com",
		description: "Picatcha is a CAPTCHA technology designed to provide a usable and secure way to verify human users and prevent automated access.",
		icon: "Picatcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "picatcha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.picatcha\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "picatcha:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.picatcha\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "preeco",
		name: "Preeco",
		website: "https://www.preeco.de",
		description: "Preeco is a software solution for data protection, information security, and whistleblower reporting systems.",
		icon: "Preeco.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "preeco:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.preeco\\.de"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "preeco:pageGlobal:1",
				kind: "pageGlobal",
				property: "PreecoWidgets",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "proxmox-mail-gateway",
		name: "Proxmox Mail Gateway",
		website: "https://proxmox.com/en/proxmox-mail-gateway",
		description: "Proxmox Mail Gateway is a mail security and anti-spam solution designed to protect email servers and ensure secure and reliable email communication.",
		icon: "Proxmox.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "proxmox-mail-gateway:pageGlobal:0",
				kind: "pageGlobal",
				property: "pmg-mail-tracker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "proxmox-mail-gateway:pageGlobal:1",
				kind: "pageGlobal",
				property: "pmg-spam-archive",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"proxmox-ve"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rapidsec",
		name: "RapidSec",
		website: "https://rapidsec.com",
		description: "RapidSec offers automated client-side security and monitoring.",
		icon: "RapidSec.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "rapidsec:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.rapidsec\\.net"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "rapidsec:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.rapidsec\\.net"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "rapidsec:responseHeader:2",
				kind: "responseHeader",
				key: "report-to",
				valuePattern: new RegExp("\\.rapidsec\\.net"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "really-simple-ssl-and-security",
		name: "Really Simple SSL & Security",
		website: "https://really-simple-ssl.com",
		description: "Really Simple SSL & Security is an easy to install and performant security solution for WordPress.",
		icon: "really-simple-ssl.png",
		categories: [
			"security"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "recaptcha",
		name: "reCAPTCHA",
		website: "https://www.google.com/recaptcha/",
		description: "reCAPTCHA is a free service from Google that helps protect websites from spam and abuse.",
		icon: "reCAPTCHA.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "recaptcha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api-secure\\.recaptcha\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "recaptcha:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("recaptcha_ajax\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "recaptcha:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("/recaptcha/(?:api|enterprise)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "recaptcha:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("/recaptcha/api\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "recaptcha:dom:4",
				kind: "dom",
				selector: "#recaptcha_image, iframe[src*='.google.com/recaptcha/'], div.g-recaptcha",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "recaptcha:pageGlobal:5",
				kind: "pageGlobal",
				property: "Recaptcha",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "recaptcha:pageGlobal:6",
				kind: "pageGlobal",
				property: "recaptcha",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "regula",
		name: "Regula",
		website: "https://regulaforensics.com",
		description: "Regula is a provider of identity verification and document authentication solutions for various industries.",
		icon: "Regula.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "regula:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("unpkg\\.com/@regulaforensics/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "regula:pageGlobal:1",
				kind: "pageGlobal",
				property: "Regula.AuthenticityResultType",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"unpkg"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "safebase",
		name: "SafeBase",
		website: "https://safebase.io",
		description: "SafeBase is a platform that simplifies security reviews by enabling teams to share and automate access to essential security, compliance, and privacy information.",
		icon: "SafeBase.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "safebase:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.safebase\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "sardine",
		name: "Sardine",
		website: "https://www.sardine.ai",
		description: "Sardine is a system designed to stop fraud and increase revenue by enhancing transaction monitoring and risk management.",
		icon: "Sardine.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "sardine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.sardine\\.ai"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sectigo",
		name: "Sectigo",
		website: "https://sectigo.com/",
		description: "Sectigo provides SSL certificate and computer security products.",
		icon: "Sectigo.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "sectigo:certIssuer:0",
				kind: "certIssuer",
				description: "Certificate issuer matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "securemetrics",
		name: "SecureMetrics",
		website: "https://www.securitymetrics.com",
		description: "SecurityMetrics is a platform that provides website security assessments and vulnerability testing to identify and address potential threats.",
		icon: "SecurityMetrics.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "securemetrics:dom:0",
				kind: "dom",
				selector: "a[href*='www.securitymetrics.com'] > img[src*='www.securitymetrics.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "securiti",
		name: "Securiti",
		website: "https://securiti.ai",
		description: "Securiti is a centralized platform that ensures the secure utilization of data and generative AI.",
		icon: "Securiti.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "securiti:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.securiti\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "securiti:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.securiti\\.ai"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "seon",
		name: "Seon",
		website: "https://seon.io",
		description: "Seon is a global fraud prevention solution designed to combat fraud and money laundering by identifying and blocking threats at all stages of the customer journey.",
		icon: "Seon.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "seon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.seon\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "seon:pageGlobal:1",
				kind: "pageGlobal",
				property: "seon.appIdentifier",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "seon:pageGlobal:2",
				kind: "pageGlobal",
				property: "waitForSeon",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "sitelock",
		name: "SiteLock",
		website: "https://www.sitelock.com",
		description: "SiteLock is a security service that protects websites from hackers, malware, and other threats.",
		icon: "SiteLock.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "sitelock:dom:0",
				kind: "dom",
				selector: "a[href*='#'] > img[src*='.sitelock.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "skyflow",
		name: "Skyflow",
		website: "https://www.skyflow.com",
		description: "Skyflow is a company that provides a secure data privacy platform and API.",
		icon: "Skyflow.svg",
		categories: [
			"security",
			"api-pattern"
		],
		rules: [
			{
				id: "skyflow:pageGlobal:0",
				kind: "pageGlobal",
				property: "Skyflow.ElementType.CARD_NUMBER",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "skyflow:pageGlobal:1",
				kind: "pageGlobal",
				property: "Skyflow.ValidationRuleType",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "slider-captcha",
		name: "Slider Captcha",
		website: "https://github.com/ArgoZhang/SliderCaptcha",
		description: "Slider Captcha is a free service that helps protect websites from spam and abuse.",
		icon: "default.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "slider-captcha:pageGlobal:0",
				kind: "pageGlobal",
				property: "sliderCaptcha",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "snaphost",
		name: "SnapHost",
		website: "https://snaphost.com",
		description: "SnapHost is a solution offering anti-spam CAPTCHA web form protection.",
		categories: [
			"security",
			"form-schema-library"
		],
		rules: [
			{
				id: "snaphost:dom:0",
				kind: "dom",
				selector: "form[action*='.SnapHost.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "solve-media",
		name: "Solve Media",
		website: "https://solvemedia.com",
		icon: "Solve Media.png",
		categories: [
			"security",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "solve-media:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?://api\\.solvemedia\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "solve-media:pageGlobal:1",
				kind: "pageGlobal",
				property: "ACPuzzle",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "solve-media:pageGlobal:2",
				kind: "pageGlobal",
				property: "_ACPuzzle",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "solve-media:pageGlobal:3",
				kind: "pageGlobal",
				property: "_adcopy-puzzle-image-image",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "solve-media:pageGlobal:4",
				kind: "pageGlobal",
				property: "adcopy-puzzle-image-image",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "spnego",
		name: "SPNEGO",
		website: "https://tools.ietf.org/html/rfc4559",
		description: "SPNEGO is an authentication method commonly used in Windows servers to allow NTLM or Kerberos authentication.",
		categories: [
			"security"
		],
		rules: [
			{
				id: "spnego:responseHeader:0",
				kind: "responseHeader",
				key: "WWW-Authenticate",
				valuePattern: new RegExp("^Negotiate"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sqreen",
		name: "Sqreen",
		website: "https://sqreen.io",
		description: "Sqreen is the application security platform for the modern enterprise. Acquired by Datadog in Apr 2021.",
		icon: "Sqreen.svg",
		categories: [
			"security",
			"widgets-misc"
		],
		rules: [
			{
				id: "sqreen:responseHeader:0",
				kind: "responseHeader",
				key: "X-Protected-By",
				valuePattern: new RegExp("^Sqreen$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "startest",
		name: "StarTest",
		website: "https://startest.top",
		description: "StarTest is a CAPTCHA provider that safeguards websites, mobile apps, and APIs from automated bot-driven attacks.",
		icon: "StarTest.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "startest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.startest\\.top"),
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
	},
	{
		id: "testflow",
		name: "Testflow",
		website: "https://testflow.eu",
		description: "Testflow is a platform that digitizes manual workflows for test centers while ensuring secure patient data management in compliance with data protection regulations.",
		icon: "Testflow.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "testflow:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.testflow\\.eu"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "thawte",
		name: "Thawte",
		website: "https://www.thawte.com",
		description: "Thawte is a provider of SSL certificates, offering a site seal as a visual indicator of website security.",
		icon: "Thawte.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "thawte:certIssuer:0",
				kind: "certIssuer",
				description: "Certificate issuer matches a known technology marker.",
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "threatmetrix",
		name: "ThreatMetrix",
		website: "https://risk.lexisnexis.com/products/threatmetrix",
		description: "LexisNexis ThreatMetrix is an enterprise solution for online risk and fraud protection ('digital identity intelligence and digital authentication').",
		icon: "threatmetrix.svg",
		categories: [
			"security",
			"privacy-compliance"
		],
		rules: [
			{
				id: "threatmetrix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.online-metrix\\.net"),
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
	},
	{
		id: "token-of-trust",
		name: "Token of Trust",
		website: "https://tokenoftrust.com",
		description: "Token of Trust is a compliance and anti-fraud platform designed to help ecommerce businesses mitigate risk and support growth through end-to-end verification tools.",
		icon: "TokenOfTrust.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "token-of-trust:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.tokenoftrust\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "token-of-trust:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.tokenoftrust\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "trezor",
		name: "Trezor",
		website: "https://trezor.io",
		description: "Trezor is a digital wallet that provides offline storage for cryptocurrency, protecting digital assets from online threats and unauthorized access.",
		icon: "Trezor.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "trezor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.trezor\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "trezor:pageGlobal:1",
				kind: "pageGlobal",
				property: "TrezorConnect",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "truvalidate",
		name: "TruValidate",
		website: "https://www.transunion.com/solution/truvalidate",
		description: "TransUnion TruValidate (previously ReputationShield/IDVision from iovation) is an online risk and fraud detection platform.",
		icon: "TruValidate.svg",
		categories: [
			"security",
			"privacy-compliance"
		],
		rules: [
			{
				id: "truvalidate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mpsnare\\.iesnare\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "truvalidate:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("ci-mpsnare\\.iovation\\.com"),
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
	},
	{
		id: "v4guard-checkpoint",
		name: "v4Guard Checkpoint",
		website: "https://v4guard.io",
		description: "Checkpoint is a product of v4Guard that verifies website users and prevents fraudulent access to sensitive areas, by checking for any use of anonymisation services with a captcha-like widget.",
		icon: "v4Guard.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "v4guard-checkpoint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.v4guard\\.io/checkpoint"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "v4guard-checkpoint:dom:1",
				kind: "dom",
				selector: "iframe[src*='.v4guard.io/checkpoint/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"recurring"
			]
		}
	},
	{
		id: "vanta",
		name: "Vanta",
		website: "https://www.vanta.com",
		description: "Vanta is a compliance automation platform for SOC 2, HIPAA, ISO 27001, PCI, and GDPR.",
		icon: "Vanta.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "vanta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.vanta\\.com/"),
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
	},
	{
		id: "vaptcha",
		name: "VAPTCHA",
		website: "https://en.vaptcha.com",
		description: "VAPTCHA is the abbreviation of (Variation Analysis based Public Turing Test to Tell Computers and Humans Apart), also known as gesture verification code, is a human-machine verification solution based on artificial intelligence and big data.",
		icon: "VAPTCHA.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "vaptcha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.vaptcha\\.com/v([\\d\\.]+)\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vaptcha:pageGlobal:1",
				kind: "pageGlobal",
				property: "vaptcha",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"freemium"
			]
		}
	},
	{
		id: "variti",
		name: "Variti",
		website: "https://variti.io",
		description: "Variti is a network security solutions firm that blocks bad bots, protects users from various automated abuse, attacks and fraud techniques.",
		icon: "Variti.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "variti:responseHeader:0",
				kind: "responseHeader",
				key: "X-VARITI-CCR",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "ventryshield",
		name: "VentryShield",
		website: "https://ventryshield.net",
		description: "VentryShield offers DDoS Protected VPS and Web Hosting.",
		icon: "ventry_shield.png",
		categories: [
			"security"
		],
		rules: [
			{
				id: "ventryshield:cookie:0",
				kind: "cookie",
				key: "ventryshield_pre",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "ventryshield:responseHeader:1",
				kind: "responseHeader",
				key: "x-ventryshield-cache-status",
				valuePattern: new RegExp("no-cache"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "ventryshield:responseHeader:2",
				kind: "responseHeader",
				key: "x-ventryshield-sid",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "very-good-security",
		name: "Very Good Security",
		website: "https://www.verygoodsecurity.com",
		description: "Very Good Security (VGS) is a data security and compliance platform that enables developers to securely handle sensitive data by encrypting, tokenising, and transmitting it through an intermediary service.",
		icon: "Very Good Security.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "very-good-security:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.verygoodvault\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "very-good-security:pageGlobal:1",
				kind: "pageGlobal",
				property: "VGSCollect",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "very-good-security:responseHeader:2",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.verygoodvault\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "war-pe",
		name: "WAR.PE",
		website: "https://war.pe",
		description: "WAR.PE is a platform designed to enhance the web experience by promoting user privacy and security.",
		icon: "WARPE.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "war-pe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//war\\.pe/warp\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "yandex-smartcaptcha",
		name: "Yandex SmartCaptcha",
		website: "https://cloud.yandex.com/en/services/smartcaptcha",
		description: "Yandex SmartCaptcha is a service for verifying queries to identify user requests and block bots.",
		icon: "yandex_smartcaptcha.svg",
		categories: [
			"security"
		],
		rules: [
			{
				id: "yandex-smartcaptcha:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("Yandex SmartCaptcha"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "yandex-smartcaptcha:dom:1",
				kind: "dom",
				selector: "div#smartcaptcha-status",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "yandex-smartcaptcha:pageGlobal:2",
				kind: "pageGlobal",
				property: "smartCaptcha",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yandex-smartcaptcha:responseHeader:3",
				kind: "responseHeader",
				key: "x-yandex-captcha",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	}
] as const satisfies readonly TechnologyDefinition[];
