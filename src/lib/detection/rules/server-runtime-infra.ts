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
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "8base:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.8base\\.com"),
				description: "Observed request URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "adminer",
		name: "Adminer",
		website: "https://www.adminer.org",
		description: "Adminer is a lightweight, web-based database management tool that supports multiple database systems and provides a simple interface for managing databases, tables, and running SQL queries.",
		icon: "Adminer.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "adminer:html:0",
				kind: "html",
				pattern: new RegExp("Adminer</a> <span class=\"version\">([\\d.]+)</span>"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "adminer:html:1",
				kind: "html",
				pattern: new RegExp("onclick=\"bodyClick\\(event\\);\" onload=\"verifyVersion\\('([\\d.]+)'\\);\">"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "adminer:cookie:2",
				kind: "cookie",
				key: "adminer_key",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "adminer:cookie:3",
				kind: "cookie",
				key: "adminer_sid",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "adminer:responseHeader:4",
				kind: "responseHeader",
				key: "composed-by",
				valuePattern: new RegExp("adminer\\((\\d\\.)+\\)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:adminer:adminer:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "almalinux",
		name: "AlmaLinux",
		website: "https://almalinux.org",
		description: "AlmaLinux is an open-source, community-driven Linux operating system that fills the gap left by the discontinuation of the CentOS Linux stable release.",
		icon: "AlmaLinux.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "almalinux:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("AlmaLinux"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "alpine-linux",
		name: "Alpine Linux",
		website: "https://www.alpinelinux.org",
		description: "Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.",
		icon: "Alpine Linux.svg",
		categories: [
			"server-runtime-infra",
			"ui-library"
		],
		rules: [
			{
				id: "alpine-linux:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Alpine"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:o:alpinelinux:alpine_linux:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "amazon-aurora",
		name: "Amazon Aurora",
		website: "https://aws.amazon.com/rds/aurora",
		description: "Amazon Aurora is a relational database service developed and offered by Amazon Web Services.",
		icon: "Amazon Aurora.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		implies: [
			"amazon-web-services"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "amazon-ec2",
		name: "Amazon EC2",
		website: "https://aws.amazon.com/ec2/",
		description: "Amazon Elastic Compute Cloud is a part of Amazon.com's cloud-computing platform, Amazon Web Services, that allows users to rent virtual computers on which to run their own computer applications.",
		icon: "Amazon EC2.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "amazon-ec2:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("\\(Amazon\\)"),
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
		id: "angie",
		name: "Angie",
		website: "https://angie.software/en/",
		description: "Angie is a drop-in replacement for the Nginx web server aiming to extend the functionality of the original version.",
		icon: "default.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "angie:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Angie(?:/([\\d\\.]+))?$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"perl",
			"c"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "aolserver",
		name: "AOLserver",
		website: "https://aolserver.com",
		icon: "AOLserver.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "aolserver:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("AOLserver/?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:aol:aolserver:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "apache-apisix",
		name: "Apache APISIX",
		website: "https://apisix.apache.org",
		description: "Apache APISIX is an open-source, cloud-native API gateway developed by the Apache Software Foundation. It provides a scalable and high-performance solution for managing and securing API traffic.",
		icon: "Apache APISIX.svg",
		categories: [
			"server-runtime-infra",
			"api-pattern",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "apache-apisix:responseHeader:0",
				kind: "responseHeader",
				key: "X-APISIX-Upstream-Status",
				description: "Response header matches a known technology marker."
			},
			{
				id: "apache-apisix:responseHeader:1",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^APISIX(?:/([\\d\\.]+))?$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:apache:apisix:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "apache-http-server",
		name: "Apache HTTP Server",
		website: "https://httpd.apache.org/",
		description: "Apache is a free and open-source cross-platform web server software.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "apache-http-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("(?:Apache(?:$|/([\\d.]+)|[^/-])|(?:^|\\b)HTTPD)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:apache:http_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "apache-tomcat",
		name: "Apache Tomcat",
		website: "https://tomcat.apache.org",
		description: "Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and WebSocket technologies.",
		icon: "Apache Tomcat.svg",
		categories: [
			"server-runtime-infra",
			"api-pattern"
		],
		rules: [
			{
				id: "apache-tomcat:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Apache-Coyote"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "apache-tomcat:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("\\bTomcat\\b(?:-([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:apache:tomcat:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "apache-traffic-server",
		name: "Apache Traffic Server",
		website: "https://trafficserver.apache.org/",
		description: "Apache Traffic Server is an open-source caching and proxying server that serves as an HTTP/1.1 and HTTP/2 reverse proxy with caching capabilities, load balancing, request routing, SSL termination, and support for advanced HTTP features.",
		icon: "Apache Traffic Server.svg",
		categories: [
			"server-runtime-infra",
			"router"
		],
		rules: [
			{
				id: "apache-traffic-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("ATS/?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:apache:traffic_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "artifactory-web-server",
		name: "Artifactory Web Server",
		website: "https://jfrog.com/open-source/#os-arti",
		icon: "Artifactory.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "artifactory-web-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Artifactory(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"artifactory"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:jfrog:artifactory:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "cactivecloud",
		name: "CactiveCloud",
		website: "https://cactivecloud.com",
		description: "CactiveCloud is a freemium based cloud provider and web server for static deployments of websites with HTML builds and serverless functions.",
		icon: "CactiveCloud.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "cactivecloud:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Cactive$"),
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
		id: "caddy",
		name: "Caddy",
		website: "https://caddyserver.com",
		description: "Caddy is a Go-based web server known for its simplicity and automatic HTTPS features.",
		icon: "caddy.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "caddy:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Caddy"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"go"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:caddyserver:caddy:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "centminmod",
		name: "Centminmod",
		website: "https://centminmod.com",
		icon: "centminmod.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "centminmod:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("centminmod"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"centos",
			"nginx",
			"php"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "centos",
		name: "CentOS",
		website: "https://centos.org",
		description: "CentOS is a Linux distribution that provides a free, community-supported computing platform functionally compatible with its upstream source, Red Hat Enterprise Linux (RHEL).",
		icon: "CentOS.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "centos:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("CentOS"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "centos:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("CentOS"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:centos:centos:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "cherokee",
		name: "Cherokee",
		website: "https://www.cherokee-project.com",
		icon: "Cherokee.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "cherokee:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Cherokee(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:cherokee-project:cherokee:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "cherrypy",
		name: "CherryPy",
		website: "https://cherrypy.org/",
		description: "CherryPy is an object-oriented web application framework using the Python programming language.",
		icon: "CherryPy.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "cherrypy:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("CherryPy(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:cherrypy:cherrypy:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "claris-filemaker",
		name: "Claris FileMaker",
		website: "https://www.claris.com/filemaker",
		description: "Claris FileMaker is a cross-platform relational database application from Claris International.",
		icon: "Claris.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "claris-filemaker:url:0",
				kind: "url",
				pattern: new RegExp("\\.[\\w]+/fmi/webd/"),
				description: "Page URL matches a known technology marker."
			}
		],
		requires: [
			"vaadin",
			"application-request-routing",
			"java"
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
		id: "cloudera",
		name: "Cloudera",
		website: "https://www.cloudera.com",
		description: "Cloudera is a software platform for data engineering, data warehousing, machine learning and analytics that runs in the cloud or on-premises.",
		icon: "Cloudera.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "cloudera:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("cloudera"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "couchdb",
		name: "CouchDB",
		website: "https://couchdb.apache.org",
		icon: "CouchDB.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "couchdb:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("CouchDB/([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:apache:couchdb:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "cowboy",
		name: "Cowboy",
		website: "https://github.com/ninenines/cowboy",
		description: "Cowboy is a small, fast, modular HTTP server written in Erlang.",
		icon: "Cowboy.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "cowboy:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Cowboy$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"erlang"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "daphne",
		name: "Daphne",
		website: "https://github.com/django/daphne",
		icon: "daphne.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "daphne:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Daphne"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"twistedweb",
			"python",
			"zope"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "darwin",
		name: "Darwin",
		website: "https://opensource.apple.com",
		description: "Darwin is the open-source operating system from Apple that forms the basis for macOS.",
		icon: "Apple.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "darwin:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Darwin"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "darwin:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Darwin"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "debian",
		name: "Debian",
		website: "https://debian.org",
		description: "Debian is a Linux software which is a free open-source software.",
		icon: "Debian.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "debian:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Debian"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "debian:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("(?:Debian|dotdeb|(potato|woody|sarge|etch|lenny|squeeze|wheezy|jessie|stretch|buster|sid))"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:debian:debian_linux:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "deno",
		name: "Deno",
		website: "https://deno.land",
		description: "A modern runtime for JavaScript and TypeScript.",
		icon: "deno.svg",
		categories: [
			"server-runtime-infra",
			"transpiler"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:deno:deno:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "dimensions-ai",
		name: "Dimensions AI",
		website: "https://www.dimensions.ai",
		description: "Dimensions AI is an advanced research database linking grants, publications, datasets, clinical trials, patents, and policy documents to support efficient translation from idea to impact.",
		icon: "Dimensions.svg",
		categories: [
			"server-runtime-infra",
			"translations"
		],
		rules: [
			{
				id: "dimensions-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dimensions\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dimensions-ai:pageGlobal:1",
				kind: "pageGlobal",
				property: "__dimensions_badge_config_loaded__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dimensions-ai:pageGlobal:2",
				kind: "pageGlobal",
				property: "__dimensions_badge_server",
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
		id: "docker",
		name: "Docker",
		website: "https://www.docker.com/",
		description: "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.",
		icon: "Docker.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "docker:html:0",
				kind: "html",
				pattern: new RegExp("<!-- This comment is expected by the docker HEALTHCHECK  -->"),
				description: "HTML contains a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:docker:engine:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "elog-http",
		name: "ELOG HTTP",
		website: "https://midas.psi.ch/elog",
		icon: "ELOG.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "elog-http:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("ELOG HTTP ?([\\d.-]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"elog"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "embedthis-appweb",
		name: "EmbedThis Appweb",
		website: "https://embedthis.com/appweb",
		icon: "Embedthis.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "embedthis-appweb:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Mbedthis-Appweb(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:embedthis:appweb:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "engintron",
		name: "Engintron",
		website: "https://github.com/engintron/engintron",
		description: "Engintron is a plugin that integrates Nginx to cPanel/WHM server.",
		icon: "engintron.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "engintron:responseHeader:0",
				kind: "responseHeader",
				key: "X-Server-Powered-By",
				valuePattern: new RegExp("^Engintron$"),
				description: "Response header matches a known technology marker."
			}
		],
		requires: [
			"nginx"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ezproxy",
		name: "EZproxy",
		website: "https://www.oclc.org/en/ezproxy.html",
		description: "EZproxy is a web server and a reverse proxy that is usually used by libraries as a reverse proxy in front of electronic educational resources databases (e.g.: Scopus, PubMed, or Web of Science) in order to provide authentication and protect privacy.",
		icon: "default.svg",
		categories: [
			"server-runtime-infra",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "ezproxy:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^EZproxy$"),
				description: "Response header matches a known technology marker."
			}
		],
		excludes: [
			"apache-http-server",
			"nginx"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "fastpixel",
		name: "FastPixel",
		website: "https://fastpixel.io",
		description: "FastPixel is an all-in-one WordPress caching plugin that speeds up your website.",
		icon: "FastPixel.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "fastpixel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.fastpixel\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "fedora",
		name: "Fedora",
		website: "https://fedoraproject.org",
		description: "Fedora is a free open-source Linux-based operating system.",
		icon: "Fedora.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "fedora:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Fedora"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:fedoraproject:fedora:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "ferron",
		name: "Ferron",
		website: "https://ferron.sh",
		description: "Ferron is a web server offering automatic TLS certificate management, configuration, and security for online operations.",
		icon: "Ferron.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "ferron:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Ferron$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "ferron:responseHeader:1",
				kind: "responseHeader",
				key: "X-Ferron-Cache",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "firebase",
		name: "Firebase",
		website: "https://firebase.google.com",
		description: "Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.",
		icon: "Firebase.svg",
		categories: [
			"server-runtime-infra",
			"developer-tooling"
		],
		rules: [
			{
				id: "firebase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/(?:([\\d.]+)/)?firebase(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "firebase:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/firebasejs/([\\d.]+)/firebase"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "firebase:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("\\.gstatic\\.com/firebasejs/([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "firebase:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("firebase(?:Config|io\\.com)"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "firebase:requestUrl:4",
				kind: "requestUrl",
				pattern: new RegExp("fire(?:base|store)\\.googleapis\\.com|\\.firebaseio\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "firebase:dom:5",
				kind: "dom",
				selector: "iframe[src*='.firebaseapp.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "firebase:pageGlobal:6",
				kind: "pageGlobal",
				property: "firebase.SDK_VERSION",
				valuePattern: new RegExp("([\\d.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "firebase:responseHeader:7",
				kind: "responseHeader",
				key: "vary",
				valuePattern: new RegExp("x-fh-requested-host"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			],
			cpe: "cpe:2.3:a:google:firebase_cloud_messaging:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "freebsd",
		name: "FreeBSD",
		website: "https://freebsd.org",
		description: "FreeBSD is a free and open-source Unix-like operating system.",
		icon: "FreeBSD.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "freebsd:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("FreeBSD(?: ([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:freebsd:freebsd:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "gentoo",
		name: "Gentoo",
		website: "https://www.gentoo.org",
		description: "Gentoo is a free operating system based on Linux.",
		icon: "Gentoo.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "gentoo:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("gentoo"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:gentoo:linux:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "glassfish",
		name: "GlassFish",
		website: "https://glassfish.java.net",
		icon: "GlassFish.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "glassfish:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("GlassFish(?: Server)?(?: Open Source Edition)?(?: ?/?([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:oracle:glassfish_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "goahead",
		name: "GoAhead",
		website: "https://embedthis.com/products/goahead/index.html",
		icon: "GoAhead.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "goahead:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("GoAhead"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:embedthis:goahead:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "google-app-engine",
		name: "Google App Engine",
		website: "https://cloud.google.com/appengine",
		icon: "Google App Engine.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "google-pagespeed",
		name: "Google PageSpeed",
		website: "https://developers.google.com/speed/pagespeed/mod",
		description: "Google PageSpeed is a family of tools designed to help websites performance optimisations.",
		icon: "Google PageSpeed.svg",
		categories: [
			"server-runtime-infra",
			"developer-tooling"
		],
		rules: [
			{
				id: "google-pagespeed:responseHeader:0",
				kind: "responseHeader",
				key: "X-Mod-Pagespeed",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "google-pagespeed:responseHeader:1",
				kind: "responseHeader",
				key: "X-Page-Speed",
				valuePattern: new RegExp("(.+)"),
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
		id: "google-web-server",
		name: "Google Web Server",
		website: "https://en.wikipedia.org/wiki/Google_Web_Server",
		icon: "Google.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "google-web-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("gws"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:google:web_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "gunicorn",
		name: "gunicorn",
		website: "https://gunicorn.org",
		icon: "gunicorn.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "gunicorn:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("gunicorn(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:gunicorn:gunicorn:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "h2o",
		name: "H2O",
		website: "https://github.com/h2o/h2o",
		description: "H2O is a fast and secure HTTP/2 server written in C by Kazuho Oku.",
		icon: "default.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "h2o:cookie:0",
				kind: "cookie",
				key: "h2o_casper",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "h2o:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^h2o(?:/)?([\\d\\.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"c",
			"http-2"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "harbor",
		name: "Harbor",
		website: "https://goharbor.io",
		description: "Harbor is an open-source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted.",
		icon: "Harbor.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "harbor:dom:0",
				kind: "dom",
				selector: "harbor-app",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"go"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "hcl-domino",
		name: "HCL Domino",
		website: "https://www.hcltechsw.com/domino",
		description: "HCL Domino, formerly called IBM Domino (1995) and Lotus Domino (1989), is an enterprise server application development platform.",
		icon: "HCL Domino.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "hcl-domino:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Lotus-Domino$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			],
			cpe: "cpe:2.3:a:ibm:lotus_domino:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "hhvm",
		name: "HHVM",
		website: "https://hhvm.com",
		icon: "HHVM.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "hhvm:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("HHVM/?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php-confidence-75"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:facebook:hhvm:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "hiawatha",
		name: "Hiawatha",
		website: "https://gitlab.com/hsleisink/hiawatha",
		description: "Hiawatha is a secure, lightweight web server developed by Hugo Leisink, designed for ease of use and advanced security features such as protection against SQL injections, XSS, and CSRF attacks.",
		icon: "Hiawatha.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "hiawatha:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Hiawatha v([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "hirschmann-hios",
		name: "Hirschmann HiOS",
		website: "https://hirschmann.com/",
		description: "Hirschmann HiOS is an operating system for industrial network equipment.",
		icon: "hirschmann_OS.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		requires: [
			"java",
			"google-web-toolkit"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:belden:hirschmann_hios:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "hp-compact-server",
		name: "HP Compact Server",
		website: "https://hp.com",
		icon: "HP.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "hp-compact-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("HP_Compact_Server(?:/([\\d.]+))?"),
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
		id: "hp-ilo",
		name: "HP iLO",
		website: "https://hp.com",
		description: "HP iLO is a tool that provides multiple ways to configure, update, monitor, and run servers remotely.",
		icon: "HP.svg",
		categories: [
			"server-runtime-infra",
			"network-hardware"
		],
		rules: [
			{
				id: "hp-ilo:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("HP-iLO-Server(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:h:hp:integrated_lights-out:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "hypercorn",
		name: "Hypercorn",
		website: "https://pgjones.gitlab.io/hypercorn/",
		description: "Hypercorn is an ASGI web server that supports HTTP/1, HTTP/2, WebSockets, ASGI/2, and ASGI/3 specifications, and can utilize asyncio, uvloop, or trio for asynchronous operations.",
		icon: "hypercorn.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "hypercorn:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("hypercorn"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ibm-http-server",
		name: "IBM HTTP Server",
		website: "https://ibm.com/software/webservers/httpservers",
		icon: "IBM.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "ibm-http-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("IBM_HTTP_Server(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:ibm:http_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "iis",
		name: "IIS",
		website: "https://www.iis.net",
		description: "Internet Information Services (IIS) is an extensible web server software created by Microsoft for use with the Windows NT family.",
		icon: "Microsoft.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "iis:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^(?:Microsoft-)?IIS(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"windows-server"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:microsoft:internet_information_services:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "indy",
		name: "Indy",
		website: "https://indyproject.org",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "indy:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Indy(?:/([\\d.]+))?"),
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
		id: "intel-active-management-technology",
		name: "Intel Active Management Technology",
		website: "https://intel.com",
		description: "Intel Active Management Technology (AMT) is a proprietary remote management and control system for personal computers with Intel CPUs.",
		icon: "Intel Active Management Technology.svg",
		categories: [
			"server-runtime-infra",
			"network-hardware"
		],
		rules: [
			{
				id: "intel-active-management-technology:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Intel\\(R\\) Active Management Technology(?: ([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:intel:active_management_technology:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "jboss-application-server",
		name: "JBoss Application Server",
		website: "https://jboss.org/jbossas.html",
		icon: "JBoss Application Server.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "jboss-application-server:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("JBoss(?:-([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:redhat:jboss_application_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "jboss-web",
		name: "JBoss Web",
		website: "https://jboss.org/jbossweb",
		icon: "JBoss Web.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "jboss-web:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("JBossWeb(?:-([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"jboss-application-server"
		],
		excludes: [
			"apache-tomcat"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:redhat:jbossweb:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "jetty",
		name: "Jetty",
		website: "https://www.eclipse.org/jetty",
		description: "Jetty is an open-source web server and servlet container known for its scalability and efficiency, supporting protocols like HTTP and WebSocket for various applications from development tools to cloud services.",
		icon: "Jetty.svg",
		categories: [
			"server-runtime-infra",
			"api-pattern"
		],
		rules: [
			{
				id: "jetty:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Jetty(?:\\(([\\d\\.]*\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:eclipse:jetty:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "kangle",
		name: "Kangle",
		website: "https://kangle.org",
		description: "Kangle is an open-source web server and reverse proxy software widely used in Chinese hosting environments for HTTP caching and virtual hosting.",
		icon: "Kangle.svg",
		categories: [
			"server-runtime-infra",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "kangle:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^kangle(?:/([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "kangle:responseHeader:1",
				kind: "responseHeader",
				key: "x-cache",
				valuePattern: new RegExp("^MISS from (?:[\\w& ]+ )?kangle\\b"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "kestrel",
		name: "Kestrel",
		website: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel",
		icon: "kestrel.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "kestrel:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Kestrel"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"microsoft-asp-net"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "knack",
		name: "Knack",
		website: "https://www.knack.com",
		description: "Knack is a tool designed to build online databases and web applications, providing a platform for creating custom applications without extensive programming knowledge.",
		icon: "Knack.svg",
		categories: [
			"server-runtime-infra",
			"framework"
		],
		rules: [
			{
				id: "knack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("loader\\.knack\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "knack:pageGlobal:1",
				kind: "pageGlobal",
				property: "Knack",
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
		id: "libwww-perl-daemon",
		name: "libwww-perl-daemon",
		website: "https://metacpan.org/pod/HTTP::Daemon",
		icon: "libwww-perl-daemon.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "libwww-perl-daemon:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("libwww-perl-daemon(?:/([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"perl"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "lighttpd",
		name: "lighttpd",
		website: "https://www.lighttpd.net",
		description: "Lighttpd is an open-source web server optimised for speed-critical environment.",
		icon: "lighttpd.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "lighttpd:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("(?:L|l)ight(?:y)?(?:tpd)?(?:/([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:lighttpd:lighttpd:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "litespeed",
		name: "LiteSpeed",
		website: "https://litespeedtech.com",
		description: "LiteSpeed is a high-scalability web server.",
		icon: "LiteSpeed.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "litespeed:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^LiteSpeed$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "litespeed:responseHeader:1",
				kind: "responseHeader",
				key: "X-Turbo-Charged-By",
				valuePattern: new RegExp("^LiteSpeed$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:litespeedtech:litespeed_web_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "litespeed-cache",
		name: "Litespeed Cache",
		website: "https://wordpress.org/plugins/litespeed-cache/",
		description: "LiteSpeed Cache is an all-in-one site acceleration plugin for WordPress.",
		icon: "litespeed-cache.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "litespeed-cache:responseHeader:0",
				kind: "responseHeader",
				key: "x-litespeed-cache",
				description: "Response header matches a known technology marker."
			},
			{
				id: "litespeed-cache:responseHeader:1",
				kind: "responseHeader",
				key: "x-turbo-charged-by",
				valuePattern: new RegExp("LiteSpeed"),
				description: "Response header matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "litespeed-cache",
		name: "LiteSpeed Cache",
		website: "https://www.litespeedtech.com/products/cache-plugins/wordpress-acceleration",
		description: "LiteSpeed Cache is an all-in-one site acceleration plugin for WordPress.",
		icon: "LiteSpeed.svg",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "litespeed-cache:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content/plugins/litespeed-cache/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "litespeed-cache:pageGlobal:1",
				kind: "pageGlobal",
				property: "litespeed_docref",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "litespeed-cache:responseHeader:2",
				kind: "responseHeader",
				key: "x-litespeed-cache",
				description: "Response header matches a known technology marker."
			},
			{
				id: "litespeed-cache:responseHeader:3",
				kind: "responseHeader",
				key: "x-turbo-charged-by",
				valuePattern: new RegExp("LiteSpeed"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"litespeed"
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "llamalink-cloud-server",
		name: "LlamaLink Cloud Server",
		website: "https://llamalink.net",
		description: "LlamaLink Cloud Server is a custom dynamic web server based on Nginx Web server that load balance user traffic between hosting nodes and allows fast and cached experience to web and app users.",
		icon: "LlamaLink.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "llamalink-cloud-server:responseHeader:0",
				kind: "responseHeader",
				key: "Serverversion",
				valuePattern: new RegExp("^LlamaLink"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"nginx"
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
		id: "lucene",
		name: "Lucene",
		website: "https://lucene.apache.org/core/",
		description: "Lucene is a free and open-source search engine software library.",
		icon: "Lucene.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:apache:lucene:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mariadb",
		name: "MariaDB",
		website: "https://mariadb.org",
		description: "MariaDB is an open-source relational database management system compatible with MySQL.",
		icon: "mariadb.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:mariadb_project:mariadb:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "microsoft-httpapi",
		name: "Microsoft HTTPAPI",
		website: "https://learn.microsoft.com/en-us/windows/win32/http/http-api-start-page",
		description: "Microsoft HTTPAPI is a kernel-mode HTTP driver in the Windows operating system responsible for handling HTTP requests and responses with efficiency, scalability, and security.",
		icon: "Microsoft.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "microsoft-httpapi:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Microsoft-HTTPAPI(?:/([\\d.]+))?"),
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
		id: "mini-httpd",
		name: "mini_httpd",
		website: "https://acme.com/software/mini_httpd",
		icon: "mini_httpd.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mini-httpd:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mini_httpd(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:acme:mini_httpd:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "miniserv",
		name: "MiniServ",
		website: "https://github.com/webmin/webmin/blob/master/miniserv.pl",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "miniserv:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("MiniServ/([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"webmin"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mochiweb",
		name: "MochiWeb",
		website: "https://github.com/mochi/mochiweb",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mochiweb:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("MochiWeb(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:mochiweb_project:mochiweb:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mod-auth-pam",
		name: "mod_auth_pam",
		website: "https://pam.sourceforge.net/mod_auth_pam",
		description: "Mod_auth_pam is used to configure ways for authenticating users.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-auth-pam:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_auth_pam(?:/([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mod-dav",
		name: "mod_dav",
		website: "https://webdav.org/mod_dav",
		description: "Mod_dav is an Apache module to provide WebDAV capabilities for your Apache web server. It is an open-source module, provided under an Apache-style license.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-dav:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("\\b(?:mod_)?DAV\\b(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mod-fastcgi",
		name: "mod_fastcgi",
		website: "https://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html",
		description: "Mod_fcgid is a high performance alternative to mod_cgi or mod_cgid, which starts a sufficient number instances of the CGI program to handle concurrent requests, and these programs remain running to handle further incoming requests.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-fastcgi:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_fastcgi(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mod-jk",
		name: "mod_jk",
		website: "https://tomcat.apache.org/tomcat-3.3-doc/mod_jk-howto.html",
		description: "Mod_jk is an Apache module used to connect the Tomcat servlet container with web servers such as Apache, iPlanet, Sun ONE (formerly Netscape) and even IIS using the Apache JServ Protocol. A web server waits for client HTTP requests.",
		icon: "Apache.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-jk:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_jk(?:/([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"apache-tomcat",
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mod-perl",
		name: "mod_perl",
		website: "https://perl.apache.org",
		description: "Mod_perl is an optional module for the Apache HTTP server. It embeds a Perl interpreter into the Apache server. In addition to allowing Apache modules to be written in the Perl programming language, it allows the Apache web server to be dynamically configured by Perl programs.",
		icon: "mod_perl.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-perl:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_perl(?:/([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"perl",
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:apache:mod_perl:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mod-python",
		name: "mod_python",
		website: "https://www.modpython.org",
		description: "Mod_python is an Apache HTTP Server module that integrates the Python programming language with the server. It is intended to provide a Python language binding for the Apache HTTP Server. ",
		icon: "mod_python.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-python:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_python(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"python",
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:apache:mod_python:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mod-rack",
		name: "mod_rack",
		website: "https://phusionpassenger.com",
		description: "Mod_rack is a free web server and application server with support for Ruby, Python and Node.js.",
		icon: "Phusion Passenger.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-rack:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_rack(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "mod-rack:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("mod_rack(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"ruby-on-rails-confidence-50",
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mod-rails",
		name: "mod_rails",
		website: "https://phusionpassenger.com",
		description: "Mod_rails is a free web server and application server with support for Ruby, Python and Node.js.",
		icon: "Phusion Passenger.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-rails:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_rails(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "mod-rails:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("mod_rails(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"ruby-on-rails-confidence-50",
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mod-ssl",
		name: "mod_ssl",
		website: "https://modssl.org",
		description: "mod_ssl is an optional module for the Apache HTTP Server. It provides strong cryptography for the Apache web server via the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) cryptographic protocols by the help of the open-source SSL/TLS toolkit OpenSSL.",
		icon: "mod_ssl.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-ssl:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_ssl(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:modssl:mod_ssl:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mod-wsgi",
		name: "mod_wsgi",
		website: "https://code.google.com/p/modwsgi",
		description: "mod_wsgi is an Apache HTTP Server module that provides a WSGI compliant interface for hosting Python based web applications under Apache.",
		icon: "mod_wsgi.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mod-wsgi:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_wsgi(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "mod-wsgi:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("mod_wsgi(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"python-confidence-50",
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:modwsgi:mod_wsgi:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mongodb",
		name: "MongoDB",
		website: "https://www.mongodb.org",
		description: "MongoDB is a document-oriented NoSQL database used for high volume data storage.",
		icon: "MongoDB.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:mongodb:mongodb:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mongrel",
		name: "Mongrel",
		website: "https://mongrel2.org",
		icon: "Mongrel.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "mongrel:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Mongrel"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"ruby"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:zed_shaw:mongrel:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "monkey-http-server",
		name: "Monkey HTTP Server",
		website: "https://monkey-project.com",
		icon: "Monkey HTTP Server.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "monkey-http-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Monkey/?([\\d.]+)?"),
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
		id: "mysql",
		name: "MySQL",
		website: "https://mysql.com",
		description: "MySQL is an open-source relational database management system.",
		icon: "MySQL.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:mysql:mysql:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "next-js-page-router-ssr",
		name: "Next.js Page Router SSR",
		website: "https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering",
		description: "Next.js Server-Side Rendering.",
		icon: "Next.js.svg",
		categories: [
			"server-runtime-infra",
			"router"
		],
		rules: [
			{
				id: "next-js-page-router-ssr:pageGlobal:0",
				kind: "pageGlobal",
				property: ".__NEXT_DATA__.gip",
				valuePattern: new RegExp("true"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "next-js-page-router-ssr:pageGlobal:1",
				kind: "pageGlobal",
				property: ".__NEXT_DATA__.gssp",
				valuePattern: new RegExp("true"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"next-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "nghttpx-http-2-proxy",
		name: "nghttpx - HTTP/2 proxy",
		website: "https://nghttp2.org",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "nghttpx-http-2-proxy:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("nghttpx nghttp2/?([\\d.]+)?"),
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
		id: "nginx",
		name: "Nginx",
		website: "https://nginx.org/en",
		description: "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
		icon: "Nginx.svg",
		categories: [
			"server-runtime-infra",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "nginx:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("nginx(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "nginx:responseHeader:1",
				kind: "responseHeader",
				key: "X-Fastcgi-Cache",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:f5:nginx:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "nitropack",
		name: "NitroPack",
		website: "https://nitropack.io/",
		description: "NitroPack creates optimised HTML cache for fast page loading experience.",
		icon: "NitroPack.svg",
		categories: [
			"server-runtime-infra",
			"developer-tooling"
		],
		rules: [
			{
				id: "nitropack:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("NitroPack"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "openbsd-httpd",
		name: "OpenBSD httpd",
		website: "https://man.openbsd.org/httpd.8",
		icon: "OpenBSD httpd.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "openbsd-httpd:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^OpenBSD httpd"),
				description: "Response header matches a known technology marker."
			}
		],
		excludes: [
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:openbsd:openbsd:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "opengse",
		name: "OpenGSE",
		website: "https://code.google.com/p/opengse",
		description: "OpenGSE is a test suite used for testing servlet compliance. It is deployed by using WAR files that are deployed on the server engine.",
		icon: "Google.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "opengse:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("GSE"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "openresty",
		name: "OpenResty",
		website: "https://openresty.org",
		description: "OpenResty is a web platform based on nginx which can run Lua scripts using its LuaJIT engine.",
		icon: "OpenResty.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "openresty:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("openresty(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"nginx"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:openresty:openresty:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "openssl",
		name: "OpenSSL",
		website: "https://openssl.org",
		description: "OpenSSL is a software library for applications that secure communications over computer networks against eavesdropping or need to identify the party at the other end.",
		icon: "OpenSSL.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "openssl:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("OpenSSL(?:/([\\d.]+[a-z]?))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:openssl:openssl:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "oracle-application-server",
		name: "Oracle Application Server",
		website: "https://www.oracle.com/technetwork/middleware/ias/overview/index.html",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "oracle-application-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Oracle[- ]Application[- ]Server(?: Containers for J2EE)?(?:[- ](\\d[\\da-z./]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:oracle:application_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "oracle-http-server",
		name: "Oracle HTTP Server",
		website: "https://oracle.com",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "oracle-http-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Oracle-HTTP-Server(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:oracle:http_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "oracle-web-cache",
		name: "Oracle Web Cache",
		website: "https://oracle.com",
		description: "Oracle Web Cache is a browser and content management server, which improves the performance of web sites.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "oracle-web-cache:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Oracle(?:AS)?[- ]Web[- ]Cache(?:[- /]([\\da-z./]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:oracle:web_cache:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "oracle-weblogic-server",
		name: "Oracle WebLogic Server",
		website: "https://www.oracle.com/java/weblogic/",
		description: "Oracle WebLogic Server is a Java-based application server that provides a platform for developing, deploying, and running enterprise-level Java applications.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa"
			],
			cpe: "cpe:2.3:a:bea:weblogic_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "percona",
		name: "Percona",
		website: "https://www.percona.com",
		description: "Percona server is an opensource, fully compatible, enhanced drop-in replacement for MySQL, providing superior performance, scalability, and instrumentation.",
		icon: "percona.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "phpmyadmin",
		name: "phpMyAdmin",
		website: "https://www.phpmyadmin.net",
		description: "PhpMyAdmin is a free and open-source administration tool for MySQL and MariaDB.",
		icon: "phpMyAdmin.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "phpmyadmin:html:0",
				kind: "html",
				pattern: new RegExp("!\\[CDATA\\[[^<]*PMA_VERSION:\\\"([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "phpmyadmin:html:1",
				kind: "html",
				pattern: new RegExp("(?: \\| phpMyAdmin ([\\d.]+)<\\/title>|PMA_sendHeaderLocation\\(|<link [^>]*href=\"[^\"]*phpmyadmin\\.css\\.php)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "phpmyadmin:dom:2",
				kind: "dom",
				selector: "link[href*='phpmyadmin.css.php']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "phpmyadmin:pageGlobal:3",
				kind: "pageGlobal",
				property: "pma_absolute_uri",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "phpmyadmin:responseHeader:4",
				kind: "responseHeader",
				key: "Set-Cookie",
				valuePattern: new RegExp("phpMyAdmin_https"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php",
			"mysql"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:phpmyadmin:phpmyadmin:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "phppgadmin",
		name: "phpPgAdmin",
		website: "https://phppgadmin.sourceforge.net",
		description: "phpPgAdmin is a web-based administration tool for managing PostgreSQL databases.",
		icon: "phpPgAdmin.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "phppgadmin:html:0",
				kind: "html",
				pattern: new RegExp("(?:<title>phpPgAdmin</title>|<span class=\"appname\">phpPgAdmin)"),
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:phppgadmin_project:phppgadmin:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "phusion-passenger",
		name: "Phusion Passenger",
		website: "https://phusionpassenger.com",
		description: "Phusion Passenger is a free web server and application server with support for Ruby, Python and Node.js.",
		icon: "Phusion Passenger.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "phusion-passenger:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Phusion Passenger ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "phusion-passenger:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Phusion Passenger(?:\\(R\\))? ?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:phusionpassenger:phusion_passenger:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "postgresql",
		name: "PostgreSQL",
		website: "https://www.postgresql.org/",
		description: "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
		icon: "PostgreSQL.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:postgresql:postgresql:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "pouchdb",
		name: "PouchDB",
		website: "https://pouchdb.com",
		description: "PouchDB is an open-source NoSQL database written in JavaScript.",
		icon: "PouchDB.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "pouchdb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/js/pouchdb\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pouchdb:pageGlobal:1",
				kind: "pageGlobal",
				property: "PouchDB.adapter",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "proxmox-ve",
		name: "Proxmox VE",
		website: "https://proxmox.com/en/proxmox-ve",
		description: "Proxmox VE is an open-source virtualisation and containerisation platform that provides a web-based management interface to manage virtual machines, containers, storage, and networking.",
		icon: "Proxmox.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "proxmox-ve:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("pve-api-daemon/[\\d\\.]+"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "pubnub",
		name: "PubNub",
		website: "https://www.pubnub.com",
		description: "PubNub is a platform that operates the Data Stream Network, enabling the connection, delivery, and control of data and logic to support real-time applications at a global scale.",
		icon: "PubNub.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "pubnub:pageGlobal:0",
				kind: "pageGlobal",
				property: "PubNub",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pubnub:pageGlobal:1",
				kind: "pageGlobal",
				property: "PubNubCenter",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pubnub:pageGlobal:2",
				kind: "pageGlobal",
				property: "PubNubOccupancy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pubnub:pageGlobal:3",
				kind: "pageGlobal",
				property: "PubNubPayload",
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
		id: "qiyeku",
		name: "Qiyeku",
		website: "https://www.qiyeku.cn",
		description: "Qiyeku is a Chinese enterprise database that provides business information, company listings, and industry resources for market research and trade connections.",
		icon: "Qiyeku.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "qiyeku:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.qiyeku\\.cn"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rabbitloader",
		name: "RabbitLoader",
		website: "https://rabbitloader.com",
		description: "RabbitLoader is a plugin designed to enhance PageSpeed Insights Score by addressing Core Web Vitals issues including FID, LCP, & CLS.",
		icon: "RabbitLoader.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "rabbitloader:dom:0",
				kind: "dom",
				selector: "link[href*='cfw.rabbitloader.xyz']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium"
			]
		}
	},
	{
		id: "rackcache",
		name: "RackCache",
		website: "https://github.com/rtomayko/rack-cache",
		description: "RackCache is a quick drop-in component to enable HTTP caching for Rack-based applications.",
		icon: "RackCache.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "rackcache:responseHeader:0",
				kind: "responseHeader",
				key: "X-Rack-Cache",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"ruby"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "raspbian",
		name: "Raspbian",
		website: "https://www.raspbian.org/",
		description: "Raspbian is a free operating system for the Raspberry Pi hardware.",
		icon: "Raspbian.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "raspbian:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Raspbian"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "raspbian:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Raspbian"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "red-hat",
		name: "Red Hat",
		website: "https://www.redhat.com",
		description: "Red Hat is an open-source Linux operating system.",
		icon: "Red Hat.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "red-hat:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Red Hat"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "red-hat:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Red Hat"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:redhat:linux:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "redis",
		name: "Redis",
		website: "https://redis.io",
		description: "Redis is an in-memory data structure project implementing a distributed, in-memory key–value database with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indexes.",
		icon: "Redis.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:redislabs:redis:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "redis-object-cache",
		name: "Redis Object Cache",
		website: "https://wprediscache.com",
		icon: "RedisObjectCache.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "redis-object-cache:html:0",
				kind: "html",
				pattern: new RegExp("<!--\\s+Performance optimized by Redis Object Cache"),
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"redis",
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "resin",
		name: "Resin",
		website: "https://caucho.com",
		icon: "Resin.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "resin:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Resin(?:/(\\S*))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:caucho:resin:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "roadrunner",
		name: "RoadRunner",
		website: "https://roadrunner.dev",
		description: "RoadRunner is a high-performance PHP application server, load balancer, and process manager written in Golang.",
		icon: "RoadRunner.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "roadrunner:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("RoadRunner"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rx-web-server",
		name: "RX Web Server",
		website: "https://developers.rokitax.co.uk/projects/rxweb",
		icon: "RXWeb.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "rx-web-server:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("RX-WEB"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "scientific-linux",
		name: "Scientific Linux",
		website: "https://scientificlinux.org",
		description: "Scientific Linux (SL) is a free open-source operating system based on Red Hat Enterprise Linux.",
		icon: "Scientific Linux.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "scientific-linux:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Scientific Linux"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "scientific-linux:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Scientific Linux"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "shelf",
		name: "Shelf",
		website: "https://pub.dev/packages/shelf",
		description: "Shelf is a server framework for Dart.",
		icon: "Dart.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "shelf:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("dart:io with Shelf"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "shelf:responseHeader:1",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("Dart with package:shelf"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"dart"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "simplehttp",
		name: "SimpleHTTP",
		website: "https://example.com",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "simplehttp:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("SimpleHTTP(?:/([\\d.]+))?"),
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
		id: "sitecore-experience-edge",
		name: "Sitecore Experience Edge",
		website: "https://doc.sitecore.com/xp/en/developers/101/developer-tools/experience-edge-for-xm-apis.html",
		description: "Sitecore Experience Edge is a product that optimises content delivery by utilising edge computing and caching technologies to enhance website performance and user experience.",
		icon: "Sitecore.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "sitecore-experience-edge:dom:0",
				kind: "dom",
				selector: "img[src*='edge.sitecorecloud.io']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"graphql",
			"sitecore-experience-platform"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa",
				"recurring",
				"high"
			]
		}
	},
	{
		id: "solr",
		name: "Solr",
		website: "https://lucene.apache.org/solr/",
		description: "Solr is an open-source search platform built on Apache Lucene, used for indexing and searching large-scale datasets.",
		icon: "Solr.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		implies: [
			"lucene"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:apache:solr:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "sql-buddy",
		name: "SQL Buddy",
		website: "https://www.sqlbuddy.com",
		description: "SQL Buddy is an open-source web-based application written in PHP to handle the administration of MySQL and SQLite with the use of a Web browser.",
		icon: "SQL Buddy.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "sql-buddy:html:0",
				kind: "html",
				pattern: new RegExp("(?:<title>SQL Buddy</title>|<[^>]+onclick=\"sideMainClick\\(\"home\\.php)"),
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sqlite",
		name: "SQLite",
		website: "https://www.sqlite.org",
		icon: "SQLite.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:sqlite:sqlite:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "starlet",
		name: "Starlet",
		website: "https://metacpan.org/pod/Starlet",
		description: "Starlet is a high-performance, lightweight web server for Perl applications.",
		icon: "Starlet.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "starlet:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Plack::Handler::Starlet"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"perl"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sunos",
		name: "SunOS",
		website: "https://oracle.com/solaris",
		description: "SunOS is a Unix-branded operating system developed by Sun Microsystems for their workstation and server computer systems.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "sunos:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("SunOS( [\\d\\.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "sunos:responseHeader:1",
				kind: "responseHeader",
				key: "Servlet-engine",
				valuePattern: new RegExp("SunOS( [\\d\\.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:oracle:sunos:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "suse",
		name: "SUSE",
		website: "https://suse.com",
		description: "SUSE is a Linux-based server operating system.",
		icon: "SUSE.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "suse:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("SUSE(?:/?\\s?-?([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "suse:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("SUSE(?:/?\\s?-?([\\d.]+))?"),
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
		id: "tengine",
		name: "Tengine",
		website: "https://tengine.taobao.org",
		description: "Tengine is a web server which is based on the Nginx HTTP server.",
		icon: "Tengine.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "tengine:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Tengine"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "thttpd",
		name: "thttpd",
		website: "https://acme.com/software/thttpd",
		icon: "thttpd.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "thttpd:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("\\bthttpd(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:acme:thttpd:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "tornadoserver",
		name: "TornadoServer",
		website: "https://tornadoweb.org",
		icon: "TornadoServer.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "tornadoserver:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("TornadoServer(?:/([\\d.]+))?"),
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
		id: "twistedweb",
		name: "TwistedWeb",
		website: "https://twistedmatrix.com/trac/wiki/TwistedWeb",
		icon: "TwistedWeb.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "twistedweb:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("TwistedWeb(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ubuntu",
		name: "Ubuntu",
		website: "https://www.ubuntu.com/server",
		description: "Ubuntu is a free and open-source operating system on Linux for the enterprise server, desktop, cloud, and IoT.",
		icon: "Ubuntu.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "ubuntu:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Ubuntu"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "ubuntu:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Ubuntu"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:canonical:ubuntu_linux:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "unifi-os",
		name: "UniFi OS",
		website: "https://www.ui.com/",
		description: "UniFi OS is the operating system for UniFi products, which provides a user interface.",
		icon: "UniFi_OS.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "unifi-os:pageGlobal:0",
				kind: "pageGlobal",
				property: "unifiConstant.VERSION",
				valuePattern: new RegExp("^([\\d+\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"angularjs"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "unix",
		name: "UNIX",
		website: "https://unix.org",
		description: "Unix is a family of multitasking, multiuser computer operating systems.",
		icon: "UNIX.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "unix:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Unix"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:o:unix:unix:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "uvicorn",
		name: "Uvicorn",
		website: "https://www.uvicorn.org",
		description: "Uvicorn is an ASGI server implementation for Python web applications, commonly used with frameworks like FastAPI to enable asynchronous and high-performance handling of web requests.",
		icon: "uvicorn.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "uvicorn:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("uvicorn"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:encode:uvicorn:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "varnish",
		name: "Varnish",
		website: "https://www.varnish-cache.org",
		description: "Varnish is a reverse caching proxy.",
		icon: "Varnish.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "varnish:responseHeader:0",
				kind: "responseHeader",
				key: "Via",
				valuePattern: new RegExp("varnish(?: \\(Varnish/([\\d.]+)\\))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "varnish:responseHeader:1",
				kind: "responseHeader",
				key: "X-Varnish",
				description: "Response header matches a known technology marker."
			},
			{
				id: "varnish:responseHeader:2",
				kind: "responseHeader",
				key: "X-Varnish-Action",
				description: "Response header matches a known technology marker."
			},
			{
				id: "varnish:responseHeader:3",
				kind: "responseHeader",
				key: "X-Varnish-Age",
				description: "Response header matches a known technology marker."
			},
			{
				id: "varnish:responseHeader:4",
				kind: "responseHeader",
				key: "X-Varnish-Cache",
				description: "Response header matches a known technology marker."
			},
			{
				id: "varnish:responseHeader:5",
				kind: "responseHeader",
				key: "X-Varnish-Hostname",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:varnish-software:varnish_cache:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "virtuoso",
		name: "Virtuoso",
		website: "https://virtuoso.openlinksw.com/",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "virtuoso:url:0",
				kind: "url",
				pattern: new RegExp("/sparql"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "virtuoso:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Virtuoso/?([0-9.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "virtuoso:meta:2",
				kind: "meta",
				key: "Copyright",
				valuePattern: new RegExp("^Copyright &copy; \\d{4} OpenLink Software"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "virtuoso:meta:3",
				kind: "meta",
				key: "Keywords",
				valuePattern: new RegExp("^OpenLink Virtuoso Sparql"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "w3-total-cache",
		name: "W3 Total Cache",
		website: "https://www.w3-edge.com/wordpress-plugins/w3-total-cache",
		description: "W3 Total Cache (W3TC) improves the SEO and increases website performance and reducing load times by leveraging features like content delivery network (CDN) integration and the latest best practices.",
		icon: "W3 Total Cache.svg",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "w3-total-cache:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+W3 Total Cache"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "w3-total-cache:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("W3 Total Cache(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "warp",
		name: "Warp",
		website: "https://www.stackage.org/package/warp",
		icon: "Warp.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "warp:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Warp/(\\d+(?:\\.\\d+)+)?$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"haskell"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "weblogic-server",
		name: "Weblogic Server",
		website: "https://www.oracle.com/java/weblogic",
		description: "WebLogic Server is an Application Server that runs on a middle tier, between back-end databases and related applications and browser-based thin clients.",
		icon: "Oracle.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "weblogic-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^WebLogic\\sServer\\s([\\d\\.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"javaserver-pages"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "webrick",
		name: "WEBrick",
		website: "https://docs.ruby-lang.org/en/2.4.0/WEBrick.html",
		description: "WEBrick is a lightweight HTTP server library in Ruby, included in the standard library, primarily used for local development and testing of Ruby web applications.",
		icon: "Ruby.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "webrick:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^WEBrick/([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:ruby-lang:webrick:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "websphere",
		name: "WebSphere",
		website: "https://www.ibm.com/products/websphere-application-server",
		icon: "websphere.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "websphere:cookie:0",
				kind: "cookie",
				key: "(?i)ltpatoken",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:ibm:websphere_application_server:-:*:*:*:*:*:*:*"
		}
	},
	{
		id: "windows-ce",
		name: "Windows CE",
		website: "https://microsoft.com",
		description: "Windows CE is an operating system designed for small footprint devices or embedded systems.",
		icon: "Microsoft.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "windows-ce:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("\\bWinCE\\b"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "windows-server",
		name: "Windows Server",
		website: "https://microsoft.com/windowsserver",
		description: "Windows Server is a brand name for a group of server operating systems.",
		icon: "WindowsServer.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "windows-server:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Win32|Win64"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "winstone-servlet-container",
		name: "Winstone Servlet Container",
		website: "https://winstone.sourceforge.net",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "winstone-servlet-container:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Winstone Servlet (?:Container|Engine) v?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "winstone-servlet-container:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Winstone(?:\\/([\\d.]+))?"),
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
		id: "wordpress-super-cache",
		name: "WordPress Super Cache",
		website: "https://z9.io/wp-super-cache/",
		description: "WordPress Super Cache is a static caching plugin for WordPress.",
		icon: "wp_super_cache.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "wordpress-super-cache:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+WP-Super-Cache"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "wordpress-super-cache:responseHeader:1",
				kind: "responseHeader",
				key: "WP-Super-Cache",
				description: "Response header matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "wp-rocket",
		name: "WP Rocket",
		website: "https://wp-rocket.me",
		description: "WP Rocket is a caching and performance optimisation plugin to improve the loading speed of WordPress websites.",
		icon: "WP Rocket.svg",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "wp-rocket:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+WP Rocket"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "wp-rocket:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/wp-rocket/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wp-rocket:dom:2",
				kind: "dom",
				selector: "style#wpr-usedcss",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "wp-rocket:pageGlobal:3",
				kind: "pageGlobal",
				property: "RocketBrowserCompatibilityChecker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wp-rocket:pageGlobal:4",
				kind: "pageGlobal",
				property: "RocketLazyLoadScripts",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wp-rocket:pageGlobal:5",
				kind: "pageGlobal",
				property: "RocketPreloadLinksConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wp-rocket:pageGlobal:6",
				kind: "pageGlobal",
				property: "rocket_lazy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wp-rocket:pageGlobal:7",
				kind: "pageGlobal",
				property: "rocket_lazyload_css_data",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wp-rocket:responseHeader:8",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("WP Rocket(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "wp-rocket:responseHeader:9",
				kind: "responseHeader",
				key: "X-Rocket-Nginx-Bypass",
				description: "Response header matches a known technology marker."
			},
			{
				id: "wp-rocket:meta:10",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^WP Rocket ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "wpcache",
		name: "wpCache",
		website: "https://wpcache.co",
		description: "WPCache is a static caching plugin for WordPress.",
		icon: "wpCache.png",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "wpcache:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+wpCache"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "wpcache:url:1",
				kind: "url",
				pattern: new RegExp("^https?://[^/]+\\.wpcache\\.co"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "wpcache:responseHeader:2",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("wpCache(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "wpcache:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("wpCache"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "wpcache:meta:4",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("wpCache"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "wpcacheon",
		name: "WPCacheOn",
		website: "https://wpcacheon.io",
		description: "WPCacheOn is a caching and performance optimisation plugin, which improves the loading speed of WordPress websites.",
		icon: "WPCacheOn.svg",
		categories: [
			"server-runtime-infra",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "wpcacheon:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^Optimized by WPCacheOn"),
				description: "Response header matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "xampp",
		name: "XAMPP",
		website: "https://www.apachefriends.org/en/xampp.html",
		icon: "XAMPP.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "xampp:html:0",
				kind: "html",
				pattern: new RegExp("<title>XAMPP(?: Version ([\\d\\.]+))?</title>"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "xampp:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Kai Oswald Seidler"),
				confidence: 10,
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"apache-http-server",
			"mysql",
			"php",
			"perl"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "xano",
		name: "Xano",
		website: "https://www.xano.com",
		description: "Xano is a no-code backend development platform that allows users to build and manage databases, APIs, and server-side logic without writing code.",
		icon: "Xano.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "xano:pageGlobal:0",
				kind: "pageGlobal",
				property: "XanoBaseStorage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "xano:pageGlobal:1",
				kind: "pageGlobal",
				property: "XanoClient",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "xano:pageGlobal:2",
				kind: "pageGlobal",
				property: "XanoCookieStorage",
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
		id: "xitami",
		name: "Xitami",
		website: "https://xitami.com",
		icon: "Xitami.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "xitami:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Xitami(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:xitami:xitami:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "yaws",
		name: "Yaws",
		website: "https://github.com/erlyaws/yaws",
		description: "Yaws (Yet Another Web Server) is an open-source web server designed to deliver dynamic content efficiently. It was developed by Claes (klacke) Wikström and is written in Erlang, a functional programming language.",
		icon: "Yaws.png",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "yaws:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Yaws(?: ([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:yaws:yaws:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "yunohost",
		name: "YunoHost",
		website: "https://yunohost.org",
		description: "YunoHost is a server operating system that is free and open-source, allowing users to host their own web applications, email services, and other online tools. It is based on Debian GNU/Linux.",
		icon: "YunoHost.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "yunohost:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/ynh_portal\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"debian"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:o:yunohost:yunohost:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "zend",
		name: "Zend",
		website: "https://zend.com",
		description: "Zend is a company that provides PHP development tools and solutions, including frameworks, servers, and development environments, to help developers build, deploy, and manage PHP applications.",
		icon: "Zend.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "zend:cookie:0",
				kind: "cookie",
				key: "ZENDSERVERSESSID",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "zend:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Zend(?:Server)?(?:[\\s/]?([0-9.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:zend:zend_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "zope",
		name: "Zope",
		website: "https://zope.org",
		description: "Zope is an open-source web application server and content management framework that helps developers build and manage complex web applications with features like object-oriented programming and scalable architecture.",
		icon: "Zope.svg",
		categories: [
			"server-runtime-infra"
		],
		rules: [
			{
				id: "zope:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Zope/"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:zope:zope:*:*:*:*:*:*:*:*"
		}
	}
] as const satisfies readonly TechnologyDefinition[];
