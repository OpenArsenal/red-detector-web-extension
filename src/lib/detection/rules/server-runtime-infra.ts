import type { TechnologyDefinition } from '../types';

export const serverRuntimeInfraTechnologyDefinitions = [
	{
		id: "8base",
		name: "8base",
		website: "https://8base.com",
		description: "8base is a low-code development platform for building and running enterprise-grade digital products including SaaS solutions, marketplaces and other go-to-market applications.",
		icon: "8base.svg",
		categories: [
			"server-runtime-infra",
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "8base:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.8base\\.com"),
				description: "Observed request URL matches a known technology marker.",
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
		id: "adminer",
		name: "Adminer",
		website: "https://www.adminer.org",
		description: "Adminer is a lightweight, web-based database management tool that supports multiple database systems and provides a simple interface for managing databases, tables, and running SQL queries.",
		icon: "adminer.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "adminer:html:0",
				kind: "html",
				pattern: new RegExp("Adminer<\\/a> <span class=\"version\">([\\d.]+)<\\/span>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "adminer:html:1",
				kind: "html",
				pattern: new RegExp("onclick=\"bodyClick\\(event\\);\" onload=\"verifyVersion\\('([\\d.]+)'\\);\">"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "adminer:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^adminer_key$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "adminer:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^adminer_sid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "adminer:header:4",
				kind: "header",
				key: "composed-by",
				valuePattern: new RegExp("adminer\\((\\d\\.)+\\)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "adminer:html:5",
				kind: "html",
				pattern: new RegExp("adminer<\\/a> <span class=\"version\">([\\d.]+)<\\/span>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "adminer:html:6",
				kind: "html",
				pattern: new RegExp("onclick=\"bodyclick\\(event\\);\" onload=\"verifyversion\\('([\\d.]+)'\\);\">"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:adminer:adminer:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "almalinux",
		name: "AlmaLinux",
		website: "https://almalinux.org",
		description: "AlmaLinux is an open-source, community-driven Linux operating system that fills the gap left by the discontinuation of the CentOS Linux stable release.",
		icon: "AlmaLinux.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "almalinux:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("AlmaLinux", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "almalinux:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("almalinux", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:o:almalinux:almalinux:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "amazon-alb",
		name: "Amazon ALB",
		website: "https://aws.amazon.com/elasticloadbalancing/",
		description: "Amazon Application Load Balancer (ALB) distributes incoming application traffic to increase availability and support content-based routing.",
		icon: "Amazon ELB.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "amazon-alb:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^AWSALB$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "amazon-alb:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^AWSALBCORS$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "amazon-alb:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^awsalb$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "amazon-alb:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^awsalbcors$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		implies: [
			"amazon-web-services",
		],
	},
	{
		id: "amazon-aurora",
		name: "Amazon Aurora",
		website: "https://aws.amazon.com/rds/aurora",
		description: "Amazon Aurora is a relational database service developed and offered by Amazon Web Services.",
		icon: "Amazon Aurora.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		implies: [
			"amazon-web-services",
		],
	},
	{
		id: "amazon-ec2",
		name: "Amazon EC2",
		website: "https://aws.amazon.com/ec2/",
		description: "Amazon Elastic Compute Cloud is a part of Amazon.com's cloud-computing platform, Amazon Web Services, that allows users to rent virtual computers on which to run their own computer applications.",
		icon: "Amazon EC2.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "amazon-ec2:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("\\(Amazon\\)", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-ec2:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("\\(amazon\\)", "i"),
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
		id: "amazon-elb",
		name: "Amazon ELB",
		website: "https://aws.amazon.com/elasticloadbalancing/",
		description: "AWS ELB is a network load balancer service provided by Amazon Web Services for distributing traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions.",
		icon: "Amazon ELB.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "amazon-elb:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^AWSELB$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "amazon-elb:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("awselb", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "amazon-elb:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^awselb$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "amazon-elb:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("awselb", "i"),
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
		id: "angie",
		name: "Angie",
		website: "https://angie.software/en/",
		description: "Angie is a drop-in replacement for the Nginx web server aiming to extend the functionality of the original version.",
		icon: "default.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "angie:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Angie(?:\\/([\\d\\.]+))?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "angie:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^angie(?:\\/([\\d\\.]+))?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"c",
			"perl",
		],
	},
	{
		id: "aolserver",
		name: "AOLserver",
		website: "https://aolserver.com",
		description: "AOLserver is an open-source web server and application server for dynamic websites.",
		icon: "AOLserver.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "aolserver:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("AOLserver\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "aolserver:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("aolserver\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:aol:aolserver:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "apache-apisix",
		name: "Apache APISIX",
		website: "https://apisix.apache.org",
		description: "Apache APISIX is an open-source, cloud-native API gateway developed by the Apache Software Foundation. It provides a scalable and high-performance solution for managing and securing API traffic.",
		icon: "Apache APISIX.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "apache-apisix:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^APISIX(?:\\/([\\d\\.]+))?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "apache-apisix:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^apisix(?:\\/([\\d\\.]+))?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apache:apisix:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "apache-http-server",
		name: "Apache HTTP Server",
		website: "https://httpd.apache.org/",
		description: "Apache HTTP Server is an open-source web server for serving static and dynamic websites.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "apache-http-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("(?:Apache(?:$|\\/([\\d.]+)|[^/-])|(?:^|\\b)HTTPD)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "apache-http-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("(?:apache(?:$|\\/([\\d.]+)|[^/-])|(?:^|\\b)httpd)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apache:http_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "apache-tomcat",
		name: "Apache Tomcat",
		website: "https://tomcat.apache.org",
		description: "Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and WebSocket technologies.",
		icon: "Apache Tomcat.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "apache-tomcat:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Apache-Coyote", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "apache-tomcat:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("\\bTomcat\\b(?:-([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "apache-tomcat:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^apache-coyote", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "apache-tomcat:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("\\btomcat\\b(?:-([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apache:tomcat:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "apache-traffic-server",
		name: "Apache Traffic Server",
		website: "https://trafficserver.apache.org/",
		description: "Apache Traffic Server is an open-source caching and proxying server that serves as an HTTP/1.1 and HTTP/2 reverse proxy with caching capabilities, load balancing, request routing, SSL termination, and support for advanced HTTP features.",
		icon: "Apache Traffic Server.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "apache-traffic-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("ATS\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "apache-traffic-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("ats\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apache:traffic_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "application-request-routing",
		name: "Application Request Routing",
		website: "https://www.iis.net/downloads/microsoft/application-request-routing",
		description: "Application Request Routing (ARR) is an extension to Internet Information Server (IIS), which enables an IIS server to function as a load balancer.",
		icon: "Microsoft.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "application-request-routing:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^ARR\\/([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "application-request-routing:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^arr\\/([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"iis",
		],
	},
	{
		id: "artifactory-web-server",
		name: "Artifactory Web Server",
		website: "https://jfrog.com/open-source/#os-arti",
		icon: "Artifactory.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "artifactory-web-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Artifactory(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "artifactory-web-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("artifactory(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:jfrog:artifactory:*:*:*:*:*:*:*:*",
		},
		implies: [
			"artifactory",
		],
	},
	{
		id: "azure-front-door",
		name: "Azure Front Door",
		website: "https://docs.microsoft.com/en-us/azure/frontdoor/",
		description: "Azure Front Door is a scalable and secure entry point for fast delivery of your global web applications.",
		icon: "Azure.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "azure-front-door:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^ASLBSA$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "azure-front-door:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^ASLBSACORS$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "azure-front-door:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^aslbsa$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "azure-front-door:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^aslbsacors$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		implies: [
			"azure",
		],
	},
	{
		id: "cactivecloud",
		name: "CactiveCloud",
		website: "https://cactivecloud.com",
		description: "CactiveCloud is a freemium based cloud provider and web server for static deployments of websites with HTML builds and serverless functions.",
		icon: "CactiveCloud.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "cactivecloud:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Cactive$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cactivecloud:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^cactive$", "i"),
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
		id: "caddy",
		name: "Caddy",
		website: "https://caddyserver.com",
		description: "Caddy is a Go-based web server known for its simplicity and automatic HTTPS features.",
		icon: "caddy.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "caddy:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Caddy$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "caddy:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Caddy", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "caddy:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^caddy$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:caddyserver:caddy:*:*:*:*:*:*:*:*",
		},
		implies: [
			"go",
		],
	},
	{
		id: "centminmod",
		name: "Centminmod",
		website: "https://centminmod.com",
		icon: "centminmod.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "centminmod:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("centminmod", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "centminmod:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("centminmod", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"centos",
			"nginx",
			"php",
		],
	},
	{
		id: "centos",
		name: "CentOS",
		website: "https://centos.org",
		description: "CentOS is a Linux distribution that provides a free, community-supported computing platform functionally compatible with its upstream source, Red Hat Enterprise Linux (RHEL).",
		icon: "CentOS.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "centos:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("CentOS", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "centos:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("CentOS", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "centos:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("centos", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "centos:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("centos", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:centos:centos:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "cherokee",
		name: "Cherokee",
		website: "https://www.cherokee-project.com",
		icon: "Cherokee.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "cherokee:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Cherokee(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cherokee:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^cherokee(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:cherokee-project:cherokee:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "cherrypy",
		name: "CherryPy",
		website: "https://cherrypy.org/",
		description: "CherryPy is an object-oriented web application framework using the Python programming language.",
		icon: "CherryPy.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "cherrypy:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("CherryPy(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cherrypy:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("cherrypy(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:cherrypy:cherrypy:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "claris-filemaker",
		name: "Claris FileMaker",
		website: "https://www.claris.com/filemaker",
		description: "Claris FileMaker is a cross-platform relational database application from Claris International.",
		icon: "Claris.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "claris-filemaker:url:0",
				kind: "url",
				pattern: new RegExp("\\.[\\w]+\\/fmi\\/webd\\/"),
				description: "Page URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
		requires: [
			"application-request-routing",
			"java",
			"vaadin",
		],
	},
	{
		id: "cloudera",
		name: "Cloudera",
		website: "https://www.cloudera.com",
		description: "Cloudera is a software platform for data engineering, data warehousing, machine learning and analytics that runs in the cloud or on-premises.",
		icon: "Cloudera.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "cloudera:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("cloudera", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cloudera:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("cloudera", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "couchdb",
		name: "CouchDB",
		website: "https://couchdb.apache.org",
		description: "Apache CouchDB is an open-source document database that stores data as JSON documents.",
		icon: "CouchDB.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "couchdb:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("CouchDB\\/([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "couchdb:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("couchdb\\/([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:apache:couchdb:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "cowboy",
		name: "Cowboy",
		website: "https://github.com/ninenines/cowboy",
		description: "Cowboy is a small, fast, modular HTTP server written in Erlang.",
		icon: "Cowboy.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "cowboy:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Cowboy$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cowboy:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^cowboy$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"erlang",
		],
	},
	{
		id: "daphne",
		name: "Daphne",
		website: "https://github.com/django/daphne",
		description: "Daphne is an ASGI server used with Django and Channels.",
		icon: "daphne.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "daphne:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Daphne", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "daphne:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("daphne", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"python",
			"twistedweb",
			"zope",
		],
	},
	{
		id: "darwin",
		name: "Darwin",
		website: "https://opensource.apple.com",
		description: "Darwin is the open-source operating system from Apple that forms the basis for macOS.",
		icon: "Apple.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "darwin:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Darwin", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "darwin:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Darwin", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "darwin:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("darwin", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "darwin:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("darwin", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "debian",
		name: "Debian",
		website: "https://debian.org",
		description: "Debian is a Linux software which is a free open-source software.",
		icon: "Debian.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "debian:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Debian", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "debian:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("(?:Debian|dotdeb|(potato|woody|sarge|etch|lenny|squeeze|wheezy|jessie|stretch|buster|sid))", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "debian:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("debian", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "debian:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("(?:debian|dotdeb|(potato|woody|sarge|etch|lenny|squeeze|wheezy|jessie|stretch|buster|sid))", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:debian:debian_linux:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "deno",
		name: "Deno",
		website: "https://deno.land",
		description: "A modern runtime for JavaScript and TypeScript.",
		icon: "deno.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:deno:deno:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "dimensions-ai",
		name: "Dimensions AI",
		website: "https://www.dimensions.ai",
		description: "Dimensions AI is an advanced research database linking grants, publications, datasets, clinical trials, patents, and policy documents to support efficient translation from idea to impact.",
		icon: "Dimensions.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "dimensions-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dimensions\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dimensions-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "__dimensions_badge_config_loaded__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dimensions-ai:jsGlobal:2",
				kind: "jsGlobal",
				property: "__dimensions_badge_server",
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
		id: "docker",
		name: "Docker",
		website: "https://www.docker.com/",
		description: "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.",
		icon: "Docker.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "docker:html:0",
				kind: "html",
				pattern: new RegExp("<!-- This comment is expected by the docker HEALTHCHECK  -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "docker:html:1",
				kind: "html",
				pattern: new RegExp("<!-- this comment is expected by the docker healthcheck  -->"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:docker:engine:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "elog-http",
		name: "ELOG HTTP",
		website: "https://midas.psi.ch/elog",
		icon: "ELOG.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "elog-http:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("ELOG HTTP ?([\\d.-]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "elog-http:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("elog http ?([\\d.-]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"elog",
		],
	},
	{
		id: "embedthis-appweb",
		name: "EmbedThis Appweb",
		website: "https://embedthis.com/appweb",
		description: "Appweb is an embeddable web server for applications and devices.",
		icon: "Embedthis.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "embedthis-appweb:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Mbedthis-Appweb(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "embedthis-appweb:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mbedthis-appweb(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:embedthis:appweb:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "engintron",
		name: "Engintron",
		website: "https://github.com/engintron/engintron",
		description: "Engintron is a plugin that integrates Nginx to cPanel/WHM server.",
		icon: "engintron.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "engintron:header:0",
				kind: "header",
				key: "X-Server-Powered-By",
				valuePattern: new RegExp("^Engintron$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "engintron:header:1",
				kind: "header",
				key: "x-server-powered-by",
				valuePattern: new RegExp("^engintron$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		requires: [
			"nginx",
		],
	},
	{
		id: "envoy",
		name: "Envoy",
		website: "https://www.envoyproxy.io/",
		description: "Envoy is an open-source edge and service proxy, designed for cloud-native applications.",
		icon: "Envoy.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "envoy:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^envoy$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "envoy:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^envoy$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:envoyproxy:envoy:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "ezproxy",
		name: "EZproxy",
		website: "https://www.oclc.org/en/ezproxy.html",
		description: "EZproxy is a web server and a reverse proxy that is usually used by libraries as a reverse proxy in front of electronic educational resources databases (e.g.: Scopus, PubMed, or Web of Science) in order to provide authentication and protect privacy.",
		icon: "default.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "ezproxy:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^EZproxy$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ezproxy:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^ezproxy$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"poa",
				"recurring",
			],
		},
		excludes: [
			"apache-http-server",
			"nginx",
		],
	},
	{
		id: "f5-bigip",
		name: "F5 BigIP",
		website: "https://www.f5.com/products/big-ip-services",
		description: "F5's BIG-IP is a family of products covering software and hardware designed around application availability, access control, and security solutions.",
		icon: "F5.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "f5-bigip:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^F5_HT_shrinked$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^F5_ST$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^F5_fullWT$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^LastMRH_Session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^MRHSHint$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^MRHSequence$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^MRHSession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^TIN$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:header:8",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^big-?ip$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:9",
				kind: "cookie",
				keyPattern: new RegExp("^f5_fullwt$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:10",
				kind: "cookie",
				keyPattern: new RegExp("^f5_ht_shrinked$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:11",
				kind: "cookie",
				keyPattern: new RegExp("^f5_st$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:12",
				kind: "cookie",
				keyPattern: new RegExp("^lastmrh_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:13",
				kind: "cookie",
				keyPattern: new RegExp("^mrhsequence$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:14",
				kind: "cookie",
				keyPattern: new RegExp("^mrhsession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:15",
				kind: "cookie",
				keyPattern: new RegExp("^mrhshint$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "f5-bigip:cookie:16",
				kind: "cookie",
				keyPattern: new RegExp("^tin$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:f5:big-ip:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "fastpixel",
		name: "FastPixel",
		website: "https://fastpixel.io",
		description: "FastPixel is a web performance and security service that provides caching, a content delivery network, web application firewall, and image optimization.",
		icon: "FastPixel.svg",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "fastpixel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.fastpixel\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fastpixel:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]+href=\"https:\\/\\/cdn\\.fastpixel\\.io"),
				description: "HTML contains a known technology signature.",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "fedora",
		name: "Fedora",
		website: "https://fedoraproject.org",
		description: "Fedora is a free open-source Linux-based operating system.",
		icon: "Fedora.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "fedora:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Fedora", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fedora:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("fedora", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:fedoraproject:fedora:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "ferron",
		name: "Ferron",
		website: "https://ferron.sh",
		description: "Ferron is a web server offering automatic TLS certificate management, configuration, and security for online operations.",
		icon: "Ferron.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "ferron:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Ferron$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ferron:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^ferron$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "firebase",
		name: "Firebase",
		website: "https://firebase.google.com",
		description: "Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.",
		icon: "Firebase.svg",
		categories: [
			"server-runtime-infra",
			"developer-tooling",
		],
		rules: [
			{
				id: "firebase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(?:([\\d.]+)\\/)?firebase(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "firebase:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/firebasejs\\/([\\d.]+)\\/firebase"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "firebase:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("\\.gstatic\\.com\\/firebasejs\\/([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "firebase:jsGlobal:3",
				kind: "jsGlobal",
				property: "firebase.SDK_VERSION",
				valuePattern: new RegExp("([\\d.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "firebase:header:4",
				kind: "header",
				key: "vary",
				valuePattern: new RegExp("x-fh-requested-host", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "firebase:scriptContent:5",
				kind: "scriptContent",
				pattern: new RegExp("firebase(?:Config|io\\.com)"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "firebase:requestUrl:6",
				kind: "requestUrl",
				pattern: new RegExp("fire(?:base|store)\\.googleapis\\.com|\\.firebaseio\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "firebase:dom:7",
				kind: "dom",
				selector: "iframe[src*='.firebaseapp.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "firebase:scriptContent:8",
				kind: "scriptContent",
				pattern: new RegExp("firebase(?:config|io\\.com)"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "firebase:scriptContent:9",
				kind: "scriptContent",
				pattern: new RegExp("__FIREBASE_DEFAULTS__|FirebaseError"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"payg",
			],
			cpe: "cpe:2.3:a:google:firebase_cloud_messaging:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "freebsd",
		name: "FreeBSD",
		website: "https://freebsd.org",
		description: "FreeBSD is a free and open-source Unix-like operating system.",
		icon: "FreeBSD.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "freebsd:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("FreeBSD(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "freebsd:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("freebsd(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:freebsd:freebsd:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "gentoo",
		name: "Gentoo",
		website: "https://www.gentoo.org",
		description: "Gentoo is a free operating system based on Linux.",
		icon: "Gentoo.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "gentoo:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("gentoo", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "gentoo:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("gentoo", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:gentoo:linux:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "glassfish",
		name: "GlassFish",
		website: "https://glassfish.java.net",
		icon: "GlassFish.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "glassfish:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("GlassFish(?: Server)?(?: Open Source Edition)?(?: ?\\/?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "glassfish:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("glassfish(?: server)?(?: open source edition)?(?: ?\\/?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:oracle:glassfish_server:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "goahead",
		name: "GoAhead",
		website: "https://embedthis.com/products/goahead/index.html",
		icon: "GoAhead.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "goahead:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("GoAhead", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "goahead:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("goahead", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:embedthis:goahead:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "google-app-engine",
		name: "Google App Engine",
		website: "https://cloud.google.com/appengine",
		icon: "Google App Engine.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
	},
	{
		id: "google-cloud-load-balancing",
		name: "Google Cloud Load Balancing",
		website: "https://cloud.google.com/load-balancing",
		description: "Google Cloud Load Balancing is a scalable, fully managed global load balancing service using Google Frontend.",
		icon: "Google Cloud.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "google-cloud-load-balancing:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Google Frontend$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "google-cloud-load-balancing:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^google frontend$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"poa",
			],
		},
		implies: [
			"google-cloud",
		],
	},
	{
		id: "google-pagespeed",
		name: "Google PageSpeed",
		website: "https://developers.google.com/speed/pagespeed/mod",
		description: "Google PageSpeed is a family of tools designed to help websites performance optimisations.",
		icon: "Google PageSpeed.svg",
		categories: [
			"server-runtime-infra",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "google-pagespeed:header:0",
				kind: "header",
				key: "X-Mod-Pagespeed",
				valuePattern: new RegExp("([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "google-pagespeed:header:1",
				kind: "header",
				key: "X-Page-Speed",
				valuePattern: new RegExp("(.+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "google-pagespeed:header:2",
				kind: "header",
				key: "x-mod-pagespeed",
				valuePattern: new RegExp("([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "google-pagespeed:header:3",
				kind: "header",
				key: "x-page-speed",
				valuePattern: new RegExp("(.+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "google-web-server",
		name: "Google Web Server",
		website: "https://en.wikipedia.org/wiki/Google_Web_Server",
		icon: "Google.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "google-web-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("gws", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "google-web-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("gws", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:google:web_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "gunicorn",
		name: "gunicorn",
		website: "https://gunicorn.org",
		icon: "gunicorn.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "gunicorn:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("gunicorn(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "gunicorn:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("gunicorn(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:gunicorn:gunicorn:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "h2o",
		name: "H2O",
		website: "https://github.com/h2o/h2o",
		description: "H2O is a fast and secure HTTP/2 server written in C by Kazuho Oku.",
		icon: "default.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "h2o:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^h2o_casper$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "h2o:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^h2o(?:\\/)?([\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "h2o:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^h2o(?:\\/)?([\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"c",
			"http-2",
		],
	},
	{
		id: "harbor",
		name: "Harbor",
		website: "https://goharbor.io",
		description: "Harbor is an open-source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted.",
		icon: "Harbor.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "harbor:dom:0",
				kind: "dom",
				selector: "harbor-app",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:linuxfoundation:harbor:*:*:*:*:*:*:*:*",
		},
		implies: [
			"go",
		],
	},
	{
		id: "hcl-domino",
		name: "HCL Domino",
		website: "https://www.hcltechsw.com/domino",
		description: "HCL Domino, formerly called IBM Domino (1995) and Lotus Domino (1989), is an enterprise server application development platform.",
		icon: "HCL Domino.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "hcl-domino:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Lotus-Domino$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hcl-domino:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^lotus-domino$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
			cpe: "cpe:2.3:a:ibm:lotus_domino:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "hhvm",
		name: "HHVM",
		website: "https://hhvm.com",
		icon: "HHVM.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "hhvm:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("HHVM\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hhvm:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("hhvm\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:facebook:hhvm:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php-confidence-75",
		],
	},
	{
		id: "hiawatha",
		name: "Hiawatha",
		website: "https://gitlab.com/hsleisink/hiawatha",
		description: "Hiawatha is a secure, lightweight web server developed by Hugo Leisink, designed for ease of use and advanced security features such as protection against SQL injections, XSS, and CSRF attacks.",
		icon: "Hiawatha.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "hiawatha:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Hiawatha v([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hiawatha:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("hiawatha v([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:hiawatha-webserver:hiawatha:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "hirschmann-hios",
		name: "Hirschmann HiOS",
		website: "https://hirschmann.com/",
		description: "Hirschmann HiOS is an operating system for industrial network equipment.",
		icon: "hirschmann_OS.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "hirschmann-hios:html:0",
				kind: "html",
				pattern: new RegExp("(?:HiSecOS-|HiOS-.+-)\\d+\\.\\d+\\.\\d+", "i"),
				confidence: 95,
				description: "Document HTML contains a Hirschmann HiOS version marker.",
			},
			{
				id: "hirschmann-hios:text:1",
				kind: "text",
				pattern: new RegExp("(HiSecOS-|HiOS-.+-)(\\d+\\.\\d+\\.\\d+)"),
				version: {
					source: "match",
					group: 2,
				},
				description: "Page text contains a known technology marker.",
			},

		],
		metadata: {
			cpe: "cpe:2.3:o:belden:hirschmann_hios:*:*:*:*:*:*:*:*",
		},
		requires: [
			"google-web-toolkit",
			"java",
		],
	},
	{
		id: "hp-compact-server",
		name: "HP Compact Server",
		website: "https://hp.com",
		icon: "HP.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "hp-compact-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("HP_Compact_Server(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hp-compact-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("hp_compact_server(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "hp-ilo",
		name: "HP iLO",
		website: "https://hp.com",
		description: "HP iLO is a tool that provides multiple ways to configure, update, monitor, and run servers remotely.",
		icon: "HP.svg",
		categories: [
			"server-runtime-infra",
			"network-hardware",
		],
		rules: [
			{
				id: "hp-ilo:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("HP-iLO-Server(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hp-ilo:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("hp-ilo-server(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:h:hp:integrated_lights-out:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "hydra-shield",
		name: "Hydra-Shield",
		website: "https://hydra-shield.fr",
		description: "Hydra-Shield is an anti-DDoS protection reverse proxy that filters and mitigates malicious traffic to safeguard servers from distributed denial-of-service attacks.",
		icon: "Hydra-Shield.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "hydra-shield:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^Hydra-Shield\\sV([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hydra-shield:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^hydra-shield\\sv([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "hypercorn",
		name: "Hypercorn",
		website: "https://pgjones.gitlab.io/hypercorn/",
		description: "Hypercorn is an ASGI web server that supports HTTP/1, HTTP/2, WebSockets, ASGI/2, and ASGI/3 specifications, and can utilize asyncio, uvloop, or trio for asynchronous operations.",
		icon: "hypercorn.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "hypercorn:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("hypercorn", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "hypercorn:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("hypercorn", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"python",
		],
	},
	{
		id: "ibm-datapower",
		name: "IBM DataPower",
		website: "https://www.ibm.com/products/datapower-gateway",
		description: "IBM DataPower Gateway is a single multi-channel gateway designed to help provide security, control, integration and optimized access to a full range of mobile, web, application programming interface (API), service-oriented architecture (SOA), B2B and cloud workloads.",
		icon: "DataPower.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:ibm:datapower_gateway:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "ibm-http-server",
		name: "IBM HTTP Server",
		website: "https://ibm.com/software/webservers/httpservers",
		icon: "IBM.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "ibm-http-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("IBM_HTTP_Server(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ibm-http-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("ibm_http_server(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:ibm:http_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "iis",
		name: "IIS",
		website: "https://www.iis.net",
		description: "Internet Information Services (IIS) is an extensible web server software created by Microsoft for use with the Windows NT family.",
		icon: "Microsoft.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "iis:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^(?:Microsoft-)?IIS(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "iis:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^(?:microsoft-)?iis(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:microsoft:internet_information_server:*:*:*:*:*:*:*:*",
		},
		implies: [
			"windows-server",
		],
	},
	{
		id: "indy",
		name: "Indy",
		website: "https://indyproject.org",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "indy:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Indy(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "indy:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("indy(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "intel-active-management-technology",
		name: "Intel Active Management Technology",
		website: "https://intel.com",
		description: "Intel Active Management Technology (AMT) is a proprietary remote management and control system for personal computers with Intel CPUs.",
		icon: "Intel Active Management Technology.png",
		categories: [
			"server-runtime-infra",
			"network-hardware",
		],
		rules: [
			{
				id: "intel-active-management-technology:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Intel\\(R\\) Active Management Technology(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "intel-active-management-technology:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("intel\\(r\\) active management technology(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:intel:active_management_technology:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "jboss-application-server",
		name: "JBoss Application Server",
		website: "https://jboss.org/jbossas.html",
		icon: "JBoss Application Server.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "jboss-application-server:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("JBoss(?:-([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "jboss-application-server:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("jboss(?:-([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:redhat:jboss_application_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "jboss-web",
		name: "JBoss Web",
		website: "https://jboss.org/jbossweb",
		icon: "JBoss Web.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "jboss-web:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("JBossWeb(?:-([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "jboss-web:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("jbossweb(?:-([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:redhat:jbossweb:*:*:*:*:*:*:*:*",
		},
		implies: [
			"jboss-application-server",
		],
		excludes: [
			"apache-tomcat",
		],
	},
	{
		id: "jetty",
		name: "Jetty",
		website: "https://www.eclipse.org/jetty",
		description: "Jetty is an open-source web server and servlet container known for its scalability and efficiency, supporting protocols like HTTP and WebSocket for various applications from development tools to cloud services.",
		icon: "Jetty.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "jetty:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Jetty(?:\\(([\\d\\.]*\\d+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "jetty:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("jetty(?:\\(([\\d\\.]*\\d+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:eclipse:jetty:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "kangle",
		name: "Kangle",
		website: "https://kangle.org",
		description: "Kangle is an open-source web server and reverse proxy software widely used in Chinese hosting environments for HTTP caching and virtual hosting.",
		icon: "Kangle.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "kangle:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^kangle(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "kangle:header:1",
				kind: "header",
				key: "x-cache",
				valuePattern: new RegExp("^MISS from (?:[\\w& ]+ )?kangle\\b", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "kangle:header:2",
				kind: "header",
				key: "x-cache",
				valuePattern: new RegExp("^miss from (?:[\\w& ]+ )?kangle\\b", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "kestrel",
		name: "Kestrel",
		website: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel",
		icon: "kestrel.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "kestrel:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Kestrel", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "kestrel:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^kestrel", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"microsoft-asp-net",
		],
	},
	{
		id: "knack",
		name: "Knack",
		website: "https://www.knack.com",
		description: "Knack is a tool designed to build online databases and web applications, providing a platform for creating custom applications without extensive programming knowledge.",
		icon: "Knack.svg",
		categories: [
			"server-runtime-infra",
			"framework",
		],
		rules: [
			{
				id: "knack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("loader\\.knack\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "knack:jsGlobal:1",
				kind: "jsGlobal",
				property: "Knack",
				description: "Page-owned global matches a known technology marker.",
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
		id: "kong",
		name: "Kong",
		website: "https://konghq.com",
		description: "Kong is an open-source API gateway and platform that acts as middleware between compute clients and the API-centric applications.",
		icon: "Kong.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "kong:header:0",
				kind: "header",
				key: "via",
				valuePattern: new RegExp("^kong\\/([\\d\\.]+)(?:.+)?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
				"payg",
			],
			cpe: "cpe:2.3:a:konghq:kong:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "libwww-perl-daemon",
		name: "libwww-perl-daemon",
		website: "https://metacpan.org/pod/HTTP::Daemon",
		icon: "libwww-perl-daemon.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "libwww-perl-daemon:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("libwww-perl-daemon(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "libwww-perl-daemon:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("libwww-perl-daemon(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"perl",
		],
	},
	{
		id: "lighttpd",
		name: "lighttpd",
		website: "https://www.lighttpd.net",
		description: "Lighttpd is an open-source web server optimised for speed-critical environment.",
		icon: "lighttpd.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "lighttpd:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("(?:L|l)ight(?:y)?(?:tpd)?(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "lighttpd:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("(?:l|l)ight(?:y)?(?:tpd)?(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:lighttpd:lighttpd:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "litespeed",
		name: "LiteSpeed",
		website: "https://litespeedtech.com",
		description: "LiteSpeed is a high-scalability web server.",
		icon: "LiteSpeed.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "litespeed:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^LiteSpeed$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "litespeed:header:1",
				kind: "header",
				key: "X-Turbo-Charged-By",
				valuePattern: new RegExp("^LiteSpeed$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "litespeed:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^litespeed$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:litespeedtech:litespeed_web_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "litespeed-cache",
		name: "LiteSpeed Cache",
		website: "https://wordpress.org/plugins/litespeed-cache/",
		description: "LiteSpeed Cache is an all-in-one site acceleration plugin for WordPress.",
		icon: "litespeed-cache.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "litespeed-cache:header:0",
				kind: "header",
				key: "x-turbo-charged-by",
				valuePattern: new RegExp("LiteSpeed", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "litespeed-cache:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/litespeed-cache\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "litespeed-cache:jsGlobal:2",
				kind: "jsGlobal",
				property: "litespeed_docref",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "litespeed-cache:header:3",
				kind: "header",
				key: "x-turbo-charged-by",
				valuePattern: new RegExp("litespeed", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:litespeedtech:litespeed_cache:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"litespeed",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "llamalink-cloud-server",
		name: "LlamaLink Cloud Server",
		website: "https://llamalink.net",
		description: "LlamaLink Cloud Server is a custom dynamic web server based on Nginx Web server that load balance user traffic between hosting nodes and allows fast and cached experience to web and app users.",
		icon: "LlamaLink.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "llamalink-cloud-server:header:0",
				kind: "header",
				key: "Serverversion",
				valuePattern: new RegExp("^LlamaLink", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "llamalink-cloud-server:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^LlamaLink", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "llamalink-cloud-server:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^llamalink", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
		implies: [
			"nginx",
		],
	},
	{
		id: "lucene",
		name: "Lucene",
		website: "https://lucene.apache.org/core/",
		description: "Lucene is a free and open-source search engine software library.",
		icon: "Lucene.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apache:lucene:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "mariadb",
		name: "MariaDB",
		website: "https://mariadb.org",
		description: "MariaDB is an open-source relational database management system compatible with MySQL.",
		icon: "mariadb.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:mariadb_project:mariadb:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "matori-net",
		name: "MATORI.NET",
		website: "https://matori.net",
		description: "MATORI.NET is a fully managed reverse proxy.",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "matori-net:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("MATORI.NET", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "matori-net:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("matori.net", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"openresty",
		],
	},
	{
		id: "microsoft-httpapi",
		name: "Microsoft HTTPAPI",
		website: "https://learn.microsoft.com/en-us/windows/win32/http/http-api-start-page",
		description: "Microsoft HTTPAPI is a kernel-mode HTTP driver in the Windows operating system responsible for handling HTTP requests and responses with efficiency, scalability, and security.",
		icon: "Microsoft.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "microsoft-httpapi:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Microsoft-HTTPAPI(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "microsoft-httpapi:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("microsoft-httpapi(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			oss: false,
		},
	},
	{
		id: "mini-httpd",
		name: "mini_httpd",
		website: "https://acme.com/software/mini_httpd",
		icon: "mini_httpd.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mini-httpd:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mini_httpd(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mini-httpd:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mini_httpd(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:acme:mini_httpd:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "miniserv",
		name: "MiniServ",
		website: "https://github.com/webmin/webmin/blob/master/miniserv.pl",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "miniserv:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("MiniServ\\/([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "miniserv:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("miniserv\\/([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"webmin",
		],
	},
	{
		id: "mochiweb",
		name: "MochiWeb",
		website: "https://github.com/mochi/mochiweb",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mochiweb:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("MochiWeb(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mochiweb:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mochiweb(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:mochiweb_project:mochiweb:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "mod-auth-pam",
		name: "mod_auth_pam",
		website: "https://pam.sourceforge.net/mod_auth_pam",
		description: "Mod_auth_pam is used to configure ways for authenticating users.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-auth-pam:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_auth_pam(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-auth-pam:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_auth_pam(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"apache-http-server",
		],
	},
	{
		id: "mod-dav",
		name: "mod_dav",
		website: "https://webdav.org/mod_dav",
		description: "Mod_dav is an Apache module to provide WebDAV capabilities for your Apache web server. It is an open-source module, provided under an Apache-style license.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-dav:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("\\b(?:mod_)?DAV\\b(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-dav:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("\\b(?:mod_)?dav\\b(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"apache-http-server",
		],
	},
	{
		id: "mod-fastcgi",
		name: "mod_fastcgi",
		website: "https://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html",
		description: "Mod_fcgid is a high performance alternative to mod_cgi or mod_cgid, which starts a sufficient number instances of the CGI program to handle concurrent requests, and these programs remain running to handle further incoming requests.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-fastcgi:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_fastcgi(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-fastcgi:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_fastcgi(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"apache-http-server",
		],
	},
	{
		id: "mod-jk",
		name: "mod_jk",
		website: "https://tomcat.apache.org/tomcat-3.3-doc/mod_jk-howto.html",
		description: "Mod_jk is an Apache module used to connect the Tomcat servlet container with web servers such as Apache, iPlanet, Sun ONE (formerly Netscape) and even IIS using the Apache JServ Protocol. A web server waits for client HTTP requests.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-jk:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_jk(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-jk:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_jk(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:apache:mod_jk:*:*:*:*:*:*:*:*",
		},
		implies: [
			"apache-http-server",
			"apache-tomcat",
		],
	},
	{
		id: "mod-perl",
		name: "mod_perl",
		website: "https://perl.apache.org",
		description: "Mod_perl is an optional module for the Apache HTTP server. It embeds a Perl interpreter into the Apache server. In addition to allowing Apache modules to be written in the Perl programming language, it allows the Apache web server to be dynamically configured by Perl programs.",
		icon: "mod_perl.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-perl:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_perl(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-perl:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_perl(?:\\/([\\d\\.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:apache:mod_perl:*:*:*:*:*:*:*:*",
		},
		implies: [
			"apache-http-server",
			"perl",
		],
	},
	{
		id: "mod-python",
		name: "mod_python",
		website: "https://www.modpython.org",
		description: "Mod_python is an Apache HTTP Server module that integrates the Python programming language with the server. It is intended to provide a Python language binding for the Apache HTTP Server.",
		icon: "mod_python.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-python:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_python(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-python:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_python(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:apache:mod_python:*:*:*:*:*:*:*:*",
		},
		implies: [
			"apache-http-server",
			"python",
		],
	},
	{
		id: "mod-rack",
		name: "mod_rack",
		website: "https://phusionpassenger.com",
		description: "Mod_rack is a free web server and application server with support for Ruby, Python and Node.js.",
		icon: "Phusion Passenger.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-rack:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_rack(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-rack:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("mod_rack(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-rack:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_rack(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-rack:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("mod_rack(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"apache-http-server",
			"ruby-on-rails-confidence-50",
		],
	},
	{
		id: "mod-rails",
		name: "mod_rails",
		website: "https://phusionpassenger.com",
		description: "Mod_rails is a free web server and application server with support for Ruby, Python and Node.js.",
		icon: "Phusion Passenger.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-rails:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_rails(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-rails:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("mod_rails(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-rails:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_rails(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-rails:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("mod_rails(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"apache-http-server",
			"ruby-on-rails-confidence-50",
		],
	},
	{
		id: "mod-ssl",
		name: "mod_ssl",
		website: "https://modssl.org",
		description: "mod_ssl is an optional module for the Apache HTTP Server. It provides strong cryptography for the Apache web server via the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) cryptographic protocols by the help of the open-source SSL/TLS toolkit OpenSSL.",
		icon: "mod_ssl.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-ssl:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_ssl(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-ssl:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_ssl(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:modssl:mod_ssl:*:*:*:*:*:*:*:*",
		},
		implies: [
			"apache-http-server",
		],
	},
	{
		id: "mod-wsgi",
		name: "mod_wsgi",
		website: "https://code.google.com/p/modwsgi",
		description: "mod_wsgi is an Apache HTTP Server module that provides a WSGI compliant interface for hosting Python based web applications under Apache.",
		icon: "mod_wsgi.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mod-wsgi:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("mod_wsgi(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-wsgi:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("mod_wsgi(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-wsgi:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mod_wsgi(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mod-wsgi:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("mod_wsgi(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:modwsgi:mod_wsgi:*:*:*:*:*:*:*:*",
		},
		implies: [
			"apache-http-server",
			"python-confidence-50",
		],
	},
	{
		id: "mongodb",
		name: "MongoDB",
		website: "https://www.mongodb.org",
		description: "MongoDB is a document-oriented NoSQL database used for high volume data storage.",
		icon: "MongoDB.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:mongodb:mongodb:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "mongrel",
		name: "Mongrel",
		website: "https://mongrel2.org",
		icon: "Mongrel.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "mongrel:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Mongrel", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mongrel:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mongrel", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:zed_shaw:mongrel:*:*:*:*:*:*:*:*",
		},
		implies: [
			"ruby",
		],
	},
	{
		id: "monkey-http-server",
		name: "Monkey HTTP Server",
		website: "https://monkey-project.com",
		icon: "Monkey HTTP Server.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "monkey-http-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Monkey\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "monkey-http-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("monkey\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "mysql",
		name: "MySQL",
		website: "https://mysql.com",
		description: "MySQL is an open-source relational database management system.",
		icon: "MySQL.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:mysql:mysql:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "nghttpx-http-2-proxy",
		name: "nghttpx - HTTP/2 proxy",
		website: "https://nghttp2.org",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "nghttpx-http-2-proxy:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("nghttpx nghttp2\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "nghttpx-http-2-proxy:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("nghttpx nghttp2\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "nginx",
		name: "Nginx",
		website: "https://nginx.org/en",
		description: "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
		icon: "Nginx.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "nginx:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("nginx(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "nginx:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("nginx(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:f5:nginx:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "nitropack",
		name: "NitroPack",
		website: "https://nitropack.io/",
		description: "NitroPack creates optimised HTML cache for fast page loading experience.",
		icon: "NitroPack.svg",
		categories: [
			"server-runtime-infra",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "nitropack:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("NitroPack", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "nitropack:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("nitropack", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
	},
	{
		id: "openbsd-httpd",
		name: "OpenBSD httpd",
		website: "https://man.openbsd.org/httpd.8",
		icon: "OpenBSD httpd.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "openbsd-httpd:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^OpenBSD httpd", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "openbsd-httpd:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^openbsd httpd", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:openbsd:openbsd:*:*:*:*:*:*:*:*",
		},
		excludes: [
			"apache-http-server",
		],
	},
	{
		id: "opengse",
		name: "OpenGSE",
		website: "https://code.google.com/p/opengse",
		description: "OpenGSE is a test suite used for testing servlet compliance. It is deployed by using WAR files that are deployed on the server engine.",
		icon: "Google.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "opengse:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("GSE", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "opengse:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("gse", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"java",
		],
	},
	{
		id: "openresty",
		name: "OpenResty",
		website: "https://openresty.org",
		description: "OpenResty is a web platform based on nginx which can run Lua scripts using its LuaJIT engine.",
		icon: "OpenResty.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "openresty:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("openresty(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "openresty:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("openresty(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:openresty:openresty:*:*:*:*:*:*:*:*",
		},
		implies: [
			"nginx",
		],
	},
	{
		id: "openssl",
		name: "OpenSSL",
		website: "https://openssl.org",
		description: "OpenSSL is a software library for applications that secure communications over computer networks against eavesdropping or need to identify the party at the other end.",
		icon: "OpenSSL.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "openssl:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("OpenSSL(?:\\/([\\d.]+[a-z]?))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "openssl:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("openssl(?:\\/([\\d.]+[a-z]?))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:openssl:openssl:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "oracle-application-server",
		name: "Oracle Application Server",
		website: "https://www.oracle.com/technetwork/middleware/ias/overview/index.html",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "oracle-application-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Oracle[- ]Application[- ]Server(?: Containers for J2EE)?(?:[- ](\\d[\\da-z./]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "oracle-application-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("oracle[- ]application[- ]server(?: containers for j2ee)?(?:[- ](\\d[\\da-z./]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:oracle:application_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "oracle-http-server",
		name: "Oracle HTTP Server",
		website: "https://oracle.com",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "oracle-http-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Oracle-HTTP-Server(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "oracle-http-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("oracle-http-server(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:oracle:http_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "oracle-linux",
		name: "Oracle Linux",
		website: "https://www.oracle.com/linux/",
		description: "Oracle Linux is an enterprise Linux distribution by Oracle, designed for cloud and on-premises workloads.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "oracle-linux:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("\\(Oracle Linux(?: Server)?\\)", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:o:oracle:linux:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "oracle-web-cache",
		name: "Oracle Web Cache",
		website: "https://oracle.com",
		description: "Oracle Web Cache is a browser and content management server, which improves the performance of web sites.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "oracle-web-cache:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Oracle(?:AS)?[- ]Web[- ]Cache(?:[- /]([\\da-z./]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "oracle-web-cache:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("oracle(?:as)?[- ]web[- ]cache(?:[- /]([\\da-z./]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:oracle:web_cache:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "oracle-weblogic-server",
		name: "Oracle WebLogic Server",
		website: "https://www.oracle.com/java/weblogic/",
		description: "Oracle WebLogic Server is a Java-based application server that provides a platform for developing, deploying, and running enterprise-level Java applications.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			pricing: [
				"poa",
			],
			cpe: "cpe:2.3:a:bea:weblogic_server:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "percona",
		name: "Percona",
		website: "https://www.percona.com",
		description: "Percona server is an opensource, fully compatible, enhanced drop-in replacement for MySQL, providing superior performance, scalability, and instrumentation.",
		icon: "percona.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
	},
	{
		id: "phpmyadmin",
		name: "phpMyAdmin",
		website: "https://www.phpmyadmin.net",
		description: "PhpMyAdmin is a free and open-source administration tool for MySQL and MariaDB.",
		icon: "phpMyAdmin.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "phpmyadmin:html:0",
				kind: "html",
				pattern: new RegExp("!\\[CDATA\\[[^<]*PMA_VERSION:\\\"([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpmyadmin:html:1",
				kind: "html",
				pattern: new RegExp("(?: \\| phpMyAdmin ([\\d.]+)<\\/title>|PMA_sendHeaderLocation\\(|<link [^>]*href=\"[^\"]*phpmyadmin\\.css\\.php)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpmyadmin:jsGlobal:2",
				kind: "jsGlobal",
				property: "pma_absolute_uri",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "phpmyadmin:header:3",
				kind: "header",
				key: "Set-Cookie",
				valuePattern: new RegExp("phpMyAdmin_https", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "phpmyadmin:dom:4",
				kind: "dom",
				selector: "link[href*='phpmyadmin.css.php']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "phpmyadmin:html:5",
				kind: "html",
				pattern: new RegExp("!\\[cdata\\[[^<]*pma_version:\\\"([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpmyadmin:html:6",
				kind: "html",
				pattern: new RegExp("(?: \\| phpmyadmin ([\\d.]+)<\\/title>|pma_sendheaderlocation\\(|<link [^>]*href=\"[^\"]*phpmyadmin\\.css\\.php)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpmyadmin:header:7",
				kind: "header",
				key: "set-cookie",
				valuePattern: new RegExp("phpmyadmin_https", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:phpmyadmin:phpmyadmin:*:*:*:*:*:*:*:*",
		},
		implies: [
			"mysql",
			"php",
		],
	},
	{
		id: "phppgadmin",
		name: "phpPgAdmin",
		website: "https://phppgadmin.sourceforge.net",
		description: "phpPgAdmin is a web-based administration tool for managing PostgreSQL databases.",
		icon: "phpPgAdmin.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "phppgadmin:html:0",
				kind: "html",
				pattern: new RegExp("(?:<title>phpPgAdmin<\\/title>|<span class=\"appname\">phpPgAdmin)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phppgadmin:html:1",
				kind: "html",
				pattern: new RegExp("(?:<title>phppgadmin<\\/title>|<span class=\"appname\">phppgadmin)"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:phppgadmin_project:phppgadmin:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "phusion-passenger",
		name: "Phusion Passenger",
		website: "https://phusionpassenger.com",
		description: "Phusion Passenger is a free web server and application server with support for Ruby, Python and Node.js.",
		icon: "Phusion Passenger.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "phusion-passenger:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Phusion Passenger ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "phusion-passenger:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Phusion Passenger(?:\\(R\\))? ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "phusion-passenger:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("phusion passenger ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "phusion-passenger:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("phusion passenger(?:\\(r\\))? ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:phusionpassenger:phusion_passenger:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "postgresql",
		name: "PostgreSQL",
		website: "https://www.postgresql.org/",
		description: "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
		icon: "PostgreSQL.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:postgresql:postgresql:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "pouchdb",
		name: "PouchDB",
		website: "https://pouchdb.com",
		description: "PouchDB is an open-source NoSQL database written in JavaScript.",
		icon: "PouchDB.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "pouchdb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/pouchdb\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pouchdb:jsGlobal:1",
				kind: "jsGlobal",
				property: "PouchDB.adapter",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "proxmox-ve",
		name: "Proxmox VE",
		website: "https://proxmox.com/en/proxmox-ve",
		description: "Proxmox VE is an open-source virtualisation and containerisation platform that provides a web-based management interface to manage virtual machines, containers, storage, and networking.",
		icon: "Proxmox.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "proxmox-ve:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("pve-api-daemon\\/[\\d\\.]+", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "proxmox-ve:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("pve-api-daemon\\/[\\d\\.]+", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "pubnub",
		name: "PubNub",
		website: "https://www.pubnub.com",
		description: "PubNub is a platform that operates the Data Stream Network, enabling the connection, delivery, and control of data and logic to support real-time applications at a global scale.",
		icon: "PubNub.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "pubnub:jsGlobal:0",
				kind: "jsGlobal",
				property: "PubNub",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pubnub:jsGlobal:1",
				kind: "jsGlobal",
				property: "PubNubCenter",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pubnub:jsGlobal:2",
				kind: "jsGlobal",
				property: "PubNubOccupancy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pubnub:jsGlobal:3",
				kind: "jsGlobal",
				property: "PubNubPayload",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "qiyeku",
		name: "Qiyeku",
		website: "https://www.qiyeku.cn",
		description: "Qiyeku is a Chinese enterprise database that provides business information, company listings, and industry resources for market research and trade connections.",
		icon: "Qiyeku.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "qiyeku:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.qiyeku\\.cn"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rabbitloader",
		name: "RabbitLoader",
		website: "https://rabbitloader.com",
		description: "RabbitLoader is a plugin designed to enhance PageSpeed Insights Score by addressing Core Web Vitals issues including FID, LCP, & CLS.",
		icon: "RabbitLoader.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "rabbitloader:dom:0",
				kind: "dom",
				selector: "link[href*='cfw.rabbitloader.xyz']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
			],
		},
	},
	{
		id: "rackcache",
		name: "RackCache",
		website: "https://github.com/rtomayko/rack-cache",
		description: "RackCache is a quick drop-in component to enable HTTP caching for Rack-based applications.",
		icon: "RackCache.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		implies: [
			"ruby",
		],
	},
	{
		id: "raspbian",
		name: "Raspbian",
		website: "https://www.raspbian.org/",
		description: "Raspbian is a free operating system for the Raspberry Pi hardware.",
		icon: "Raspbian.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "raspbian:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Raspbian", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "raspbian:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Raspbian", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "raspbian:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("raspbian", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "raspbian:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("raspbian", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "red-hat",
		name: "Red Hat",
		website: "https://www.redhat.com",
		description: "Red Hat is an open-source Linux operating system.",
		icon: "Red Hat.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "red-hat:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Red Hat", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "red-hat:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Red Hat", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "red-hat:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("red hat", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "red-hat:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("red hat", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:redhat:linux:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "redis",
		name: "Redis",
		website: "https://redis.io",
		description: "Redis is an in-memory data structure project implementing a distributed, in-memory key–value database with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indexes.",
		icon: "Redis.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:redislabs:redis:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "redis-object-cache",
		name: "Redis Object Cache",
		website: "https://wprediscache.com",
		icon: "RedisObjectCache.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "redis-object-cache:html:0",
				kind: "html",
				pattern: new RegExp("<!--\\s+Performance optimized by Redis Object Cache"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "redis-object-cache:html:1",
				kind: "html",
				pattern: new RegExp("<!--\\s+performance optimized by redis object cache"),
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"redis",
			"wordpress",
		],
	},
	{
		id: "resin",
		name: "Resin",
		website: "https://caucho.com",
		icon: "Resin.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "resin:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Resin(?:\\/(\\S*))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "resin:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^resin(?:\\/(\\s*))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:caucho:resin:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "roadrunner",
		name: "RoadRunner",
		website: "https://roadrunner.dev",
		description: "RoadRunner is a high-performance PHP application server, load balancer, and process manager written in Golang.",
		icon: "RoadRunner.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "roadrunner:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("RoadRunner", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "roadrunner:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("roadrunner", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "rx-web-server",
		name: "RX Web Server",
		website: "https://developers.rokitax.co.uk/projects/rxweb",
		icon: "RXWeb.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "rx-web-server:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("RX-WEB", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "rx-web-server:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("rx-web", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "scientific-linux",
		name: "Scientific Linux",
		website: "https://scientificlinux.org",
		description: "Scientific Linux (SL) is a free open-source operating system based on Red Hat Enterprise Linux.",
		icon: "Scientific Linux.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "scientific-linux:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Scientific Linux", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "scientific-linux:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Scientific Linux", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "scientific-linux:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("scientific linux", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "scientific-linux:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("scientific linux", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:fnal:scientific_linux:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "shelf",
		name: "Shelf",
		website: "https://pub.dev/packages/shelf",
		description: "Shelf is a server framework for Dart.",
		icon: "Dart.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "shelf:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("dart:io with Shelf", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "shelf:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("Dart with package:shelf", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "shelf:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("dart:io with shelf", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "shelf:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("dart with package:shelf", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"dart",
		],
	},
	{
		id: "simplehttp",
		name: "SimpleHTTP",
		website: "https://example.com",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "simplehttp:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("SimpleHTTP(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "simplehttp:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("simplehttp(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "sitecore-experience-edge",
		name: "Sitecore Experience Edge",
		website: "https://doc.sitecore.com/xp/en/developers/101/developer-tools/experience-edge-for-xm-apis.html",
		description: "Sitecore Experience Edge is a product that optimises content delivery by utilising edge computing and caching technologies to enhance website performance and user experience.",
		icon: "Sitecore.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "sitecore-experience-edge:dom:0",
				kind: "dom",
				selector: "img[src*='edge.sitecorecloud.io']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			pricing: [
				"high",
				"poa",
				"recurring",
			],
		},
		implies: [
			"graphql",
			"sitecore-experience-platform",
		],
	},
	{
		id: "solr",
		name: "Solr",
		website: "https://lucene.apache.org/solr/",
		description: "Solr is an open-source search platform built on Apache Lucene, used for indexing and searching large-scale datasets.",
		icon: "Solr.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apache:solr:*:*:*:*:*:*:*:*",
		},
		implies: [
			"lucene",
		],
	},
	{
		id: "sql-buddy",
		name: "SQL Buddy",
		website: "https://www.sqlbuddy.com",
		description: "SQL Buddy is an open-source web-based application written in PHP to handle the administration of MySQL and SQLite with the use of a Web browser.",
		icon: "SQL Buddy.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "sql-buddy:html:0",
				kind: "html",
				pattern: new RegExp("(?:<title>SQL Buddy<\\/title>|<[^>]+onclick=\"sideMainClick\\(\"home\\.php)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sql-buddy:html:1",
				kind: "html",
				pattern: new RegExp("(?:<title>sql buddy<\\/title>|<[^>]+onclick=\"sidemainclick\\(\"home\\.php)"),
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"php",
		],
	},
	{
		id: "sqlite",
		name: "SQLite",
		website: "https://www.sqlite.org",
		icon: "SQLite.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:sqlite:sqlite:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "starlet",
		name: "Starlet",
		website: "https://metacpan.org/pod/Starlet",
		description: "Starlet is a high-performance, lightweight web server for Perl applications.",
		icon: "Starlet.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "starlet:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Plack::Handler::Starlet", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "starlet:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^plack::handler::starlet", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"perl",
		],
	},
	{
		id: "sunos",
		name: "SunOS",
		website: "https://oracle.com/solaris",
		description: "SunOS is a Unix-branded operating system developed by Sun Microsystems for their workstation and server computer systems.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "sunos:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("SunOS( [\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "sunos:header:1",
				kind: "header",
				key: "Servlet-engine",
				valuePattern: new RegExp("SunOS( [\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "sunos:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("sunos( [\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "sunos:header:3",
				kind: "header",
				key: "servlet-engine",
				valuePattern: new RegExp("sunos( [\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:oracle:sunos:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "super-page-cache",
		name: "Super Page Cache",
		website: "https://themeisle.com/plugins/super-page-cache-pro/",
		description: "Super Page Cache is a static caching plugin for WordPress.",
		icon: "super-page-cache.svg",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "super-page-cache:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/(?:wp-cloudflare-page-cache|wp-super-page-cache-pro)\\/"),
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "suse",
		name: "SUSE",
		website: "https://suse.com",
		description: "SUSE is a Linux-based server operating system.",
		icon: "SUSE.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "suse:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("SUSE(?:\\/?\\s?-?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "suse:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("SUSE(?:\\/?\\s?-?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "suse:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("suse(?:\\/?\\s?-?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "suse:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("suse(?:\\/?\\s?-?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "tengine",
		name: "Tengine",
		website: "https://tengine.taobao.org",
		description: "Tengine is a web server which is based on the Nginx HTTP server.",
		icon: "Tengine.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "tengine:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Tengine", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "tengine:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("tengine", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "thttpd",
		name: "thttpd",
		website: "https://acme.com/software/thttpd",
		icon: "thttpd.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "thttpd:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("\\bthttpd(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "thttpd:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("\\bthttpd(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:acme:thttpd:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "tornadoserver",
		name: "TornadoServer",
		website: "https://tornadoweb.org",
		icon: "TornadoServer.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "tornadoserver:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("TornadoServer(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "tornadoserver:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("tornadoserver(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "twistedweb",
		name: "TwistedWeb",
		website: "https://twistedmatrix.com/trac/wiki/TwistedWeb",
		icon: "TwistedWeb.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "twistedweb:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("TwistedWeb(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "twistedweb:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("twistedweb(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:twistedmatrix:twistedweb:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "ubuntu",
		name: "Ubuntu",
		website: "https://www.ubuntu.com/server",
		description: "Ubuntu is a free and open-source operating system on Linux for the enterprise server, desktop, cloud, and IoT.",
		icon: "Ubuntu.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "ubuntu:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Ubuntu", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ubuntu:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Ubuntu", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ubuntu:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("ubuntu", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ubuntu:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("ubuntu", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:canonical:ubuntu_linux:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "unifi-os",
		name: "UniFi OS",
		website: "https://www.ui.com/",
		description: "UniFi OS is the operating system for UniFi products, which provides a user interface.",
		icon: "UniFi_OS.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "unifi-os:jsGlobal:0",
				kind: "jsGlobal",
				property: "unifiConstant.VERSION",
				valuePattern: new RegExp("^([\\d+\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:ui:unifi_os:*:*:*:*:*:*:*:*",
		},
		requires: [
			"angularjs",
		],
	},
	{
		id: "unix",
		name: "UNIX",
		website: "https://unix.org",
		description: "Unix is a family of multitasking, multiuser computer operating systems.",
		icon: "UNIX.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "unix:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Unix", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "unix:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("unix", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:unix:unix:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "urllo",
		name: "Urllo",
		website: "https://www.urllo.com",
		description: "Urllo is a URL redirection service designed for businesses to manage and streamline link forwarding.",
		icon: "Urllo.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "urllo:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.urllo-cdn.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "uvicorn",
		name: "Uvicorn",
		website: "https://www.uvicorn.org/",
		description: "Uvicorn is an ASGI server implementation for Python web applications, commonly used with frameworks like FastAPI to enable asynchronous and high-performance handling of web requests.",
		icon: "uvicorn.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "uvicorn:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("uvicorn", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "uvicorn:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("uvicorn", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:encode:uvicorn:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "v2board",
		name: "V2Board",
		website: "https://v2board.com",
		description: "V2Board is a multi-agent protocol management system with an interface for managing multiple proxy protocols.",
		icon: "V2Board.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "v2board:dom:0",
				kind: "dom",
				selector: "link[href*='/theme/v2board/assets/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "varnish",
		name: "Varnish",
		website: "https://www.varnish-cache.org",
		description: "Varnish is a reverse caching proxy.",
		icon: "Varnish.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "varnish:header:0",
				kind: "header",
				key: "Via",
				valuePattern: new RegExp("varnish(?: \\(Varnish\\/([\\d.]+)\\))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "varnish:header:1",
				kind: "header",
				key: "via",
				valuePattern: new RegExp("varnish(?: \\(varnish\\/([\\d.]+)\\))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "varnish:header:2",
				kind: "header",
				key: "Via",
				valuePattern: new RegExp("(\\d+(?:\\.\\d+)?)\\s+varnish", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:varnish-software:varnish_cache:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "virtuoso",
		name: "Virtuoso",
		website: "https://virtuoso.openlinksw.com/",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "virtuoso:url:0",
				kind: "url",
				pattern: new RegExp("\\/sparql"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "virtuoso:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Virtuoso\\/?([0-9.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "virtuoso:meta:2",
				kind: "meta",
				key: "Copyright",
				valuePattern: new RegExp("^Copyright &copy; \\d{4} OpenLink Software", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "virtuoso:meta:3",
				kind: "meta",
				key: "Keywords",
				valuePattern: new RegExp("^OpenLink Virtuoso Sparql", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "virtuoso:header:4",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("virtuoso\\/?([0-9.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "virtuoso:meta:5",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("^copyright &copy; \\d{4} openlink software", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "virtuoso:meta:6",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("^openlink virtuoso sparql", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:openlinksw:virtuoso:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "w3-total-cache",
		name: "W3 Total Cache",
		website: "https://www.w3-edge.com/wordpress-plugins/w3-total-cache",
		description: "W3 Total Cache (W3TC) improves the SEO and increases website performance and reducing load times by leveraging features like content delivery network (CDN) integration and the latest best practices.",
		icon: "W3 Total Cache.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "w3-total-cache:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+W3 Total Cache"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "w3-total-cache:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("W3 Total Cache(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "w3-total-cache:html:2",
				kind: "html",
				pattern: new RegExp("<!--[^>]+w3 total cache"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "w3-total-cache:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("w3 total cache(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "warp",
		name: "Warp",
		website: "https://www.stackage.org/package/warp",
		icon: "Warp.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "warp:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Warp\\/(\\d+(?:\\.\\d+)+)?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "warp:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^warp\\/(\\d+(?:\\.\\d+)+)?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"haskell",
		],
	},
	{
		id: "weblogic-server",
		name: "Weblogic Server",
		website: "https://www.oracle.com/java/weblogic",
		description: "WebLogic Server is an Application Server that runs on a middle tier, between back-end databases and related applications and browser-based thin clients.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "weblogic-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^WebLogic\\sServer\\s([\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "weblogic-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^weblogic\\sserver\\s([\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"javaserver-pages",
		],
	},
	{
		id: "webrick",
		name: "WEBrick",
		website: "https://docs.ruby-lang.org/en/2.4.0/WEBrick.html",
		description: "WEBrick is a lightweight HTTP server library in Ruby, included in the standard library, primarily used for local development and testing of Ruby web applications.",
		icon: "Ruby.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "webrick:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^WEBrick\\/([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "webrick:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^webrick\\/([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:ruby-lang:webrick:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "websphere",
		name: "WebSphere",
		website: "https://www.ibm.com/products/websphere-application-server",
		icon: "websphere.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "websphere:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^\\(\\?i\\)ltpatoken$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:ibm:websphere_application_server:-:*:*:*:*:*:*:*",
		},
	},
	{
		id: "windows-ce",
		name: "Windows CE",
		website: "https://microsoft.com",
		description: "Windows CE is an operating system designed for small footprint devices or embedded systems.",
		icon: "Microsoft.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "windows-ce:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("\\bWinCE\\b", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "windows-ce:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("\\bwince\\b", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "windows-server",
		name: "Windows Server",
		website: "https://microsoft.com/windowsserver",
		description: "Windows Server is a brand name for a group of server operating systems.",
		icon: "WindowsServer.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "windows-server:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Win32|Win64", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "windows-server:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("win32|win64", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:o:microsoft:windows:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "winstone-servlet-container",
		name: "Winstone Servlet Container",
		website: "https://winstone.sourceforge.net",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "winstone-servlet-container:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Winstone Servlet (?:Container|Engine) v?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "winstone-servlet-container:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Winstone(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "winstone-servlet-container:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("winstone servlet (?:container|engine) v?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "winstone-servlet-container:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("winstone(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "wordpress-super-cache",
		name: "WordPress Super Cache",
		website: "https://z9.io/wp-super-cache/",
		description: "WordPress Super Cache is a static caching plugin for WordPress.",
		icon: "wp_super_cache.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wordpress-super-cache:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+WP-Super-Cache"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "wordpress-super-cache:html:1",
				kind: "html",
				pattern: new RegExp("<!--[^>]+wp-super-cache"),
				description: "HTML contains a known technology signature.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-rocket",
		name: "WP Rocket",
		website: "https://wp-rocket.me",
		description: "WP Rocket is a caching and performance optimisation plugin to improve the loading speed of WordPress websites.",
		icon: "WP Rocket.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-rocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-rocket\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-rocket:html:1",
				kind: "html",
				pattern: new RegExp("<!--[^>]+WP Rocket"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "wp-rocket:dom:2",
				kind: "dom",
				selector: "style#wpr-usedcss",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "wp-rocket:jsGlobal:3",
				kind: "jsGlobal",
				property: "RocketLazyLoadScripts",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wp-rocket:jsGlobal:4",
				kind: "jsGlobal",
				property: "RocketPreloadLinksConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wp-rocket:jsGlobal:5",
				kind: "jsGlobal",
				property: "rocket_lazy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wp-rocket:header:6",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("WP Rocket(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "wp-rocket:jsGlobal:7",
				kind: "jsGlobal",
				property: "RocketBrowserCompatibilityChecker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wp-rocket:jsGlobal:8",
				kind: "jsGlobal",
				property: "rocket_lazyload_css_data",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wp-rocket:meta:9",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^WP Rocket ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "wp-rocket:html:10",
				kind: "html",
				pattern: new RegExp("<!--[^>]+wp rocket"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "wp-rocket:header:11",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("wp rocket(?:\\/([\\d.]+))?", "i"),
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
			cpe: "cpe:2.3:a:wp-rocket:wp-rocket:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wpcache",
		name: "wpCache",
		website: "https://wpcache.co",
		description: "WPCache is a static caching plugin for WordPress.",
		icon: "wpCache.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wpcache:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+wpCache"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "wpcache:url:1",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/[^/]+\\.wpcache\\.co"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "wpcache:header:2",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("wpCache(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "wpcache:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("wpCache", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "wpcache:meta:4",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("wpCache", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "wpcache:html:5",
				kind: "html",
				pattern: new RegExp("<!--[^>]+wpcache"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "wpcache:header:6",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("wpcache(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "wpcache:meta:7",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("wpcache", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "wpcache:meta:8",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("wpcache", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"php",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "wpcacheon",
		name: "WPCacheOn",
		website: "https://wpcacheon.io",
		description: "WPCacheOn is a caching and performance optimisation plugin, which improves the loading speed of WordPress websites.",
		icon: "WPCacheOn.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wpcacheon:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^Optimized by WPCacheOn", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "wpcacheon:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^optimized by wpcacheon", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "xampp",
		name: "XAMPP",
		website: "https://www.apachefriends.org/en/xampp.html",
		icon: "XAMPP.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "xampp:html:0",
				kind: "html",
				pattern: new RegExp("<title>XAMPP(?: Version ([\\d\\.]+))?<\\/title>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "xampp:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Kai Oswald Seidler", "i"),
				confidence: 10,
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "xampp:html:2",
				kind: "html",
				pattern: new RegExp("<title>xampp(?: version ([\\d\\.]+))?<\\/title>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "xampp:meta:3",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("kai oswald seidler", "i"),
				confidence: 10,
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"apache-http-server",
			"mysql",
			"perl",
			"php",
		],
	},
	{
		id: "xano",
		name: "Xano",
		website: "https://www.xano.com",
		description: "Xano is a no-code backend development platform that allows users to build and manage databases, APIs, and server-side logic without writing code.",
		icon: "Xano.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "xano:jsGlobal:0",
				kind: "jsGlobal",
				property: "XanoBaseStorage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "xano:jsGlobal:1",
				kind: "jsGlobal",
				property: "XanoClient",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "xano:jsGlobal:2",
				kind: "jsGlobal",
				property: "XanoCookieStorage",
				description: "Page-owned global matches a known technology marker.",
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
		id: "xitami",
		name: "Xitami",
		website: "https://xitami.com",
		icon: "Xitami.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "xitami:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Xitami(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "xitami:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("xitami(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:xitami:xitami:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "yaws",
		name: "Yaws",
		website: "https://github.com/erlyaws/yaws",
		description: "Yaws (Yet Another Web Server) is an open-source web server designed to deliver dynamic content efficiently. It was developed by Claes (klacke) Wikström and is written in Erlang, a functional programming language.",
		icon: "Yaws.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "yaws:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Yaws(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "yaws:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("yaws(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:yaws:yaws:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "yunohost",
		name: "YunoHost",
		website: "https://yunohost.org",
		description: "YunoHost is a server operating system that is free and open-source, allowing users to host their own web applications, email services, and other online tools. It is based on Debian GNU/Linux.",
		icon: "YunoHost.svg",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "yunohost:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/ynh_portal\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:o:yunohost:yunohost:*:*:*:*:*:*:*:*",
		},
		implies: [
			"debian",
		],
	},
	{
		id: "zend",
		name: "Zend",
		website: "https://zend.com",
		description: "Zend is a company that provides PHP development tools and solutions, including frameworks, servers, and development environments, to help developers build, deploy, and manage PHP applications.",
		icon: "Zend.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "zend:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^ZENDSERVERSESSID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "zend:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Zend(?:Server)?(?:[\\s/]?([0-9.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "zend:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^zendserversessid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "zend:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("zend(?:server)?(?:[\\s/]?([0-9.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:zend:zend_server:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "zope",
		name: "Zope",
		website: "https://zope.org",
		description: "Zope is an open-source web application server and content management framework that helps developers build and manage complex web applications with features like object-oriented programming and scalable architecture.",
		icon: "Zope.png",
		categories: [
			"server-runtime-infra",
		],
		rules: [
			{
				id: "zope:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Zope\\/", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "zope:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^zope\\/", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:zope:zope:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
] as const satisfies readonly TechnologyDefinition[];
