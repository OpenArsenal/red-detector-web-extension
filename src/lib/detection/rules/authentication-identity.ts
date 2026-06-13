import type { TechnologyDefinition } from '../types';

export const authenticationIdentityTechnologyDefinitions = [
	{
		id: "alliance-auth",
		name: "Alliance Auth",
		website: "https://gitlab.com/allianceauth/allianceauth",
		description: "Alliance Auth is an access management platform designed for Eve Online groups. It controls access to applications and services based on in-game memberships.",
		icon: "Alliance Auth.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "alliance-auth:dom:0",
				kind: "dom",
				selector: "link[rel='stylesheet'][href*='/static/allianceauth/css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"bootstrap",
			"django",
			"font-awesome",
			"jquery",
			"python",
		],
	},
	{
		id: "amazon-cognito",
		name: "Amazon Cognito",
		website: "https://aws.amazon.com/cognito/",
		description: "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps. Amazon Cognito supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect.",
		icon: "Amazon Cognito.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "amazon-cognito:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("cognito-idp\\..+\\.amazonaws\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
		implies: [
			"amazon-web-services",
		],
	},
	{
		id: "apereo-cas",
		name: "Apereo CAS",
		website: "https://www.apereo.org/projects/cas",
		description: "Apereo CAS is an open and well-documented authentication protocol. The primary implementation of the protocol is an open-source Java server component by the same name hosted here, with support for a plethora of additional authentication protocols and features.",
		icon: "Apereo CAS.png",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "apereo-cas:html:0",
				kind: "html",
				pattern: new RegExp("CAS\\s*(?:[–-]|&ndash;)\\s*(?:Central Authentication Service|Service Central d['’]Authentification)", "i"),
				confidence: 95,
				description: "Document HTML contains the Apereo CAS title marker.",
			},
			{
				id: "apereo-cas:text:1",
				kind: "text",
				pattern: new RegExp("CAS – (?:Central Authentication Service|Service Central d'Authentification)"),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"java",
		],
	},
	{
		id: "apple-sign-in",
		name: "Apple Sign-in",
		website: "https://developer.apple.com/sign-in-with-apple/",
		description: "Apple Sign-in is based on OAuth 2.0 and OpenID Connect, and provides a privacy-friendly way for users to sign in to websites and apps.",
		icon: "Apple.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "apple-sign-in:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("appleid\\.auth\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "apple-sign-in:dom:1",
				kind: "dom",
				selector: "a[href*='appleid.apple.com/auth/authorize']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "apple-sign-in:dom:2",
				kind: "dom",
				selector: "#appleid-signin, [data-appleid-signin], meta[name='appleid-signin-client-id']",
				description: "DOM contains Sign in with Apple markers.",
			},
			{
				id: "apple-sign-in:html:5",
				kind: "html",
				pattern: new RegExp("(?:appleid\\.cdn-apple\\.com/appleauth|appleid\\.apple\\.com/auth/authorize|appleid-signin-client-id)", "i"),
				confidence: 95,
				description: "Document HTML contains Sign in with Apple SDK or OAuth markers.",
			},
			{
				id: "apple-sign-in:text:3",
				kind: "text",
				pattern: new RegExp("(Sign (in|up)|Log in|Continue) with Apple"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "apple-sign-in:jsGlobal:4",
				kind: "jsGlobal",
				property: "AppleID",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "applied-csr24",
		name: "Applied CSR24",
		website: "https://www1.appliedsystems.com/en-us/solutions/for-agents/mobility/applied-csr24/?_gl=1*jl1i3u*_up*MQ..*_gs*MQ..&gclid=CjwKCAiAn9a9BhBtEiwAbKg6fvbF0KJMjT1nWOuoNHScUZDHi_lH5kKLqrnAy0DtTbe6LIIgn-toYRoCp4MQAvD_BwE",
		description: "CSR24 is a portal login used by insurance agencies and brokerages that allows clients to access and review their policies.",
		icon: "AppliedCSR24.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "applied-csr24:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("portal\\.csr24\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "applied-csr24:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.csr24\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "applied-csr24:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.csr24\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "auth0",
		name: "Auth0",
		website: "https://auth0.github.io/auth0.js/index.html",
		description: "Auth0 provides authentication and authorisation as a service.",
		icon: "Auth0.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "auth0:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/auth0(?:-js)?\\/([\\d.]+)\\/auth0(?:.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "auth0:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/auth0-js@([\\d.]+)\\/([a-z]+)\\/auth0\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "auth0:dom:2",
				kind: "dom",
				selector: "link[href*='cdn.auth0.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
			cpe: "cpe:2.3:a:auth0:auth0.js:*:*:*:*:*:node.js:*:*",
		},
	},
	{
		id: "auth0-lock",
		name: "Auth0 Lock",
		website: "https://auth0.com/docs/libraries/lock",
		description: "Auth0 Lock enables you to easily add social identity providers, so that your users can log in seamlessly using any desired provider.",
		icon: "Auth0.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "auth0-lock:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/lock\\/([\\d.]+)\\/lock(?:.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"auth0",
		],
	},
	{
		id: "authorized-by",
		name: "authorized.by",
		website: "https://www.authorized.by",
		description: "authorized.by is a service that enables shops to verify products and confirm their authenticity.",
		icon: "authorizedby.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "authorized-by:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.authorized\\.by"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"payg",
				"poa",
			],
		},
	},
	{
		id: "authy",
		name: "Authy",
		website: "https://www.authy.com",
		description: "Authy is a security tool that enables two-factor authentication (2FA) for websites to help protect user accounts from unauthorized access.",
		icon: "Authy.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "authy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.authy\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "azure-ad-b2c",
		name: "Azure AD B2C",
		website: "https://azure.microsoft.com/en-us/services/active-directory/external-identities/b2c/",
		description: "Azure Active Directory B2C is a customer identity access management (CIAM) solution.",
		icon: "AzureADB2C.png",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "azure-ad-b2c:url:0",
				kind: "url",
				pattern: new RegExp("https.+\\.b2clogin\\.com"),
				description: "Page URL matches a known technology marker.",
			},
		],
		implies: [
			"azure",
		],
	},
	{
		id: "clerk",
		name: "Clerk",
		website: "https://clerk.dev",
		description: "Clerk is an authentication and user management platform for web applications.",
		icon: "Clerk.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "clerk:jsGlobal:0",
				kind: "jsGlobal",
				property: "Clerk.authenticateWithMetamask",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clerk:jsGlobal:1",
				kind: "jsGlobal",
				property: "Clerk.openSignIn",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clerk:jsGlobal:2",
				kind: "jsGlobal",
				property: "Clerk.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "facebook-login",
		name: "Facebook Login",
		website: "https://developers.facebook.com/docs/facebook-login/",
		description: "Facebook Login is a way for people to create accounts and log into your app across multiple platforms.",
		icon: "Facebook.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "facebook-login:jsGlobal:0",
				kind: "jsGlobal",
				property: "FB.getLoginStatus",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "getsocial",
		name: "GetSocial",
		website: "https://getsocial.io",
		description: "GetSocial is a social analytics and publishing platform.",
		icon: "GetSocial.png",
		categories: [
			"authentication-identity",
			"analytics",
		],
		rules: [
			{
				id: "getsocial:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.at\\.getsocial\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "getsocial:jsGlobal:1",
				kind: "jsGlobal",
				property: "GETSOCIAL_VERSION",
				valuePattern: new RegExp("(.+)"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "google-sign-in",
		name: "Google Sign-in",
		website: "https://developers.google.com/identity/sign-in/web",
		description: "Google Sign-In is a secure authentication system that reduces the burden of login for users, by enabling them to sign in with their Google account.",
		icon: "Google.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "google-sign-in:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("accounts\\.google\\.com\\/gsi\\/client"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-sign-in:dom:1",
				kind: "dom",
				selector: "iframe[src*='accounts.google.com/o/oauth2'], a[href*='accounts.google.com/o/oauth2']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "google-sign-in:jsGlobal:2",
				kind: "jsGlobal",
				property: "googleSignInClientId",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "jumpcloud",
		name: "JumpCloud",
		website: "https://jumpcloud.com",
		description: "JumpCloud is a cloud-based directory services platform offering single sign-on (SSO) and Active Directory-as-a-Service (ADaaS) functionalities.",
		icon: "JumpCloud.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "jumpcloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jumpcloud\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jumpcloud:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_jumpcloud_user_console_$", "i"),
				description: "Cookie name matches a known technology marker.",
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
	},
	{
		id: "line-login",
		name: "LINE Login",
		website: "https://developers.line.biz/en/services/line-login/",
		description: "LINE Login is an API that allows you to implement a login function into your services, regardless of whether they are web apps or native apps.",
		icon: "LINE.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "line-login:dom:0",
				kind: "dom",
				selector: "a[href*='access.line.me/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "line-login:jsGlobal:1",
				kind: "jsGlobal",
				property: "Constants.authorization_request_url",
				valuePattern: new RegExp("access\\.line\\.me\\/oauth2\\/v([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "linkedin-sign-in",
		name: "Linkedin Sign-in",
		website: "https://www.linkedin.com/developers",
		description: "Linkedin Sign-In is an authentication system that reduces the burden of login for users, by enabling them to sign in with their Linkedin account.",
		icon: "Linkedin.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "linkedin-sign-in:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("platform\\.linkedin\\.com\\/(?:.*)?in\\.js(?:\\?version)?([\\d.]+)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "linkedin-sign-in:jsGlobal:1",
				kind: "jsGlobal",
				property: "OnLinkedInAuth",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "linkedin-sign-in:jsGlobal:2",
				kind: "jsGlobal",
				property: "onLinkedInLoad",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "linkedin-sign-in:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("platform\\.linkedin\\.com\\/(?:.*)?(?:in\\.js(?:\\?version)?([\\d.]+)?|litms\\/utag\\/[^?]+\\.js(?:\\?cb=[\\d]+)?)"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "login-with-amazon",
		name: "Login with Amazon",
		website: "https://developer.amazon.com/apps-and-games/login-with-amazon",
		description: "Login with Amazon allows you use your Amazon user name and password to sign into and share information with participating third-party websites or apps.",
		icon: "Amazon.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "login-with-amazon:jsGlobal:0",
				kind: "jsGlobal",
				property: "onAmazonLoginReady",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "loginradius",
		name: "LoginRadius",
		website: "https://www.loginradius.com",
		description: "LoginRadius is a cloud based SaaS Customer Identity Access Management platform based in Canada.",
		icon: "LoginRadius.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "loginradius:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.loginradius\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "loginradius:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lrcontent\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "loginradius:jsGlobal:2",
				kind: "jsGlobal",
				property: "LoginRadius",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "loginradius:jsGlobal:3",
				kind: "jsGlobal",
				property: "LoginRadiusDefaults",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "loginradius:jsGlobal:4",
				kind: "jsGlobal",
				property: "LoginRadiusSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "loginradius:jsGlobal:5",
				kind: "jsGlobal",
				property: "LoginRadiusUtility",
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
		id: "magiclabs",
		name: "MagicLabs",
		website: "https://magic.link",
		description: "MagicLabs is a platform that simplifies creating and using Web3 wallets by eliminating the need for seed phrases or downloads, providing a way to build on-chain solutions.",
		icon: "MagicLabs.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "magiclabs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.auth\\.magic\\.link"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "magiclabs:jsGlobal:1",
				kind: "jsGlobal",
				property: "Magic.AuthEventOnReceived",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "metamap",
		name: "MetaMap",
		website: "https://www.metamap.com",
		description: "MetaMap is an identity verification platform that provides customizable solutions for gaining customer insights and making informed decisions.",
		icon: "MetaMap.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "metamap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.getmati\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "microsoft-authentication",
		name: "Microsoft Authentication",
		website: "https://github.com/AzureAD/microsoft-authentication-library-for-js",
		description: "The Microsoft Authentication Library for JavaScript enables both client-side and server-side JavaScript applications to authenticate users using Azure AD for work and school accounts (AAD), Microsoft personal accounts (MSA), and social identity providers like Facebook, Google, LinkedIn, Microsoft accounts, etc. through Azure AD B2C service.",
		icon: "Microsoft.svg",
		categories: [
			"authentication-identity",
			"widgets-misc",
		],
		rules: [
			{
				id: "microsoft-authentication:jsGlobal:0",
				kind: "jsGlobal",
				property: "Msal.Authority",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "microsoft-authentication:jsGlobal:1",
				kind: "jsGlobal",
				property: "msal.authorityInstance",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "microsoft-authentication:jsGlobal:2",
				kind: "jsGlobal",
				property: "msalConfig.auth",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "nextauth-js",
		name: "NextAuth.js",
		website: "https://next-auth.js.org",
		description: "NextAuth.js is a complete open-source authentication solution for Next.js applications.",
		icon: "Next-Auth.png",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "nextauth-js:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^__Host\\-next\\-auth\\.csrf\\-token$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "nextauth-js:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^__Secure\\-next\\-auth\\.callback\\-url$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "nextauth-js:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^__host\\-next\\-auth\\.csrf\\-token$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "nextauth-js:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^__secure\\-next\\-auth\\.callback\\-url$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"next-js",
		],
	},
	{
		id: "okta",
		name: "Okta",
		website: "https://developer.okta.com",
		description: "Okta is a platform in the Identity-as-a-Service (IDaaS) category. Okta features include Provisioning, Single Sign-On (SSO), Active Directory (AD) and LDAP integration, the centralized de-provisioning of users, multi-factor authentication (MFA), mobile identity management.",
		icon: "Okta.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "okta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("oktacdn\\.com\\/.+\\/([\\d.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "okta:jsGlobal:1",
				kind: "jsGlobal",
				property: "OktaAuth",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "okta:jsGlobal:2",
				kind: "jsGlobal",
				property: "isOktaEnabled",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "okta:jsGlobal:3",
				kind: "jsGlobal",
				property: "okta.cdnUrlHostname",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "okta:jsGlobal:4",
				kind: "jsGlobal",
				property: "okta.locale",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "okta:jsGlobal:5",
				kind: "jsGlobal",
				property: "oktaCurrentSessionUrl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"poa",
				"recurring",
			],
			cpe: "cpe:2.3:a:okta:*:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "oneall",
		name: "OneAll",
		website: "https://www.oneall.com",
		description: "OneAll is a social login solution enables your users to sign into their accounts on your website or mobile app using their login details from networking sites.",
		icon: "OneAll.png",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "oneall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.oneall\\.com\\/socialize"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oneall:jsGlobal:1",
				kind: "jsGlobal",
				property: "oa_social_login",
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
		id: "oxi-social-login",
		name: "Oxi Social Login",
		website: "https://www.oxiapps.com/",
		description: "Oxi Social Login provides one click login with services like Facebook, Google and many more.",
		icon: "OxiSocialLogin.png",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "oxi-social-login:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("social-login\\.oxiapps\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "passage",
		name: "Passage",
		website: "https://passage.1password.com",
		description: "Passage, a feature provided by 1Password, enables easy implementation of passwordless authentication methods on websites and apps.",
		icon: "Passage.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "passage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.1password\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "passport-js",
		name: "Passport.js",
		website: "https://www.passportjs.org",
		description: "Passport.js is an authentication middleware for Node.js, supporting various strategies to enable user authentication in web applications.",
		icon: "Passport.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "passport-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "Passport.Core",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "passport-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Passport.Core.VERSION",
				valuePattern: new RegExp("([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "passport-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "PassportHandler",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "passport-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "_passport_html",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
		implies: [
			"node-js",
		],
	},
	{
		id: "ringcaptcha",
		name: "RingCaptcha",
		website: "https://ringcaptcha.com",
		description: "RingCaptcha is a full stack service that lets you onboard and verify users with SMS.",
		icon: "RingCaptcha.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "ringcaptcha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.ringcaptcha\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ringcaptcha:jsGlobal:1",
				kind: "jsGlobal",
				property: "RingCaptcha.Widget",
				description: "Page-owned global matches a known technology marker.",
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
	},
	{
		id: "sap-customer-data-cloud-sign-in",
		name: "SAP Customer Data Cloud Sign-in",
		website: "https://www.sap.com/uk/acquired-brands/what-is-gigya.html",
		icon: "SAP.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "sap-customer-data-cloud-sign-in:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gigya\\.com\\/JS\\/gigya\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sap-customer-data-cloud-sign-in:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gigya\\.com\\/js\\/gigya\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "simplesamlphp",
		name: "SimpleSAMLphp",
		website: "https://simplesamlphp.org",
		description: "SimpleSAMLphp is an open-source PHP authentication application that provides support for SAML 2.0 as a Service Provider (SP) or Identity Provider (IdP).",
		icon: "default.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "simplesamlphp:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^SimpleSAML$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "simplesamlphp:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^SimpleSAMLSessionID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "simplesamlphp:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^simplesaml$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "simplesamlphp:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^simplesamlsessionid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:simplesamlphp:simplesamlphp:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "socure",
		name: "Socure",
		website: "https://www.socure.com",
		description: "Socure is an identity management platform that provides tools for verifying, authenticating, and managing digital identities across online services and applications.",
		icon: "Socure.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "socure:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.socure\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "socure:jsGlobal:1",
				kind: "jsGlobal",
				property: "SocureDocVSDK.launch",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "super-socializer",
		name: "Super Socializer",
		website: "https://super-socializer-wordpress.heateor.com",
		description: "Super Socializer is a multipurpose social media plugin for WordPress.",
		icon: "Super Socializer.png",
		categories: [
			"authentication-identity",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "super-socializer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plugins\\/super-socializer\\/.+?ver=([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:heateor:super_socializer:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twilio-authy",
		name: "Twilio Authy",
		website: "https://authy.com",
		description: "Twilio Authy provides Two-factor authentication (2FA) adds an additional layer of protection beyond passwords.",
		icon: "twilio_authy.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "twilio-authy:jsGlobal:0",
				kind: "jsGlobal",
				property: "Authy",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "ulogin",
		name: "uLogin",
		website: "https://ulogin.ru",
		description: "uLogin is a tool that enables its users to get unified access to various Internet services.",
		icon: "uLogin.png",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "ulogin:jsGlobal:0",
				kind: "jsGlobal",
				property: "uLogin.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "userbase",
		name: "Userbase",
		website: "https://userbase.com",
		description: "Userbase is a tool facilitating login integration and user data persistence for static websites.",
		icon: "Userbase.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "userbase:jsGlobal:0",
				kind: "jsGlobal",
				property: "userbase",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "vouched",
		name: "Vouched",
		website: "https://www.vouched.id",
		description: "Vouched is a platform designed to support identity verification across various industries.",
		icon: "Vouched.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "vouched:jsGlobal:0",
				kind: "jsGlobal",
				property: "Vouched",
				description: "Page-owned global matches a known technology marker.",
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
		id: "wwpass",
		name: "WWPass",
		website: "https://www.wwpass.com",
		description: "WWPass is a solution that enables authentication without the use of usernames, simplifying the login process while maintaining security through alternative methods.",
		icon: "WWPass.svg",
		categories: [
			"authentication-identity",
		],
		rules: [
			{
				id: "wwpass:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.wwpass\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wwpass:jsGlobal:1",
				kind: "jsGlobal",
				property: "WWPass.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wwpass:jsGlobal:2",
				kind: "jsGlobal",
				property: "wwpassQRCodeAuth",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"poa",
			],
		},
	},
] as const satisfies readonly TechnologyDefinition[];
