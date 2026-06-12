import type { TechnologyDefinition } from '../types';

export const infrastructureHostingTechnologyDefinitions = [
	{
		id: "34sp-com",
		name: "34SP.com",
		website: "https://www.34sp.com",
		description: "34SP.com specialises in website hosting, discount domain names, low cost VPS servers and dedicated servers.",
		icon: "34SP.com.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "34sp-com:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns(?:\\d+)?\\.34sp\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "5centscdn",
		name: "5centsCDN",
		website: "https://www.5centscdn.net",
		description: "5centsCDN is a content delivery networks service provider.",
		icon: "5centsCDN.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "5centscdn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.5centscdn\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "5centscdn:dom:1",
				kind: "dom",
				selector: "link[href*='.5centscdn.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "5centscdn:responseHeader:2",
				kind: "responseHeader",
				key: "x-cdn",
				valuePattern: new RegExp("^5centsCDN$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "acquia-cloud-platform",
		name: "Acquia Cloud Platform",
		website: "https://www.acquia.com/products/drupal-cloud/cloud-platform",
		description: "Acquia Cloud Platform is a Drupal-tuned application lifecycle management suite with an infrastructure to support Drupal deployment workflow processes.",
		icon: "acquia-cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "acquia-cloud-platform:responseHeader:0",
				kind: "responseHeader",
				key: "X-AH-Environment",
				valuePattern: new RegExp("^(next)?.*$"),
				version: { source: "match", template: "$1?Next:" },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"amazon-web-services"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "acquia-cloud-platform-cdn",
		name: "Acquia Cloud Platform CDN",
		website: "https://docs.acquia.com/cloud-platform/platformcdn/",
		icon: "acquia-cloud-platform.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "acquia-cloud-platform-cdn:responseHeader:0",
				kind: "responseHeader",
				key: "via",
				valuePattern: new RegExp("Acquia Platform CDN (.+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"acquia-cloud-platform"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "acquia-cloud-site-factory",
		name: "Acquia Cloud Site Factory",
		website: "https://www.acquia.com/products/drupal-cloud/site-factory",
		description: "Acquia Site Factory is a multisite platform for Drupal.",
		icon: "acquia-site-factory.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "acquia-cloud-site-factory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sites\\/g\\/files"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acquia-cloud-site-factory:dom:1",
				kind: "dom",
				selector: "script[src*='sites/g/files']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "acquia-cloud-site-factory:dom:2",
				kind: "dom",
				selector: "img[src*='sites/g/files']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "acquia-cloud-site-factory:dom:3",
				kind: "dom",
				selector: "img[data-src*='sites/g/files']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "acquia-cloud-site-factory:dom:4",
				kind: "dom",
				selector: "link[href*='sites/g/files']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"acquia-cloud-platform",
			"drupal-multisite"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "agora",
		name: "Agora",
		website: "https://www.agora.io",
		description: "Agora is a real-time engagement platform that provides infrastructure for interactive communication across applications.",
		icon: "Agora.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "agora:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.agora\\.io"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "airee",
		name: "Airee",
		website: "https://xn--80aqc2a.xn--p1ai",
		description: "Airee offers scalable web hosting solutions tailored for internet shops and websites, with enhanced performance, DDoS protection, high availability, and detailed speed and security analytics.",
		icon: "Airee.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "airee:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Airee"),
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
		id: "akamai",
		name: "Akamai",
		website: "https://akamai.com",
		description: "Akamai is global content delivery network (CDN) services provider for media and software delivery, and cloud security solutions.",
		icon: "Akamai.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "akamai:responseHeader:0",
				kind: "responseHeader",
				key: "X-Akamai-Transformed",
				description: "Response header matches a known technology marker."
			},
			{
				id: "akamai:responseHeader:1",
				kind: "responseHeader",
				key: "X-EdgeConnect-MidMile-RTT",
				description: "Response header matches a known technology marker."
			},
			{
				id: "akamai:responseHeader:2",
				kind: "responseHeader",
				key: "X-EdgeConnect-Origin-MEX-Latency",
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
		id: "akamai-connected-cloud",
		name: "Akamai Connected Cloud",
		website: "https://www.akamai.com/solutions/cloud-computing",
		description: "Akamai Connected Cloud is a distributed cloud platform that combines core compute, edge services, and security to run applications at global scale.",
		icon: "Akamai.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "akamai-connected-cloud:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^volt-adc$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "akamai-connected-cloud:responseHeader:1",
				kind: "responseHeader",
				key: "x-volterra-location",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"akamai"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "alibaba-cloud-cdn",
		name: "Alibaba Cloud CDN",
		website: "https://www.alibabacloud.com/product/content-delivery-network",
		description: "Alibaba Cloud CDN is a global network of servers designed to deliver high-performance, low-latency content to users around the world. It is a cloud-based service provided by Alibaba Cloud, a subsidiary of the Alibaba Group, that enables businesses to accelerate the delivery of their web content, including images, videos, and static files, to end-users.",
		icon: "Alibaba Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "alibaba-cloud-cdn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.alicdn\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "alibaba-cloud-cdn:dom:1",
				kind: "dom",
				selector: "img[src*='.alicdn.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "alibaba-cloud-object-storage-service",
		name: "Alibaba Cloud Object Storage Service",
		website: "https://www.alibabacloud.com/product/object-storage-service",
		description: "Alibaba Cloud Object Storage Service (OSS) is a cloud-based object storage service provided by Alibaba Cloud, which allows users to store and access large amounts of data in the cloud.",
		icon: "Alibaba Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "alibaba-cloud-object-storage-service:responseHeader:0",
				kind: "responseHeader",
				key: "x-oss-object-type",
				description: "Response header matches a known technology marker."
			},
			{
				id: "alibaba-cloud-object-storage-service:responseHeader:1",
				kind: "responseHeader",
				key: "x-oss-request-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "alibaba-cloud-object-storage-service:responseHeader:2",
				kind: "responseHeader",
				key: "x-oss-storage-class",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "all-inkl",
		name: "ALL-INKL",
		website: "https://all-inkl.com",
		description: "ALL-INKL is a German-based web hosting provider that promises to offer high-performance services for fair prices.",
		icon: "ALL-INKL.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "all-inkl:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.kasserver\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "alternc",
		name: "AlternC",
		website: "https://alternc.com",
		description: "AlternC is a set of software management on Linux shared hosting.",
		icon: "AlternC.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "alternc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js/alternc\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"debian"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:alternc:alternc:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "amazon-alb",
		name: "Amazon ALB",
		website: "https://aws.amazon.com/elasticloadbalancing/",
		description: "Amazon Application Load Balancer (ALB) distributes incoming application traffic to increase availability and support content-based routing.",
		icon: "Amazon ELB.svg",
		categories: [
			"infrastructure-hosting",
			"router"
		],
		rules: [
			{
				id: "amazon-alb:cookie:0",
				kind: "cookie",
				key: "AWSALB",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "amazon-alb:cookie:1",
				kind: "cookie",
				key: "AWSALBCORS",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"amazon-web-services"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "amazon-cloudfront",
		name: "Amazon CloudFront",
		website: "https://aws.amazon.com/cloudfront/",
		description: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds.",
		icon: "Amazon Cloudfront.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "amazon-cloudfront:responseHeader:0",
				kind: "responseHeader",
				key: "Via",
				valuePattern: new RegExp("\\(CloudFront\\)$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-cloudfront:responseHeader:1",
				kind: "responseHeader",
				key: "X-Amz-Cf-Id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-cloudfront:dns:2",
				kind: "dns",
				valuePattern: new RegExp("^[a-z0-9]+\\.cloudfront.net\\.?$"),
				recordType: "CNAME",
				description: "DNS record matches a known technology marker.",
			}
		],
		implies: [
			"amazon-web-services"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "amazon-ecs",
		name: "Amazon ECS",
		website: "https://aws.amazon.com/ecs/",
		icon: "Amazon ECS.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "amazon-ecs:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^ECS"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"amazon-web-services",
			"docker"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "amazon-elb",
		name: "Amazon ELB",
		website: "https://aws.amazon.com/elasticloadbalancing/",
		description: "AWS ELB is a network load balancer service provided by Amazon Web Services for distributing traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions.",
		icon: "Amazon ELB.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "amazon-elb:cookie:0",
				kind: "cookie",
				key: "AWSELB",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "amazon-elb:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("awselb"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"amazon-web-services"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "amazon-s3",
		name: "Amazon S3",
		website: "https://aws.amazon.com/s3/",
		description: "Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface.",
		icon: "Amazon S3.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "amazon-s3:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s3[^ ]*\\.amazonaws\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "amazon-s3:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("s3[^ ]*amazonaws\\.com"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-s3:responseHeader:2",
				kind: "responseHeader",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("s3[^ ]*\\.amazonaws\\.com"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-s3:responseHeader:3",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^AmazonS3$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-s3:responseHeader:4",
				kind: "responseHeader",
				key: "x-amz-server-side-encryption",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"amazon-web-services"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "amazon-web-services",
		name: "Amazon Web Services",
		website: "https://aws.amazon.com/",
		description: "Amazon Web Services (AWS) is a comprehensive cloud services platform offering compute power, database storage, content delivery and other functionality.",
		icon: "Amazon Web Services.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "amazon-web-services:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.amazonaws\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "amazon-web-services:responseHeader:1",
				kind: "responseHeader",
				key: "x-amz-delete-marker",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-web-services:responseHeader:2",
				kind: "responseHeader",
				key: "x-amz-err-code",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-web-services:responseHeader:3",
				kind: "responseHeader",
				key: "x-amz-err-message",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-web-services:responseHeader:4",
				kind: "responseHeader",
				key: "x-amz-id-2",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-web-services:responseHeader:5",
				kind: "responseHeader",
				key: "x-amz-req-time-micros",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-web-services:responseHeader:6",
				kind: "responseHeader",
				key: "x-amz-request-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-web-services:responseHeader:7",
				kind: "responseHeader",
				key: "x-amz-rid",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-web-services:responseHeader:8",
				kind: "responseHeader",
				key: "x-amz-version-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "amazon-web-services:dns:9",
				kind: "dns",
				valuePattern: new RegExp("\\.awsdns-"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ans",
		name: "ANS",
		website: "https://www.ans.co.uk",
		description: "ANS is a UK-based IT services company specializing in cloud computing, managed services, and digital transformation solutions.",
		icon: "ANS.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "ans:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.ukfast\\.net"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "appian",
		name: "Appian",
		website: "https://www.appian.com",
		description: "Appian is an enterprise low-code application platform.",
		icon: "Appian.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "appian:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tempo/ui/sail-client/embeddedBootstrap\\.nocache\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "appian:pageGlobal:1",
				kind: "pageGlobal",
				property: "APPIAN",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "appian:pageGlobal:2",
				kind: "pageGlobal",
				property: "Appian",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "appian:pageGlobal:3",
				kind: "pageGlobal",
				property: "_APPIAN_PROXIES_INITIALIZED",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "appian:pageGlobal:4",
				kind: "pageGlobal",
				property: "webpackJsonpAppian",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "application-request-routing",
		name: "Application Request Routing",
		website: "https://www.iis.net/downloads/microsoft/application-request-routing",
		description: "Application Request Routing (ARR) is an extension to Internet Information Server (IIS), which enables an IIS server to function as a load balancer.",
		icon: "Microsoft.svg",
		categories: [
			"infrastructure-hosting",
			"router"
		],
		rules: [
			{
				id: "application-request-routing:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^ARR/([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"iis"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "arc",
		name: "Arc",
		website: "https://arc.io",
		description: "Arc is a peer-to-peer CDN that pays site owners for using it. Instead of expensive servers in distant datacenters, Arc's network is comprised of browsers.",
		icon: "Arc.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "arc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("arc\\.io/widget\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "arc:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.arc\\.io"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "arc:dom:2",
				kind: "dom",
				selector: "#arc-widget",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "arc:pageGlobal:3",
				kind: "pageGlobal",
				property: "arc.p2pClient",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "arc:pageGlobal:4",
				kind: "pageGlobal",
				property: "arcWidgetJsonp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			],
			cpe: "cpe:2.3:a:arc:arc:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "aruba-it",
		name: "Aruba.it",
		website: "https://www.aruba.it",
		description: "Aruba.it is an Italian company mainly active in the web hosting and domain registration businesses.",
		icon: "Aruba.it.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "aruba-it:responseHeader:0",
				kind: "responseHeader",
				key: "x-servername",
				valuePattern: new RegExp("\\.aruba\\.it"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "aruba-it:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.technorail\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "arvancloud",
		name: "ArvanCloud",
		website: "https://www.arvancloud.ir",
		description: "ArvanCloud is a cloud services provider, offering a wide range of incorporated cloud services including CDN, DDoS mitigation, Cloud Managed DNS, Cloud Security, VoD/AoD Streaming, Live Streaming, Cloud Compute, Cloud Object Storage, and PaaS.",
		icon: "ArvanCloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "arvancloud:dom:0",
				kind: "dom",
				selector: "img[src*='.arvanstorage.com/'], img[src*='.arvanstorage.ir/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "arvancloud:pageGlobal:1",
				kind: "pageGlobal",
				property: "ArvanCloud",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "arvancloud:responseHeader:2",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("ArvanCloud"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "azion",
		name: "Azion",
		website: "https://www.azion.com/",
		icon: "Azion.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "azion:dom:0",
				kind: "dom",
				selector: "link[href*='.azion.com/'][rel='canonical']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "azion:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Azion "),
				description: "Response header matches a known technology marker."
			},
			{
				id: "azion:dns:2",
				kind: "dns",
				valuePattern: new RegExp("azioncdn\\.net\\.?$"),
				recordType: "CNAME",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"payg"
			]
		}
	},
	{
		id: "azure",
		name: "Azure",
		website: "https://azure.microsoft.com",
		description: "Azure is a cloud computing service for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
		icon: "Azure.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "azure:cookie:0",
				kind: "cookie",
				key: "ARRAffinity",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "azure:cookie:1",
				kind: "cookie",
				key: "TiPMix",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "azure:responseHeader:2",
				kind: "responseHeader",
				key: "azure-regionname",
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure:responseHeader:3",
				kind: "responseHeader",
				key: "azure-sitename",
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure:responseHeader:4",
				kind: "responseHeader",
				key: "azure-slotname",
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure:responseHeader:5",
				kind: "responseHeader",
				key: "azure-version",
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure:responseHeader:6",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Windows-Azure"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure:responseHeader:7",
				kind: "responseHeader",
				key: "x-ms-client-request-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure:responseHeader:8",
				kind: "responseHeader",
				key: "x-ms-correlation-request-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure:responseHeader:9",
				kind: "responseHeader",
				key: "x-ms-gateway-requestid",
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure:dns:10",
				kind: "dns",
				valuePattern: new RegExp("\\.azure-dns\\."),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "azure-cdn",
		name: "Azure CDN",
		website: "https://azure.microsoft.com/en-us/services/cdn/",
		description: "Azure Content Delivery Network (CDN) reduces load times, save bandwidth and speed responsiveness.",
		icon: "Azure.svg",
		categories: [
			"infrastructure-hosting",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "azure-cdn:responseHeader:0",
				kind: "responseHeader",
				key: "X-EC-Debug",
				description: "Response header matches a known technology marker."
			},
			{
				id: "azure-cdn:responseHeader:1",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^(?:ECAcc|ECS|ECD)"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"azure"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "azure-front-door",
		name: "Azure Front Door",
		website: "https://docs.microsoft.com/en-us/azure/frontdoor/",
		description: "Azure Front Door is a scalable and secure entry point for fast delivery of your global web applications.",
		icon: "Azure.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "azure-front-door:cookie:0",
				kind: "cookie",
				key: "ASLBSA",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "azure-front-door:cookie:1",
				kind: "cookie",
				key: "ASLBSACORS",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "azure-front-door:responseHeader:2",
				kind: "responseHeader",
				key: "X-Azure-Ref",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"azure"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "bask-health",
		name: "Bask Health",
		website: "https://bask.health",
		description: "Bask Health is a telehealth platform that enables the creation of custom digital health solutions for virtual care delivery and patient engagement.",
		icon: "BaskHealth.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "bask-health:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.bask\\.health"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bernet-cloud",
		name: "Bernet Cloud",
		website: "https://bernet.cloud",
		description: "Bernet Cloud is a cloud management platform that enables global application deployment without requiring advanced technical expertise.",
		icon: "BernetCloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "bernet-cloud:responseHeader:0",
				kind: "responseHeader",
				key: "Bc-Powered-By",
				valuePattern: new RegExp("bernet\\.cloud"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"payg",
				"freemium"
			]
		}
	},
	{
		id: "billmanager",
		name: "BILLmanager",
		website: "https://www.ispsystem.ru/billmanager-host",
		description: "BILLmanager is a hosting billing panel used to manage service provisioning, invoicing, and client accounts for hosting providers.",
		icon: "BILLmanager.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "billmanager:pageGlobal:0",
				kind: "pageGlobal",
				property: "binary",
				valuePattern: new RegExp("/manager/billmgr"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "billmanager:pageGlobal:1",
				kind: "pageGlobal",
				property: "pageInfo.binary",
				valuePattern: new RegExp("/billmgr"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "bluehost",
		name: "Bluehost",
		website: "https://www.bluehost.com",
		description: "Bluehost is a large web host known for its WordPress expertise, variety of “one-stop-shop” services, and bargain prices.",
		icon: "Bluehost.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "bluehost:responseHeader:0",
				kind: "responseHeader",
				key: "host-header",
				valuePattern: new RegExp("c2hhcmVkLmJsdWVob3N0LmNvbQ=="),
				description: "Response header matches a known technology marker."
			},
			{
				id: "bluehost:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.bluehost\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "bootstrapcdn",
		name: "BootstrapCDN",
		website: "https://www.bootstrapcdn.com/",
		description: "BootstrapCDN is a powerful and reliable Content Delivery Network (CDN) that delivers static resources, including CSS, JavaScript, and font files, for the widely-used Bootstrap framework. By leveraging multiple server locations worldwide, BootstrapCDN accelerates website loading times, ensuring a smooth and visually appealing user experience. Additionally, it ensures website compatibility with various devices and browsers. The service reduces bandwidth usage and server load, improving web performance for developers and end-users alike.",
		icon: "BootstrapCDN.png",
		categories: [
			"infrastructure-hosting",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "bootstrapcdn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bootstrapcdn\\.com\\/bootstrap\\/((?:\\d+\\.)+\\d+)?(?:\\/js\\/)?bootstrap(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "brimble",
		name: "Brimble",
		website: "https://brimble.io",
		description: "Brimble is a cloud platform for deploying frontend web applications.",
		icon: "brimble.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "brimble:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Brimble$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "brimble:responseHeader:1",
				kind: "responseHeader",
				key: "x-brimble-id",
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
		id: "bunny",
		name: "Bunny",
		website: "https://bunny.net",
		icon: "Bunny.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "bunny:dom:0",
				kind: "dom",
				selector: "[src*='.b-cdn.net'],[data-src*='.b-cdn.net']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "bunny:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^BunnyCDN"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cachefly",
		name: "CacheFly",
		website: "https://www.cachefly.com",
		description: "CacheFly is a content delivery network (CDN) which offers CDN service that relies solely on IP anycast for routing, rather than DNS based global load balancing.",
		icon: "CacheFly.svg",
		categories: [
			"infrastructure-hosting",
			"router"
		],
		rules: [
			{
				id: "cachefly:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^CFS "),
				description: "Response header matches a known technology marker."
			},
			{
				id: "cachefly:responseHeader:1",
				kind: "responseHeader",
				key: "X-CF1",
				description: "Response header matches a known technology marker."
			},
			{
				id: "cachefly:responseHeader:2",
				kind: "responseHeader",
				key: "X-CF2",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cdn77",
		name: "CDN77",
		website: "https://www.cdn77.com",
		description: "CDN77 is a content delivery network (CDN).",
		icon: "CDN77.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "cdn77:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^CDN77-Turbo$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cdnjs",
		name: "cdnjs",
		website: "https://cdnjs.com",
		description: "cdnjs is a free distributed JS library delivery service.",
		icon: "cdnjs.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "cdnjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cdnjs:dom:1",
				kind: "dom",
				selector: "link[href*='cdnjs.cloudflare.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"cloudflare"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "chabokan",
		name: "Chabokan",
		website: "https://chabokan.net",
		description: "Chabokan is a cloud services provider, offering a wide range of incorporated cloud services including Cloud Object Storage, DBaaS, BaaS, and PaaS.",
		icon: "Chabokan.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "chabokan:responseHeader:0",
				kind: "responseHeader",
				key: "ch-powered-by",
				valuePattern: new RegExp("Chabokan\\s\\(chabokan\\.net\\)"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"payg"
			]
		}
	},
	{
		id: "clientacquisition",
		name: "Clientacquisition",
		website: "https://www.clientacquisition.io",
		description: "Clientacquisition is a provider of tailored infrastructure solutions that drive growth.",
		icon: "Clientacquisition.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "clientacquisition:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.clientacquisition\\.io"),
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
		id: "cloud-guard",
		name: "Cloud Guard",
		website: "https://cloudguard.ir",
		description: "CloudGuard is a cybersecurity solutions provider focused on cloud security.",
		icon: "Cloud Guard.svg",
		categories: [
			"infrastructure-hosting",
			"security"
		],
		rules: [
			{
				id: "cloud-guard:responseHeader:0",
				kind: "responseHeader",
				key: "cg-server-tag",
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
		id: "cloudflare",
		name: "Cloudflare",
		website: "https://www.cloudflare.com",
		description: "Cloudflare is a web-infrastructure and website-security company, providing content-delivery-network services, DDoS mitigation, Internet security, and distributed domain-name-server services.",
		icon: "CloudFlare.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "cloudflare:dom:0",
				kind: "dom",
				selector: "img[src*='//cdn.cloudflare']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "cloudflare:pageGlobal:1",
				kind: "pageGlobal",
				property: "CloudFlare",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cloudflare:cookie:2",
				kind: "cookie",
				key: "__cfduid",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "cloudflare:responseHeader:3",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^cloudflare$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "cloudflare:responseHeader:4",
				kind: "responseHeader",
				key: "cf-cache-status",
				description: "Response header matches a known technology marker."
			},
			{
				id: "cloudflare:responseHeader:5",
				kind: "responseHeader",
				key: "cf-ray",
				description: "Response header matches a known technology marker."
			},
			{
				id: "cloudflare:meta:6",
				kind: "meta",
				key: "image",
				valuePattern: new RegExp("//cdn\\.cloudflare"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "cloudflare:dns:7",
				kind: "dns",
				valuePattern: new RegExp("\\.cloudflare\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:cloudflare:cloudflare:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "cloudflare-workers",
		name: "Cloudflare Workers",
		website: "https://workers.cloudflare.com",
		description: "Cloudflare Workers is a serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure.",
		icon: "Cloudflare Workers.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "cloudflare-workers:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.workers\\.dev"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "cloudflare-workers:meta:1",
				kind: "meta",
				key: "runtime",
				valuePattern: new RegExp("^Cloudflare Workers$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"cloudflare"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "cloudimage",
		name: "Cloudimage",
		website: "https://www.cloudimage.io",
		description: "Cloudimage automates the transformation and optimisation of images on the fly and accelerates their distribution via the Content Delivery Network (CDN).",
		icon: "Cloudimage.svg",
		categories: [
			"infrastructure-hosting",
			"media-video"
		],
		rules: [
			{
				id: "cloudimage:dom:0",
				kind: "dom",
				selector: "img[src*='.cloudimg.io/'], link[href*='.cloudimg.io/'], amp-img[src*='.cloudimg.io/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "cloudimage:pageGlobal:1",
				kind: "pageGlobal",
				property: "ciResponsive.config.domain",
				valuePattern: new RegExp("cloudimg\\.io"),
				description: "Page-owned global matches a known technology marker."
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
		id: "cloudinary",
		name: "Cloudinary",
		website: "https://cloudinary.com",
		description: "Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimisations to delivery.",
		icon: "Cloudinary.svg",
		categories: [
			"infrastructure-hosting",
			"media-video"
		],
		rules: [
			{
				id: "cloudinary:dom:0",
				kind: "dom",
				selector: "img[src*='.cloudinary.com/'], img[data-src*='.cloudinary.com/'], link[href*='.cloudinary.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "cloudinary:pageGlobal:1",
				kind: "pageGlobal",
				property: "_cloudinary",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cloudinary:responseHeader:2",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("player\\.cloudinary\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "cloudways",
		name: "Cloudways",
		website: "https://www.cloudways.com",
		description: "Cloudways offers managed cloud-hosting services for WordPress sites on a cloud server where multiple copies of your content will be replicated throughout your chosen data center.",
		icon: "Cloudways.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "cloudways:responseHeader:0",
				kind: "responseHeader",
				key: "cache-provider",
				valuePattern: new RegExp("CLOUDWAYS-CACHE-DE"),
				description: "Response header matches a known technology marker."
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
		id: "contabo",
		name: "Contabo",
		website: "https://contabo.com",
		description: "Contabo is a German hosting provider, previously known by the name Giga-International.",
		icon: "Contabo.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "contabo:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.contabo\\.net"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "cpanel",
		name: "cPanel",
		website: "https://www.cpanel.net",
		description: "cPanel is a web hosting control panel. The software provides a graphical interface and automation tools designed to simplify the process of hosting a website.",
		icon: "cPanel.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "cpanel:html:0",
				kind: "html",
				pattern: new RegExp("<!-- cPanel"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "cpanel:cookie:1",
				kind: "cookie",
				key: "cprelogin",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "cpanel:cookie:2",
				kind: "cookie",
				key: "cpsession",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "cpanel:responseHeader:3",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("cpsrvd/([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:cpanel:cpanel:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "createjs",
		name: "CreateJS",
		website: "https://code.createjs.com",
		description: "CreateJS is a suite of modular libraries and tools which work together or independently to enable interactive content on open web technologies via HTML5.",
		icon: "CreateJS.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "createjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.createjs\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "creoline",
		name: "Creoline",
		website: "https://www.creoline.com",
		description: "Creoline is a provider of scalable cloud solutions and application domain services.",
		icon: "Creoline.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "creoline:dom:0",
				kind: "dom",
				selector: "link[href*='.cstatic.io/']",
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
		id: "deno-deploy",
		name: "Deno Deploy",
		website: "https://deno.land/",
		description: "Deno Deploy is a distributed system that runs JavaScript, TypeScript, and WebAssembly at the edge, worldwide.",
		icon: "deno.svg",
		categories: [
			"infrastructure-hosting",
			"transpiler"
		],
		rules: [
			{
				id: "deno-deploy:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^deno/*"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"deno"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low"
			]
		}
	},
	{
		id: "derak-cloud",
		name: "DERAK.CLOUD",
		website: "https://derak.cloud",
		icon: "DerakCloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "derak-cloud:pageGlobal:0",
				kind: "pageGlobal",
				property: "derakCloud.init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "derak-cloud:cookie:1",
				kind: "cookie",
				key: "__derak_auth",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "derak-cloud:cookie:2",
				kind: "cookie",
				key: "__derak_user",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "derak-cloud:responseHeader:3",
				kind: "responseHeader",
				key: "Derak-Umbrage",
				description: "Response header matches a known technology marker."
			},
			{
				id: "derak-cloud:responseHeader:4",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^DERAK\\.CLOUD$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "deta",
		name: "Deta",
		website: "https://deta.sh",
		description: "Deta is a cloud platform for building and deploying apps.",
		icon: "deta.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "deta:url:0",
				kind: "url",
				pattern: new RegExp("^https?://[^/]+\\.deta\\.(?:app|dev)"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "deta:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Deta$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "diamondcdn",
		name: "DiamondCDN",
		website: "https://diamondcdn.com",
		description: "DiamondCDN is a CDN with DDoS mitigation for free.",
		icon: "DiamondCDN.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "diamondcdn:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^DiamondCDN$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "digicdn",
		name: "DigiCDN",
		website: "https://digicloud.ir",
		description: "DigiCDN by Digicloud is a content delivery network featuring multiple servers and Anycast architecture, safeguarding your website against cyber attacks.",
		icon: "DigicloudCDN.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "digicdn:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("digicloud"),
				description: "Observed request URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"poa"
			]
		}
	},
	{
		id: "digitalocean-spaces",
		name: "DigitalOcean Spaces",
		website: "https://www.digitalocean.com/products/spaces",
		description: "DigitalOcean Spaces is a cloud-based object storage service provided by DigitalOcean, a cloud infrastructure provider. It allows users to store and retrieve large amounts of data, such as images, videos, audio files, backups, and logs, using a simple RESTful API or a web-based graphical user interface (GUI).",
		icon: "DigitalOcean.svg",
		categories: [
			"infrastructure-hosting",
			"api-pattern"
		],
		rules: [
			{
				id: "digitalocean-spaces:dom:0",
				kind: "dom",
				selector: "img[data-src*='.digitaloceanspaces.com'], img[src*='.digitaloceanspaces.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "directadmin",
		name: "DirectAdmin",
		website: "https://www.directadmin.com",
		description: "DirectAdmin is a graphical web-based web hosting control panel designed to make administration of websites easier.",
		icon: "DirectAdmin.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "directadmin:html:0",
				kind: "html",
				pattern: new RegExp("<a[^>]+>DirectAdmin</a> Web Control Panel"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "directadmin:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("DirectAdmin Daemon v([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php",
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:directadmin:directadmin:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "domainfactory",
		name: "DomainFactory",
		website: "https://www.df.eu",
		description: "DomainFactory has been operating as a web hosting company. It is owned by GoDaddy and targets businesses in Austria and Germany.",
		icon: "DomainFactory.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "domainfactory:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns(?:\\d+)?\\.namespace4you\\.de"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "dorsa-cloud",
		name: "Dorsa Cloud",
		website: "https://dorsa.cloud",
		description: "Dorsa Cloud is a cloud service provider offering scalable and flexible Infrastructure as a Service (IaaS) solutions for businesses.",
		icon: "Dorsa Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "dorsa-cloud:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Dorsa Cloud$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "dorsa-cloud:responseHeader:1",
				kind: "responseHeader",
				key: "x-cdn-provider",
				valuePattern: new RegExp("^Dorsa Cloud"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "dorsa-cloud:responseHeader:2",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^Dorsa Cloud"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "doteasy",
		name: "Doteasy",
		website: "https://www.doteasy.com",
		description: "Doteasy is a web hosting company that provides web hosting services, domain registration, and other related services for businesses and individuals. The company was founded in 2000 and is based in Vancouver, Canada.",
		icon: "Doteasy.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "dreamhost",
		name: "DreamHost",
		website: "https://www.dreamhost.com",
		description: "DreamHost is a Los Angeles-based web hosting provider and domain name registrar.",
		icon: "DreamHost.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "dreamhost:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.dreamhost\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "drupal-multisite",
		name: "Drupal Multisite",
		website: "https://www.drupal.org/docs/multisite-drupal",
		description: "Drupal Multisite enables separate, independent sites to be served from a single codebase.",
		icon: "Drupal.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "drupal-multisite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/sites/(?!(?:default|all)/).*/(?:files|themes|modules)/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"drupal"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "dweet",
		name: "Dweet",
		website: "https://dweet.io",
		description: "Dweet is a platform enabling data sharing across Internet of Things(IoT).",
		icon: "Dweet.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "dweet:pageGlobal:0",
				kind: "pageGlobal",
				property: "dweetCallback",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dweet:pageGlobal:1",
				kind: "pageGlobal",
				property: "dweet_script_loader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dweet:pageGlobal:2",
				kind: "pageGlobal",
				property: "dweetio.dweet",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dweet:pageGlobal:3",
				kind: "pageGlobal",
				property: "dweetioThing",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "edgecast",
		name: "EdgeCast",
		website: "https://www.edgecast.com",
		description: "EdgeCast is a content delivery network (CDN) that accelerated and delivers static content to users around the world.",
		icon: "EdgeCast.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "edgecast:url:0",
				kind: "url",
				pattern: new RegExp("https?://(?:[^/]+\\.)?edgecastcdn\\.net/"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "edgecast:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^ECD\\s\\(\\S+\\)"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "edgeone",
		name: "EdgeOne",
		website: "https://edgeone.ai",
		description: "EdgeOne is an edge-service platform that delivers global content distribution, network acceleration, and integrated security protections for distributed applications.",
		icon: "EdgeOne.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "edgeone:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^TencentEdgeOne$"),
				description: "Response header matches a known technology marker."
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
		id: "edgio",
		name: "Edgio",
		website: "https://www.akamai.com/solutions/content-delivery-network",
		description: "Edgio was a developer-focused edge platform offering delivery and compute features via Layer0, now discontinued and partially absorbed by Akamai.",
		icon: "Edgio.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "edgio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/__layer0__/cache-manifest\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "edgio:pageGlobal:1",
				kind: "pageGlobal",
				property: "Layer0.Metrics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "edgio:cookie:2",
				kind: "cookie",
				key: "layer0_bucket",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "edgio:cookie:3",
				kind: "cookie",
				key: "layer0_destination",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "edgio:cookie:4",
				kind: "cookie",
				key: "layer0_eid",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "edgio:responseHeader:5",
				kind: "responseHeader",
				key: "x-0-status",
				description: "Response header matches a known technology marker."
			},
			{
				id: "edgio:responseHeader:6",
				kind: "responseHeader",
				key: "x-0-t",
				description: "Response header matches a known technology marker."
			},
			{
				id: "edgio:responseHeader:7",
				kind: "responseHeader",
				key: "x-0-version",
				valuePattern: new RegExp("^\\d+ ([\\d.]+) "),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
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
		id: "elementor-cloud",
		name: "Elementor Cloud",
		website: "https://elementor.com",
		description: "Elementor Cloud is a platform for creating and hosting WordPress websites with Elementor.",
		icon: "Elementor.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "elementor-cloud:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("Elementor Cloud"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress",
			"elementor"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "envoy",
		name: "Envoy",
		website: "https://www.envoyproxy.io/",
		description: "Envoy is an open-source edge and service proxy, designed for cloud-native applications.",
		icon: "Envoy.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "envoy:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^envoy$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "envoy:responseHeader:1",
				kind: "responseHeader",
				key: "x-envoy-upstream-service-time",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:envoyproxy:envoy:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "f5-bigip",
		name: "F5 BigIP",
		website: "https://www.f5.com/products/big-ip-services",
		description: "F5's BIG-IP is a family of products covering software and hardware designed around application availability, access control, and security solutions.",
		icon: "F5.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "f5-bigip:cookie:0",
				kind: "cookie",
				key: "F5_HT_shrinked",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "f5-bigip:cookie:1",
				kind: "cookie",
				key: "F5_ST",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "f5-bigip:cookie:2",
				kind: "cookie",
				key: "F5_fullWT",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "f5-bigip:cookie:3",
				kind: "cookie",
				key: "LastMRH_Session",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "f5-bigip:cookie:4",
				kind: "cookie",
				key: "MRHSHint",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "f5-bigip:cookie:5",
				kind: "cookie",
				key: "MRHSequence",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "f5-bigip:cookie:6",
				kind: "cookie",
				key: "MRHSession",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "f5-bigip:cookie:7",
				kind: "cookie",
				key: "TIN",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "f5-bigip:responseHeader:8",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^big-?ip$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:f5:big-ip:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "f5-distributed-cloud-services",
		name: "F5 Distributed Cloud Services",
		website: "https://www.f5.com/products/distributed-cloud-services",
		description: "F5 Distributed Cloud Services is a SaaS platform providing security, networking, and application management to deploy, secure, and operate applications in cloud-native environments.",
		icon: "F5DistributedCloudServices.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "f5-distributed-cloud-services:responseHeader:0",
				kind: "responseHeader",
				key: "X-Volterra-Location",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "fastcomet",
		name: "FastComet",
		website: "https://www.fastcomet.com",
		description: "FastComet is a hosting service company from San Francisco, California.",
		icon: "FastComet.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "fastcomet:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.fcomet\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "fastly",
		name: "Fastly",
		website: "https://www.fastly.com",
		description: "Fastly is a cloud computing services provider. Fastly's cloud platform provides a content delivery network, Internet security services, load balancing, and video & streaming services.",
		icon: "Fastly.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "fastly:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.fastly\\.net"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "fastly:responseHeader:1",
				kind: "responseHeader",
				key: "Fastly-Debug-Digest",
				description: "Response header matches a known technology marker."
			},
			{
				id: "fastly:responseHeader:2",
				kind: "responseHeader",
				key: "Vary",
				valuePattern: new RegExp("Fastly-SSL"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "fastly:responseHeader:3",
				kind: "responseHeader",
				key: "X-Fastly-Request-ID",
				description: "Response header matches a known technology marker."
			},
			{
				id: "fastly:responseHeader:4",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("Fastly"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "fastly:responseHeader:5",
				kind: "responseHeader",
				key: "x-fastly-origin",
				description: "Response header matches a known technology marker."
			},
			{
				id: "fastly:responseHeader:6",
				kind: "responseHeader",
				key: "x-fastly-request-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "fastly:responseHeader:7",
				kind: "responseHeader",
				key: "x-via-fastly",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg"
			],
			cpe: "cpe:2.3:a:fastly:fastly:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "featherpanel",
		name: "FeatherPanel",
		website: "https://featherpanel.com",
		description: "FeatherPanel is an open-source game server management panel built with PHP, Vue, and Go.",
		icon: "FeatherPanel.svg",
		categories: [
			"infrastructure-hosting",
			"ui-library"
		],
		rules: [
			{
				id: "featherpanel:pageGlobal:0",
				kind: "pageGlobal",
				property: "FeatherPanel.api",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "featherpanel:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^FeatherPanel$"),
				description: "Meta tag matches a known technology marker."
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
		id: "filestack",
		name: "Filestack",
		website: "https://www.filestack.com",
		description: "Filestack is a file upload API and content delivery network (CDN) that enables applications to handle, store, and distribute files.",
		icon: "Filestack.svg",
		categories: [
			"infrastructure-hosting",
			"api-pattern"
		],
		rules: [
			{
				id: "filestack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.filestackapi\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "filestack:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.filestackapi\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "fing",
		name: "Fing",
		website: "https://fing.ir",
		description: "Fing is a cloud service to deploy and manage your applications without being worried about your infrastructure and environment.",
		icon: "Fing.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "fing:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Fing"),
				description: "Response header matches a known technology marker."
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
		id: "fireblade",
		name: "Fireblade",
		website: "https://fireblade.com",
		icon: "Fireblade.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "fireblade:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("fbs"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "fly-io",
		name: "Fly.io",
		website: "https://fly.io",
		description: "Fly is a platform for running full stack apps and databases.",
		icon: "Fly.io.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "fly-io:cookie:0",
				kind: "cookie",
				key: "_fly",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "fly-io:responseHeader:1",
				kind: "responseHeader",
				key: "fly-request-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "fly-io:responseHeader:2",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Fly/[\\w]+\\s\\(.*\\)$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "fly-io:responseHeader:3",
				kind: "responseHeader",
				key: "via",
				valuePattern: new RegExp("^.*\\sfly\\.io$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "flywheel",
		name: "Flywheel",
		website: "https://getflywheel.com",
		icon: "flywheel.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "flywheel:responseHeader:0",
				kind: "responseHeader",
				key: "x-fw-hash",
				description: "Response header matches a known technology marker."
			},
			{
				id: "flywheel:responseHeader:1",
				kind: "responseHeader",
				key: "x-fw-serve",
				description: "Response header matches a known technology marker."
			},
			{
				id: "flywheel:responseHeader:2",
				kind: "responseHeader",
				key: "x-fw-server",
				valuePattern: new RegExp("^Flywheel(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "flywheel:responseHeader:3",
				kind: "responseHeader",
				key: "x-fw-static",
				description: "Response header matches a known technology marker."
			},
			{
				id: "flywheel:responseHeader:4",
				kind: "responseHeader",
				key: "x-fw-type",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gatsby-cloud-image-cdn",
		name: "Gatsby Cloud Image CDN",
		website: "https://www.gatsbyjs.com/products/cloud/image-cdn",
		description: "Image CDN is a new feature of hosting on Gatsby Cloud. Instead of processing images at build time, Image CDN defers and offloads image processing to the edge.",
		icon: "Gatsby.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "gatsby-cloud-image-cdn:dom:0",
				kind: "dom",
				selector: "img[srcset*='/_gatsby/image/'], source[srcset*='/_gatsby/image/']",
				description: "DOM selector matches a known technology marker."
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
		id: "gcore",
		name: "Gcore",
		website: "https://gcore.com",
		description: "Gcore is a public cloud and content delivery network (CDN) company.",
		icon: "Gcore.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "gcore:responseHeader:0",
				kind: "responseHeader",
				key: "x-id",
				valuePattern: new RegExp("^[\\w-]+-gc\\d{2}$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "gcore:responseHeader:1",
				kind: "responseHeader",
				key: "x-id-fe",
				valuePattern: new RegExp("^[\\w-]+-gc\\d{2}$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "gigalixir",
		name: "Gigalixir",
		website: "https://gigalixir.com/",
		description: "Gigalixir is a PaaS focused on deployments of Elixir and Phoenix web apps",
		icon: "Gigalixir.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "gigalixir:url:0",
				kind: "url",
				pattern: new RegExp("\\.gigalixirapp\\.com"),
				description: "Page URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "github-pages",
		name: "GitHub Pages",
		website: "https://pages.github.com/",
		description: "GitHub Pages is a static site hosting service.",
		icon: "GitHub.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "github-pages:url:0",
				kind: "url",
				pattern: new RegExp("^https?://[^/]+\\.github\\.io"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "github-pages:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^GitHub\\.com$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "github-pages:responseHeader:2",
				kind: "responseHeader",
				key: "X-GitHub-Request-Id",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "glitch",
		name: "Glitch",
		website: "https://glitch.com",
		description: "Glitch is a collaborative programming environment that lives in your browser and deploys code as you type.",
		icon: "Glitch.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "glitch:url:0",
				kind: "url",
				pattern: new RegExp("https://[^.]+\\.glitch\\.me"),
				description: "Page URL matches a known technology marker."
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
		id: "gocache",
		name: "GoCache",
		website: "https://www.gocache.com.br/",
		description: "GoCache is an in-memory key:value store/cache similar to memcached that is suitable for applications running on a single machine.",
		icon: "GoCache.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "gocache:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^gocache$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "gocache:responseHeader:1",
				kind: "responseHeader",
				key: "X-GoCache-CacheStatus",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "godaddy",
		name: "GoDaddy",
		website: "https://www.godaddy.com",
		description: "GoDaddy is used as a web host and domain registrar.",
		icon: "GoDaddy.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "godaddy:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.domaincontrol\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "google-cloud",
		name: "Google Cloud",
		website: "https://cloud.google.com",
		description: "Google Cloud is a suite of cloud computing services.",
		icon: "Google Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:google:cloud_platform:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "google-cloud-cdn",
		name: "Google Cloud CDN",
		website: "https://cloud.google.com/cdn",
		description: "Cloud CDN uses Google's global edge network to serve content closer to users.",
		icon: "google-cloud-cdn.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "google-cloud-cdn:responseHeader:0",
				kind: "responseHeader",
				key: "Via",
				valuePattern: new RegExp("^1\\.1 google$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"google-cloud"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "google-cloud-load-balancing",
		name: "Google Cloud Load Balancing",
		website: "https://cloud.google.com/load-balancing",
		description: "Google Cloud Load Balancing is a scalable, fully managed global load balancing service using Google Frontend.",
		icon: "Google Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "google-cloud-load-balancing:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Google Frontend$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"google-cloud"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"poa"
			]
		}
	},
	{
		id: "google-hosted-libraries",
		name: "Google Hosted Libraries",
		website: "https://developers.google.com/speed/libraries",
		description: "Google Hosted Libraries is a stable, reliable, high-speed, globally available content distribution network for the most popular, open-source JavaScript libraries.",
		icon: "Google Developers.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "google-hosted-libraries:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ajax\\.googleapis\\.com/ajax/libs/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "google-hosted-libraries:dom:1",
				kind: "dom",
				selector: "link[href*='ajax.googleapis.com/ajax/libs']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gotipath",
		name: "GotiPath",
		website: "https://gotipath.com",
		description: "GotiPath is a content delivery network (CDN) provider that is associated with telecom giant Telekom Malaysia Berhad.",
		icon: "GotiPath.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "gotipath:dom:0",
				kind: "dom",
				selector: "img[src*='.gotipath.com/'], link[href*='.gpcdn.net/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "gotipath:responseHeader:1",
				kind: "responseHeader",
				key: "X-Cache",
				valuePattern: new RegExp("\\.swiftserve\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"poa",
				"payg"
			]
		}
	},
	{
		id: "guardflame",
		name: "GuardFlame",
		website: "https://hydun.com",
		description: "GuardFlame is a provider of CDN acceleration services that enhance website performance.",
		icon: "GuardFlame.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "guardflame:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^GuardFlame$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "guideit",
		name: "GuideIT",
		website: "https://guideit.uk",
		description: "GuideIT is a cloud hosting provider.",
		icon: "GuideIT.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "guideit:responseHeader:0",
				kind: "responseHeader",
				key: "platform",
				valuePattern: new RegExp("^GuideIT$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "helhost",
		name: "Helhost",
		website: "https://www.helhost.com",
		description: "Helhost is a web hosting provider and internet domain registrar from Democratic Republic of Congo.",
		icon: "Helhost.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "helhost:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.helhost\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "helhost:responseHeader:1",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("Helhost"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "helhost:dns:2",
				kind: "dns",
				valuePattern: new RegExp("\\.helhost\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "help-com",
		name: "Help.com",
		website: "https://www.help.com",
		description: "Help.com is a service that provides domain name registration and website hosting with simplified setup and management.",
		icon: "Help.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "help-com:pageGlobal:0",
				kind: "pageGlobal",
				property: "Helpdotcom",
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
		id: "heroku",
		name: "Heroku",
		website: "https://www.heroku.com/",
		description: "Heroku is a cloud platform as a service (PaaS) supporting several programming languages.",
		icon: "heroku.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "heroku:url:0",
				kind: "url",
				pattern: new RegExp("\\.herokuapp\\.com"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "heroku:responseHeader:1",
				kind: "responseHeader",
				key: "Via",
				valuePattern: new RegExp("[\\d.-]+ vegur$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "heroku:dns:2",
				kind: "dns",
				valuePattern: new RegExp("heroku-domain-verification"),
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
		id: "hetzner",
		name: "Hetzner",
		website: "https://www.hetzner.com",
		description: "Hetzner provides dedicated hosting, shared web hosting, virtual private servers, managed servers, domain names, SSL certificates, storage boxes, and cloud.",
		icon: "Hetzner.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hetzner:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("HeRay"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "hetzner:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Hetzner"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "hetzner:dns:2",
				kind: "dns",
				valuePattern: new RegExp("\\.ns\\.hetzner\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "hostens",
		name: "Hostens",
		website: "https://www.hostens.com",
		description: "Hostens is a web hosting company specialising in hosting services, virtual private server hosting, and the domain name or transition.",
		icon: "Hostens.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hostens:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hostens\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "hosteurope",
		name: "HostEurope",
		website: "https://www.hosteurope.de",
		description: "HostEurope is a European website hosting, email and domain name registrar company headquartered Hayes, West London.",
		icon: "HostEurope.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hosteurope:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hosteurope\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "hostgator",
		name: "Hostgator",
		website: "https://www.hostgator.com",
		description: "HostGator is a Houston-based provider of shared, reseller, virtual private server, and dedicated web hosting with an additional presence in Austin, Texas.",
		icon: "Hostgator.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hostgator:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hostgator\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "hosting-ukraine",
		name: "Hosting Ukraine",
		website: "https://www.ukraine.com.ua",
		description: "Hosting Ukraine is a web hosting provider and internet domain registrar.",
		icon: "Hosting Ukraine.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hosting-ukraine:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.ukraine\\.com\\.ua"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "hostinger",
		name: "Hostinger",
		website: "https://www.hostinger.com",
		description: "Hostinger is an employee-owned Web hosting provider and internet domain registrar.",
		icon: "Hostinger.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hostinger:responseHeader:0",
				kind: "responseHeader",
				key: "platform",
				valuePattern: new RegExp("hostinger"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "hostinger:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.(?:dns-parking|hostinger)\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			],
			cpe: "cpe:2.3:a:hostinger:hostinger:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "hostinger-cdn",
		name: "Hostinger CDN",
		website: "https://www.hostinger.com",
		description: "Hostinger Content Delivery Network (CDN).",
		icon: "Hostinger.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hostinger-cdn:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("hcdn"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "hostiq",
		name: "Hostiq",
		website: "https://hostiq.ua",
		description: "Hostiq is a web hosting provider and internet domain registrar.",
		icon: "Hostiq.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hostiq:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hostiq\\.ua"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "hostpoint",
		name: "Hostpoint",
		website: "https://www.hostpoint.ch",
		description: "Hostpoint is a Switzerland-based web hosting company.",
		icon: "Hostpoint.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hostpoint:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.hostpoint\\.ch"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "hydra-shield",
		name: "Hydra-Shield",
		website: "https://hydra-shield.fr",
		description: "Hydra-Shield is an anti-DDoS protection reverse proxy that filters and mitigates malicious traffic to safeguard servers from distributed denial-of-service attacks.",
		icon: "Hydra-Shield.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hydra-shield:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Hydra-Shield\\sV([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
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
		id: "hypercloudhost",
		name: "Hypercloudhost",
		website: "https://hypercloudhost.com",
		description: "Hypercloudhost is a hosting service solution in Indonesia offering anti-DDoS protection and high-performance cloud hosting.",
		icon: "Hypercloudhost.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hypercloudhost:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^hypercloudhost$"),
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
		id: "hyperlane",
		name: "Hyperlane",
		website: "https://hyperlane.co",
		description: "Hyperlane is a hosting platform for WordPress and Craft CMS websites.",
		icon: "Hyperlane.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "hyperlane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hyperlane\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hyperlane:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.hyperlane\\.co/"),
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
		id: "i-mscp",
		name: "i-MSCP",
		website: "https://github.com/i-MSCP/imscp",
		description: "i-MSCP (internet Multi Server Control Panel) is a software for shared hosting environments management on Linux servers.",
		icon: "i-MSCP.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "i-mscp:meta:0",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^i-MSCP$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ibm-datapower",
		name: "IBM DataPower",
		website: "https://www.ibm.com/products/datapower-gateway",
		description: "IBM DataPower Gateway is a single multi-channel gateway designed to help provide security, control, integration and optimized access to a full range of mobile, web, application programming interface (API), service-oriented architecture (SOA), B2B and cloud workloads.",
		icon: "DataPower.png",
		categories: [
			"infrastructure-hosting",
			"api-pattern"
		],
		rules: [
			{
				id: "ibm-datapower:responseHeader:0",
				kind: "responseHeader",
				key: "X-Backside-Transport",
				description: "Response header matches a known technology marker."
			},
			{
				id: "ibm-datapower:responseHeader:1",
				kind: "responseHeader",
				key: "X-Global-Transaction-ID",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:ibm:datapower_gateway:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "idcloudhost",
		name: "idCloudHost",
		website: "https://idcloudhost.com",
		description: "idCloudHost is a local web service provider based in Indonesia that offer a wide range of services including domain name registration and cloud hosting.",
		icon: "idCloudHost.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "idcloudhost:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.cloudhost\\.id"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "imageengine",
		name: "ImageEngine",
		website: "https://imageengine.io",
		description: "ImageEngine is an intelligent image content delivery network. ImageEngine will resize your image content tailored to the end users device.",
		icon: "ImageEngine.svg",
		categories: [
			"infrastructure-hosting",
			"developer-tooling"
		],
		rules: [
			{
				id: "imageengine:dom:0",
				kind: "dom",
				selector: "link[href*='.imgeng.in/'], img[src*='.imgeng.in/'], img[data-src*='.imgeng.in/'], source[srcset*='.imgeng.in/']",
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
		id: "imgix",
		name: "Imgix",
		website: "https://imgix.com/",
		description: "Imgix is a visual media platform for managing, processing, rendering, optimising and delivering your existing images.",
		icon: "Imgix.svg",
		categories: [
			"infrastructure-hosting",
			"media-video"
		],
		rules: [
			{
				id: "imgix:dom:0",
				kind: "dom",
				selector: "img[src*='.imgix.net/'], img[data-src*='.imgix.net/'], img[srcset*='.imgix.net/'], source[src*='.imgix.net/'], source[data-src*='.imgix.net/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "imgix:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.imgix\\.net"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			],
			cpe: "cpe:2.3:a:imgix:imgix:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "incapsula",
		name: "Incapsula",
		website: "https://www.incapsula.com",
		description: "Incapsula is a cloud-based application delivery platform. It uses a global content delivery network to provide web application security, DDoS mitigation, content caching, application delivery, load balancing and failover services.",
		icon: "Incapsula.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "incapsula:responseHeader:0",
				kind: "responseHeader",
				key: "X-CDN",
				valuePattern: new RegExp("Incapsula"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "infomaniak",
		name: "Infomaniak",
		website: "https://www.infomaniak.com",
		description: "Infomaniak is a hosting company based in Geneva, Switzerland.",
		icon: "Infomaniak.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "infomaniak:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.infomaniak\\.ch"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "ionos",
		name: "IONOS",
		website: "https://www.ionos.com",
		description: "IONOS is the web hosting and cloud partner for small and medium-sized businesses.",
		icon: "IONOS.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "ionos:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns1\\d+\\.ui-dns\\.(?:de|org|biz|com)"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "jquery-cdn",
		name: "jQuery CDN",
		website: "https://code.jquery.com/",
		description: "jQuery CDN is a way to include jQuery in your website without actually downloading and keeping it your website's folder.",
		icon: "jQuery.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "jquery-cdn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.jquery\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jsdelivr",
		name: "jsDelivr",
		website: "https://www.jsdelivr.com/",
		description: "JSDelivr is a free public CDN for open-source projects. It can serve web files directly from the npm registry and GitHub repositories without any configuration.",
		icon: "jsdelivr-icon.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "jsdelivr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jsdelivr:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("cdn\\.jsdelivr\\.net"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "jsdelivr:dom:2",
				kind: "dom",
				selector: "link[href*='cdn.jsdelivr.net']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "keloncloud",
		name: "KelonCloud",
		website: "https://www.keloncloud.com",
		description: "KelonCloud offers a variety of cloud-based services, such as CDN, DDoS mitigation, cloud security, streaming, cloud compute, and more.",
		icon: "KelonCloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "keloncloud:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^(?:(?:KelonCloud|KC)-Private-CDN|KelonCloud)$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring"
			]
		}
	},
	{
		id: "keycdn",
		name: "KeyCDN",
		website: "https://www.keycdn.com",
		description: "KeyCDN is a content delivery network (CDN).",
		icon: "KeyCDN.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "keycdn:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^keycdn-engine$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "kinsta",
		name: "Kinsta",
		website: "https://kinsta.com",
		description: "Kinsta is a managed WordPress hosting provider leveraging the Google Cloud Platform to offer high-performance, secure, and user-friendly hosting solutions for WordPress websites.",
		icon: "kinsta.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "kinsta:responseHeader:0",
				kind: "responseHeader",
				key: "x-kinsta-cache",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
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
		id: "kong",
		name: "Kong",
		website: "https://konghq.com",
		description: "Kong is an open-source API gateway and platform that acts as middleware between compute clients and the API-centric applications.",
		icon: "Kong.svg",
		categories: [
			"infrastructure-hosting",
			"api-pattern"
		],
		rules: [
			{
				id: "kong:responseHeader:0",
				kind: "responseHeader",
				key: "via",
				valuePattern: new RegExp("^kong/([\\d\\.]+)(?:.+)?$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"payg",
				"freemium"
			],
			cpe: "cpe:2.3:a:konghq:kong:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "kuronekoserver-cdn",
		name: "KuronekoServer CDN",
		website: "https://cdn.krnk.org",
		description: "KuronekoServer CDN is a distributed content delivery network utilizing VPS and Cloudflare to enhance performance and reliability.",
		icon: "KuronekoServerCDN.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "kuronekoserver-cdn:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.krnk\\.org/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "kuronekoserver-cdn:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.krnk.org/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "lagoon",
		name: "Lagoon",
		website: "https://lagoon.sh/",
		description: "The Open Source Application Delivery Platform for Kubernetes.",
		icon: "lagoon.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "lagoon:responseHeader:0",
				kind: "responseHeader",
				key: "X-LAGOON",
				description: "Response header matches a known technology marker."
			},
			{
				id: "lagoon:responseHeader:1",
				kind: "responseHeader",
				key: "x-lagoon",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "leaseweb",
		name: "Leaseweb",
		website: "https://www.leaseweb.com",
		description: "Leaseweb is an Infrastructure-as-a-Service (IaaS) provider offering dedicated servers, CDN, cloud hosting and hybrid cloud on a global network.",
		icon: "Leaseweb.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "leaseweb:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.leaseweb\\.nl"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "liquid-web",
		name: "Liquid Web",
		website: "https://www.liquidweb.com",
		description: "Liquid Web is a US-based host offering premium managed web hosting solutions.",
		icon: "Liquid Web.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "liquid-web:responseHeader:0",
				kind: "responseHeader",
				key: "x-lw-cache",
				description: "Response header matches a known technology marker."
			},
			{
				id: "liquid-web:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.liquidweb\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "luveedu-cloud",
		name: "Luveedu Cloud",
		website: "https://cloud.luveedu.com",
		description: "Luveedu Cloud is a domain and web hosting platform.",
		icon: "LuveeduCloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "luveedu-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.luveedu\\.com/"),
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
		id: "matori-net",
		name: "MATORI.NET",
		website: "https://matori.net",
		description: "MATORI.NET is a fully managed reverse proxy.",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "matori-net:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("MATORI.NET"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"openresty"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "maxcdn",
		name: "MaxCDN",
		website: "https://www.maxcdn.com",
		description: "MaxCDN is a content delivery network, which accelerates web-sites and decreases the server load.",
		icon: "MaxCDN.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "maxcdn:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^NetDNA"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "maxcdn:responseHeader:1",
				kind: "responseHeader",
				key: "X-CDN-Forward",
				valuePattern: new RegExp("^maxcdn$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mercurycloud",
		name: "Mercurycloud",
		website: "https://mercurycloud.fr",
		description: "Mercurycloud is a hosting service provider offering a range of solutions, including web hosting, virtual private servers (VPS), dedicated servers, and game servers.",
		icon: "Mercurycloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "mercurycloud:responseHeader:0",
				kind: "responseHeader",
				key: "X-Host",
				valuePattern: new RegExp("\\.mercurycloud\\.fr"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "mercurycloud:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("MercuryCloud CDN v([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
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
		id: "microsoft-ajax-content-delivery-network",
		name: "Microsoft Ajax Content Delivery Network",
		website: "https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview",
		description: "Microsoft Ajax Content Delivery Network hosts popular third party JavaScript libraries such as jQuery and enables you to easily add them to your web applications.",
		icon: "Microsoft.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "microsoft-ajax-content-delivery-network:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ajax\\.aspnetcdn\\.com/ajax/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mirus",
		name: "Mirus",
		website: "https://mirusresearch.com",
		description: "Mirus is a platform that provides scalable solutions capable of adjusting capacity to meet demand while maintaining resilience against unexpected challenges.",
		icon: "Mirus.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "mirus:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.mirus\\.io"),
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
		id: "mittwald",
		name: "Mittwald",
		website: "https://www.mittwald.de",
		description: "Mittwald is a web hosting agency, established in 2003 in Espelkamp, Germany",
		icon: "Mittwald.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "mittwald:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.agenturserver\\.(?:de|co|it)"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "mizbancloud",
		name: "MizbanCloud",
		website: "https://mizbancloud.com",
		description: "MizbanCloud is a total cloud infrastructure solutions, CDN service provider and Cloud Computing Services, Cloud DNS, Cloud Security, VoD Streaming Service, Live Streaming, Cloud Object Storage.",
		icon: "MizbanCloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "mizbancloud:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^MizbanCloud$"),
				description: "Response header matches a known technology marker."
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
		id: "motherhost",
		name: "Motherhost",
		website: "https://www.motherhost.com",
		description: "Motherhost is a web hosting company based in India that offers a range of hosting services, including shared hosting, VPS hosting, dedicated servers, and cloud hosting.",
		icon: "Motherhost.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "motherhost:responseHeader:0",
				kind: "responseHeader",
				key: "platform",
				valuePattern: new RegExp("^motherhost$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring"
			]
		}
	},
	{
		id: "nestify",
		name: "Nestify",
		website: "https://nestify.io",
		description: "Nestify is a fully managed WordPress hosting platform that runs on AWS graviton processors.",
		icon: "Nestify.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "nestify:responseHeader:0",
				kind: "responseHeader",
				key: "x-nestify-cache",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "netlify",
		name: "Netlify",
		website: "https://www.netlify.com/",
		description: "Netlify providers hosting and server-less backend services for web applications and static websites.",
		icon: "Netlify.svg",
		categories: [
			"infrastructure-hosting",
			"styling-processor"
		],
		rules: [
			{
				id: "netlify:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("cdn\\.netlify\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "netlify:url:1",
				kind: "url",
				pattern: new RegExp("^https?://[^/]+\\.netlify\\.(?:com|app)/"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "netlify:responseHeader:2",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Netlify"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "netlify:responseHeader:3",
				kind: "responseHeader",
				key: "X-NF-Request-ID",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
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
		id: "newspack-by-automattic",
		name: "Newspack by Automattic",
		website: "https://newspack.pub/",
		description: "Automattic's Newspack service is an all-in-one platform designed for small and medium-sized news organizations that simplifies publishing and drives audience and revenue right out of the box.",
		icon: "NewspackLogo.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "newspack-by-automattic:responseHeader:0",
				kind: "responseHeader",
				key: "host-header",
				valuePattern: new RegExp("Newspack"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"newspack"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "nexcess",
		name: "Nexcess",
		website: "https://www.nexcess.net",
		description: "Nexcess is a web hosting service.",
		icon: "nexcess.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "nexcess:responseHeader:0",
				kind: "responseHeader",
				key: "x-hostname",
				valuePattern: new RegExp("nxcli\\.net$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "niagahoster",
		name: "Niagahoster",
		website: "https://niagahoster.co.id",
		description: "Niagahoster is a web hosting service for small and medium enterprises. It provides shared hosting, WordPress hosting, Virtual Private Server (VPS), and more.",
		icon: "Niagahoster.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "niagahoster:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("Niagahoster"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"niagahoster"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "novaresa",
		name: "Novaresa",
		website: "https://www.novaresa.fr",
		description: "Novaresa is a cloud-based platform designed to manage, operate, and promote hosting services through centralized tools for administration, service delivery, and customer engagement.",
		icon: "Novaresa.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "novaresa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.novaresa\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "novaresa:pageGlobal:1",
				kind: "pageGlobal",
				property: "jquery_novaresa.Animation",
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
		id: "ocea",
		name: "Ocea",
		website: "https://ocea.app",
		description: "Ocea is a web service facilitating website and app creation, leveraging cloud infrastructure.",
		icon: "Ocea.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "ocea:dom:0",
				kind: "dom",
				selector: "link[href*='.ocea.app/']",
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
		id: "one-com",
		name: "One.com",
		website: "https://www.one.com",
		description: "One.com is a Denmark-based company offering bargain-priced WordPress and shared web hosting plans.",
		icon: "One.com.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "one-com:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.one\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "ovhcloud",
		name: "OVHcloud",
		website: "https://www.ovhcloud.com",
		description: "OVHcloud is a global, cloud provider delivering hosted private cloud, public cloud, and dedicated server solutions.",
		icon: "OVHcloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "ovhcloud:responseHeader:0",
				kind: "responseHeader",
				key: "x-iplb-request-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "ovhcloud:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\d+\\.ovh\\.net"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
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
		id: "pagely",
		name: "Pagely",
		website: "https://pagely.com/",
		icon: "pagely.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "pagely:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Pagely"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress",
			"amazon-web-services"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pantheon",
		name: "Pantheon",
		website: "https://pantheon.io/",
		description: "Pantheon is a WebOps (Website Operations) and Management Platform for WordPress and Drupal.",
		icon: "Pantheon.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "pantheon:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Pantheon"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "pantheon:responseHeader:1",
				kind: "responseHeader",
				key: "x-pantheon-styx-hostname",
				description: "Response header matches a known technology marker."
			},
			{
				id: "pantheon:responseHeader:2",
				kind: "responseHeader",
				key: "x-styx-req-id",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php",
			"nginx",
			"mariadb",
			"fastly"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "parmin-cloud",
		name: "Parmin Cloud",
		website: "https://parmin.cloud",
		description: "Parmin Cloud operates in the field of cloud services.",
		icon: "Parmin Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "parmin-cloud:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^ParminCloud$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa",
				"payg"
			]
		}
	},
	{
		id: "platform-sh",
		name: "Platform.sh",
		website: "https://platform.sh",
		icon: "platformsh.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "platform-sh:responseHeader:0",
				kind: "responseHeader",
				key: "x-platform-cluster",
				description: "Response header matches a known technology marker."
			},
			{
				id: "platform-sh:responseHeader:1",
				kind: "responseHeader",
				key: "x-platform-processor",
				description: "Response header matches a known technology marker."
			},
			{
				id: "platform-sh:responseHeader:2",
				kind: "responseHeader",
				key: "x-platform-router",
				description: "Response header matches a known technology marker."
			},
			{
				id: "platform-sh:responseHeader:3",
				kind: "responseHeader",
				key: "x-platform-server",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "plesk",
		name: "Plesk",
		website: "https://www.plesk.com",
		description: "Plesk is a web hosting and server data centre automation software with a control panel developed for Linux and Windows-based retail hosting service providers.",
		icon: "Plesk.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "plesk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("common\\.js\\?plesk"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "plesk:pageGlobal:1",
				kind: "pageGlobal",
				property: "Plesk.Form",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "plesk:responseHeader:2",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Plesk(?:L|W)in"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "plesk:responseHeader:3",
				kind: "responseHeader",
				key: "X-Powered-By-Plesk",
				valuePattern: new RegExp("^Plesk"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "plesk:meta:4",
				kind: "meta",
				key: "plesk-build",
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			],
			cpe: "cpe:2.3:a:parallels:parallels_plesk_panel:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "powa",
		name: "Powa",
		website: "https://powa.com",
		description: "Powa is a site speed plugin for WordPress that operates its own Content Delivery Network (CDN) to enhance website performance and reduce loading times.",
		icon: "Powa.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "powa:pageGlobal:0",
				kind: "pageGlobal",
				property: "powaHealthCheck",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "powa:pageGlobal:1",
				kind: "pageGlobal",
				property: "powaInitAssets",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "powa:pageGlobal:2",
				kind: "pageGlobal",
				property: "powaOnLoadJs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "powa:pageGlobal:3",
				kind: "pageGlobal",
				property: "powaSyncLoadScripts",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "pressable",
		name: "Pressable",
		website: "https://pressable.com",
		description: "Pressable is a managed hoting platform for WordPress.",
		icon: "pressable.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "pressable:responseHeader:0",
				kind: "responseHeader",
				key: "host-header",
				valuePattern: new RegExp("^Pressable"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pterodactyl-panel",
		name: "Pterodactyl Panel",
		website: "https://pterodactyl.io",
		description: "Pterodactyl Panel is a free, open-source game server management panel built with PHP, React, and Go.",
		icon: "Pterodactyl Panel.svg",
		categories: [
			"infrastructure-hosting",
			"ui-library"
		],
		rules: [
			{
				id: "pterodactyl-panel:cookie:0",
				kind: "cookie",
				key: "pterodactyl_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"go",
			"php",
			"react",
			"laravel"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pxxl-app",
		name: "Pxxl App",
		website: "https://pxxl.app",
		description: "Pxxl App is a no-code platform that allows users to build and host web projects using custom subdomains on pxxl-managed domains.",
		icon: "Pxxl App.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "pxxl-app:url:0",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.app"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "pxxl-app:url:1",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.tech"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "pxxl-app:url:2",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.online"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "pxxl-app:url:3",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.click"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "pxxl-app:url:4",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.pro"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "pxxl-app:url:5",
				kind: "url",
				pattern: new RegExp("\\.pxxl\\.site"),
				description: "Page URL matches a known technology marker."
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
		id: "pythonanywhere",
		name: "PythonAnywhere",
		website: "https://www.pythonanywhere.com",
		description: "PythonAnywhere is an online integrated development environment (IDE) and web hosting service (Platform as a service) based on the Python programming language.",
		icon: "PythonAnywhere.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "pythonanywhere:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^PythonAnywhere$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "railway",
		name: "Railway",
		website: "https://railway.app",
		description: "Railway is a cloud platform that simplifies building, deploying, and managing applications with easy setup and scalable infrastructure.",
		icon: "Railway.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "railway:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("railway\\.app"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "railway:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^railway$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "rawgit",
		name: "RawGit",
		website: "https://rawgit.com",
		description: "RawGit is a service that delivers raw files directly from GitHub, Bitbucket, or GitLab with correct Content-Type headers.",
		icon: "RawGit.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "rawgit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.rawgit\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "reg-ru",
		name: "REG.RU",
		website: "https://www.reg.ru",
		description: "REG.RU is a web hosting provider and internet domain registrar.",
		icon: "REG.RU.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "reg-ru:dns:0",
				kind: "dns",
				valuePattern: new RegExp("(?:\\.hosting)?\\.reg\\.ru"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "render",
		name: "Render",
		website: "https://render.com",
		description: "Render is a cloud computing platform that provides a wide range of services, including web hosting, cloud computing, and application development. Render offers several hosting options, including static site hosting, web application hosting, and managed databases.",
		icon: "Render.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "render:responseHeader:0",
				kind: "responseHeader",
				key: "x-render-origin-server",
				valuePattern: new RegExp("Render"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "rosti",
		name: "Rosti",
		website: "https://rosti.cz",
		description: "Rosti is a hosting service suitable for development and production deployment of web applications.",
		icon: "Rosti.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "rosti:responseHeader:0",
				kind: "responseHeader",
				key: "X-Rosti",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "saba-host",
		name: "Saba.Host",
		website: "https://saba.host",
		description: "Saba.Host is a total web-hosting solutions. It provides shared hosting, WordPress hosting, dedicated server, virtual private server (VPS), SSL and more.",
		icon: "Saba.Host.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "saba-host:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.saba\\.host"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring"
			]
		}
	},
	{
		id: "sakura-internet",
		name: "Sakura Internet",
		website: "https://www.sakura.ad.jp",
		description: "Sakura Internet is a web hosting provider that has been operating for almost 30 years.",
		icon: "Sakura Internet.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "sakura-internet:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.gslbN\\.sakura\\.ne\\.jp"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
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
		id: "section-io",
		name: "Section.io",
		website: "https://www.section.io",
		description: "Section.io is a Content Delivery Network (CDN).",
		icon: "sectionio.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "section-io:responseHeader:0",
				kind: "responseHeader",
				key: "section-io-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "section-io:responseHeader:1",
				kind: "responseHeader",
				key: "section-io-origin-status",
				description: "Response header matches a known technology marker."
			},
			{
				id: "section-io:responseHeader:2",
				kind: "responseHeader",
				key: "section-io-origin-time-seconds",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "seravo",
		name: "Seravo",
		website: "https://seravo.com",
		icon: "Seravo.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "seravo:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^Seravo"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "siteground",
		name: "SiteGround",
		website: "https://www.siteground.com",
		description: "SiteGround is a web hosting service.",
		icon: "siteground.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "siteground:responseHeader:0",
				kind: "responseHeader",
				key: "host-header",
				valuePattern: new RegExp("192fc2e7e50945beb8231a492d6a8024|b7440e60b07ee7b8044761568fab26e8|624d5be7be38418a3e2a818cc8b7029b|6b7412fb82ca5edfd0917e3957f05d89"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "siteground:dns:1",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.c\\d+\\.sgvps\\.net"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "smilii",
		name: "Smilii",
		website: "https://smilii.net",
		description: "Smilii is a family-owned web hosting provider and internet domain registrar offering domain registration and website hosting services.",
		icon: "Smilii.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "smilii:responseHeader:0",
				kind: "responseHeader",
				key: "Platform",
				valuePattern: new RegExp("^Smilii$"),
				description: "Response header matches a known technology marker."
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
		id: "sotoon",
		name: "Sotoon",
		website: "https://sotoon.ir",
		description: "Sotoon is a CDN provider serving users specially in the MENA region.",
		icon: "Sotoon.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "sotoon:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Sotoon(?: CDN)?$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "stackpath",
		name: "StackPath",
		website: "https://www.stackpath.com",
		description: "StackPath is a cloud computing and services provider.",
		icon: "StackPath.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "stackpath:responseHeader:0",
				kind: "responseHeader",
				key: "x-backend-server",
				valuePattern: new RegExp("hosting\\.stackcp\\.net$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "stackpath:responseHeader:1",
				kind: "responseHeader",
				key: "x-provided-by",
				valuePattern: new RegExp("^StackCDN(?: ([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "statically",
		name: "Statically",
		website: "https://statically.io",
		description: "Statically is a free, fast and modern CDN for open-source projects, WordPress, images, and any static assets.",
		icon: "Statically.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "statically:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.statically\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "statically:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.statically.io/'], a[href*='cdn.statically.io/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "statically:responseHeader:2",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^statically$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "strato",
		name: "Strato",
		website: "https://www.strato.com",
		description: "Strato is an internet hosting service provider headquartered in Berlin, Germany which provide dedicated server hosting, a website builder and a cloud storage services.",
		icon: "Strato.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "strato:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.strato-rz\\.de"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "strattic",
		name: "Strattic",
		website: "https://www.strattic.com/",
		description: "Strattic offers static and headless hosting for WordPress sites.",
		icon: "strattic.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "strattic:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("Strattic"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "sucuri",
		name: "Sucuri",
		website: "https://sucuri.net/",
		description: "Sucuri is a cybersecurity company that provides website security solutions and services.",
		icon: "sucuri.svg",
		categories: [
			"infrastructure-hosting",
			"security"
		],
		rules: [
			{
				id: "sucuri:responseHeader:0",
				kind: "responseHeader",
				key: "x-sucuri-cache:",
				description: "Response header matches a known technology marker."
			},
			{
				id: "sucuri:responseHeader:1",
				kind: "responseHeader",
				key: "x-sucuri-id",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tangled-network",
		name: "Tangled Network",
		website: "https://tanglednetwork.com",
		description: "Tangled Network provides a managed services in website devleopment, web and database hosting and domain registration, with a focus on everything managed for small and medium sized businesses.",
		icon: "atws.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "tangled-network:responseHeader:0",
				kind: "responseHeader",
				key: "X-Hosting-Provider",
				valuePattern: new RegExp("Tangled Network"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "tangled-network:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.tanglednetwork\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "tcadmin",
		name: "TCAdmin",
		website: "https://www.tcadmin.com",
		description: "TCAdmin is the game hosting control panel.",
		icon: "TCAdmin.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "tcadmin:pageGlobal:0",
				kind: "pageGlobal",
				property: "TCAdmin",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "tencent-cloud",
		name: "Tencent Cloud",
		website: "https://intl.cloud.tencent.com",
		description: "Tencent Cloud is China's leading public cloud service provider.",
		icon: "Tencent Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "tencent-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tencent-cloud\\.(?:cn|com)/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tencent-cloud:meta:1",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("^.+Tencent\\sCloud\\.$"),
				description: "Meta tag matches a known technology marker."
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
		id: "tencent-waterproof-wall",
		name: "Tencent Waterproof Wall",
		website: "https://007.qq.com/",
		icon: "TencentWaterproofWall.png",
		categories: [
			"infrastructure-hosting",
			"security"
		],
		rules: [
			{
				id: "tencent-waterproof-wall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/TCaptcha\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tencent-waterproof-wall:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("captcha\\.qq\\.com/.*"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "thingpark-enterprise",
		name: "ThingPark Enterprise",
		website: "https://www.thingpark.com/thingpark-enterprise",
		description: "ThingPark Enterprise is an enterprise IoT connectivity solution designed with a strong focus on security.",
		icon: "ThingPark.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "thingpark-enterprise:dom:0",
				kind: "dom",
				selector: "input[value*='.thingpark.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tiiny-host",
		name: "Tiiny Host",
		website: "https://tiiny.host",
		description: "Tiiny Host is a web hosting service for static sites with support for custom domains, SSL, password protection, and built-in analytics.",
		icon: "Tiiny Host.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "tiiny-host:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?://|\\.)tiiny\\.(?:host|site)/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "twicpics",
		name: "TwicPics",
		website: "https://www.twicpics.com",
		description: "TwicPics offers on-demand responsive image generation.",
		icon: "TwicPics.svg",
		categories: [
			"infrastructure-hosting",
			"developer-tooling"
		],
		rules: [
			{
				id: "twicpics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp(".+\\.twic\\.pics"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "twicpics:responseHeader:2",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^TwicPics/\\d+\\.\\d+\\.\\d+$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "ukfast",
		name: "UKFast",
		website: "https://www.ukfast.co.uk",
		description: "UKFast is a business-to-business internet hosting company based in Manchester, UK.",
		icon: "UKFast.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "ukfast:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.ukfast\\.net"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "unpkg",
		name: "Unpkg",
		website: "https://unpkg.com",
		description: "Unpkg is a content delivery network for everything on npm.",
		icon: "Unpkg.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "unpkg:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("unpkg\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "unpkg:dom:1",
				kind: "dom",
				selector: "link[href*='unpkg.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "uploadcare",
		name: "Uploadcare",
		website: "https://uploadcare.com",
		description: "Uploadcare is a complete file handling platform for online business. Receive files from you users via File Uploader or File Upload API, implement image optimization and transformations with Image CDN API, and get HIPAA-compliant storage.",
		icon: "Uploadcare.svg",
		categories: [
			"infrastructure-hosting",
			"api-pattern"
		],
		rules: [
			{
				id: "uploadcare:dom:0",
				kind: "dom",
				selector: "img[src*='.ucarecdn.com/'], link[href*='ucarecdn.com'], img[data-src*='.ucarecdn.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "uploadcare:pageGlobal:1",
				kind: "pageGlobal",
				property: "uploadcare.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "urllo",
		name: "Urllo",
		website: "https://www.urllo.com",
		description: "Urllo is a URL redirection service designed for businesses to manage and streamline link forwarding.",
		icon: "Urllo.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "urllo:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.urllo-cdn.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "v2board",
		name: "V2Board",
		website: "https://v2board.com",
		description: "V2Board is a multi-agent protocol management system with an interface for managing multiple proxy protocols.",
		icon: "V2Board.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "v2board:dom:0",
				kind: "dom",
				selector: "link[href*='/theme/v2board/assets/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ventraip",
		name: "VentraIP",
		website: "https://ventraip.com.au",
		description: "VentraIP is the largest privately owned web host and domain name registrar in Australia.",
		icon: "VentraIP.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "ventraip:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.(?:nameserver|hostingplatform)\\.net\\.au"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "vercel",
		name: "Vercel",
		website: "https://vercel.com",
		description: "Vercel is a cloud platform for static frontends and serverless functions.",
		icon: "vercel.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "vercel:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^now|Vercel$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "vercel:responseHeader:1",
				kind: "responseHeader",
				key: "x-now-trace",
				description: "Response header matches a known technology marker."
			},
			{
				id: "vercel:responseHeader:2",
				kind: "responseHeader",
				key: "x-vercel-cache",
				description: "Response header matches a known technology marker."
			},
			{
				id: "vercel:responseHeader:3",
				kind: "responseHeader",
				key: "x-vercel-id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "vercel:dns:4",
				kind: "dns",
				valuePattern: new RegExp("\\.vercel-dns\\.com"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
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
		id: "vergecloud",
		name: "VergeCloud",
		website: "https://www.vergecloud.com/",
		description: "VergeCloud is a cloud services provider offering CDN and DNS services, security solutions, and a reliable TCP proxy to support online presence.",
		icon: "VergeCloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "vergecloud:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^vergecloud$"),
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
		id: "virtfusion",
		name: "VirtFusion",
		website: "https://virtfusion.com",
		description: "VirtFusion is a modern virtualization management platform designed for hosting providers to manage virtual machines, users, billing integrations, and infrastructure operations through a centralized interface.",
		icon: "VirtFusion.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "virtfusion:cookie:0",
				kind: "cookie",
				key: "virtfusion_session",
				description: "Cookie name matches a known technology marker."
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
		id: "voximplant",
		name: "Voximplant",
		website: "https://voximplant.com/products/click-to-call",
		description: "Voximplant is a cloud-based communication platform that enables voice calls directly from a webpage using a computer, formerly known as Zingaya.",
		icon: "Voximplant.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "voximplant:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("zingaya\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "voximplant:pageGlobal:1",
				kind: "pageGlobal",
				property: "Zingaya.analytics_id",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "voximplant:pageGlobal:2",
				kind: "pageGlobal",
				property: "ZingayaClass",
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
		id: "vultr",
		name: "Vultr",
		website: "https://www.vultr.com",
		description: "Vultr is a cloud computing service provider.",
		icon: "Vultr.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "vultr:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.vultr\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "wangsu",
		name: "Wangsu",
		website: "https://en.wangsu.com",
		description: "Wangsu is a China-based company that provides content delivery network and internet data center services.",
		icon: "Wangsu.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "wangsu:pageGlobal:0",
				kind: "pageGlobal",
				property: "__cdnRoute",
				valuePattern: new RegExp("^wangsu$"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wangsu:pageGlobal:1",
				kind: "pageGlobal",
				property: "playurl.wangsu",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "webhostuk",
		name: "WebHostUK",
		website: "https://www.webhostuk.co.uk",
		description: "WebHostUK is a UK based web hosting company offering cheap yet reliable and secure web hosting solutions on both Linux and Windows servers.",
		icon: "WebHostUK.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "webhostuk:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns2\\d\\.dnshostcentral\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "wordpress-multisite",
		name: "WordPress Multisite",
		website: "https://wordpress.org/documentation/article/create-a-network/",
		description: "A multisite network is a collection of sites that all share the same WordPress installation core files. ",
		icon: "WordPress.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "wordpress-vip",
		name: "WordPress VIP",
		website: "https://wpvip.com",
		description: "WordPress VIP is a managed hosting platform for WordPress.",
		icon: "wpvip.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "wordpress-vip:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^WordPress VIP|wpvip\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "wordpress-com",
		name: "WordPress.com",
		website: "https://wordpress.com",
		description: "WordPress.com is a platform for self-publishing that is popular for blogging and other works.",
		icon: "WordPress.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "wordpress-com:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("ImportFromWordPressInsideMenu"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "wordpress-com:pageGlobal:1",
				kind: "pageGlobal",
				property: "WordPressPopularPosts",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wordpress-com:responseHeader:2",
				kind: "responseHeader",
				key: "host-header",
				valuePattern: new RegExp("WordPress\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "world4you",
		name: "World4You",
		website: "https://www.world4you.com",
		description: "World4You operates homepage and domain solutions. World4Youu operates data centers in Austria and provides data protection.",
		icon: "World4You.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "world4you:dns:0",
				kind: "dns",
				valuePattern: new RegExp("ns\\d+\\.world4you\\.at"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "wp-engine",
		name: "WP Engine",
		website: "https://wpengine.com",
		description: "WP Engine is a website hosting provider.",
		icon: "wpengine.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "wp-engine:responseHeader:0",
				kind: "responseHeader",
				key: "X-Pass-Why",
				description: "Response header matches a known technology marker."
			},
			{
				id: "wp-engine:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("WP Engine"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "wp-engine:responseHeader:2",
				kind: "responseHeader",
				key: "X-WPE-Loopback-Upstream-Addr",
				description: "Response header matches a known technology marker."
			},
			{
				id: "wp-engine:responseHeader:3",
				kind: "responseHeader",
				key: "wpe-backend",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "wp-cloud",
		name: "wp.cloud",
		website: "https://wp.cloud/",
		description: "WordPress-first cloud hosting.",
		icon: "wp-cloud.png",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "wp-cloud:responseHeader:0",
				kind: "responseHeader",
				key: "host-header",
				valuePattern: new RegExp("wpcloud"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "xserver",
		name: "Xserver",
		website: "https://www.xserver.ne.jp",
		description: "Xserver engages in web hosting, web application and internet-related services.",
		icon: "Xserver.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "xserver:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.xserver\\.jp"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "yalinhost",
		name: "YalinHost",
		website: "https://yalinhost.com",
		description: "YalinHost is a web hosting service provider.",
		icon: "YalinHost.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "yalinhost:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.yalinhost\\.com"),
				recordType: "NS",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "yandex-cloud",
		name: "Yandex.Cloud",
		website: "https://cloud.yandex.com/en/",
		description: "Yandex.Cloud is a public cloud platform where companies can create and develop projects using Yandex's scalable computing power, advanced technologies, and infrastructure.",
		icon: "Yandex.Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "yandex-cloud-cdn",
		name: "Yandex.Cloud CDN",
		website: "https://cloud.yandex.com/en/services/cdn",
		description: "Yandex.Cloud CDN helps you streamline static content delivery for your web service.",
		icon: "Yandex.Cloud.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "yandex-cloud-cdn:dom:0",
				kind: "dom",
				selector: "[href*='storage.yandexcloud.net'], [src*='storage.yandexcloud.net']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"yandex-cloud"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "zeabur",
		name: "Zeabur",
		website: "https://zeabur.com",
		description: "Zeabur is a platform for running full stack apps and databases.",
		icon: "zeabur.svg",
		categories: [
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "zeabur:responseHeader:0",
				kind: "responseHeader",
				key: "X-Zeabur-Request-Id",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	}
] as const satisfies readonly TechnologyDefinition[];
