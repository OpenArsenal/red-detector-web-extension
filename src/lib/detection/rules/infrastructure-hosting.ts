import type { TechnologyDefinition } from '../types';

export const infrastructureHostingTechnologyDefinitions = [
	{
		id: "34sp-com",
		name: "34SP.com",
		website: "https://www.34sp.com",
		description: "34SP.com specialises in website hosting, discount domain names, low cost VPS servers and dedicated servers.",
		icon: "34SP.com.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "34sp-com:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns(?:\\d+)?\\.34sp\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "5centscdn",
		name: "5centsCDN",
		website: "https://www.5centscdn.net",
		description: "5centsCDN is a content delivery networks service provider.",
		icon: "5centsCDN.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "5centscdn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.5centscdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "5centscdn:dom:1",
				kind: "dom",
				selector: "link[href*='.5centscdn.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "5centscdn:header:2",
				kind: "header",
				key: "x-cdn",
				valuePattern: new RegExp("^5centsCDN$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "5centscdn:header:3",
				kind: "header",
				key: "x-cdn",
				valuePattern: new RegExp("^5centscdn$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "acquia-cloud-platform",
		name: "Acquia Cloud Platform",
		website: "https://www.acquia.com/products/drupal-cloud/cloud-platform",
		description: "Acquia Cloud Platform is a Drupal-tuned application lifecycle management suite with an infrastructure to support Drupal deployment workflow processes.",
		icon: "acquia-cloud.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "acquia-cloud-platform:header:0",
				kind: "header",
				key: "X-AH-Environment",
				valuePattern: new RegExp("^(next)?.*$", "i"),
				version: {
					source: "match",
					template: "$1?Next:",
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "acquia-cloud-platform:header:1",
				kind: "header",
				key: "x-ah-environment",
				valuePattern: new RegExp("^(next)?.*$", "i"),
				version: {
					source: "match",
					template: "$1?next:",
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"amazon-web-services",
		],
	},
	{
		id: "acquia-cloud-platform-cdn",
		name: "Acquia Cloud Platform CDN",
		website: "https://docs.acquia.com/cloud-platform/platformcdn/",
		icon: "acquia-cloud-platform.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "acquia-cloud-platform-cdn:header:0",
				kind: "header",
				key: "via",
				valuePattern: new RegExp("Acquia Platform CDN (.+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "acquia-cloud-platform-cdn:header:1",
				kind: "header",
				key: "via",
				valuePattern: new RegExp("acquia platform cdn (.+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"acquia-cloud-platform",
		],
	},
	{
		id: "acquia-cloud-site-factory",
		name: "Acquia Cloud Site Factory",
		website: "https://www.acquia.com/products/drupal-cloud/site-factory",
		description: "Acquia Site Factory is a multisite platform for Drupal.",
		icon: "acquia-site-factory.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "acquia-cloud-site-factory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sites\\/g\\/files"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acquia-cloud-site-factory:dom:1",
				kind: "dom",
				selector: "script[src*='sites/g/files']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "acquia-cloud-site-factory:dom:2",
				kind: "dom",
				selector: "img[src*='sites/g/files']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "acquia-cloud-site-factory:dom:3",
				kind: "dom",
				selector: "img[data-src*='sites/g/files']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "acquia-cloud-site-factory:dom:4",
				kind: "dom",
				selector: "link[href*='sites/g/files']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"acquia-cloud-platform",
			"drupal-multisite",
		],
	},
	{
		id: "agora",
		name: "Agora",
		website: "https://www.agora.io",
		description: "Agora is a real-time engagement platform that provides infrastructure for interactive communication across applications.",
		icon: "Agora.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "agora:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.agora\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "agora:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.agora\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "airee",
		name: "Airee",
		website: "https://xn--80aqc2a.xn--p1ai",
		description: "Airee offers scalable web hosting solutions tailored for internet shops and websites, with enhanced performance, DDoS protection, high availability, and detailed speed and security analytics.",
		icon: "Airee.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "airee:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Airee", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "airee:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^airee", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "akamai",
		name: "Akamai",
		website: "https://akamai.com",
		description: "Akamai is global content delivery network (CDN) services provider for media and software delivery, and cloud security solutions.",
		icon: "Akamai.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "akamai-connected-cloud",
		name: "Akamai Connected Cloud",
		website: "https://www.akamai.com/solutions/cloud-computing",
		description: "Akamai Connected Cloud is a distributed cloud platform that combines core compute, edge services, and security to run applications at global scale.",
		icon: "Akamai.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "akamai-connected-cloud:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^volt-adc$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			pricing: [
				"payg",
				"recurring",
			],
		},
		implies: [
			"akamai",
		],
	},
	{
		id: "akoova",
		name: "Akoova",
		website: "https://akoova.com",
		description: "Akoova is an AWS-native managed platform that enables scalable deployment, hosting, and operation of Magento and Adobe Commerce environments.",
		icon: "Akoova.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "akoova:header:0",
				kind: "header",
				key: "K-Hosting-By",
				valuePattern: new RegExp("^Akoova$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "alibaba-cloud-cdn",
		name: "Alibaba Cloud CDN",
		website: "https://www.alibabacloud.com/product/content-delivery-network",
		description: "Alibaba Cloud CDN is a global network of servers designed to deliver high-performance, low-latency content to users around the world. It is a cloud-based service provided by Alibaba Cloud, a subsidiary of the Alibaba Group, that enables businesses to accelerate the delivery of their web content, including images, videos, and static files, to end-users.",
		icon: "Alibaba Cloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "alibaba-cloud-cdn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.alicdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "alibaba-cloud-cdn:dom:1",
				kind: "dom",
				selector: "img[src*='.alicdn.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "alibaba-cloud-object-storage-service",
		name: "Alibaba Cloud Object Storage Service",
		website: "https://www.alibabacloud.com/product/object-storage-service",
		description: "Alibaba Cloud Object Storage Service (OSS) is a cloud-based object storage service provided by Alibaba Cloud, which allows users to store and access large amounts of data in the cloud.",
		icon: "Alibaba Cloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "all-inkl",
		name: "ALL-INKL",
		website: "https://all-inkl.com",
		description: "ALL-INKL is a German-based web hosting provider that promises to offer high-performance services for fair prices.",
		icon: "ALL-INKL.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "all-inkl:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.kasserver\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "alternc",
		name: "AlternC",
		website: "https://alternc.com",
		description: "AlternC is a set of software management on Linux shared hosting.",
		icon: "AlternC.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "alternc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\/alternc\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:alternc:alternc:*:*:*:*:*:*:*:*",
		},
		requires: [
			"debian",
		],
	},
	{
		id: "amazon-cloudfront",
		name: "Amazon CloudFront",
		website: "https://aws.amazon.com/cloudfront/",
		description: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds.",
		icon: "Amazon Cloudfront.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "amazon-cloudfront:header:0",
				kind: "header",
				key: "Via",
				valuePattern: new RegExp("\\(CloudFront\\)$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-cloudfront:dns:1",
				kind: "dns",
				valuePattern: new RegExp("^[a-z0-9]+\\.cloudfront.net\\.?$", "i"),
				recordType: "CNAME",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "amazon-cloudfront:header:2",
				kind: "header",
				key: "via",
				valuePattern: new RegExp("\\(cloudfront\\)$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			cpe: "cpe:2.3:a:amazon:amazon_cloudfront:*:*:*:*:*:*:*:*",
		},
		implies: [
			"amazon-web-services",
		],
	},
	{
		id: "amazon-ecs",
		name: "Amazon ECS",
		website: "https://aws.amazon.com/ecs/",
		description: "Amazon ECS is AWS's managed container orchestration service for running Docker containers.",
		icon: "Amazon ECS.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "amazon-ecs:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^ECS", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-ecs:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^ecs", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"amazon-web-services",
			"docker",
		],
	},
	{
		id: "amazon-s3",
		name: "Amazon S3",
		website: "https://aws.amazon.com/s3/",
		description: "Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface.",
		icon: "Amazon S3.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "amazon-s3:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s3[^ ]*\\.amazonaws\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amazon-s3:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("s3[^ ]*amazonaws\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-s3:header:2",
				kind: "header",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("s3[^ ]*\\.amazonaws\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-s3:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^AmazonS3$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-s3:header:4",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("s3[^ ]*amazonaws\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-s3:header:5",
				kind: "header",
				key: "content-security-policy-report-only",
				valuePattern: new RegExp("s3[^ ]*\\.amazonaws\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-s3:header:6",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^amazons3$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"amazon-web-services",
		],
	},
	{
		id: "amazon-web-services",
		name: "Amazon Web Services",
		website: "https://aws.amazon.com/",
		description: "Amazon Web Services (AWS) is a comprehensive cloud services platform offering compute power, database storage, content delivery and other functionality.",
		icon: "Amazon Web Services.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "amazon-web-services:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.awsdns-", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "amazon-web-services:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.amazonaws\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ans",
		name: "ANS",
		website: "https://www.ans.co.uk",
		description: "ANS is an UK-based IT services company specializing in cloud computing, managed services, and digital transformation solutions.",
		icon: "ANS.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "ans:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.ukfast\\.net", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "appian",
		name: "Appian",
		website: "https://www.appian.com",
		description: "Appian is an enterprise low-code application platform.",
		icon: "Appian.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "appian:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tempo\\/ui\\/sail-client\\/embeddedBootstrap\\.nocache\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "appian:jsGlobal:1",
				kind: "jsGlobal",
				property: "APPIAN",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "appian:jsGlobal:2",
				kind: "jsGlobal",
				property: "Appian",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "appian:jsGlobal:3",
				kind: "jsGlobal",
				property: "_APPIAN_PROXIES_INITIALIZED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "appian:jsGlobal:4",
				kind: "jsGlobal",
				property: "webpackJsonpAppian",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "appian:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("tempo\\/ui\\/sail-client\\/embeddedbootstrap\\.nocache\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "arc",
		name: "Arc",
		website: "https://arc.io",
		description: "Arc is a peer-to-peer CDN that pays site owners for using it. Instead of expensive servers in distant datacenters, Arc's network is comprised of browsers.",
		icon: "Arc.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "arc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("arc\\.io\\/widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "arc:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.arc\\.io"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "arc:dom:2",
				kind: "dom",
				selector: "#arc-widget",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "arc:jsGlobal:3",
				kind: "jsGlobal",
				property: "arc.p2pClient",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arc:jsGlobal:4",
				kind: "jsGlobal",
				property: "arcWidgetJsonp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:arc:arc:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "aruba-it",
		name: "Aruba.it",
		website: "https://www.aruba.it",
		description: "Aruba.it is an Italian company mainly active in the web hosting and domain registration businesses.",
		icon: "Aruba.it.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "aruba-it:header:0",
				kind: "header",
				key: "x-servername",
				valuePattern: new RegExp("\\.aruba\\.it", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "aruba-it:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.technorail\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "arvancloud",
		name: "ArvanCloud",
		website: "https://www.arvancloud.ir",
		description: "ArvanCloud is a cloud services provider, offering a wide range of incorporated cloud services including CDN, DDoS mitigation, Cloud Managed DNS, Cloud Security, VoD/AoD Streaming, Live Streaming, Cloud Compute, Cloud Object Storage, and PaaS.",
		icon: "ArvanCloud.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "arvancloud:dom:0",
				kind: "dom",
				selector: "img[src*='.arvanstorage.com/'], img[src*='.arvanstorage.ir/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "arvancloud:jsGlobal:1",
				kind: "jsGlobal",
				property: "ArvanCloud",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arvancloud:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("ArvanCloud", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "arvancloud:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("arvancloud", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "azion",
		name: "Azion",
		website: "https://www.azion.com/",
		description: "Azion is an edge computing, security, and content delivery platform.",
		icon: "Azion.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "azion:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Azion ", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "azion:dns:1",
				kind: "dns",
				valuePattern: new RegExp("azioncdn\\.net\\.?$", "i"),
				recordType: "CNAME",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "azion:dom:2",
				kind: "dom",
				selector: "link[href*='.azion.com/'][rel='canonical']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "azion:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^azion ", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"poa",
			],
		},
	},
	{
		id: "azure",
		name: "Azure",
		website: "https://azure.microsoft.com",
		description: "Azure is a cloud computing service for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
		icon: "Azure.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "azure:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^ARRAffinity$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "azure:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^TiPMix$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "azure:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Windows-Azure", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "azure:dns:3",
				kind: "dns",
				valuePattern: new RegExp("\\.azure-dns\\.", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "azure:dns:4",
				kind: "dns",
				valuePattern: new RegExp("azuredns-cloud\\.net", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "azure:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^arraffinity$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "azure:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^tipmix$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "azure:header:7",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^windows-azure", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:microsoft:azure:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "azure-cdn",
		name: "Azure CDN",
		website: "https://azure.microsoft.com/en-us/services/cdn/",
		description: "Azure Content Delivery Network (CDN) reduces load times, save bandwidth and speed responsiveness.",
		icon: "Azure.svg",
		categories: [
			"infrastructure-hosting",
			"server-runtime-infra",
		],
		rules: [
			{
				id: "azure-cdn:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^(?:ECAcc|ECS|ECD)", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "azure-cdn:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^(?:ecacc|ecs|ecd)", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"azure",
		],
	},
	{
		id: "bask-health",
		name: "Bask Health",
		website: "https://bask.health",
		description: "Bask Health is a telehealth platform that enables the creation of custom digital health solutions for virtual care delivery and patient engagement.",
		icon: "BaskHealth.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "bask-health:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.bask\\.health"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bernet-cloud",
		name: "Bernet Cloud",
		website: "https://bernet.cloud",
		description: "Bernet Cloud is a cloud management platform that enables global application deployment without requiring advanced technical expertise.",
		icon: "BernetCloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "bernet-cloud:header:0",
				kind: "header",
				key: "Bc-Powered-By",
				valuePattern: new RegExp("bernet\\.cloud", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "bernet-cloud:header:1",
				kind: "header",
				key: "bc-powered-by",
				valuePattern: new RegExp("bernet\\.cloud", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "billmanager",
		name: "BILLmanager",
		website: "https://www.ispsystem.ru/billmanager-host",
		description: "BILLmanager is a hosting billing panel used to manage service provisioning, invoicing, and client accounts for hosting providers.",
		icon: "BILLmanager.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "billmanager:jsGlobal:0",
				kind: "jsGlobal",
				property: "binary",
				valuePattern: new RegExp("\\/manager\\/billmgr"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "billmanager:jsGlobal:1",
				kind: "jsGlobal",
				property: "pageInfo.binary",
				valuePattern: new RegExp("\\/billmgr"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "bluehost",
		name: "Bluehost",
		website: "https://www.bluehost.com",
		description: "Bluehost is a large web host known for its WordPress expertise, variety of “one-stop-shop” services, and bargain prices.",
		icon: "Bluehost.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "bluehost:header:0",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("c2hhcmVkLmJsdWVob3N0LmNvbQ==", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "bluehost:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.bluehost\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "bluehost:dns:2",
				kind: "dns",
				valuePattern: new RegExp("\\.bluehost\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "bluehost:header:3",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("c2hhcmvklmjsdwvob3n0lmnvbq==", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "bootstrapcdn",
		name: "BootstrapCDN",
		website: "https://www.bootstrapcdn.com/",
		description: "BootstrapCDN is a powerful and reliable Content Delivery Network (CDN) that delivers static resources, including CSS, JavaScript, and font files, for the widely-used Bootstrap framework. By leveraging multiple server locations worldwide, BootstrapCDN accelerates website loading times, ensuring a smooth and visually appealing user experience. Additionally, it ensures website compatibility with various devices and browsers. The service reduces bandwidth usage and server load, improving web performance for developers and end-users alike.",
		icon: "BootstrapCDN.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "bootstrapcdn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bootstrapcdn\\.com\\/bootstrap\\/((?:\\d+\\.)+\\d+)?(?:\\/js\\/)?bootstrap(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "brimble",
		name: "Brimble",
		website: "https://brimble.io",
		description: "Brimble is a cloud platform for deploying frontend web applications.",
		icon: "brimble.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "brimble:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Brimble$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "brimble:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^brimble$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "bunny",
		name: "Bunny",
		website: "https://bunny.net",
		description: "Bunny is a content delivery and edge cloud platform with CDN, storage, streaming, and security services.",
		icon: "Bunny.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "bunny:dom:0",
				kind: "dom",
				selector: "[src*='.b-cdn.net'],[data-src*='.b-cdn.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bunny:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^BunnyCDN", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "bunny:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^bunnycdn", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "cachefly",
		name: "CacheFly",
		website: "https://www.cachefly.com",
		description: "CacheFly is a content delivery network (CDN) which offers CDN service that relies solely on IP anycast for routing, rather than DNS based global load balancing.",
		icon: "CacheFly.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "cachefly:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^CFS ", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cachefly:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^cfs ", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "cdn77",
		name: "CDN77",
		website: "https://www.cdn77.com",
		description: "CDN77 is a content delivery network (CDN).",
		icon: "CDN77.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "cdn77:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^CDN77-Turbo$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cdn77:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^cdn77-turbo$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "cdnjs",
		name: "cdnjs",
		website: "https://cdnjs.com",
		description: "cdnjs is a free distributed JS library delivery service.",
		icon: "cdnjs.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "cdnjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cdnjs:dom:1",
				kind: "dom",
				selector: "link[href*='cdnjs.cloudflare.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"cloudflare",
		],
	},
	{
		id: "chabokan",
		name: "Chabokan",
		website: "https://chabokan.net",
		description: "Chabokan is a cloud services provider, offering a wide range of incorporated cloud services including Cloud Object Storage, DBaaS, BaaS, and PaaS.",
		icon: "Chabokan.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "chabokan:header:0",
				kind: "header",
				key: "ch-powered-by",
				valuePattern: new RegExp("Chabokan\\s\\(chabokan\\.net\\)", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "chabokan:header:1",
				kind: "header",
				key: "ch-powered-by",
				valuePattern: new RegExp("chabokan\\s\\(chabokan\\.net\\)", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"payg",
			],
		},
	},
	{
		id: "clientacquisition",
		name: "Clientacquisition",
		website: "https://www.clientacquisition.io",
		description: "Clientacquisition is a provider of tailored infrastructure solutions that drive growth.",
		icon: "Clientacquisition.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "clientacquisition:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.clientacquisition\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "cloud-guard",
		name: "Cloud Guard",
		website: "https://cloudguard.ir",
		description: "CloudGuard is a cybersecurity solutions provider focused on cloud security.",
		icon: "Cloud Guard.svg",
		categories: [
			"infrastructure-hosting",
			"security",
		],
		rules: [],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "cloudflare",
		name: "Cloudflare",
		website: "https://www.cloudflare.com",
		description: "Cloudflare is a web-infrastructure and website-security company, providing content-delivery-network services, DDoS mitigation, Internet security, and distributed domain-name-server services.",
		icon: "CloudFlare.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "cloudflare:dom:0",
				kind: "dom",
				selector: "img[src*='//cdn.cloudflare']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cloudflare:jsGlobal:1",
				kind: "jsGlobal",
				property: "CloudFlare",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cloudflare:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^__cfduid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "cloudflare:header:3",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^cloudflare$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cloudflare:meta:4",
				kind: "meta",
				key: "image",
				valuePattern: new RegExp("\\/\\/cdn\\.cloudflare", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "cloudflare:dns:5",
				kind: "dns",
				valuePattern: new RegExp("\\.cloudflare\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "cloudflare:dns:6",
				kind: "dns",
				valuePattern: new RegExp("\\.cloudflare\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "cloudflare:header:7",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^cloudflare$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:cloudflare:cloudflare:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "cloudflare-workers",
		name: "Cloudflare Workers",
		website: "https://workers.cloudflare.com",
		description: "Cloudflare Workers is a serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure.",
		icon: "Cloudflare Workers.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "cloudflare-workers:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.workers\\.dev"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "cloudflare-workers:meta:1",
				kind: "meta",
				key: "runtime",
				valuePattern: new RegExp("^Cloudflare Workers$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
			],
		},
		implies: [
			"cloudflare",
		],
	},
	{
		id: "cloudimage",
		name: "Cloudimage",
		website: "https://www.cloudimage.io",
		description: "Cloudimage automates the transformation and optimisation of images on the fly and accelerates their distribution via the Content Delivery Network (CDN).",
		icon: "Cloudimage.svg",
		categories: [
			"infrastructure-hosting",
			"media-video",
		],
		rules: [
			{
				id: "cloudimage:dom:0",
				kind: "dom",
				selector: "img[src*='.cloudimg.io/'], link[href*='.cloudimg.io/'], amp-img[src*='.cloudimg.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cloudimage:jsGlobal:1",
				kind: "jsGlobal",
				property: "ciResponsive.config.domain",
				valuePattern: new RegExp("cloudimg\\.io"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
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
	},
	{
		id: "cloudways",
		name: "Cloudways",
		website: "https://www.cloudways.com",
		description: "Cloudways offers managed cloud-hosting services for WordPress sites on a cloud server where multiple copies of your content will be replicated throughout your chosen data center.",
		icon: "Cloudways.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "cloudways:header:0",
				kind: "header",
				key: "cache-provider",
				valuePattern: new RegExp("CLOUDWAYS-CACHE-DE", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cloudways:header:1",
				kind: "header",
				key: "cache-provider",
				valuePattern: new RegExp("cloudways-cache-de", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "contabo",
		name: "Contabo",
		website: "https://contabo.com",
		description: "Contabo is a German hosting provider, previously known by the name Giga-International.",
		icon: "Contabo.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "contabo:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.contabo\\.net", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "cpanel",
		name: "cPanel",
		website: "https://www.cpanel.net",
		description: "cPanel is a web hosting control panel. The software provides a graphical interface and automation tools designed to simplify the process of hosting a website.",
		icon: "cPanel.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "cpanel:html:0",
				kind: "html",
				pattern: new RegExp("<!-- cPanel"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "cpanel:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^cprelogin$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "cpanel:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^cpsession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "cpanel:header:3",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("cpsrvd\\/([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cpanel:html:4",
				kind: "html",
				pattern: new RegExp("<!-- cpanel"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "cpanel:header:5",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("cpsrvd\\/([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:cpanel:cpanel:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "createjs",
		name: "CreateJS",
		website: "https://code.createjs.com",
		description: "CreateJS is a suite of modular libraries and tools which work together or independently to enable interactive content on open web technologies via HTML5.",
		icon: "CreateJS.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "createjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.createjs\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "creoline",
		name: "Creoline",
		website: "https://www.creoline.com",
		description: "Creoline is a provider of scalable cloud solutions and application domain services.",
		icon: "Creoline.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "creoline:dom:0",
				kind: "dom",
				selector: "link[href*='.cstatic.io/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "deno-deploy",
		name: "Deno Deploy",
		website: "https://deno.land/",
		description: "Deno Deploy is a distributed system that runs JavaScript, TypeScript, and WebAssembly at the edge, worldwide.",
		icon: "deno.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "deno-deploy:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^deno\\/*", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
			],
		},
		implies: [
			"deno",
		],
	},
	{
		id: "derak-cloud",
		name: "DERAK.CLOUD",
		website: "https://derak.cloud",
		icon: "DerakCloud.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "derak-cloud:jsGlobal:0",
				kind: "jsGlobal",
				property: "derakCloud.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "derak-cloud:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^__derak_auth$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "derak-cloud:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^__derak_user$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "derak-cloud:header:3",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^DERAK\\.CLOUD$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "derak-cloud:header:4",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^derak\\.cloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "deta",
		name: "Deta",
		website: "https://deta.sh",
		description: "Deta is a cloud platform for building and deploying apps.",
		icon: "deta.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "deta:url:0",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/[^/]+\\.deta\\.(?:app|dev)"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "deta:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Deta$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "deta:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^deta$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "diamondcdn",
		name: "DiamondCDN",
		website: "https://diamondcdn.com",
		description: "DiamondCDN is a CDN with DDoS mitigation for free.",
		icon: "DiamondCDN.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "diamondcdn:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^DiamondCDN$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "diamondcdn:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^diamondcdn$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "digicdn",
		name: "DigiCDN",
		website: "https://digicloud.ir",
		description: "DigiCDN by Digicloud is a content delivery network featuring multiple servers and Anycast architecture, safeguarding your website against cyber attacks.",
		icon: "DigicloudCDN.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "digicdn:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("digicloud"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"poa",
			],
		},
	},
	{
		id: "digitalocean-spaces",
		name: "DigitalOcean Spaces",
		website: "https://www.digitalocean.com/products/spaces",
		description: "DigitalOcean Spaces is a cloud-based object storage service provided by DigitalOcean, a cloud infrastructure provider. It allows users to store and retrieve large amounts of data, such as images, videos, audio files, backups, and logs, using a simple RESTful API or a web-based graphical user interface (GUI).",
		icon: "DigitalOcean.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "digitalocean-spaces:dom:0",
				kind: "dom",
				selector: "img[data-src*='.digitaloceanspaces.com'], img[src*='.digitaloceanspaces.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "directadmin",
		name: "DirectAdmin",
		website: "https://www.directadmin.com",
		description: "DirectAdmin is a graphical web-based web hosting control panel designed to make administration of websites easier.",
		icon: "DirectAdmin.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "directadmin:html:0",
				kind: "html",
				pattern: new RegExp("<a[^>]+>DirectAdmin<\\/a> Web Control Panel"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "directadmin:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("DirectAdmin Daemon v([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "directadmin:html:2",
				kind: "html",
				pattern: new RegExp("<a[^>]+>directadmin<\\/a> web control panel"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "directadmin:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("directadmin daemon v([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:directadmin:directadmin:*:*:*:*:*:*:*:*",
		},
		implies: [
			"apache-http-server",
			"php",
		],
	},
	{
		id: "domainfactory",
		name: "DomainFactory",
		website: "https://www.df.eu",
		description: "DomainFactory has been operating as a web hosting company. It is owned by GoDaddy and targets businesses in Austria and Germany.",
		icon: "DomainFactory.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "domainfactory:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns(?:\\d+)?\\.namespace4you\\.de", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "dorsa-cloud",
		name: "Dorsa Cloud",
		website: "https://dorsa.cloud",
		description: "Dorsa Cloud is a cloud service provider offering scalable and flexible Infrastructure as a Service (IaaS) solutions for businesses.",
		icon: "Dorsa Cloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "dorsa-cloud:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Dorsa Cloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "dorsa-cloud:header:1",
				kind: "header",
				key: "x-cdn-provider",
				valuePattern: new RegExp("^Dorsa Cloud", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "dorsa-cloud:header:2",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^Dorsa Cloud", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "dorsa-cloud:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^dorsa cloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "dorsa-cloud:header:4",
				kind: "header",
				key: "x-cdn-provider",
				valuePattern: new RegExp("^dorsa cloud", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "dorsa-cloud:header:5",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^dorsa cloud", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "doteasy",
		name: "Doteasy",
		website: "https://www.doteasy.com",
		description: "Doteasy is a web hosting company that provides web hosting services, domain registration, and other related services for businesses and individuals. The company was founded in 2000 and is based in Vancouver, Canada.",
		icon: "Doteasy.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "dreamhost",
		name: "DreamHost",
		website: "https://www.dreamhost.com",
		description: "DreamHost is a Los Angeles-based web hosting provider and domain name registrar.",
		icon: "DreamHost.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "dreamhost:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.dreamhost\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "dreamhost:dns:1",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.dreamhost\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "drupal-multisite",
		name: "Drupal Multisite",
		website: "https://www.drupal.org/docs/multisite-drupal",
		description: "Drupal Multisite enables separate, independent sites to be served from a single codebase.",
		icon: "Drupal.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "drupal-multisite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/sites\\/(?!.*(default|all)).*\\/(?:files|themes|modules)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "drupal-multisite:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/sites\\/(?!(?:default|all)\\/).*\\/(?:files|themes|modules)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "drupal-multisite:dom:2",
				kind: "dom",
				selector: "figure[style*='/sites/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "drupal-multisite:dom:3",
				kind: "dom",
				selector: "img[src*='/sites/'], img[srcset*='/sites/'], source[srcset*='/sites/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "drupal-multisite:html:4",
				kind: "html",
				pattern: new RegExp("\\/sites\\/(?!(?:default|all)\\/)[^\"'<>]+\\/(?:files|themes|modules)\\/", "i"),
				confidence: 90,
				description: "Document HTML contains a non-default Drupal multisite asset path.",
			},
			{
				id: "drupal-multisite:text:5",
				kind: "text",
				pattern: new RegExp("\\/sites\\/(?!(?:default|all)\\/).*\\/(?:files|themes|modules)\\/"),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"drupal",
		],
		requires: [
			"drupal",
		],
	},
	{
		id: "dweet",
		name: "Dweet",
		website: "https://dweet.io",
		description: "Dweet is a platform enabling data sharing across Internet of Things(IoT).",
		icon: "Dweet.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "dweet:jsGlobal:0",
				kind: "jsGlobal",
				property: "dweetCallback",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dweet:jsGlobal:1",
				kind: "jsGlobal",
				property: "dweet_script_loader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dweet:jsGlobal:2",
				kind: "jsGlobal",
				property: "dweetio.dweet",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dweet:jsGlobal:3",
				kind: "jsGlobal",
				property: "dweetioThing",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "edgecast",
		name: "EdgeCast",
		website: "https://www.edgecast.com",
		description: "EdgeCast is a content delivery network (CDN) that accelerated and delivers static content to users around the world.",
		icon: "EdgeCast.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "edgecast:url:0",
				kind: "url",
				pattern: new RegExp("https?:\\/\\/(?:[^/]+\\.)?edgecastcdn\\.net\\/"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "edgecast:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^ECD\\s\\(\\S+\\)", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "edgecast:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^ecd\\s\\(\\s+\\)", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "edgeone",
		name: "EdgeOne",
		website: "https://edgeone.ai",
		description: "EdgeOne is an edge-service platform that delivers global content distribution, network acceleration, and integrated security protections for distributed applications.",
		icon: "EdgeOne.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "edgeone:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^TencentEdgeOne$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "edgeone:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^tencentedgeone$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "edgio",
		name: "Edgio",
		website: "https://edg.io",
		description: "Edgio was a developer-focused edge platform offering delivery and compute features via Layer0, now discontinued and partially absorbed by Akamai.",
		icon: "Edgio.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "edgio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/__layer0__\\/cache-manifest\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "edgio:jsGlobal:1",
				kind: "jsGlobal",
				property: "Layer0.Metrics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "edgio:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^layer0_bucket$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "edgio:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^layer0_destination$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "edgio:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^layer0_eid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "edgio:header:5",
				kind: "header",
				key: "x-0-version",
				valuePattern: new RegExp("^\\d+ ([\\d.]+) ", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "elementor-cloud",
		name: "Elementor Cloud",
		website: "https://elementor.com",
		description: "Elementor Cloud is a platform for creating and hosting WordPress websites with Elementor.",
		icon: "Elementor.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "elementor-cloud:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("Elementor Cloud", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "elementor-cloud:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("elementor cloud", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
		implies: [
			"elementor",
			"wordpress",
		],
	},
	{
		id: "f5-distributed-cloud-services",
		name: "F5 Distributed Cloud Services",
		website: "https://www.f5.com/products/distributed-cloud-services",
		description: "F5 Distributed Cloud Services is a SaaS platform providing security, networking, and application management to deploy, secure, and operate applications in cloud-native environments.",
		icon: "F5DistributedCloudServices.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			saas: true,
		},
	},
	{
		id: "fastcomet",
		name: "FastComet",
		website: "https://www.fastcomet.com",
		description: "FastComet is a hosting service company from San Francisco, California.",
		icon: "FastComet.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "fastcomet:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.fcomet\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "fastly",
		name: "Fastly",
		website: "https://www.fastly.com",
		description: "Fastly is a cloud computing services provider. Fastly's cloud platform provides a content delivery network, Internet security services, load balancing, and video & streaming services.",
		icon: "Fastly.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "fastly:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.fastly\\.net"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "fastly:header:1",
				kind: "header",
				key: "Vary",
				valuePattern: new RegExp("Fastly-SSL", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fastly:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("Fastly", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fastly:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("fastly", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fastly:header:4",
				kind: "header",
				key: "vary",
				valuePattern: new RegExp("fastly-ssl", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
			cpe: "cpe:2.3:a:fastly:fastly:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "featherpanel",
		name: "FeatherPanel",
		website: "https://featherpanel.com",
		description: "FeatherPanel is an open-source game server management panel built with PHP, Vue, and Go.",
		icon: "FeatherPanel.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "featherpanel:jsGlobal:0",
				kind: "jsGlobal",
				property: "FeatherPanel.api",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "featherpanel:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^FeatherPanel$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "featherpanel:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^featherpanel$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "filestack",
		name: "Filestack",
		website: "https://www.filestack.com",
		description: "Filestack is a file upload API and content delivery network (CDN) that enables applications to handle, store, and distribute files.",
		icon: "Filestack.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "filestack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.filestackapi\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "filestack:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.filestackapi\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "fing",
		name: "Fing",
		website: "https://fing.ir",
		description: "Fing is a cloud service to deploy and manage your applications without being worried about your infrastructure and environment.",
		icon: "Fing.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "fing:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Fing", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fing:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^fing", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "fireblade",
		name: "Fireblade",
		website: "https://fireblade.com",
		icon: "Fireblade.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "fireblade:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("fbs", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fireblade:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("fbs", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "fly-io",
		name: "Fly.io",
		website: "https://fly.io",
		description: "Fly is a platform for running full stack apps and databases.",
		icon: "Fly.io.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "fly-io:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^_fly$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "fly-io:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Fly\\/[\\w]+\\s\\(.*\\)$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fly-io:header:2",
				kind: "header",
				key: "via",
				valuePattern: new RegExp("^.*\\sfly\\.io$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fly-io:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^fly\\/[\\w]+\\s\\(.*\\)$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "flywheel",
		name: "Flywheel",
		website: "https://getflywheel.com",
		description: "Flywheel is a managed WordPress hosting platform.",
		icon: "flywheel.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "flywheel:header:0",
				kind: "header",
				key: "x-fw-server",
				valuePattern: new RegExp("^Flywheel(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "flywheel:header:1",
				kind: "header",
				key: "x-fw-server",
				valuePattern: new RegExp("^flywheel(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"wordpress",
		],
	},
	{
		id: "gcore",
		name: "Gcore",
		website: "https://gcore.com",
		description: "Gcore is a public cloud and content delivery network (CDN) company.",
		icon: "Gcore.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "gcore:header:0",
				kind: "header",
				key: "x-id",
				valuePattern: new RegExp("^[\\w-]+-gc\\d{2}$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "gcore:header:1",
				kind: "header",
				key: "x-id-fe",
				valuePattern: new RegExp("^[\\w-]+-gc\\d{2}$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "gigalixir",
		name: "Gigalixir",
		website: "https://gigalixir.com/",
		description: "Gigalixir is a PaaS focused on deployments of Elixir and Phoenix web apps.",
		icon: "Gigalixir.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "gigalixir:url:0",
				kind: "url",
				pattern: new RegExp("\\.gigalixirapp\\.com"),
				description: "Page URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "github-pages",
		name: "GitHub Pages",
		website: "https://pages.github.com/",
		description: "GitHub Pages is a static site hosting service.",
		icon: "GitHub.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "github-pages:url:0",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/[^/]+\\.github\\.io"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "github-pages:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^GitHub\\.com$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "github-pages:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^github\\.com$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "glitch",
		name: "Glitch",
		website: "https://glitch.com",
		description: "Glitch is a collaborative programming environment that lives in your browser and deploys code as you type.",
		icon: "Glitch.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "glitch:url:0",
				kind: "url",
				pattern: new RegExp("https:\\/\\/[^.]+\\.glitch\\.me"),
				description: "Page URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "gocache",
		name: "GoCache",
		website: "https://www.gocache.com.br/",
		description: "GoCache is an in-memory key:value store/cache similar to memcached that is suitable for applications running on a single machine.",
		icon: "GoCache.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "gocache:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^gocache$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "gocache:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^gocache$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "godaddy",
		name: "GoDaddy",
		website: "https://www.godaddy.com",
		description: "GoDaddy is used as a web host and domain registrar.",
		icon: "GoDaddy.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "godaddy:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.domaincontrol\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "godaddy:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.domaincontrol\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "google-cloud",
		name: "Google Cloud",
		website: "https://cloud.google.com",
		description: "Google Cloud is a suite of cloud computing services.",
		icon: "Google Cloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:google:cloud_platform:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "google-cloud-cdn",
		name: "Google Cloud CDN",
		website: "https://cloud.google.com/cdn",
		description: "Cloud CDN uses Google's global edge network to serve content closer to users.",
		icon: "google-cloud-cdn.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "google-cloud-cdn:header:0",
				kind: "header",
				key: "Via",
				valuePattern: new RegExp("^1\\.1 google$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "google-cloud-cdn:header:1",
				kind: "header",
				key: "via",
				valuePattern: new RegExp("^1\\.1 google$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"google-cloud",
		],
	},
	{
		id: "google-hosted-libraries",
		name: "Google Hosted Libraries",
		website: "https://developers.google.com/speed/libraries",
		description: "Google Hosted Libraries is a stable, reliable, high-speed, globally available content distribution network for the most popular, open-source JavaScript libraries.",
		icon: "Google Developers.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "google-hosted-libraries:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ajax\\.googleapis\\.com\\/ajax\\/libs\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-hosted-libraries:dom:1",
				kind: "dom",
				selector: "link[href*='ajax.googleapis.com/ajax/libs']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "gotipath",
		name: "GotiPath",
		website: "https://gotipath.com",
		description: "GotiPath is a content delivery network (CDN) provider that is associated with telecom giant Telekom Malaysia Berhad.",
		icon: "GotiPath.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "gotipath:dom:0",
				kind: "dom",
				selector: "img[src*='.gotipath.com/'], link[href*='.gpcdn.net/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "gotipath:header:1",
				kind: "header",
				key: "X-Cache",
				valuePattern: new RegExp("\\.swiftserve\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "gotipath:header:2",
				kind: "header",
				key: "x-cache",
				valuePattern: new RegExp("\\.swiftserve\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "guardflame",
		name: "GuardFlame",
		website: "https://hydun.com",
		description: "GuardFlame is a provider of CDN acceleration services that enhance website performance.",
		icon: "GuardFlame.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "guardflame:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^GuardFlame$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "guardflame:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^guardflame$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "guideit",
		name: "GuideIT",
		website: "https://guideit.uk",
		description: "GuideIT is a cloud hosting provider.",
		icon: "GuideIT.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "guideit:header:0",
				kind: "header",
				key: "platform",
				valuePattern: new RegExp("^GuideIT$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "guideit:header:1",
				kind: "header",
				key: "platform",
				valuePattern: new RegExp("^guideit$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "helhost",
		name: "Helhost",
		website: "https://www.helhost.com",
		description: "Helhost is a web hosting provider and internet domain registrar from Democratic Republic of Congo.",
		icon: "Helhost.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "helhost:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("Helhost", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "helhost:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.helhost\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "helhost:dns:2",
				kind: "dns",
				valuePattern: new RegExp("\\.helhost\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "helhost:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\.helhost\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "helhost:header:4",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("helhost", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "helipod",
		name: "Helipod",
		website: "https://helipod.io",
		description: "Helipod is a platform as a service (PaaS) for deploying and running web applications.",
		icon: "Helipod.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "helipod:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Helipod$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "helipod:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^Helipod$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "help-com",
		name: "Help.com",
		website: "https://www.help.com",
		description: "Help.com is a service that provides domain name registration and website hosting with simplified setup and management.",
		icon: "Help.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "help-com:jsGlobal:0",
				kind: "jsGlobal",
				property: "Helpdotcom",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "heroku",
		name: "Heroku",
		website: "https://www.heroku.com/",
		description: "Heroku is a cloud platform as a service (PaaS) supporting several programming languages.",
		icon: "heroku.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "heroku:url:0",
				kind: "url",
				pattern: new RegExp("\\.herokuapp\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "heroku:header:1",
				kind: "header",
				key: "Via",
				valuePattern: new RegExp("[\\d.-]+ vegur$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "heroku:dns:2",
				kind: "dns",
				valuePattern: new RegExp("heroku-domain-verification", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "heroku:header:3",
				kind: "header",
				key: "via",
				valuePattern: new RegExp("[\\d.-]+ vegur$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "hetzner",
		name: "Hetzner",
		website: "https://www.hetzner.com",
		description: "Hetzner provides dedicated hosting, shared web hosting, virtual private servers, managed servers, domain names, SSL certificates, storage boxes, and cloud.",
		icon: "Hetzner.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hetzner:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("HeRay", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hetzner:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Hetzner", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hetzner:dns:2",
				kind: "dns",
				valuePattern: new RegExp("\\.ns\\.hetzner\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "hetzner:dns:3",
				kind: "dns",
				valuePattern: new RegExp("\\.hetzner\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "hetzner:header:4",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("heray", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hetzner:header:5",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("hetzner", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "hostchefs",
		name: "HostChefs",
		website: "https://hostchefs.eu",
		description: "HostChefs is a web hosting service that provides infrastructure and tools for deploying, managing, and maintaining websites online.",
		icon: "HostChefs.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hostchefs:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^HostChefs DDoS Protected$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "hostens",
		name: "Hostens",
		website: "https://www.hostens.com",
		description: "Hostens is a web hosting company specialising in hosting services, virtual private server hosting, and the domain name or transition.",
		icon: "Hostens.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hostens:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hostens\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "hosteurope",
		name: "HostEurope",
		website: "https://www.hosteurope.de",
		description: "HostEurope is a European website hosting, email and domain name registrar company headquartered Hayes, West London.",
		icon: "HostEurope.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hosteurope:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hosteurope\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "hostgator",
		name: "Hostgator",
		website: "https://www.hostgator.com",
		description: "HostGator is a Houston-based provider of shared, reseller, virtual private server, and dedicated web hosting with an additional presence in Austin, Texas.",
		icon: "Hostgator.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hostgator:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hostgator\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "hosting-ukraine",
		name: "Hosting Ukraine",
		website: "https://www.ukraine.com.ua",
		description: "Hosting Ukraine is a web hosting provider and internet domain registrar.",
		icon: "Hosting Ukraine.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hosting-ukraine:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.ukraine\\.com\\.ua", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "hostinger",
		name: "Hostinger",
		website: "https://www.hostinger.com",
		description: "Hostinger is an employee-owned Web hosting provider and internet domain registrar.",
		icon: "Hostinger.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hostinger:header:0",
				kind: "header",
				key: "platform",
				valuePattern: new RegExp("hostinger", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hostinger:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.(?:dns-parking|hostinger)\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:hostinger:hostinger:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "hostinger-cdn",
		name: "Hostinger CDN",
		website: "https://www.hostinger.com",
		description: "Hostinger Content Delivery Network (CDN).",
		icon: "Hostinger.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hostinger-cdn:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("hcdn", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "hostiq",
		name: "Hostiq",
		website: "https://hostiq.ua",
		description: "Hostiq is a web hosting provider and internet domain registrar.",
		icon: "Hostiq.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hostiq:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hostiq\\.ua", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "hostpoint",
		name: "Hostpoint",
		website: "https://www.hostpoint.ch",
		description: "Hostpoint is a Switzerland-based web hosting company.",
		icon: "Hostpoint.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hostpoint:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hostpoint\\.ch", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "hypercloudhost",
		name: "Hypercloudhost",
		website: "https://hypercloudhost.com",
		description: "Hypercloudhost is a hosting service solution in Indonesia offering anti-DDoS protection and high-performance cloud hosting.",
		icon: "Hypercloudhost.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hypercloudhost:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^hypercloudhost$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "hyperlane",
		name: "Hyperlane",
		website: "https://hyperlane.co",
		description: "Hyperlane is a hosting platform for WordPress and Craft CMS websites.",
		icon: "Hyperlane.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "hyperlane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hyperlane\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hyperlane:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.hyperlane\\.co\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "i-mscp",
		name: "i-MSCP",
		website: "https://github.com/i-MSCP/imscp",
		description: "i-MSCP (internet Multi Server Control Panel) is a software for shared hosting environments management on Linux servers.",
		icon: "i-MSCP.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "i-mscp:meta:0",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^i-MSCP$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "i-mscp:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^i-mscp$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "idcloudhost",
		name: "idCloudHost",
		website: "https://idcloudhost.com",
		description: "idCloudHost is a local web service provider based in Indonesia that offer a wide range of services including domain name registration and cloud hosting.",
		icon: "idCloudHost.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "idcloudhost:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.cloudhost\\.id", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "idcloudhost:dns:1",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.cloudhost\\.id", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "imageengine",
		name: "ImageEngine",
		website: "https://imageengine.io",
		description: "ImageEngine is an intelligent image content delivery network. ImageEngine will resize your image content tailored to the end users device.",
		icon: "ImageEngine.svg",
		categories: [
			"infrastructure-hosting",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "imageengine:dom:0",
				kind: "dom",
				selector: "link[href*='.imgeng.in/'], img[src*='.imgeng.in/'], img[data-src*='.imgeng.in/'], source[srcset*='.imgeng.in/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "imgix",
		name: "Imgix",
		website: "https://imgix.com/",
		description: "Imgix is a visual media platform for managing, processing, rendering, optimising and delivering your existing images.",
		icon: "Imgix.svg",
		categories: [
			"infrastructure-hosting",
			"media-video",
		],
		rules: [
			{
				id: "imgix:dom:0",
				kind: "dom",
				selector: "img[src*='.imgix.net/'], img[data-src*='.imgix.net/'], img[srcset*='.imgix.net/'], source[src*='.imgix.net/'], source[data-src*='.imgix.net/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "imgix:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.imgix\\.net", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
			cpe: "cpe:2.3:a:imgix:imgix:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "incapsula",
		name: "Incapsula",
		website: "https://www.incapsula.com",
		description: "Incapsula is a cloud-based application delivery platform. It uses a global content delivery network to provide web application security, DDoS mitigation, content caching, application delivery, load balancing and failover services.",
		icon: "Incapsula.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "incapsula:header:0",
				kind: "header",
				key: "X-CDN",
				valuePattern: new RegExp("Incapsula", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "incapsula:header:1",
				kind: "header",
				key: "x-cdn",
				valuePattern: new RegExp("incapsula", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "infomaniak",
		name: "Infomaniak",
		website: "https://www.infomaniak.com",
		description: "Infomaniak is a hosting company based in Geneva, Switzerland.",
		icon: "Infomaniak.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "infomaniak:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.infomaniak\\.ch", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "ionos",
		name: "IONOS",
		website: "https://www.ionos.com",
		description: "IONOS is the web hosting and cloud partner for small and medium-sized businesses.",
		icon: "IONOS.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "ionos:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns1\\d+\\.ui-dns\\.(?:de|org|biz|com)", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "jsdelivr",
		name: "jsDelivr",
		website: "https://www.jsdelivr.com/",
		description: "JSDelivr is a free public CDN for open-source projects. It can serve web files directly from the npm registry and GitHub repositories without any configuration.",
		icon: "jsdelivr-icon.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "jsdelivr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jsdelivr:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("cdn\\.jsdelivr\\.net"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "jsdelivr:dom:2",
				kind: "dom",
				selector: "link[href*='cdn.jsdelivr.net']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "keloncloud",
		name: "KelonCloud",
		website: "https://www.keloncloud.com",
		description: "KelonCloud offers a variety of cloud-based services, such as CDN, DDoS mitigation, cloud security, streaming, cloud compute, and more.",
		icon: "KelonCloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "keloncloud:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^(?:(?:KelonCloud|KC)-Private-CDN|KelonCloud)$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "keloncloud:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^(?:(?:keloncloud|kc)-private-cdn|keloncloud)$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"recurring",
			],
		},
	},
	{
		id: "keycdn",
		name: "KeyCDN",
		website: "https://www.keycdn.com",
		description: "KeyCDN is a content delivery network (CDN).",
		icon: "KeyCDN.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "keycdn:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^keycdn-engine$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "keycdn:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^keycdn-engine$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "kinsta",
		name: "Kinsta",
		website: "https://kinsta.com",
		description: "Kinsta is a managed WordPress hosting provider leveraging the Google Cloud Platform to offer high-performance, secure, and user-friendly hosting solutions for WordPress websites.",
		icon: "kinsta.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
		implies: [
			"wordpress",
		],
	},
	{
		id: "kuronekoserver-cdn",
		name: "KuronekoServer CDN",
		website: "https://cdn.krnk.org",
		description: "KuronekoServer CDN is a distributed content delivery network utilizing VPS and Cloudflare to enhance performance and reliability.",
		icon: "KuronekoServerCDN.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "kuronekoserver-cdn:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.krnk\\.org\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "kuronekoserver-cdn:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.krnk.org/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "lagoon",
		name: "Lagoon",
		website: "https://lagoon.sh/",
		description: "The Open Source Application Delivery Platform for Kubernetes.",
		icon: "lagoon.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			oss: true,
		},
	},
	{
		id: "leaseweb",
		name: "Leaseweb",
		website: "https://www.leaseweb.com",
		description: "Leaseweb is an Infrastructure-as-a-Service (IaaS) provider offering dedicated servers, CDN, cloud hosting and hybrid cloud on a global network.",
		icon: "Leaseweb.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "leaseweb:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.leaseweb\\.nl", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "liquid-web",
		name: "Liquid Web",
		website: "https://www.liquidweb.com",
		description: "Liquid Web is a US-based host offering premium managed web hosting solutions.",
		icon: "Liquid Web.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "liquid-web:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.liquidweb\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "luveedu-cloud",
		name: "Luveedu Cloud",
		website: "https://cloud.luveedu.com",
		description: "Luveedu Cloud is a domain and web hosting platform.",
		icon: "LuveeduCloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "luveedu-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.luveedu\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "maxcdn",
		name: "MaxCDN",
		website: "https://www.maxcdn.com",
		description: "MaxCDN is a content delivery network, which accelerates web-sites and decreases the server load.",
		icon: "MaxCDN.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "maxcdn:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^NetDNA", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "maxcdn:header:1",
				kind: "header",
				key: "X-CDN-Forward",
				valuePattern: new RegExp("^maxcdn$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "maxcdn:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^netdna", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "maxcdn:header:3",
				kind: "header",
				key: "x-cdn-forward",
				valuePattern: new RegExp("^maxcdn$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "mercurycloud",
		name: "Mercurycloud",
		website: "https://mercurycloud.fr",
		description: "Mercurycloud is a hosting service provider offering a range of solutions, including web hosting, virtual private servers (VPS), dedicated servers, and game servers.",
		icon: "Mercurycloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "mercurycloud:header:0",
				kind: "header",
				key: "X-Host",
				valuePattern: new RegExp("\\.mercurycloud\\.fr", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mercurycloud:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("MercuryCloud CDN v([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mercurycloud:header:2",
				kind: "header",
				key: "x-host",
				valuePattern: new RegExp("\\.mercurycloud\\.fr", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mercurycloud:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("mercurycloud cdn v([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "microsoft-ajax-content-delivery-network",
		name: "Microsoft Ajax Content Delivery Network",
		website: "https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview",
		description: "Microsoft Ajax Content Delivery Network hosts popular third party JavaScript libraries such as jQuery and enables you to easily add them to your web applications.",
		icon: "Microsoft.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "microsoft-ajax-content-delivery-network:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ajax\\.aspnetcdn\\.com\\/ajax\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "mirus",
		name: "Mirus",
		website: "https://mirusresearch.com",
		description: "Mirus is a platform that provides scalable solutions capable of adjusting capacity to meet demand while maintaining resilience against unexpected challenges.",
		icon: "Mirus.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "mirus:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.mirus\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "mittwald",
		name: "Mittwald",
		website: "https://www.mittwald.de",
		description: "Mittwald is a web hosting agency, established in 2003 in Espelkamp, Germany.",
		icon: "Mittwald.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "mittwald:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.agenturserver\\.(?:de|co|it)", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "mizbancloud",
		name: "MizbanCloud",
		website: "https://mizbancloud.com",
		description: "MizbanCloud is a total cloud infrastructure solutions, CDN service provider and Cloud Computing Services, Cloud DNS, Cloud Security, VoD Streaming Service, Live Streaming, Cloud Object Storage.",
		icon: "MizbanCloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "mizbancloud:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^MizbanCloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mizbancloud:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^mizbancloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "motherhost",
		name: "Motherhost",
		website: "https://www.motherhost.com",
		description: "Motherhost is a web hosting company based in India that offers a range of hosting services, including shared hosting, VPS hosting, dedicated servers, and cloud hosting.",
		icon: "Motherhost.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "motherhost:header:0",
				kind: "header",
				key: "platform",
				valuePattern: new RegExp("^motherhost$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"recurring",
			],
		},
	},
	{
		id: "nestify",
		name: "Nestify",
		website: "https://nestify.io",
		description: "Nestify is a fully managed WordPress hosting platform that runs on AWS graviton processors.",
		icon: "Nestify.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "netlify",
		name: "Netlify",
		website: "https://www.netlify.com/",
		description: "Netlify providers hosting and server-less backend services for web applications and static websites.",
		icon: "Netlify.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "netlify:url:0",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/[^/]+\\.netlify\\.(?:com|app)\\/"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "netlify:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("cdn\\.netlify\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "netlify:header:2",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Netlify", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "netlify:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^netlify", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "newspack-by-automattic",
		name: "Newspack by Automattic",
		website: "https://newspack.pub/",
		description: "Automattic's Newspack service is an all-in-one platform designed for small and medium-sized news organizations that simplifies publishing and drives audience and revenue right out of the box.",
		icon: "NewspackLogo.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "newspack-by-automattic:header:0",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("Newspack", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "newspack-by-automattic:header:1",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("newspack", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"recurring",
			],
		},
		implies: [
			"newspack",
		],
	},
	{
		id: "nexcess",
		name: "Nexcess",
		website: "https://www.nexcess.net",
		description: "Nexcess is a web hosting service.",
		icon: "nexcess.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "nexcess:header:0",
				kind: "header",
				key: "x-hostname",
				valuePattern: new RegExp("nxcli\\.net$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "niagahoster",
		name: "Niagahoster",
		website: "https://niagahoster.co.id",
		description: "Niagahoster is a web hosting service for small and medium enterprises. It provides shared hosting, WordPress hosting, Virtual Private Server (VPS), and more.",
		icon: "Niagahoster.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "niagahoster:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("Niagahoster", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "niagahoster:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("niagahoster", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
		implies: [
			"niagahoster",
		],
	},
	{
		id: "novaresa",
		name: "Novaresa",
		website: "https://www.novaresa.fr",
		description: "Novaresa is a cloud-based platform designed to manage, operate, and promote hosting services through centralized tools for administration, service delivery, and customer engagement.",
		icon: "Novaresa.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "novaresa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.novaresa\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "novaresa:jsGlobal:1",
				kind: "jsGlobal",
				property: "jquery_novaresa.Animation",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "ocea",
		name: "Ocea",
		website: "https://ocea.app",
		description: "Ocea is a web service facilitating website and app creation, leveraging cloud infrastructure.",
		icon: "Ocea.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "ocea:dom:0",
				kind: "dom",
				selector: "link[href*='.ocea.app/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "one-com",
		name: "One.com",
		website: "https://www.one.com",
		description: "One.com is a Denmark-based company offering bargain-priced WordPress and shared web hosting plans.",
		icon: "One.com.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "one-com:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.one\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "open-game-panel",
		name: "Open Game Panel",
		website: "https://opengamepanel.org",
		description: "Open Game Panel is an open-source hosting control panel for deploying and managing multiplayer game servers.",
		icon: "Open Game Panel.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "open-game-panel:dom:0",
				kind: "dom",
				selector: "span.controlpanellogin, .OGPVersionArea",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "open-game-panel:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^opengamepanel_web$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"php",
		],
	},
	{
		id: "orange-cdb",
		name: "Orange CDB",
		website: "https://wholesale.orange.com/international/en/our-solutions/cdn-content-delivery-boost.html",
		description: "Orange CDB is a content delivery network (CDN) and edge computing solution that accelerates content distribution, improves traffic handling, and enhances performance by delivering web resources through geographically distributed servers.",
		icon: "OrangeCDB.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ovhcloud",
		name: "OVHcloud",
		website: "https://www.ovhcloud.com",
		description: "OVHcloud is a global, cloud provider delivering hosted private cloud, public cloud, and dedicated server solutions.",
		icon: "OVHcloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "ovhcloud:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\d+\\.ovh\\.net", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "ovhcloud:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\d+\\.ovh\\.net", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "pagely",
		name: "Pagely",
		website: "https://pagely.com/",
		icon: "pagely.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "pagely:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Pagely", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "pagely:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^pagely", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"amazon-web-services",
			"wordpress",
		],
	},
	{
		id: "pantheon",
		name: "Pantheon",
		website: "https://pantheon.io/",
		description: "Pantheon is a WebOps (Website Operations) and Management Platform for WordPress and Drupal.",
		icon: "Pantheon.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "pantheon:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Pantheon", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "pantheon:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^pantheon", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"fastly",
			"mariadb",
			"nginx",
			"php",
		],
	},
	{
		id: "parmin-cloud",
		name: "Parmin Cloud",
		website: "https://parmin.cloud",
		description: "Parmin Cloud operates in the field of cloud services.",
		icon: "Parmin Cloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "parmin-cloud:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^ParminCloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "parmin-cloud:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^parmincloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"poa",
			],
		},
	},
	{
		id: "platform-sh",
		name: "Platform.sh",
		website: "https://platform.sh",
		icon: "platformsh.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
	},
	{
		id: "plesk",
		name: "Plesk",
		website: "https://www.plesk.com/",
		description: "Plesk is a web hosting and server data centre automation software with a control panel developed for Linux and Windows-based retail hosting service providers.",
		icon: "Plesk.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "plesk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("common\\.js\\?plesk"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "plesk:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Plesk(?:L|W)in", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "plesk:header:2",
				kind: "header",
				key: "X-Powered-By-Plesk",
				valuePattern: new RegExp("^Plesk", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "plesk:jsGlobal:3",
				kind: "jsGlobal",
				property: "Plesk.Form",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "plesk:header:4",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^plesk(?:l|w)in", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "plesk:header:5",
				kind: "header",
				key: "x-powered-by-plesk",
				valuePattern: new RegExp("^plesk", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:parallels:parallels_plesk_panel:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "powa",
		name: "Powa",
		website: "https://powa.com",
		description: "Powa is a site speed plugin for WordPress that operates its own Content Delivery Network (CDN) to enhance website performance and reduce loading times.",
		icon: "Powa.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "powa:jsGlobal:0",
				kind: "jsGlobal",
				property: "powaHealthCheck",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "powa:jsGlobal:1",
				kind: "jsGlobal",
				property: "powaInitAssets",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "powa:jsGlobal:2",
				kind: "jsGlobal",
				property: "powaOnLoadJs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "powa:jsGlobal:3",
				kind: "jsGlobal",
				property: "powaSyncLoadScripts",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pressable",
		name: "Pressable",
		website: "https://pressable.com",
		description: "Pressable is a managed hoting platform for WordPress.",
		icon: "pressable.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "pressable:header:0",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("^Pressable", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "pressable:header:1",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("^pressable", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"wordpress",
		],
	},
	{
		id: "pterodactyl-panel",
		name: "Pterodactyl Panel",
		website: "https://pterodactyl.io",
		description: "Pterodactyl Panel is a free, open-source game server management panel built with PHP, React, and Go.",
		icon: "Pterodactyl Panel.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "pterodactyl-panel:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^pterodactyl_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"go",
			"laravel",
			"php",
			"react",
		],
	},
	{
		id: "pxxl-app",
		name: "Pxxl App",
		website: "https://pxxl.app",
		description: "Pxxl App is a no-code platform that allows users to build and host web projects using custom subdomains on pxxl-managed domains.",
		icon: "Pxxl App.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "pxxl-app:url:0",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.app"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "pxxl-app:url:1",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.tech"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "pxxl-app:url:2",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.online"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "pxxl-app:url:3",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.click"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "pxxl-app:url:4",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.pro"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "pxxl-app:url:5",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.site"),
				description: "Page URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "pythonanywhere",
		name: "PythonAnywhere",
		website: "https://www.pythonanywhere.com",
		description: "PythonAnywhere is an online integrated development environment (IDE) and web hosting service (Platform as a service) based on the Python programming language.",
		icon: "PythonAnywhere.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "pythonanywhere:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^PythonAnywhere$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "pythonanywhere:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^pythonanywhere$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring",
			],
		},
		implies: [
			"python",
		],
	},
	{
		id: "railway",
		name: "Railway",
		website: "https://railway.app",
		description: "Railway is a cloud platform that simplifies building, deploying, and managing applications with easy setup and scalable infrastructure.",
		icon: "Railway.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "railway:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("railway\\.app"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "railway:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^railway$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "railway:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^railway$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "rawgit",
		name: "RawGit",
		website: "https://rawgit.com",
		description: "RawGit is a service that delivers raw files directly from GitHub, Bitbucket, or GitLab with correct Content-Type headers.",
		icon: "RawGit.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "rawgit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.rawgit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "reg-ru",
		name: "REG.RU",
		website: "https://www.reg.ru",
		description: "REG. RU is a web hosting provider and internet domain registrar.",
		icon: "REG.RU.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "reg-ru:dns:0",
				kind: "dns",
				valuePattern: new RegExp("(?:\\.hosting)?\\.reg\\.ru", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "render",
		name: "Render",
		website: "https://render.com",
		description: "Render is a cloud computing platform that provides a wide range of services, including web hosting, cloud computing, and application development. Render offers several hosting options, including static site hosting, web application hosting, and managed databases.",
		icon: "Render.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "render:header:0",
				kind: "header",
				key: "x-render-origin-server",
				valuePattern: new RegExp("Render", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "render:header:1",
				kind: "header",
				key: "x-render-origin-server",
				valuePattern: new RegExp("render", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "rosti",
		name: "Rosti",
		website: "https://rosti.cz",
		description: "Rosti is a hosting service suitable for development and production deployment of web applications.",
		icon: "Rosti.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "saba-host",
		name: "Saba.Host",
		website: "https://saba.host",
		description: "Saba.Host is a total web-hosting solutions. It provides shared hosting, WordPress hosting, dedicated server, virtual private server (VPS), SSL and more.",
		icon: "Saba.Host.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "saba-host:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.saba\\.host", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"recurring",
			],
		},
	},
	{
		id: "sakura-internet",
		name: "Sakura Internet",
		website: "https://www.sakura.ad.jp",
		description: "Sakura Internet is a web hosting provider that has been operating for almost 30 years.",
		icon: "Sakura Internet.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "sakura-internet:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.gslbN\\.sakura\\.ne\\.jp", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "sakura-internet:dns:1",
				kind: "dns",
				valuePattern: new RegExp("tech\\.sakura\\.ad\\.jp", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "section-io",
		name: "Section.io",
		website: "https://www.section.io",
		description: "Section.io is a Content Delivery Network (CDN).",
		icon: "sectionio.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
	},
	{
		id: "seravo",
		name: "Seravo",
		website: "https://seravo.com",
		icon: "Seravo.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "seravo:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^Seravo", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "seravo:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^seravo", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"wordpress",
		],
	},
	{
		id: "siteground",
		name: "SiteGround",
		website: "https://www.siteground.com",
		description: "SiteGround is a web hosting service.",
		icon: "siteground.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "siteground:header:0",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("192fc2e7e50945beb8231a492d6a8024|b7440e60b07ee7b8044761568fab26e8|624d5be7be38418a3e2a818cc8b7029b|6b7412fb82ca5edfd0917e3957f05d89", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "siteground:dns:1",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.c\\d+\\.sgvps\\.net", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "siteground:dns:2",
				kind: "dns",
				valuePattern: new RegExp("\\.siteground\\.net", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "smilii",
		name: "Smilii",
		website: "https://smilii.net",
		description: "Smilii is a family-owned web hosting provider and internet domain registrar offering domain registration and website hosting services.",
		icon: "Smilii.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "smilii:header:0",
				kind: "header",
				key: "Platform",
				valuePattern: new RegExp("^Smilii$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "smilii:header:1",
				kind: "header",
				key: "platform",
				valuePattern: new RegExp("^smilii$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "sotoon",
		name: "Sotoon",
		website: "https://sotoon.ir",
		description: "Sotoon is a CDN provider serving users specially in the MENA region.",
		icon: "Sotoon.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "sotoon:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Sotoon$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "sotoon:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Sotoon(?: CDN)?$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "sotoon:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^sotoon$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "stackpath",
		name: "StackPath",
		website: "https://www.stackpath.com",
		description: "StackPath is a cloud computing and services provider.",
		icon: "StackPath.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "stackpath:header:0",
				kind: "header",
				key: "x-backend-server",
				valuePattern: new RegExp("hosting\\.stackcp\\.net$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "stackpath:header:1",
				kind: "header",
				key: "x-provided-by",
				valuePattern: new RegExp("^StackCDN(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "stackpath:header:2",
				kind: "header",
				key: "x-provided-by",
				valuePattern: new RegExp("^stackcdn(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "statically",
		name: "Statically",
		website: "https://statically.io",
		description: "Statically is a free, fast and modern CDN for open-source projects, WordPress, images, and any static assets.",
		icon: "Statically.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "statically:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.statically\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "statically:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.statically.io/'], a[href*='cdn.statically.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "statically:header:2",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^statically$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "statically:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^statically$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "strato",
		name: "Strato",
		website: "https://www.strato.com",
		description: "Strato is an internet hosting service provider headquartered in Berlin, Germany which provide dedicated server hosting, a website builder and a cloud storage services.",
		icon: "Strato.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "strato:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.strato-rz\\.de", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "strattic",
		name: "Strattic",
		website: "https://www.strattic.com/",
		description: "Strattic offers static and headless hosting for WordPress sites.",
		icon: "strattic-icon.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "strattic:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("Strattic", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "strattic:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("strattic", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
		implies: [
			"wordpress",
		],
	},
	{
		id: "sucuri",
		name: "Sucuri",
		website: "https://sucuri.net/",
		description: "Sucuri is a cybersecurity company that provides website security solutions and services.",
		icon: "sucuri.png",
		categories: [
			"infrastructure-hosting",
			"wordpress-ecosystem",
			"security",
		],
		rules: [],
		requires: [
			"wordpress",
		],
	},
	{
		id: "tangled-network",
		name: "Tangled Network",
		website: "https://tanglednetwork.com",
		description: "Tangled Network provides a managed services in website devleopment, web and database hosting and domain registration, with a focus on everything managed for small and medium sized businesses.",
		icon: "atws.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "tangled-network:header:0",
				kind: "header",
				key: "X-Hosting-Provider",
				valuePattern: new RegExp("Tangled Network", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "tangled-network:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.tanglednetwork\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "tangled-network:dns:2",
				kind: "dns",
				valuePattern: new RegExp("\\.tanglednetwork\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "tangled-network:header:3",
				kind: "header",
				key: "x-hosting-provider",
				valuePattern: new RegExp("tangled network", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "tcadmin",
		name: "TCAdmin",
		website: "https://www.tcadmin.com",
		description: "TCAdmin is the game hosting control panel.",
		icon: "TCAdmin.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "tcadmin:jsGlobal:0",
				kind: "jsGlobal",
				property: "TCAdmin",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "tencent-cloud",
		name: "Tencent Cloud",
		website: "https://intl.cloud.tencent.com",
		description: "Tencent Cloud is China's leading public cloud service provider.",
		icon: "Tencent Cloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "tencent-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tencent-cloud\\.(?:cn|com)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tencent-cloud:meta:1",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("^.+Tencent\\sCloud\\.$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "tencent-cloud:meta:2",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("^.+tencent\\scloud\\.$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "tencent-waterproof-wall",
		name: "Tencent Waterproof Wall",
		website: "https://007.qq.com/",
		icon: "TencentWaterproofWall.png",
		categories: [
			"infrastructure-hosting",
			"security",
		],
		rules: [
			{
				id: "tencent-waterproof-wall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/TCaptcha\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tencent-waterproof-wall:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("captcha\\.qq\\.com\\/.*"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tencent-waterproof-wall:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/tcaptcha\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "thingpark-enterprise",
		name: "ThingPark Enterprise",
		website: "https://www.thingpark.com/thingpark-enterprise",
		description: "ThingPark Enterprise is an enterprise IoT connectivity solution designed with a strong focus on security.",
		icon: "ThingPark.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "thingpark-enterprise:dom:0",
				kind: "dom",
				selector: "input[value*='.thingpark.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tiiny-host",
		name: "Tiiny Host",
		website: "https://tiiny.host",
		description: "Tiiny Host is a web hosting service for static sites with support for custom domains, SSL, password protection, and built-in analytics.",
		icon: "Tiiny Host.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "tiiny-host:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/\\/|\\.)tiiny\\.(?:host|site)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "twicpics",
		name: "TwicPics",
		website: "https://www.twicpics.com",
		description: "TwicPics offers on-demand responsive image generation.",
		icon: "TwicPics.svg",
		categories: [
			"infrastructure-hosting",
			"widgets-misc",
		],
		rules: [
			{
				id: "twicpics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp(".+\\.twic\\.pics"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twicpics:dom:1",
				kind: "dom",
				selector: ".twic",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twicpics:dom:2",
				kind: "dom",
				selector: "[data-twic-src]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twicpics:dom:3",
				kind: "dom",
				selector: "data-twic-background",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twicpics:header:4",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^TwicPics\\/\\d+\\.\\d+\\.\\d+$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "twicpics:header:5",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^twicpics\\/\\d+\\.\\d+\\.\\d+$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "ukfast",
		name: "UKFast",
		website: "https://www.ukfast.co.uk",
		description: "UKFast is a business-to-business internet hosting company based in Manchester, UK.",
		icon: "UKFast.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "ukfast:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.ukfast\\.net", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "unpkg",
		name: "Unpkg",
		website: "https://unpkg.com",
		description: "Unpkg is a content delivery network for everything on npm.",
		icon: "Unpkg.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "unpkg:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("unpkg\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "unpkg:dom:1",
				kind: "dom",
				selector: "link[href*='unpkg.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "upcloud-object-storage",
		name: "UpCloud Object Storage",
		website: "https://upcloud.com/products/object-storage/",
		description: "UpCloud Object Storage is an S3-compatible managed object storage service for static hosting and unstructured data.",
		icon: "UpCloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "upcloud-object-storage:dns:0",
				kind: "dns",
				valuePattern: new RegExp("^[a-z0-9]+\\.upcloudobjects\\.com\\.?$", "i"),
				recordType: "CNAME",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "uploadcare",
		name: "Uploadcare",
		website: "https://uploadcare.com",
		description: "Uploadcare is a complete file handling platform for online business. Receive files from you users via File Uploader or File Upload API, implement image optimization and transformations with Image CDN API, and get HIPAA-compliant storage.",
		icon: "Uploadcare.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "uploadcare:dom:0",
				kind: "dom",
				selector: "img[src*='.ucarecdn.com/'], link[href*='ucarecdn.com'], img[data-src*='.ucarecdn.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "uploadcare:jsGlobal:1",
				kind: "jsGlobal",
				property: "uploadcare.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "ventraip",
		name: "VentraIP",
		website: "https://ventraip.com.au",
		description: "VentraIP is the largest privately owned web host and domain name registrar in Australia.",
		icon: "VentraIP.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "ventraip:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.(?:nameserver|hostingplatform)\\.net\\.au", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "ventraip:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.(?:nameserver|hostingplatform)\\.net\\.au", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "vercel",
		name: "Vercel",
		website: "https://vercel.com",
		description: "Vercel is a cloud platform for static frontends and serverless functions.",
		icon: "vercel.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "vercel:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^now|Vercel$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "vercel:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.vercel-dns\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "vercel:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^now|vercel$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "vercel:header:3",
				kind: "header",
				key: "x-vercel-cache",
				valuePattern: new RegExp(".+", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "vercel:header:4",
				kind: "header",
				key: "x-vercel-id",
				valuePattern: new RegExp(".+", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
			cpe: "cpe:2.3:a:vercel:vercel:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "vergecloud",
		name: "VergeCloud",
		website: "https://www.vergecloud.com/",
		description: "VergeCloud is a cloud services provider offering CDN and DNS services, security solutions, and a reliable TCP proxy to support online presence.",
		icon: "VergeCloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "vergecloud:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^vergecloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "vergecloud:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^vergecloud$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "virtfusion",
		name: "VirtFusion",
		website: "https://virtfusion.com",
		description: "VirtFusion is a modern virtualization management platform designed for hosting providers to manage virtual machines, users, billing integrations, and infrastructure operations through a centralized interface.",
		icon: "VirtFusion.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "virtfusion:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^virtfusion_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "voximplant",
		name: "Voximplant",
		website: "https://voximplant.com/products/click-to-call",
		description: "Voximplant is a cloud-based communication platform that enables voice calls directly from a webpage using a computer, formerly known as Zingaya.",
		icon: "Voximplant.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "voximplant:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("zingaya\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "voximplant:jsGlobal:1",
				kind: "jsGlobal",
				property: "Zingaya.analytics_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "voximplant:jsGlobal:2",
				kind: "jsGlobal",
				property: "ZingayaClass",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "vultr",
		name: "Vultr",
		website: "https://www.vultr.com",
		description: "Vultr is a cloud computing service provider.",
		icon: "Vultr.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "vultr:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.vultr\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "wangsu",
		name: "Wangsu",
		website: "https://en.wangsu.com",
		description: "Wangsu is a China-based company that provides content delivery network and internet data center services.",
		icon: "Wangsu.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "wangsu:jsGlobal:0",
				kind: "jsGlobal",
				property: "__cdnRoute",
				valuePattern: new RegExp("^wangsu$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wangsu:jsGlobal:1",
				kind: "jsGlobal",
				property: "playurl.wangsu",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "webhostuk",
		name: "WebHostUK",
		website: "https://www.webhostuk.co.uk",
		description: "WebHostUK is an UK based web hosting company offering cheap yet reliable and secure web hosting solutions on both Linux and Windows servers.",
		icon: "WebHostUK.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "webhostuk:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns2\\d\\.dnshostcentral\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "webhostuk:dns:1",
				kind: "dns",
				valuePattern: new RegExp("ns2\\d\\.dnshostcentral\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "wordpress-multisite",
		name: "WordPress Multisite",
		website: "https://wordpress.org/documentation/article/create-a-network/",
		description: "A multisite network is a collection of sites that all share the same WordPress installation core files.",
		icon: "WordPress.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "wordpress-multisite:dom:0",
				kind: "dom",
				selector: "figure[style*='wp-content/uploads']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "wordpress-multisite:dom:1",
				kind: "dom",
				selector: "img[src*='wp-content/uploads/sites/'], img[srcset*='wp-content/uploads/sites/'], source[srcset*='wp-content/uploads/sites/']",
				description: "DOM contains WordPress multisite upload paths with a site-id segment.",
			},
			{
				id: "wordpress-multisite:html:2",
				kind: "html",
				pattern: new RegExp("wp-content/uploads/sites/\\d+", "i"),
				confidence: 95,
				description: "Document HTML contains WordPress multisite upload paths.",
			},
			{
				id: "wordpress-multisite:text:3",
				kind: "text",
				pattern: new RegExp("wp-content\\/uploads\\/sites\\/\\d+"),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wordpress-vip",
		name: "WordPress VIP",
		website: "https://wpvip.com",
		description: "WordPress VIP is a managed hosting platform for WordPress.",
		icon: "wpvip.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "wordpress-vip:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^WordPress VIP|wpvip\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "wordpress-vip:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^wordpress vip|wpvip\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"wordpress",
		],
	},
	{
		id: "wordpress-com",
		name: "WordPress.com",
		website: "https://wordpress.com",
		description: "WordPress.com is a platform for self-publishing that is popular for blogging and other works.",
		icon: "WordPress.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "wordpress-com:header:0",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("WordPress\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "wordpress-com:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("ImportFromWordPressInsideMenu"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "wordpress-com:jsGlobal:2",
				kind: "jsGlobal",
				property: "WordPressPopularPosts",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wordpress-com:header:3",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("wordpress\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"wordpress",
		],
	},
	{
		id: "world4you",
		name: "World4You",
		website: "https://www.world4you.com",
		description: "World4You operates homepage and domain solutions. World4Youu operates data centers in Austria and provides data protection.",
		icon: "World4You.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "world4you:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.world4you\\.at", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "wp-engine",
		name: "WP Engine",
		website: "https://wpengine.com",
		description: "WP Engine is a website hosting provider.",
		icon: "wpengine.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "wp-engine:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("WP Engine", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "wp-engine:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("wp engine", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"wordpress",
		],
	},
	{
		id: "wp-cloud",
		name: "wp.cloud",
		website: "https://wp.cloud/",
		description: "WordPress-first cloud hosting.",
		icon: "wp-cloud.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "wp-cloud:header:0",
				kind: "header",
				key: "host-header",
				valuePattern: new RegExp("wpcloud", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"wordpress",
		],
	},
	{
		id: "xserver",
		name: "Xserver",
		website: "https://www.xserver.ne.jp",
		description: "Xserver engages in web hosting, web application and internet-related services.",
		icon: "Xserver.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "xserver:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.xserver\\.jp", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "yalinhost",
		name: "YalinHost",
		website: "https://yalinhost.com",
		description: "YalinHost is a web hosting service provider.",
		icon: "YalinHost.png",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "yalinhost:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.yalinhost\\.com", "i"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "yalinhost:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.yalinhost\\.com", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "yandex-cloud",
		name: "Yandex.Cloud",
		website: "https://cloud.yandex.com/en/",
		description: "Yandex. Cloud is a public cloud platform where companies can create and develop projects using Yandex's scalable computing power, advanced technologies, and infrastructure.",
		icon: "Yandex.Cloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			saas: false,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "yandex-cloud-cdn",
		name: "Yandex.Cloud CDN",
		website: "https://cloud.yandex.com/en/services/cdn",
		description: "Yandex. Cloud CDN helps you streamline static content delivery for your web service.",
		icon: "Yandex.Cloud.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "yandex-cloud-cdn:dom:0",
				kind: "dom",
				selector: "[href*='storage.yandexcloud.net'], [src*='storage.yandexcloud.net']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"yandex-cloud",
		],
	},
	{
		id: "zeabur",
		name: "Zeabur",
		website: "https://zeabur.com",
		description: "Zeabur is a platform for running full stack apps and databases.",
		icon: "zeabur.svg",
		categories: [
			"infrastructure-hosting",
		],
		rules: [],
		metadata: {
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
] as const satisfies readonly TechnologyDefinition[];
