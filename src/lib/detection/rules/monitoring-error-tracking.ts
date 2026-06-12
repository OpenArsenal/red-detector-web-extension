import type { TechnologyDefinition } from '../types';

export const monitoringErrorTrackingTechnologyDefinitions = [
	{
		id: "akamai-mpulse",
		name: "Akamai mPulse",
		website: "https://developer.akamai.com/akamai-mpulse-real-user-monitoring-solution",
		description: "Akamai mPulse is a real user monitoring (RUM) solution that enables companies to monitor, find, and fix website and application performance issues.",
		icon: "Akamai.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "akamai-mpulse:html:0",
				kind: "html",
				pattern: new RegExp("<script>[\\s\\S]*?go-mpulse\\.net\\/boomerang[\\s\\S]*?</script>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "akamai-mpulse:dom:1",
				kind: "dom",
				selector: "script#boomr-if-as, script#boomr-scr-as, link[href*='s.go-mpulse.net/boomerang/'][rel='preload']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "akamai-mpulse:pageGlobal:2",
				kind: "pageGlobal",
				property: "BOOMR_API_key",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "akamai-mpulse:cookie:3",
				kind: "cookie",
				key: "akaas_AB-Testing",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"boomerang"
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
		id: "amazon-cloudwatch-rum",
		name: "Amazon CloudWatch RUM",
		website: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM.html",
		description: "Amazon CloudWatch RUM is a real-user monitoring capability that helps you identify and debug issues in the client-side on web applications and enhance end user's digital experience.",
		icon: "Amazon CloudWatch.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "amazon-cloudwatch-rum:pageGlobal:0",
				kind: "pageGlobal",
				property: "AwsRum",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amazon-cloudwatch-rum:pageGlobal:1",
				kind: "pageGlobal",
				property: "AwsRumClient",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amazon-cloudwatch-rum:pageGlobal:2",
				kind: "pageGlobal",
				property: "AwsRumClient.v",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amazon-cloudwatch-rum:pageGlobal:3",
				kind: "pageGlobal",
				property: "AwsRumConfig",
				description: "Page-owned global matches a known technology marker."
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
		id: "atatus",
		name: "Atatus",
		website: "https://www.atatus.com",
		description: "Atatus is a full-stack observability tool that let you identify the performance bottlenecks and helps you optimise your application at the right time.",
		icon: "Atatus.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics",
			"developer-tooling"
		],
		rules: [
			{
				id: "atatus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/atatus\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "atatus:pageGlobal:1",
				kind: "pageGlobal",
				property: "atatus.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
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
		id: "datadog",
		name: "Datadog",
		website: "https://www.datadoghq.com",
		description: "Datadog is a SaaS-based monitoring and analytics platform for large-scale applications and infrastructure.",
		icon: "Datadog.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "datadog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.datadoghq-browser-agent\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "datadog:pageGlobal:1",
				kind: "pageGlobal",
				property: "DD_LOGS",
				confidence: 1,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "datadog:pageGlobal:2",
				kind: "pageGlobal",
				property: "DD_RUM",
				confidence: 99,
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"payg",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "dynatrace-rum",
		name: "Dynatrace RUM",
		website: "https://www.dynatrace.com/platform/real-user-monitoring",
		description: "Dynatrace RUM is an AI powered, full stack, automated real user monitoring platform built by Dynatrace.",
		icon: "Dynatrace.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "dynatrace-rum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/ruxitagentjs_(?:.+)_(?:.+)\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"dynatrace"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "eggplant",
		name: "Eggplant",
		website: "https://www.eggplantsoftware.com",
		description: "Eggplant is a software testing and monitoring company.",
		icon: "Eggplant.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "eggplant:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.eggplant\\.cloud/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "eggplant:responseHeader:1",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.eggplant\\.cloud"),
				description: "Response header matches a known technology marker."
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
		id: "microsoft-application-insights",
		name: "Microsoft Application Insights",
		website: "https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
		description: "Microsoft Application Insights is a feature of Azure Monitor that provides extensible application performance management (APM) and monitoring for live web apps.",
		icon: "Microsoft.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "microsoft-application-insights:pageGlobal:0",
				kind: "pageGlobal",
				property: "appInsights.SeverityLevel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "microsoft-application-insights:pageGlobal:1",
				kind: "pageGlobal",
				property: "appInsights.addTelemetryInitializer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "microsoft-application-insights:pageGlobal:2",
				kind: "pageGlobal",
				property: "appInsightsSDK",
				valuePattern: new RegExp("appInsights"),
				description: "Page-owned global matches a known technology marker."
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
		id: "new-relic",
		name: "New Relic",
		website: "https://newrelic.com",
		description: "New Relic is a SaaS offering that focuses on performance and availability monitoring.",
		icon: "New Relic.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "new-relic:dom:0",
				kind: "dom",
				selector: "link[href*='.newrelic.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "new-relic:pageGlobal:1",
				kind: "pageGlobal",
				property: "NREUM",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "new-relic:pageGlobal:2",
				kind: "pageGlobal",
				property: "newrelic",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg",
				"low",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "pingdom-rum",
		name: "Pingdom RUM",
		website: "https://www.pingdom.com/real-user-monitoring/",
		description: "Pingdom RUM(Real User Monitoring) is a feature of the Pingdom website monitoring and performance testing service. RUM enables you to collect and analyse data on how real users are experiencing your website.",
		icon: "Pingdom.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "pingdom-rum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rum-static\\.pingdom\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pingdom-rum:pageGlobal:1",
				kind: "pageGlobal",
				property: "_prum",
				description: "Page-owned global matches a known technology marker."
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
		id: "quanta",
		name: "Quanta",
		website: "https://www.quanta.io",
		description: "Quanta is web performance management solution. Quanta offers the only analytics solution specifically designed to enable business and technical members of ecommerce teams to collaborate effectively with the end in mind: use web performance to directly impact online revenue at all times.",
		icon: "Quanta.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "quanta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.quanta\\.io/(?:.+/quanta-rum-v([\\d\\.]+)\\.min\\.js)?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "quanta:pageGlobal:1",
				kind: "pageGlobal",
				property: "QUANTA.app_id",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "quanta:pageGlobal:2",
				kind: "pageGlobal",
				property: "QuantaTagRUMSpeedIndex",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "quanta:cookie:3",
				kind: "cookie",
				key: "_qta_rum",
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
		id: "raygun",
		name: "Raygun",
		website: "https://raygun.com",
		description: "Raygun is a cloud-based networking monitoring and bug tracking application.",
		icon: "Raygun.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics",
			"developer-tooling"
		],
		rules: [
			{
				id: "raygun:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.raygun\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "raygun:pageGlobal:1",
				kind: "pageGlobal",
				property: "Raygun",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "raygun:pageGlobal:2",
				kind: "pageGlobal",
				property: "raygunEnabled",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "raygun:pageGlobal:3",
				kind: "pageGlobal",
				property: "raygunFactory",
				description: "Page-owned global matches a known technology marker."
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
		id: "rumvision",
		name: "Rumvision",
		website: "https://www.rumvision.com/",
		description: "Rumvision is a front-end performance monitoring service",
		icon: "Rumvision.png",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "rumvision:pageGlobal:0",
				kind: "pageGlobal",
				property: "rumv_config",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sematext-experience",
		name: "Sematext Experience",
		website: "https://sematext.com/experience",
		description: "Sematext Experience for Real User Monitoring Analyze data collected from real-user sessions, detect anomalies, send alerts in real-time, and enhance overall customer digital experience.",
		icon: "Sematext.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "sematext-experience:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sematext\\.com/experience\\.js"),
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
		id: "site24x7",
		name: "Site24x7",
		website: "https://www.site24x7.com",
		description: "Site24x7 is a cloud-based website and server monitoring platform.",
		icon: "Site24x7.png",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "site24x7:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.site24x7rum\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "site24x7:pageGlobal:1",
				kind: "pageGlobal",
				property: "S247RumQueueImpl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "site24x7:pageGlobal:2",
				kind: "pageGlobal",
				property: "s247RUM",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "site24x7:pageGlobal:3",
				kind: "pageGlobal",
				property: "site24x7RumError",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "site24x7:pageGlobal:4",
				kind: "pageGlobal",
				property: "site24x7rum",
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
		id: "speedcurve",
		name: "SpeedCurve",
		website: "https://www.speedcurve.com",
		description: "SpeedCurve is a front-end performance monitoring service.",
		icon: "SpeedCurve.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "speedcurve:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.speedcurve\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "speedcurve:pageGlobal:1",
				kind: "pageGlobal",
				property: "LUX.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "speedcurve:pageGlobal:2",
				kind: "pageGlobal",
				property: "LUX_t_end",
				valuePattern: new RegExp("\\d+"),
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "speedcurve:pageGlobal:3",
				kind: "pageGlobal",
				property: "LUX_t_start",
				valuePattern: new RegExp("\\d+"),
				confidence: 50,
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
		id: "splunk-rum",
		name: "Splunk RUM",
		website: "https://www.splunk.com/en_us/observability/real-user-monitoring.html",
		description: "Splunk RUM is a real-time, front-end user monitoring and troubleshooting.",
		icon: "Splunk.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "splunk-rum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("browser\\.plumbr\\.io/pa(?:-early)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "splunk-rum:pageGlobal:1",
				kind: "pageGlobal",
				property: "PLUMBR._core.selfURL",
				valuePattern: new RegExp("browser\\.plumbr\\.io/pa(?:-early)?\\.js"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "splunk-rum:pageGlobal:2",
				kind: "pageGlobal",
				property: "PLUMBR._core.version",
				valuePattern: new RegExp("^([\\d\\.]+).+$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "uptrends",
		name: "Uptrends",
		website: "https://www.uptrends.com",
		description: "Uptrends is a website and web performance monitoring solution.",
		icon: "Uptrends.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics",
			"developer-tooling"
		],
		rules: [
			{
				id: "uptrends:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.uptrendsdata\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "uptrends:pageGlobal:1",
				kind: "pageGlobal",
				property: "UTBOOMR.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
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
		id: "wakav-performance-monitoring",
		name: "Wakav Performance Monitoring",
		website: "https://www.wakav.ir",
		description: "Wakav Performance Monitoring is a real user monitoring (RUM), Web/App performance and availability test platform.",
		icon: "Wakav Performance Monitoring.svg",
		categories: [
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "wakav-performance-monitoring:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rum\\.wakav\\.ir/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg"
			]
		}
	}
] as const satisfies readonly TechnologyDefinition[];
