import type { TechnologyDefinition } from '../types';

export const commerceOperationsTechnologyDefinitions = [
	{
		id: "4partners",
		name: "4Partners",
		website: "https://4partners.io/en/",
		description: "4Partners is an international dropshipping service that allows you to launch a ready-made online store.",
		icon: "4Partners.svg",
		categories: [
			"commerce-operations",
		],
		rules: [],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "99minds",
		name: "99minds",
		website: "https://www.99minds.io",
		description: "99minds is an online platform for managing and scaling gift cards, store credit, digital wallets, and loyalty programs.",
		icon: "99minds.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "99minds:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.99minds\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "99minds:jsGlobal:1",
				kind: "jsGlobal",
				property: "_99mindsDataLayer",
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
		id: "addi",
		name: "Addi",
		website: "https://co.addi.com/",
		description: "Addi is a service that allows users to make purchases and pay for them in installments over time.",
		icon: "addi.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "addi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s3\\.amazonaws\\.com\\/widgets\\.addi\\.com\\/bundle\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "adyen",
		name: "Adyen",
		website: "https://www.adyen.com",
		description: "Adyen allows businesses to accept ecommerce, mobile, and point-of-sale payments.",
		icon: "Adyen.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "adyen:jsGlobal:0",
				kind: "jsGlobal",
				property: "adyen.encrypt.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "affirm",
		name: "Affirm",
		website: "https://www.affirm.com",
		description: "Affirm is a loan company that allows users to buy goods or services offered by online merchants and pay off those purchases in fixed monthly payments.",
		icon: "Affirm.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "affirm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.affirm\\.com\\/js\\/v([\\d\\.]+)\\/affirm\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "affirm:dom:1",
				kind: "dom",
				selector: "link[href*='.affirm.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "affirm:jsGlobal:2",
				kind: "jsGlobal",
				property: "_affirm_config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "affirm:jsGlobal:3",
				kind: "jsGlobal",
				property: "affirm.Rollbar",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "afterpay",
		name: "Afterpay",
		website: "https://www.afterpay.com/",
		description: "Afterpay is a 'buy now, pay later' platform that makes it possible to pay off purchased goods in fortnightly instalments.",
		icon: "afterpay.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "afterpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("portal\\.afterpay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "afterpay:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.afterpay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "afterpay:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("present-afterpay\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "afterpay:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("afterpay-products\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "afterpay:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.stripe\\.com\\/v3\\/fingerprinted\\/js\\/elements-afterpay-clearpay-message-.+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "afterpay:dom:5",
				kind: "dom",
				selector: "#afterpay, .afterpay, .AfterpayMessage, [aria-label='Afterpay'], link[href*='/wp-content/plugins/afterpay-gateway-for-woocommerce/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "afterpay:jsGlobal:6",
				kind: "jsGlobal",
				property: "Afterpay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "afterpay:jsGlobal:7",
				kind: "jsGlobal",
				property: "Afterpay.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "afterpay:jsGlobal:8",
				kind: "jsGlobal",
				property: "AfterpayAttractWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "afterpay:jsGlobal:9",
				kind: "jsGlobal",
				property: "AfterpayGenericErrorHtml",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "afterpay:jsGlobal:10",
				kind: "jsGlobal",
				property: "AfterpayWidgetHtml",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "afterpay:jsGlobal:11",
				kind: "jsGlobal",
				property: "afterpay_product",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "afterpay:jsGlobal:12",
				kind: "jsGlobal",
				property: "checkout.enabledpayments.afterpay",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "afterpay:scriptContent:13",
				kind: "scriptContent",
				pattern: new RegExp("AFTERPAY"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "afterpay:jsGlobal:14",
				kind: "jsGlobal",
				property: "AfterPay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			cpe: "cpe:2.3:a:afterpay:afterpay:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "aftership",
		name: "AfterShip",
		website: "https://www.aftership.com",
		description: "AfterShip provides automated shipment tracking as a service.",
		icon: "AfterShip.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "aftership:jsGlobal:0",
				kind: "jsGlobal",
				property: "aftership.__VERSION__",
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
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "aftership-returns-center",
		name: "AfterShip Returns Center",
		website: "https://www.aftership.com/returns",
		description: "AfterShip Returns Center is an interactive self-service return solution.",
		icon: "AfterShip Returns Center.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "aftership-returns-center:url:0",
				kind: "url",
				pattern: new RegExp("https.+\\.returnscenter\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "aftership-returns-center:dom:1",
				kind: "dom",
				selector: "a[href*='.returnscenter.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "airwallex",
		name: "Airwallex",
		website: "https://www.airwallex.com/us",
		description: "Airwallex is a global payments and financial platform for online payments, multi-currency accounts, transfers, and embedded finance.",
		icon: "Airwallex.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "airwallex:dom:0",
				kind: "dom",
				selector: "iframe[title='Airwallex action popup'], link[href*='static.airwallex.com/widgets/sdk-controller/sdk/v1/index.js'], script#airwallex-fraud-api, script[src*='checkout.airwallex.com/'], script[src*='checkout-demo.airwallex.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "airwallex:jsGlobal:1",
				kind: "jsGlobal",
				property: "Airwallex",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "airwallex:jsGlobal:2",
				kind: "jsGlobal",
				property: "_AirwallexSDKs",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "amazon-pay",
		name: "Amazon Pay",
		website: "https://pay.amazon.com",
		description: "Amazon Pay is an online payments processing service that is owned by Amazon. It lets you use the payment methods associated with your Amazon account to make payments for goods and services.",
		icon: "Amazon Pay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "amazon-pay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/amazonpayments(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amazon-pay:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.payments-amazon\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amazon-pay:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("payments\\.amazon\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "amazon-pay:dom:3",
				kind: "dom",
				selector: "img[src*='amazonpay'], [aria-labelledby='pi-amazon'], meta[id='amazon-payments-metadata'], [data-amazon-payments='true']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "amazon-pay:jsGlobal:4",
				kind: "jsGlobal",
				property: "AmazonPayments",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "amazon-pay:jsGlobal:5",
				kind: "jsGlobal",
				property: "OffAmazonPayments",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "amazon-pay:jsGlobal:6",
				kind: "jsGlobal",
				property: "enableAmazonPay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "amazon-pay:jsGlobal:7",
				kind: "jsGlobal",
				property: "onAmazonPaymentsReady",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "amazon-pay:meta:8",
				kind: "meta",
				key: "id",
				valuePattern: new RegExp("amazon-payments-metadata", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "american-express",
		name: "American Express",
		website: "https://www.americanexpress.com",
		description: "American Express, also known as Amex, facilitates electronic funds transfers throughout the world, most commonly through branded credit cards, debit cards and prepaid cards.",
		icon: "Amex.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "american-express:dom:0",
				kind: "dom",
				selector: "[aria-labelledby='pi-american_express']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "amex-express-checkout",
		name: "Amex Express Checkout",
		website: "https://www.americanexpress.com/us/express-checkout/",
		description: "Amex Express Checkout is a service that simplifies the checkout experience by auto-filling necessary cardholder payment data into merchant checkout fields.",
		icon: "amex.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "amex-express-checkout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("aexp-static\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amex-express-checkout:dom:1",
				kind: "dom",
				selector: "img[alt*='We accept Amex']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "antavo",
		name: "Antavo",
		website: "https://antavo.com",
		description: "Antavo is a software platform that provides AI-driven loyalty and promotion management solutions to help businesses design, automate, and analyze customer reward programs.",
		icon: "Antavo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "antavo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.antavo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "antavo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Antavo.AJAX",
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
		id: "apc",
		name: "APC",
		website: "https://www.apc-pli.com",
		description: "APC offers door-to-door parcel and mail delivery.",
		icon: "APC.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "apc:text:0",
				kind: "text",
				pattern: new RegExp("\\APC\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "aplazame",
		name: "Aplazame",
		website: "https://aplazame.com",
		description: "Aplazame is a consumer credit company that provides instant financing service for online purchases. It combines an overtime payment method integrated at the ecommerce checkout with marketing tools to enable ecommerce to use financing as a promotional lever to boost sales.",
		icon: "Aplazame.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "aplazame:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.aplazame\\.com\\/aplazame\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aplazame:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("aplazame\\.com\\/static\\/aplazame\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aplazame:jsGlobal:2",
				kind: "jsGlobal",
				property: "aplazame",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "apple-pay",
		name: "Apple Pay",
		website: "https://www.apple.com/apple-pay",
		description: "Apple Pay is a mobile payment and digital wallet service by Apple that allows users to make payments in person, in iOS apps, and on the web.",
		icon: "Apple.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "apple-pay:dom:0",
				kind: "dom",
				selector: "[aria-labelledby='pi-apple_pay']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "apple-pay:dom:1",
				kind: "dom",
				selector: "script#apple-pay",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "apple-pay:dom:2",
				kind: "dom",
				selector: "script#apple-pay-shop-capabilities",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "apple-pay:dom:3",
				kind: "dom",
				selector: "input#applePayMerchantId",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "apple-pay:jsGlobal:4",
				kind: "jsGlobal",
				property: "ApplePay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apple-pay:jsGlobal:5",
				kind: "jsGlobal",
				property: "applePayButtonClicked",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apple-pay:jsGlobal:6",
				kind: "jsGlobal",
				property: "braintree.applePay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apple-pay:jsGlobal:7",
				kind: "jsGlobal",
				property: "checkout.enabledpayments.applepay",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apple-pay:jsGlobal:8",
				kind: "jsGlobal",
				property: "dw.applepay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apple-pay:jsGlobal:9",
				kind: "jsGlobal",
				property: "enableApplePay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "appstle",
		name: "Appstle",
		website: "https://appstle.com",
		description: "Appstle is a platform that boosts ecommerce revenue through retention-focused customer experiences.",
		icon: "Appstle.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "appstle:jsGlobal:0",
				kind: "jsGlobal",
				property: "AppstleIncluded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "appstle:jsGlobal:1",
				kind: "jsGlobal",
				property: "appstleInit",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "apxium",
		name: "Apxium",
		website: "https://www.apxium.com",
		description: "Apxium is a software solution designed for automating accounts payable processes.",
		icon: "Apxium.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "apxium:dom:0",
				kind: "dom",
				selector: "div > apx-appskin-page-header",
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
		id: "asendia",
		name: "Asendia",
		website: "https://www.asendia.com",
		description: "Asendia is an international mail joint venture of French La Poste and Swiss Post.",
		icon: "Asendia.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "asendia:text:0",
				kind: "text",
				pattern: new RegExp("\\Asendia\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "atome",
		name: "Atome",
		website: "https://www.atome.sg/",
		description: "Atome is a brand that allows users to purchase products online and pay for them in monthly installments.",
		icon: "atome.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "atome:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gateway\\.apaylater\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "atome:jsGlobal:1",
				kind: "jsGlobal",
				property: "atomeWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "australia-post",
		name: "Australia Post",
		website: "https://auspost.com.au",
		description: "Australia Post is the government business enterprise that provides postal services in Australia.",
		icon: "AusPost.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "australia-post:text:0",
				kind: "text",
				pattern: new RegExp("\\bAusPost\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "australia-post:text:1",
				kind: "text",
				pattern: new RegExp("\\bAustralia Post\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "authorize-net",
		name: "authorize.net",
		website: "https://www.authorize.net",
		description: "Authorize.net is a secure online payment gateway service that enables businesses to accept payments through various channels, such as ecommerce websites, mobile devices, and retail stores, providing a trusted platform for processing credit card and electronic cheque payments.",
		icon: "authorize.net.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "authorize-net:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.authorize\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "authorize-net:jsGlobal:1",
				kind: "jsGlobal",
				property: "config.authorizenet_public_client_key",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "authorize-net:header:2",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.authorize\\.net\\s", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "authorize-net:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.authorize\\.net\\s", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "auxilia",
		name: "Auxilia",
		website: "https://www.theauxilia.com/",
		description: "Auxilia is a software solution designed to streamline donor management processes for nonprofits.",
		icon: "Auxilia.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "auxilia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.theauxilia\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "auxilia:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^messagesUtk$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "auxilia:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^messagesutk$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "b2c-europe",
		name: "B2C Europe",
		website: "https://www.b2ceurope.eu/",
		description: "B2C Europe offers logistic solutions for your ecommerce businesses.",
		icon: "B2C Europe.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "b2c-europe:text:0",
				kind: "text",
				pattern: new RegExp("\\bB2C Europe\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "barion",
		name: "Barion",
		website: "https://www.barion.com",
		description: "Barion is a payment gateway and card acceptance system facilitating secure online transactions for businesses and consumers.",
		icon: "Barion.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "barion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixel\\.barion\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "barion:jsGlobal:1",
				kind: "jsGlobal",
				property: "BarionAnalyticsObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "barion:jsGlobal:2",
				kind: "jsGlobal",
				property: "barion_pixel_id",
				description: "Page-owned global matches a known technology marker.",
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
		id: "beans",
		name: "Beans",
		website: "https://www.trybeans.com/",
		description: "Beans is a provider of ecommerce loyalty programs.",
		icon: "Beans.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "beans:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.trybeans\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "beans:jsGlobal:1",
				kind: "jsGlobal",
				property: "Beans3",
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
		id: "billbee",
		name: "Billbee",
		website: "https://www.billbee.io/",
		description: "Billbee is an order processing and inventory management solution.",
		icon: "Billbee.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "billbee:text:0",
				kind: "text",
				pattern: new RegExp("\\bBillbee\\b"),
				description: "Page text contains a known technology marker.",
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
		id: "binance-pay",
		name: "Binance Pay",
		website: "https://pay.binance.com",
		description: "Binance Pay is a contactless, borderless, and secure cryptocurrency payment technology designed by Binance.",
		icon: "Binance.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "binance-pay:dom:0",
				kind: "dom",
				selector: "a[href*='app.binance.com/payment/secpay']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "bitcoin",
		name: "Bitcoin",
		website: "https://en.wikipedia.org/wiki/Bitcoin",
		description: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
		icon: "Bitcoin.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bitcoin:dom:0",
				kind: "dom",
				selector: "[aria-labelledby='pi-bitcoin']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:bitcoin:bitcoin:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "bitpay",
		name: "BitPay",
		website: "https://www.bitpay.com",
		description: "BitPay is a payment processing platform that enables websites to accept bitcoins as a form of payment.",
		icon: "BitPay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bitpay:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("bitpay"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "bitpay:dom:1",
				kind: "dom",
				selector: "form[action*='bitpay.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "bleckmann",
		name: "Bleckmann",
		website: "https://www.bleckmann.com",
		description: "Bleckmann is a logistics provider offering services to fashion and lifestyle brands, ensuring they meet customer delivery promises.",
		icon: "Bleckmann.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bleckmann:jsGlobal:0",
				kind: "jsGlobal",
				property: "API_BASE_URL_FE",
				valuePattern: new RegExp("\\.bleckmann\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bleckmann:jsGlobal:1",
				kind: "jsGlobal",
				property: "apiCall",
				valuePattern: new RegExp("\\.bleckmann\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bobgo",
		name: "Bobgo",
		website: "https://www.bobgo.co.za",
		description: "Bobgo is a smart shipping and order management solution designed to streamline logistics and simplify order fulfillment for businesses.",
		icon: "Bobgo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bobgo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.bobgo\\.co\\.za"),
				description: "Script content contains a bounded technology signature.",
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
		id: "bolt-payments",
		name: "Bolt Payments",
		website: "https://www.bolt.com/",
		description: "Bolt powers a checkout experience designed to convert shoppers.",
		icon: "Bolt.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bolt-payments:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.bolt\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bolt-payments:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("account\\.bolt\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bolt-payments:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("connect\\.bolt\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "bolt-payments:dom:3",
				kind: "dom",
				selector: "bolt-checkout-button",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bolt-payments:jsGlobal:4",
				kind: "jsGlobal",
				property: "BoltCheckout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bolt-payments:jsGlobal:5",
				kind: "jsGlobal",
				property: "BoltPopup",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bolt-payments:jsGlobal:6",
				kind: "jsGlobal",
				property: "BoltTrack",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bolt-payments:jsGlobal:7",
				kind: "jsGlobal",
				property: "bolt_callbacks",
				description: "Page-owned global matches a known technology marker.",
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
		id: "bon-loyalty",
		name: "BON Loyalty",
		website: "https://bonloyalty.com",
		description: "BON Loyalty is a free rewards and referrals app that helps merchants increase customer engagement with captivating points, rewards & referral program.",
		icon: "BON Loyalty.svg",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bon-loyalty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.bonloyalty\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bon-loyalty:jsGlobal:1",
				kind: "jsGlobal",
				property: "bonShopInfo.appearance",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "bontii",
		name: "Bontii",
		website: "https://bontii.dk",
		description: "Bontii is a subscription module facilitating integration between webshop and payment solutions.",
		icon: "Bontii.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bontii:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.bontii\\.dk\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "bootpay",
		name: "Bootpay",
		website: "https://www.bootpay.co.kr",
		description: "Bootpay is a payment integration service from Korea that enables businesses to process online transactions.",
		icon: "Bootpay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bootpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bootpay\\.co\\.kr\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "borderfree",
		name: "Borderfree",
		website: "https://www.borderfree.com",
		description: "Borderfree is an cross-border ecommerce solutions provider.",
		icon: "Borderfree.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "borderfree:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("global\\.prd\\.borderfree\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "borderfree:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("wm\\.prd\\.borderfree\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "borderfree:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("bfx-objects\\.prd\\.borderfree\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "borderfree:jsGlobal:3",
				kind: "jsGlobal",
				property: "bfx._apiKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "borderfree:jsGlobal:4",
				kind: "jsGlobal",
				property: "bfx._brand",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "borderfree:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^bfx\\.apiKey:$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "borderfree:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^bfx\\.country:$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "borderfree:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^bfx\\.language$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "borderfree:cookie:8",
				kind: "cookie",
				keyPattern: new RegExp("^bfx\\.logLevel$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "borderfree:cookie:9",
				kind: "cookie",
				keyPattern: new RegExp("^bfx\\.apikey:$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "borderfree:cookie:10",
				kind: "cookie",
				keyPattern: new RegExp("^bfx\\.loglevel$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "boxtal",
		name: "Boxtal",
		website: "https://www.boxtal.com",
		description: "Boxtal is a cloud-based multi-carrier shipping solution.",
		icon: "Boxtal.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "boxtal:text:0",
				kind: "text",
				pattern: new RegExp("\\bBoxtal\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "bpost",
		name: "Bpost",
		website: "https://www.bpost.be",
		description: "Bpost, also known as the Belgian Post Group, is the Belgian company responsible for the delivery of national and international mail.",
		icon: "Bpost.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bpost:text:0",
				kind: "text",
				pattern: new RegExp("\\bBpost\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "braintree",
		name: "Braintree",
		website: "https://www.braintreepayments.com",
		description: "Braintree, a division of PayPal, specializes in mobile and web payment systems for ecommerce companies. Braintree provides clients with a merchant account and a payment gateway.",
		icon: "Braintree.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "braintree:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.braintreegateway\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "braintree:jsGlobal:1",
				kind: "jsGlobal",
				property: "Braintree",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "braintree:jsGlobal:2",
				kind: "jsGlobal",
				property: "Braintree.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "bread",
		name: "Bread",
		website: "https://www.breadpayments.com",
		description: "Bread is a buy now, pay later platform for ecommerce websites.",
		icon: "Bread.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bread:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getbread\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bread:dom:1",
				kind: "dom",
				selector: "#bread-mini-cart-btn",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bread:jsGlobal:2",
				kind: "jsGlobal",
				property: "BreadCalc",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bread:jsGlobal:3",
				kind: "jsGlobal",
				property: "BreadError",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bread:jsGlobal:4",
				kind: "jsGlobal",
				property: "BreadLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bread:jsGlobal:5",
				kind: "jsGlobal",
				property: "BreadShopify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bread:jsGlobal:6",
				kind: "jsGlobal",
				property: "bread.appHost",
				description: "Page-owned global matches a known technology marker.",
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
		id: "bridgerpay",
		name: "BridgerPay",
		website: "https://bridgerpay.com",
		description: "BridgerPay is a payment operations platform designed to scale with businesses of any size.",
		icon: "BridgerPay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bridgerpay:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.bridgerpay\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "bridgerpay:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.bridgerpay\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "briqpay",
		name: "Briqpay",
		website: "https://briqpay.com",
		description: "Briqpay is a payment optimization platform that streamlines business payment processes through its Payments Unleashed solution.",
		icon: "Briqpay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "briqpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.briqpay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "briqpay:jsGlobal:1",
				kind: "jsGlobal",
				property: "_briqpay.checkout",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "brt",
		name: "BRT",
		website: "https://www.brt.it",
		description: "BRT, also known as Bartolini, is an Italian-based logistics service provider.",
		icon: "BRT.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "brt:text:0",
				kind: "text",
				pattern: new RegExp("\\bBRT\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "bsecure",
		name: "bSecure",
		website: "https://www.bsecure.pk",
		description: "bSecure is an one-click checkout solution for selling your products all across the globe instantly.",
		icon: "bSecure.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "bsecure:jsGlobal:0",
				kind: "jsGlobal",
				property: "bsecure_js_object",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "buckydrop",
		name: "BuckyDrop",
		website: "https://www.buckydrop.com",
		description: "BuckyDrop is a drop-shipping service specializing in sourcing, fulfillment, and operations across Chinese ecommerce platforms.",
		icon: "BuckyDrop.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "buckydrop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.mybuckyshop\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buckydrop:jsGlobal:1",
				kind: "jsGlobal",
				property: "buckyShop.addCSS",
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
		id: "budbee",
		name: "Budbee",
		website: "https://app.budbee.com/",
		description: "Budbee is a tech company that operates a logistics service for ecommerce.",
		icon: "Budbee.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "budbee:text:0",
				kind: "text",
				pattern: new RegExp("\\bBudbee\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "captain-up",
		name: "Captain Up",
		website: "https://captainup.com",
		description: "Captain Up is a service that enhances user engagement and retention by utilising gamification, social, and communication tools to maximise user engagement and lifetime value.",
		icon: "CaptainUp.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "captain-up:jsGlobal:0",
				kind: "jsGlobal",
				property: "captain",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "carecart",
		name: "CareCart",
		website: "https://carecart.io/abandoned-cart-recovery-app",
		description: "CareCart is a smart app to recover big value carts on all sizes of shopify stores.",
		icon: "CareCart.png",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "carecart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.carecart\\.io\\/api\\/abandoned-cart\\/"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "carecart-cartly-abandoned-cart-recovery",
		name: "CareCart Cartly Abandoned Cart Recovery",
		website: "https://carecart.io/cartly-abandoned-cart-recovery/",
		description: "Cartly Abandoned Cart Recovery by CareCart is a service that helps ecommerce businesses recover lost sales by sending automated reminders to customers who abandon their shopping carts.",
		icon: "CareCart.svg",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "carecart-cartly-abandoned-cart-recovery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.carecart\\.io\\/api\\/abandoned-cart\\/"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "cartbot",
		name: "CartBot",
		website: "https://apps.shopify.com/cartbot-auto-add-to-cart",
		description: "CartBot is a tool that automatically adds products or gifts to a customer's cart based on predefined conditions.",
		icon: "CartBot.svg",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "cartbot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-app\\.cart-bot\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cartbot:jsGlobal:1",
				kind: "jsGlobal",
				property: "CartBotScriptAppended",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "carthook",
		name: "CartHook",
		website: "https://carthook.com",
		description: "CartHook is a solution for creating post-purchase upsell offers on Shopify.",
		icon: "CartHook.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "carthook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.c\\.carthook\\.com"),
				description: "Script source URL matches a known technology marker.",
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
			"shopify",
		],
	},
	{
		id: "cartrocket",
		name: "CartRocket",
		website: "https://cartrocket.com",
		description: "CartRocket is a tool for cart abandonment analytics, providing insights into dropped transactions to improve recovery strategies.",
		icon: "CartRocket.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "cartrocket:dom:0",
				kind: "dom",
				selector: "iframe[src*='cartrocket.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cartrocket:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^crt_conv_cp_vtr$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cartstack",
		name: "CartStack",
		website: "https://www.cartstack.com",
		description: "CartStack is a SaaS solution that allows any company with an ecommerce site or reservation system to increase revenue through reminding/encouraging consumers to return to their abandoned cart and complete their purchase.",
		icon: "CartStack.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "cartstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.cartstack\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cartstack:jsGlobal:1",
				kind: "jsGlobal",
				property: "_cartstack",
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
		id: "cashew",
		name: "cashew",
		website: "https://www.cashewpayments.com",
		description: "Cashew is a buy now, pay later platform that allows its customers to shop now and pay later in equal monthly installments.",
		icon: "cashew.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "cashew:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cashewpayments\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cashew:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.cashewpayments\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "cashew:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.cashewpayments\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "cashew-payments",
		name: "Cashew Payments",
		website: "https://www.cashewpayments.com",
		description: "Cashew Payments is a buy now, pay later platform that allows its customers to shop now and pay later in equal monthly installments.",
		icon: "Cashew Payments.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "cashew-payments:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cashewpayments\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cashew-payments:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.cashewpayments\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "catch",
		name: "Catch",
		website: "https://www.getcatch.com/",
		description: "Catch is a payment solution which allows merchants to use payments via bank payments instead of credit/debit cards.",
		icon: "Catch.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "catch:jsGlobal:0",
				kind: "jsGlobal",
				property: "Catch",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "celeritas",
		name: "Celeritas",
		website: "https://celeritastransporte.com",
		description: "Celeritas offers transportation logistics services for package deliveries.",
		icon: "Celeritas.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "celeritas:text:0",
				kind: "text",
				pattern: new RegExp("\\bCeleritas\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "chargeafter",
		name: "ChargeAfter",
		website: "https://chargeafter.com/",
		description: "ChargeAfter is a platform that connects retailers and lenders to offer consumers personalized Point of Sale Financing options at checkout from multiple lenders.",
		icon: "ChargeAfter.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "chargeafter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.chargeafter\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chargeafter:jsGlobal:1",
				kind: "jsGlobal",
				property: "ChargeAfter",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "chargebee",
		name: "Chargebee",
		website: "https://www.chargebee.com",
		description: "Chargebee is a PCI Level 1 certified recurring billing platform for SaaS and subscription-based businesses.",
		icon: "Chargebee.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "chargebee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.chargebee\\.com\\/v([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chargebee:jsGlobal:1",
				kind: "jsGlobal",
				property: "Chargebee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chargebee:jsGlobal:2",
				kind: "jsGlobal",
				property: "chargebeeTrackFunc",
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
		id: "chatt",
		name: "Chatt",
		website: "https://getchatt.com",
		description: "Chatt is an all-in-one platform that provides businesses with reviews, messaging, and payment solutions.",
		icon: "Chatt.svg",
		categories: [
			"commerce-operations",
			"email-messaging",
			"community-ugc",
		],
		rules: [
			{
				id: "chatt:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("getchatt\\.com"),
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
		id: "checkout-com",
		name: "Checkout.com",
		website: "https://www.checkout.com",
		description: "Checkout.com is an international payment platform that processes different payment methods across a variety of currencies.",
		icon: "Checkout.com.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "checkout-com:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.checkout\\.com\\/js\\/.+js(?:\\?ver=)?([\\d\\.]+)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "chronofresh",
		name: "Chronofresh",
		website: "https://www.chronofresh.fr",
		description: "Chronofresh is an express transport service for food products.",
		icon: "Chronopost.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "chronofresh:text:0",
				kind: "text",
				pattern: new RegExp("\\bChronofresh\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "chronopost",
		name: "Chronopost",
		website: "https://www.chronopost.fr",
		description: "Chronopost provides a domestic and international express shipping and delivery service.",
		icon: "Chronopost.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "chronopost:text:0",
				kind: "text",
				pattern: new RegExp("\\bChronopost\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "citruspay",
		name: "CitrusPay",
		website: "https://consumers.citruspay.com/",
		description: "CitrusPay provides payement gateway and wallet services.",
		icon: "citruspay.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "citruspay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("checkout-static\\.citruspay\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "citymail",
		name: "CityMail",
		website: "https://www.citymail.se",
		description: "CityMail is a private postal organisation operating in Sweden.",
		icon: "CityMail.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "citymail:text:0",
				kind: "text",
				pattern: new RegExp("\\bCitymail\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "cleverinsight",
		name: "CleverInsight",
		website: "https://clever-insight.com",
		description: "CleverInsight is a tool that helps businesses measure customer satisfaction and design loyalty programs to improve customer retention.",
		icon: "CleverInsight.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "cleverinsight:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.clevernps.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "coinbase-commerce",
		name: "Coinbase Commerce",
		website: "https://commerce.coinbase.com/",
		description: "Coinbase Commerce is a platform that enables merchants to accept cryptocurrency payments.",
		icon: "Coinbase.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "coinbase-commerce:dom:0",
				kind: "dom",
				selector: "a[href^='https://commerce.coinbase.com/checkout/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "colis-priv",
		name: "Colis Privé",
		website: "https://www.colisprive.fr",
		description: "Colis Privé is a private parcel delivery service provider specialised in last-mile delivery.",
		icon: "Colis Prive.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "colis-priv:text:0",
				kind: "text",
				pattern: new RegExp("\\bColis Priv[eé]\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "colissimo",
		name: "Colissimo",
		website: "https://www.colissimo.entreprise.laposte.fr",
		description: "Colissimo is a 'drop off' parcel delivery service.",
		icon: "DPD.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "colissimo:text:0",
				kind: "text",
				pattern: new RegExp("\\bColissimo\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "conekta",
		name: "Conekta",
		website: "https://conekta.com",
		description: "Conekta is a Mexican payment platform.",
		icon: "Conekta.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "conekta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("conektaapi\\/v([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "conekta:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.conekta\\.\\w+\\/js\\/(?:v([\\d.]+)|)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "convertim",
		name: "Convertim",
		website: "https://www.convertim.com",
		description: "Convertim is an ecommerce checkout platform.",
		icon: "Convertim.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "convertim:jsGlobal:0",
				kind: "jsGlobal",
				property: "convertimSetup",
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
	{
		id: "correos",
		name: "Correos",
		website: "https://www.correos.es",
		description: "Correos is a state-owned company responsible for providing postal service in Spain.",
		icon: "Correos.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "correos:text:0",
				kind: "text",
				pattern: new RegExp("\\bCorreos\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "corso",
		name: "Corso",
		website: "https://corso.com",
		description: "Corso is an all-in-one platform for Shopify that provides shipping protection, returns, exchanges, and warranty management to streamline post-purchase processes.",
		icon: "Corso.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "corso:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.corso\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "coureon",
		name: "Coureon",
		website: "https://www.coureon.com",
		description: "Coureon is a digital logistics carrier for international shipping.",
		icon: "Coureon.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "coureon:text:0",
				kind: "text",
				pattern: new RegExp("\\bCoureon\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "ctt",
		name: "CTT",
		website: "https://www.ctt.pt",
		description: "CTT operates as the national postal service of Portugal.",
		icon: "CTT.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "ctt:text:0",
				kind: "text",
				pattern: new RegExp("\\bTourline Express\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "ctt:text:1",
				kind: "text",
				pattern: new RegExp("\\bCTT\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "cubyn",
		name: "Cubyn",
		website: "https://www.cubyn.com",
		description: "Cubyn is B2B logistics company headquartered in France.",
		icon: "Cubyn.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "cubyn:text:0",
				kind: "text",
				pattern: new RegExp("\\bCubyn\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "cubyn:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cubyn\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cubyn:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("\\.cubyn\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
	},
	{
		id: "culqi",
		name: "Culqi",
		website: "https://culqi.com",
		description: "Culqi is a payment processing platform that enables businesses to accept card payments and receive funds on the same day.",
		icon: "Culqi.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "culqi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.culqi\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "culqi:jsGlobal:1",
				kind: "jsGlobal",
				property: "Culqi3DS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "culqi:jsGlobal:2",
				kind: "jsGlobal",
				property: "CulqiCheckout",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "cybersource",
		name: "Cybersource",
		website: "https://www.cybersource.com/",
		description: "Cybersource is an ecommerce credit card payment system solution.",
		icon: "cybersource.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "cybersource:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cybersource\\..+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "dachser",
		name: "Dachser",
		website: "https://www.dachser.com",
		description: "Dachser is a German freight company.",
		icon: "Dachser.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "dachser:text:0",
				kind: "text",
				pattern: new RegExp("\\bDachser\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "deko",
		name: "Deko",
		website: "https://www.dekopay.com",
		description: "Deko is a retail finance technology platform used by UK merchants, formerly known as Pay4Later.",
		icon: "Deko.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "deko:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("secure\\.dekopay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "delivengo",
		name: "Delivengo",
		website: "https://mydelivengo.laposte.fr/",
		description: "Delivengo is an international shipping service powered by La Poste.",
		icon: "La Poste.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "delivengo:text:0",
				kind: "text",
				pattern: new RegExp("\\bDelivengo\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "deliverr",
		name: "Deliverr",
		website: "https://deliverr.com",
		description: "Deliverr is a fulfillment service that facilitates shipping services for ecommerce businesses.",
		icon: "Deliverr.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "deliverr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fast-tags\\.deliverr\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "deliverr:jsGlobal:1",
				kind: "jsGlobal",
				property: "deliverrScript",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
		implies: [
			"cart-functionality",
		],
	},
	{
		id: "descartes",
		name: "Descartes",
		website: "https://www.descartes.com",
		description: "Descartes is a technology platform that offers solutions for logistics and supply chain management.",
		icon: "Descartes.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "descartes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.descartes\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "descartes:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("ies\\.descartes"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "deuna",
		name: "DEUNA",
		website: "https://www.deuna.com",
		description: "DEUNA is an AI-powered platform that orchestrates global payments and enhances commerce performance.",
		icon: "DEUNA.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "deuna:jsGlobal:0",
				kind: "jsGlobal",
				property: "DeunaCDL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "deuna:jsGlobal:1",
				kind: "jsGlobal",
				property: "DunaCheckout",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "deutsche-post",
		name: "Deutsche Post",
		website: "https://www.deutschepost.de",
		description: "Deutsche Post is a German multinational package delivery and supply chain management company in Germany.",
		icon: "Deutsche Post.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "deutsche-post:text:0",
				kind: "text",
				pattern: new RegExp("\\bDeutsche Post\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "dhl",
		name: "DHL",
		website: "https://www.dhl.com",
		description: "DHL is an international courier, package delivery and express mail service, which is a division of the German logistics firm Deutsche Post.",
		icon: "DHL.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "dhl:text:0",
				kind: "text",
				pattern: new RegExp("\\bDHL\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "dhl:dom:1",
				kind: "dom",
				selector: "img[alt*='dhl' i]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "dhl:text:2",
				kind: "text",
				pattern: new RegExp("\\bUK Mail\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "dividebuy",
		name: "DivideBuy",
		website: "https://dividebuy.co.uk/",
		description: "Dividebuy provides retailer financing solutions.",
		icon: "DivideBuy.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "dividebuy:dom:0",
				kind: "dom",
				selector: "div[class*='dividebuy-softcredit']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "dividebuy:jsGlobal:1",
				kind: "jsGlobal",
				property: "display_dividebuy_modal",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "divido",
		name: "Divido",
		website: "https://www.divido.com/",
		description: "Divio is a Buy now pay later solution. Divido provided whitelabel platform connects lenders, retailers and channel partners at the point of sale",
		icon: "Divido.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "divido:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.divido\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "doxo",
		name: "doxo",
		website: "https://www.doxo.com",
		description: "doxo is a bill payment service that enables users to manage and pay multiple bills in one place through a single account and login.",
		icon: "doxo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "doxo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.doxo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "doxo:jsGlobal:1",
				kind: "jsGlobal",
				property: "doxoConnectWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dpd",
		name: "DPD",
		website: "https://www.dpd.com",
		description: "DPD is an international parcel delivery service for sorter compatible parcels.",
		icon: "DPD.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "dpd:text:0",
				kind: "text",
				pattern: new RegExp("\\bDPD\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "dwolla",
		name: "Dwolla",
		website: "https://www.dwolla.com",
		description: "Dwolla is a payment platform that enables businesses to transfer funds electronically through the Automated Clearing House (ACH) network.",
		icon: "Dwolla.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "dwolla:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.dwolla\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "dx",
		name: "DX",
		website: "https://www.dxdelivery.com",
		description: "DX (also known as DX Freight) is a British mail, courier and logistics company.",
		icon: "DX.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "dx:text:0",
				kind: "text",
				pattern: new RegExp("\\bDX\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "easylog",
		name: "Easylog",
		website: "https://www.easylog.com.br",
		description: "EasyLog is a logistics company based in Brazil.",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "easylog:text:0",
				kind: "text",
				pattern: new RegExp("\\bEasylog\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "eber",
		name: "Eber",
		website: "https://eber.co",
		description: "Eber is a consumer engagement management platform for retail, F&B, hotels, and more.",
		icon: "Eber.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "eber:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.eber\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "eber:jsGlobal:1",
				kind: "jsGlobal",
				property: "Eber",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eber:jsGlobal:2",
				kind: "jsGlobal",
				property: "EberVars.channelId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eber:jsGlobal:3",
				kind: "jsGlobal",
				property: "intervalEberJQuery",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "ecovium",
		name: "Ecovium",
		website: "https://ecovium.com",
		description: "Ecovium is an end-to-end logistics company in Germany.",
		icon: "Ecovium.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "ecovium:text:0",
				kind: "text",
				pattern: new RegExp("\\bMHP\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "ecovium:text:1",
				kind: "text",
				pattern: new RegExp("\\bEcovium\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "envialia",
		name: "Envialia",
		website: "https://www.envialia.com",
		description: ".",
		icon: "Envialia.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "envialia:text:0",
				kind: "text",
				pattern: new RegExp("\\bEnvialia\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "enviopack",
		name: "Enviopack",
		website: "https://enviopack.com",
		description: "Enviopack is a technological solution designed to optimize ecommerce logistics by improving efficiency and streamlining operational processes.",
		icon: "Enviopack.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "enviopack:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.enviopack\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "esw",
		name: "ESW",
		website: "https://esw.com",
		description: "ESW (eShopWorld) is a company providing payments, shipping, and delivery services focusing on cross-border ecommerce.",
		icon: "ESW.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "esw:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("Eswhooks\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "esw:jsGlobal:1",
				kind: "jsGlobal",
				property: "eshopworld",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "esw:jsGlobal:2",
				kind: "jsGlobal",
				property: "eswRetailerDisplayConfiguration",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "esw:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("eswhooks\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "etika",
		name: "etika",
		website: "https://etika.com",
		description: "etika is a fintech company based in Manchester which provide buy now pay later solution.",
		icon: "etika.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "etika:jsGlobal:0",
				kind: "jsGlobal",
				property: "EtikaProductJsHelper",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "etika:jsGlobal:1",
				kind: "jsGlobal",
				property: "etikaBannerInject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "etika:jsGlobal:2",
				kind: "jsGlobal",
				property: "etikaGlobal",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "eway-payments",
		name: "eWAY Payments",
		website: "https://www.eway.com.au/",
		description: "eWAY is a global omnichannel payment provider. The company processes secure credit card payments for merchants. eWay works through eCommerce.",
		icon: "eway.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "eway-payments:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("secure\\.ewaypayments\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "eway-payments:html:1",
				kind: "html",
				pattern: new RegExp("<img [^>]*src=\"[^/]*\\/\\/[^/]*eway\\.com"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "eway-payments:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("api\\.ewaypayments\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "eway-payments:jsGlobal:3",
				kind: "jsGlobal",
				property: "eWAY.eventHandler",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eway-payments:jsGlobal:4",
				kind: "jsGlobal",
				property: "eWAYUtils",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eway-payments:jsGlobal:5",
				kind: "jsGlobal",
				property: "ewayVars",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "exemptify",
		name: "Exemptify",
		website: "https://modules4u.biz/exemptify",
		description: "Exemptify allows you to conduct proper EU B2B transactions by validating EU VAT IDs.",
		icon: "Exemptify.png",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "exemptify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.modules4u\\.biz\\/shopify\\/exemptify"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "exemptify:jsGlobal:1",
				kind: "jsGlobal",
				property: "ExemptifyTriggerUpdate",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "exemptify:jsGlobal:2",
				kind: "jsGlobal",
				property: "m4u_ex_vat_postfix_txt",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "extend",
		name: "Extend",
		website: "https://www.extend.com",
		description: "Extend is a service that offers brands product and shipping protection, creating a new revenue source while enhancing customer loyalty and trust.",
		icon: "Extend.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "extend:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.helloextend\\.com\\/extend-sdk-client\\/v([\\d.]+)\\/extend-sdk-client\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "extend:jsGlobal:1",
				kind: "jsGlobal",
				property: "Extend",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "eyefitu",
		name: "EyeFitU",
		website: "https://www.eyefitu.com",
		description: "EyeFitU is a Size-as-a-Service AI platform for ecommerce that provides automated sizing intelligence to improve fit accuracy and reduce returns.",
		icon: "EyeFitU.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "eyefitu:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("web-sdk\\.eyefitu\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "eyefitu:jsGlobal:1",
				kind: "jsGlobal",
				property: "eyefitu.version",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eyefitu:jsGlobal:2",
				kind: "jsGlobal",
				property: "eyefituCalls",
				description: "Page-owned global matches a known technology marker.",
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
		id: "facebook-pay",
		name: "Facebook Pay",
		website: "https://pay.facebook.com/",
		description: "Facebook pay is a payment solution which can be used on any site or app outside Facebook ecosystem.",
		icon: "Facebook.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "facebook-pay:dom:0",
				kind: "dom",
				selector: "[aria-labelledby='pi-facebook_pay']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "fat-zebra",
		name: "Fat Zebra",
		website: "https://www.fatzebra.com/",
		description: "Fat Zebra provides a process of accepting credit card payments online.",
		icon: "fatzebra.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "fat-zebra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("paynow\\.pmnts\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fat-zebra:html:1",
				kind: "html",
				pattern: new RegExp("<(?:iframe|img|form)[^>]+paynow\\.pmnts\\.io"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "fat-zebra:html:2",
				kind: "html",
				pattern: new RegExp("<(?:iframe)[^>]+FatZebraFrame"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "fat-zebra:dom:3",
				kind: "dom",
				selector: "iframe[src*='paynow.pmnts.io']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fat-zebra:dom:4",
				kind: "dom",
				selector: "form[action*='paynow.pmnts.io']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fat-zebra:dom:5",
				kind: "dom",
				selector: "iframe[src*='FatZebraFrame']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fat-zebra:html:6",
				kind: "html",
				pattern: new RegExp("<(?:iframe)[^>]+fatzebraframe"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "fat-zebra:dom:7",
				kind: "dom",
				selector: "iframe[src*='paynow.pmnts.io'], form[action*='paynow.pmnts.io'], iframe[src*='FatZebraFrame']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "fedex",
		name: "FedEx",
		website: "https://www.fedex.com",
		description: "FedEx is an American multinational company which focuses on transportation, ecommerce and business services.",
		icon: "FedEx.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "fedex:text:0",
				kind: "text",
				pattern: new RegExp("\\bFedEx\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "feroot",
		name: "Feroot",
		website: "https://www.feroot.com",
		description: "Feroot is a platform for creating PCI DSS 4.0.1–compliant payment pages that ensure safe handling of transaction and customer data.",
		icon: "Feroot.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "feroot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pg\\.feroot\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "finconnect",
		name: "FinConnect",
		website: "https://finconnect.nl",
		description: "FinConnect is a platform that enables financial transactions and connections between individuals and businesses, supporting money management and access to related services.",
		icon: "FinConnect.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "finconnect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.finconnect\\.nl"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "finconnect:jsGlobal:1",
				kind: "jsGlobal",
				property: "FinConnect.documentReady",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "flip-pay",
		name: "Flip-Pay",
		website: "https://www.flip-pay.com",
		description: "Flip-Pay is a platform that provides advanced content monetization solutions, offering end-to-end paywall services for publishers and digital businesses.",
		icon: "FlipPay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "flip-pay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.flip-pay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flip-pay:jsGlobal:1",
				kind: "jsGlobal",
				property: "flipPay.getCustomerAcessStatus",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flip-pay:jsGlobal:2",
				kind: "jsGlobal",
				property: "flipPayConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "flow",
		name: "Flow",
		website: "https://www.flow.io/",
		description: "Flow is an ecommerce platform that enables brands and retailers to sell their merchandise to customers internationally by creating localized shopping experiences.",
		icon: "Flow.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "flow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:shopify-)?cdn\\.flow\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flow:jsGlobal:1",
				kind: "jsGlobal",
				property: "flow.cart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flow:jsGlobal:2",
				kind: "jsGlobal",
				property: "flow.countryPicker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flow:jsGlobal:3",
				kind: "jsGlobal",
				property: "flow_cart_localize",
				description: "Page-owned global matches a known technology marker.",
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
		id: "fondue",
		name: "Fondue",
		website: "https://www.getfondue.com",
		description: "Fondue is a platform that helps businesses drive profitable growth by ditching discount codes and giving cash back instead.",
		icon: "Fondue.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "fondue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("public\\.getfondue\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fondue:jsGlobal:1",
				kind: "jsGlobal",
				property: "Fondue",
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
		id: "forte",
		name: "Forte",
		website: "https://www.forte.net",
		description: "Forte, a CSG Company offers merchants and partners a broad range of payment solutions.",
		icon: "Forte.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "forte:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("checkout\\.forte\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "four",
		name: "Four",
		website: "https://paywithfour.com/",
		description: "Pay with four is a Buy now pay later solution.",
		icon: "Four.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "four:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.paywithfour\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "four:jsGlobal:1",
				kind: "jsGlobal",
				property: "Four",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "france-express",
		name: "France Express",
		website: "https://www.france-express.com",
		description: "France Express is a delivery service based in France.",
		icon: "France Express.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "france-express:text:0",
				kind: "text",
				pattern: new RegExp("\\bFrance Express\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "frequenceo",
		name: "Frequenceo",
		website: "https://www.laposte.fr/entreprise/produit-entreprise/frequenceo",
		description: "Frequenceo is a fixed-rate postage service in France.",
		icon: "La Poste.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "frequenceo:text:0",
				kind: "text",
				pattern: new RegExp("\\bFrequenceo\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "fundiin",
		name: "Fundiin",
		website: "https://fundiin.vn",
		description: "Fundiin is the BNPL leader in Vietnam in providing zero-cost buy-now-pay-later facilities.",
		icon: "Fundiin.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "fundiin:jsGlobal:0",
				kind: "jsGlobal",
				property: "websiteEnableSuggestFundiin",
				valuePattern: new RegExp("true"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fundiin:jsGlobal:1",
				kind: "jsGlobal",
				property: "websiteMaximumSuggestFundiinWithPrediction",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "gameball",
		name: "Gameball",
		website: "https://www.gameball.co",
		description: "Gameball is a loyalty & retention platform that offers gamified customer engagement tools for customers such as rewards, points, and referrals.",
		icon: "Gameball.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "gameball:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.gameball\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gameball:jsGlobal:1",
				kind: "jsGlobal",
				property: "GbSdk.settings.shop",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gameball:jsGlobal:2",
				kind: "jsGlobal",
				property: "gbReferralCodeInput",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "geodis",
		name: "GEODIS",
		website: "https://geodis.com",
		description: "GEODIS is a global transport and logistics company.",
		icon: "GEODIS.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "geodis:text:0",
				kind: "text",
				pattern: new RegExp("\\bGeodis\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "getrooster",
		name: "GetRooster",
		website: "https://www.getrooster.com",
		description: "GetRooster is a system designed to optimise the conversion of abandoning visitors.",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "getrooster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/app\\.getrooster\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "getrooster:jsGlobal:1",
				kind: "jsGlobal",
				property: "_GT_config.gt_host",
				valuePattern: new RegExp("\\/\\/app\\.getrooster\\.com\\/"),
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
		id: "global-e",
		name: "Global-e",
		website: "https://www.global-e.com",
		description: "Global-e is a provider of cross-border ecommerce solutions.",
		icon: "Global-e.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "global-e:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.global-e\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "global-e:jsGlobal:1",
				kind: "jsGlobal",
				property: "GLOBALE_ENGINE_CONFIG",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "global-e:jsGlobal:2",
				kind: "jsGlobal",
				property: "GlobalE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "global-e:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^GlobalE_CT_Data$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^GlobalE_Data$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^GlobalE_SupportThirdPartCookies$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:jsGlobal:6",
				kind: "jsGlobal",
				property: "GLBE_PARAMS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "global-e:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^GLBE_SESS_ID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:cookie:8",
				kind: "cookie",
				keyPattern: new RegExp("^GlobalE_Consent$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:cookie:9",
				kind: "cookie",
				keyPattern: new RegExp("^glbe_sess_id$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:cookie:10",
				kind: "cookie",
				keyPattern: new RegExp("^globale_consent$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:cookie:11",
				kind: "cookie",
				keyPattern: new RegExp("^globale_ct_data$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:cookie:12",
				kind: "cookie",
				keyPattern: new RegExp("^globale_data$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "global-e:cookie:13",
				kind: "cookie",
				keyPattern: new RegExp("^globale_supportthirdpartcookies$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "globalshopex",
		name: "GlobalShopex",
		website: "https://www.globalshopex.com",
		description: "GlobalShopex offers a logistics ecommerce solution easy to integrate, which helps online businesses to sell in over 200 countries.",
		icon: "GlobalShopex.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "globalshopex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/globalshopex\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "globalshopex:jsGlobal:1",
				kind: "jsGlobal",
				property: "GSXMiniCheckout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "globalshopex:jsGlobal:2",
				kind: "jsGlobal",
				property: "GSXPreviewCheckout",
				description: "Page-owned global matches a known technology marker.",
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
		id: "glopal",
		name: "Glopal",
		website: "https://www.glopal.com",
		description: "Glopal provides advanced international marketing solutions for ecommerce retailers and brands seeking to grow their businesses' globally.",
		icon: "Glopal.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "glopal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.glopal\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "glow",
		name: "Glow",
		website: "https://glowloyalty.com",
		description: "Glow is a rewards platform that helps businesses increase repeat sales by encouraging one-time buyers to return through structured customer retention programs.",
		icon: "Glow.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "glow:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.glowloyalty\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "gls",
		name: "GLS",
		website: "https://gls-group.eu",
		description: "GLS offers parcel, logistics and express services, throughout Europe as well as in the US and in Canada.",
		icon: "GLS.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "gls:text:0",
				kind: "text",
				pattern: new RegExp("\\bGLS\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "google-pay",
		name: "Google Pay",
		website: "https://pay.google.com",
		description: "Google Pay is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches.",
		icon: "Google.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "google-pay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pay\\.google\\.com\\/([a-z/]+)\\/pay\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-pay:dom:1",
				kind: "dom",
				selector: "[aria-labelledby='pi-google_pay'], ul[data-shopify-buttoncontainer] li",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "google-wallet",
		name: "Google Wallet",
		website: "https://wallet.google.com",
		icon: "Google Wallet.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "google-wallet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("checkout\\.google\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-wallet:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("wallet\\.google\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "grab-pay-later",
		name: "Grab Pay Later",
		website: "https://www.grab.com/sg/finance/pay-later/",
		description: "Grab Pay Later is a buy now pay later solution offered by Grab.",
		icon: "Grab.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "grab-pay-later:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("grab-paylater\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "grab-pay-later:jsGlobal:1",
				kind: "jsGlobal",
				property: "GrabWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "grab-pay-later:jsGlobal:2",
				kind: "jsGlobal",
				property: "grab_widget_money_format",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "happy-returns",
		name: "Happy Returns",
		website: "https://happyreturns.com",
		description: "Happy Returns is a return software and reverse logistics company, provides a packaging-free, in-person way for customers to return an online purchase for an immediate refund.",
		icon: "Happy Returns.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "happy-returns:dom:0",
				kind: "dom",
				selector: "a[href*='.happyreturns.com'], img[src*='.happyreturns.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "heartland-payment-systems",
		name: "Heartland Payment Systems",
		website: "https://www.heartlandpaymentsystems.com",
		description: "Heartland Payment Systems is an US-based payment processing and technology provider.",
		icon: "Heartland Payment Systems.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "heartland-payment-systems:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.heartlandportico\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "hermes",
		name: "Hermes",
		website: "https://www.hermesworld.com",
		description: "Hermes offers integrated solutions along the supply chain and partners with national and international trading companies.",
		icon: "Hermes.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "hermes:text:0",
				kind: "text",
				pattern: new RegExp("\\bHermes\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "heylight",
		name: "HeyLight",
		website: "https://heylight.com/it/it",
		description: "HeyLight is a BNPL system allowing instalment payments for online purchases.",
		icon: "HeyLight.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "heylight:dom:0",
				kind: "dom",
				selector: "div#heidipay-container, div[data-heidipay], div#pagolight-pro-dialog, iframe#heidipay-iframe-product-description-pagolight, style#heyLightFonts",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "heylight:jsGlobal:1",
				kind: "jsGlobal",
				property: "closePagodilModal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heylight:jsGlobal:2",
				kind: "jsGlobal",
				property: "openPagodilModal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heylight:jsGlobal:3",
				kind: "jsGlobal",
				property: "pagodilLang",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heylight:jsGlobal:4",
				kind: "jsGlobal",
				property: "pagodilSprintf",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "heypongo",
		name: "HeyPongo",
		website: "https://www.heypongo.com",
		description: "HeyPongo is a platform that helps merchants convert visitors into loyal customers and boost revenue through customer engagement tools.",
		icon: "HeyPongo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "heypongo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.heypongo\\.com"),
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
		id: "hipay",
		name: "HiPay",
		website: "https://hipay.com/",
		description: "HiPay is a payment gateway provider and payment orchestration platform.",
		icon: "HiPay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "hipay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hipay\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hipay:jsGlobal:1",
				kind: "jsGlobal",
				property: "HiPay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "homerr",
		name: "Homerr",
		website: "https://www.homerr.com",
		description: "Homerr is a logistics company operating in the Netherlands and Belgium.",
		icon: "Homerr.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "homerr:text:0",
				kind: "text",
				pattern: new RegExp("\\bHomerr\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "hoolah",
		name: "hoolah",
		website: "https://www.hoolah.co",
		description: "hoolah is Asia's omni-channel buy now pay later platform.",
		icon: "hoolah.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "hoolah:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("merchant\\.cdn\\.hoolah\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hoolah:jsGlobal:1",
				kind: "jsGlobal",
				property: "hoolah",
				description: "Page-owned global matches a known technology marker.",
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
		id: "humm",
		name: "Humm",
		website: "https://www.shophumm.com",
		description: "Humm (formerly Flexigroup) is a buy now pay later service operating in Australia.",
		icon: "Humm.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "humm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.shophumm\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "humm:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/oxipay-payment-gateway\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "humm:jsGlobal:2",
				kind: "jsGlobal",
				property: "checkout.enabledpayments.humm",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "hypersoft",
		name: "Hypersoft",
		website: "https://hypersoft.de",
		description: "Hypersoft is a provider of POS systems designed for restaurants and cafés.",
		icon: "Hypersoft.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "hypersoft:header:0",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("\\.myhypersoftapp\\.de", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "iamport",
		name: "Iamport",
		website: "https://www.iamport.kr",
		description: "Iamport is an information technology company based in South Korea.",
		icon: "Iamport.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "iamport:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.iamport\\.kr\\/js\\/iamport\\.payment-([\\d\\.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "iamport:jsGlobal:1",
				kind: "jsGlobal",
				property: "IMP.request_pay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "instamojo",
		name: "Instamojo",
		website: "https://www.instamojo.com/",
		description: "Instamojo is a Bangalore-based company that provides a platform for selling digital goods and collecting payment online.",
		icon: "instamojo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "instamojo:jsGlobal:0",
				kind: "jsGlobal",
				property: "INITIAL_STATE.seller.avatar",
				valuePattern: new RegExp("\\.instamojo\\.com\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "instamojo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Instamojo",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "inveterate",
		name: "Inveterate",
		website: "https://www.inveterate.com",
		description: "Inveterate is a loyalty platform designed to support flexible, scalable loyalty programs across various industries.",
		icon: "Inveterate.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "inveterate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.inveterate\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "inveterate:jsGlobal:1",
				kind: "jsGlobal",
				property: "Inveterate",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "inveterate:jsGlobal:2",
				kind: "jsGlobal",
				property: "inveterate",
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
		id: "iugu",
		name: "iugu",
		website: "https://www.iugu.com",
		description: "iugu is a financial management platform that enables businesses to handle payments, billing, and invoicing through a unified system.",
		icon: "iugu.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "iugu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.iugu\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "iugu:jsGlobal:1",
				kind: "jsGlobal",
				property: "Iugu.CreditCard",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "iyzico",
		name: "iyzico",
		website: "https://www.iyzico.com",
		description: "iyzico is a payment receipt system management platform that offers ePayment solutions.",
		icon: "iyzico.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "iyzico:jsGlobal:0",
				kind: "jsGlobal",
				property: "iyz.ideaSoft",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "iyzico:jsGlobal:1",
				kind: "jsGlobal",
				property: "iyz.position",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "juspay",
		name: "Juspay",
		website: "https://juspay.in",
		description: "Juspay is a developer of an online platform designed to be used for mobile-based payments.",
		icon: "juspay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "juspay:jsGlobal:0",
				kind: "jsGlobal",
				property: "Juspay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "just",
		name: "JUST",
		website: "https://www.getjusto.com",
		description: "JUST is an one-click payment solution for online business and online shoppers.",
		icon: "JUST.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "just:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("checkout-button-.+\\/just-pay-button\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "kangaroo-rewards",
		name: "Kangaroo Rewards",
		website: "https://loyalty.kangaroorewards.com",
		description: "Kangaroo Rewards is a platform designed to help businesses grow by fostering customer loyalty and enhancing brand recognition.",
		icon: "KangarooRewards.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "kangaroo-rewards:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.kangaroorewards\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kangaroo-rewards:jsGlobal:1",
				kind: "jsGlobal",
				property: "KangarooApps.Loyalties",
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
		id: "keen-delivery",
		name: "Keen Delivery",
		website: "https://www.keendelivery.com",
		description: "Keen Delivery is a Dutch shipping platform.",
		icon: "Keen Delivery.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "keen-delivery:text:0",
				kind: "text",
				pattern: new RegExp("\\bKeen Delivery\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "keptify",
		name: "Keptify",
		website: "https://keptify.com",
		description: "Keptify helps ecommerce sites of any size to increase sales and conversion rates by providing visitors with a personalised shopping experience.",
		icon: "Keptify.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "keptify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.keptify\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "keptify:jsGlobal:1",
				kind: "jsGlobal",
				property: "KEPTIFY_BASE_URL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "keptify:jsGlobal:2",
				kind: "jsGlobal",
				property: "_keptify.version",
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
				"payg",
			],
		},
	},
	{
		id: "klarna-checkout",
		name: "Klarna Checkout",
		website: "https://www.klarna.com/international/",
		description: "Klarna Checkout is a complete payment solution where Klarna handles a store's entire checkout.",
		icon: "Klarna.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "klarna-checkout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.klarnaservices\\.com\\/lib\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klarna-checkout:dom:1",
				kind: "dom",
				selector: "[aria-labelledby='pi-klarna']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "klarna-checkout:jsGlobal:2",
				kind: "jsGlobal",
				property: "KlarnaOnsiteService",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klarna-checkout:jsGlobal:3",
				kind: "jsGlobal",
				property: "_klarnaCheckout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klarna-checkout:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^ku1\\-sid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "klarna-checkout:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^ku1\\-vid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "klarna-checkout:header:6",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.klarna(?:cdn|services)\\.(?:net|com)", "i"),
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
		id: "klasha",
		name: "Klasha",
		website: "https://www.klasha.com/",
		description: "Klasha is a payment solution provider that handles a store's entire checkout.",
		icon: "Klasha.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "klasha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("klasha-integration\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klasha:jsGlobal:1",
				kind: "jsGlobal",
				property: "KlashaClient",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "knit-pay",
		name: "Knit pay",
		website: "https://www.knockcrm.com",
		description: "Knit Pay is a platform designed for collecting payments and managing businesses while ensuring customer data security.",
		icon: "Knitpay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "knit-pay:jsGlobal:0",
				kind: "jsGlobal",
				property: "knit_pay_payment_button_ajax_object",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "kueskipay",
		name: "KueskiPay",
		website: "https://kueskipay.com/",
		description: "KueskiPay is a buy-now-pay-later solution.",
		icon: "KueskiPay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "kueskipay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.kueskipay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kueskipay:jsGlobal:1",
				kind: "jsGlobal",
				property: "kueskypushhead",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
		implies: [
			"cart-functionality",
		],
	},
	{
		id: "laterpay",
		name: "Laterpay",
		website: "https://www.laterpay.net/",
		description: "Laterpay is a service that simplifies payments on the Internet. In addition to the classic immediate purchase option, Laterpay also allows you to buy digital content such as articles or videos now and pay later.",
		icon: "laterpay.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "laterpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/connectormwi\\.laterpay\\.net\\/([0-9.]+)[a-zA-z-]*\\/live\\/[\\w-]+\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "laterpay:meta:1",
				kind: "meta",
				key: "laterpay:connector:callbacks:on_user_has_access",
				valuePattern: new RegExp("deobfuscateText", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "laterpay:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/connectormwi\\.laterpay\\.net\\/([0-9.]+)[a-za-z-]*\\/live\\/[\\w-]+\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "laterpay:meta:3",
				kind: "meta",
				key: "laterpay:connector:callbacks:on_user_has_access",
				valuePattern: new RegExp("deobfuscatetext", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
	},
	{
		id: "latitudepay",
		name: "LatitudePay",
		website: "https://www.latitudepay.com",
		description: "LatitudePay is an interest-free, buy now, pay later solution.",
		icon: "LatitudePay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "latitudepay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.latitudepayapps\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "latitudepay:dom:1",
				kind: "dom",
				selector: "a[href*='latitudepay.com/'][target='_blank'], img[src='.latitudepayapps.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "latitudepay:jsGlobal:2",
				kind: "jsGlobal",
				property: "checkout.enabledpayments.latitudepay",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "latitudepay:jsGlobal:3",
				kind: "jsGlobal",
				property: "wc_ga_pro.available_gateways.latitudepay",
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
		id: "lawpay",
		name: "LawPay",
		website: "https://www.lawpay.com",
		description: "Payment for law firms.",
		icon: "Lawpay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "lawpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\b(?:lawpay)\\b"),
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
		id: "laybuy",
		name: "LayBuy",
		website: "https://www.laybuy.com",
		description: "Laybuy is a payment service that lets you receive your purchase now and spread the total cost over 6 weekly automatic payments interest free.",
		icon: "LayBuy.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "laybuy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.laybuy\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "laybuy:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/woo-laybuy\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "laybuy:dom:2",
				kind: "dom",
				selector: "iframe[src='.laybuy.com/'], a[href*='.laybuy.com/what-is-laybuy']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "laybuy:jsGlobal:3",
				kind: "jsGlobal",
				property: "LaybuyHelper",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "laybuy:jsGlobal:4",
				kind: "jsGlobal",
				property: "checkout.enabledpayments.laybuy",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "laybuy:jsGlobal:5",
				kind: "jsGlobal",
				property: "laybuyEnableCart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "laybuy:jsGlobal:6",
				kind: "jsGlobal",
				property: "laybuyMoneyOverides",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "laybuy:jsGlobal:7",
				kind: "jsGlobal",
				property: "wc_ga_pro.available_gateways.laybuy",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "layup",
		name: "LayUp",
		website: "https://layup.co.za",
		description: "LayUp is a payment technology platform enabling customers to pay for goods and services over time.",
		icon: "LayUp.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "layup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("layup\\.co\\.za"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "layup:jsGlobal:1",
				kind: "jsGlobal",
				property: "LayUpCheckoutButton",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "layup:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\layup\\.co\\.za"),
				description: "Script source URL matches a known technology marker.",
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
		id: "lemon-squeezy",
		name: "Lemon Squeezy",
		website: "https://www.lemonsqueezy.com",
		description: "Lemon Squeezy is a platform designed for SaaS businesses, providing functionalities such as payment processing, subscription management, global tax compliance, fraud prevention, multi-currency support, failed payment recovery, and integration with PayPal, with the aim of facilitating the operational management of software businesses.",
		icon: "Lemon Squeezy.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "lemon-squeezy:jsGlobal:0",
				kind: "jsGlobal",
				property: "LemonSqueezy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lemon-squeezy:jsGlobal:1",
				kind: "jsGlobal",
				property: "lemonSqueezyAffiliateConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "liberapay",
		name: "Liberapay",
		website: "https://liberapay.com/",
		description: "Liberapay is a non-profit organisation subscription payment platform.",
		icon: "Liberapay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "liberapay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/liberapay\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "liberapay:dom:1",
				kind: "dom",
				selector: "a[href*='//liberapay.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "lily",
		name: "Lily",
		website: "https://www.getlily.io",
		description: "Lily is a BigCommerce app that rewards customers with loyalty points for making purchases, signing up, following or sharing on social media, and more.",
		icon: "Lily.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "lily:jsGlobal:0",
				kind: "jsGlobal",
				property: "lilyCustomerId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lily:jsGlobal:1",
				kind: "jsGlobal",
				property: "lilyHash",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lily:jsGlobal:2",
				kind: "jsGlobal",
				property: "lilyPl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"bigcommerce",
		],
	},
	{
		id: "limepay",
		name: "Limepay",
		website: "https://www.limepay.com.au",
		description: "Limepay is a buy now, pay later platform that's fully integrated with the merchant's payment platform.",
		icon: "Limepay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "limepay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/Limepay-v\\d+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "limepay:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/limepay-installment-show\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "limepay:jsGlobal:2",
				kind: "jsGlobal",
				property: "LimepayIdentity",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "limepay:jsGlobal:3",
				kind: "jsGlobal",
				property: "wc_ga_pro.available_gateways.limepay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "limepay:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/limepay-v\\d+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "localised",
		name: "Localised",
		website: "https://www.localised.com",
		description: "Localised is local-first ecommerce platform.",
		icon: "Localised.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "localised:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.localised\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "localised:dom:1",
				kind: "dom",
				selector: "img[src='.localised.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "localised:dom:2",
				kind: "dom",
				selector: "span",
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
		id: "logoix",
		name: "LogoiX",
		website: "https://www.logoix.com",
		description: "LogoiX is a German shipping company.",
		icon: "LogoiX.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "logoix:text:0",
				kind: "text",
				pattern: new RegExp("\\bLogoiX\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "loloyal",
		name: "Loloyal",
		website: "https://www.loloyal.com",
		description: "Loloyal is a loyalty and rewards program for Shopify that helps small businesses increase customer engagement and retention through user-friendly features.",
		icon: "Loloyal.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "loloyal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.loloyal\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "loloyal:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("static\\.loloyal\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "loloyal:jsGlobal:2",
				kind: "jsGlobal",
				property: "LOLOYAL_ONSITE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "loloyal:jsGlobal:3",
				kind: "jsGlobal",
				property: "LOLOYAL_ONSITE_ALL_LOCALE",
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
		id: "loop-returns",
		name: "Loop Returns",
		website: "https://www.loopreturns.com",
		description: "Loop Returns is a return portal that automated all the returns and refunds of products.",
		icon: "Loop.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "loop-returns:dom:0",
				kind: "dom",
				selector: "a[href*='.loopreturns.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "loop-returns:jsGlobal:1",
				kind: "jsGlobal",
				property: "Loop.config.variantParam",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "loop-returns:jsGlobal:2",
				kind: "jsGlobal",
				property: "LoopOnstore",
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
		id: "lootly",
		name: "Lootly",
		website: "https://lootly.io",
		description: "Lootly is a loyalty and referral marketing automation software suite for ecommerce businesses.",
		icon: "Lootly.png",
		categories: [
			"commerce-operations",
			"marketing-automation",
		],
		rules: [
			{
				id: "lootly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lootly\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lootly:dom:1",
				kind: "dom",
				selector: "iframe[src*='lootly.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "lootly:jsGlobal:2",
				kind: "jsGlobal",
				property: "Lootly.config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lootly:jsGlobal:3",
				kind: "jsGlobal",
				property: "lootlyWidgetInit",
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
		id: "loyalis",
		name: "Loyalis",
		website: "https://www.loyalis.nl",
		description: "Loyalis is a loyalty program for ecommerce that enables businesses to reward customers based on purchases and engagement.",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "loyalis:jsGlobal:0",
				kind: "jsGlobal",
				property: "loyalisOptions.key",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "loyaltylion",
		name: "LoyaltyLion",
		website: "https://loyaltylion.com",
		description: "LoyaltyLion is a data-driven ecommerce loyalty and engagement platform.",
		icon: "LoyaltyLion.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "loyaltylion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.loyaltylion\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "loyaltylion:jsGlobal:1",
				kind: "jsGlobal",
				property: "loyaltylion.version",
				valuePattern: new RegExp("([\\d\\-]+)"),
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
		id: "loyalzoo",
		name: "Loyalzoo",
		website: "https://loyalzoo.com",
		description: "Loyalzoo is a platform that enables businesses to manage customer loyalty, marketing campaigns, and subscription services.",
		icon: "Loyalzoo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "loyalzoo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.loyalzoo\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "loyoly",
		name: "Loyoly",
		website: "https://www.loyoly.io",
		description: "Loyoly is a loyalty and referral platform integrating user-generated content and reviews, enabling customer engagement with brands.",
		icon: "Loyoly.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "loyoly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.loyoly\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "malomo",
		name: "Malomo",
		website: "https://gomalomo.com",
		description: "Malomo is a cloud-based shipment tracking solution that helps small to midsize eCommerce businesses provide customers with shipping updates via white-label package tracking pages.",
		icon: "Malomo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "malomo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gomalomo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "malomo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Malomo",
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
		id: "mapmychannel",
		name: "MapMyChannel",
		website: "https://www.mapmychannel.com",
		description: "MapMyChannel is a cloud-based fulfillment platform that integrates with ecommerce systems to automate inventory, shipping, and order management.",
		icon: "MapMyChannel.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mapmychannel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mapmychannel\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "marsello",
		name: "Marsello",
		website: "https://www.marsello.com",
		description: "Marsello is an omnichannel loyalty platform that integrates with sales channels, enhancing customer engagement and retention by providing a unified experience across various points of sale.",
		icon: "Marsello.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "marsello:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.marsello\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "marsello:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^marselloExitPopup$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "marsello:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^marselloexitpopup$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "mastercard",
		name: "Mastercard",
		website: "https://www.mastercard.com",
		description: "MasterCard facilitates electronic funds transfers throughout the world, most commonly through branded credit cards, debit cards and prepaid cards.",
		icon: "Mastercard.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mastercard:dom:0",
				kind: "dom",
				selector: "[aria-labelledby='pi-mastercard'], [aria-labelledby='pi-master']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "midtrans",
		name: "Midtrans",
		website: "https://midtrans.com",
		description: "Midtrans is a payment gateway system from Indonesia.",
		icon: "Midtrans.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "midtrans:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app(?:\\.sandbox)?\\.midtrans\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "minibc",
		name: "MiniBC",
		website: "https://www.minibc.com",
		description: "MiniBC is a BigCommerce payment app builder that enables the creation and management of custom payment solutions within the BigCommerce platform.",
		icon: "MiniBC.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "minibc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.minibc\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "minibc:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("apps\\.minibc\\.com"),
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
		requires: [
			"bigcommerce",
		],
	},
	{
		id: "mintpay",
		name: "Mintpay",
		website: "https://mintpay.lk",
		description: "Mintpay is a system that allows purchases to be made immediately and paid for later in installments.",
		icon: "Mintpay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mintpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/mintpay\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mobicred",
		name: "mobicred",
		website: "https://mobicred.co.za/",
		description: "Mobicred is a credit facility that allows you to safely shop online with our participating retailers.",
		icon: "Mobicred.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mobicred:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.mobicredwidget\\.co\\.za"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "mokka",
		name: "Mokka",
		website: "https://mokka.ro",
		description: "Mokka is a Buy Now Pay Later solution that connects target customer acquisition and settlement costs through marketing and promotion.",
		icon: "Mokka.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mokka:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("revoiframe\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mollie",
		name: "Mollie",
		website: "https://www.mollie.com",
		description: "Mollie is a payment provider for Belgium and the Netherlands, offering payment methods such as credit card, iDEAL, Bancontact/Mister cash, PayPal, SCT, SDD, and others.",
		icon: "Mollie.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mollie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/mollie-payments-for-woocommerce\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mollie:jsGlobal:1",
				kind: "jsGlobal",
				property: "Mollie",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mondial-relay",
		name: "Mondial Relay",
		website: "https://www.mondialrelay.com",
		description: "Mondial Relay is a parcel shipping and delivery service in Europe.",
		icon: "Mondial Relay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mondial-relay:text:0",
				kind: "text",
				pattern: new RegExp("\\bMondial Relay\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "moneris",
		name: "Moneris",
		website: "https://www.moneris.com",
		description: "Moneris (formerly Moneris Solutions) is Canada's largest financial technology company that specialises in payment processing.",
		icon: "Moneris.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "moneris:jsGlobal:0",
				kind: "jsGlobal",
				property: "initialServerData.monerisConfiguration",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moneris:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.moneris\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "moyasar",
		name: "Moyasar",
		website: "https://moyasar.com/en",
		description: "Moyasar is a payment gateway platform for accepting online payments in Saudi Arabia and the MENA region.",
		icon: "Moyasar.png",
		categories: [
			"commerce-operations",
		],
		rules: [],
	},
	{
		id: "mrw",
		name: "MRW",
		website: "https://www.mrw.es",
		description: "MRW is a Spanish courier company specialised in express national and international shipping services.",
		icon: "MRW.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mrw:text:0",
				kind: "text",
				pattern: new RegExp("\\bMRW\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "mul-pay",
		name: "Mul-Pay",
		website: "https://static.mul-pay.jp",
		description: "Mul-Pay is a payment gateway platform from Japan.",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mul-pay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.mul-pay\\.jp\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mul-pay:jsGlobal:1",
				kind: "jsGlobal",
				property: "Multipayment.config",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "my-flying-box",
		name: "My Flying Box",
		website: "https://www.myflyingbox.com/",
		description: "My Flying Box is an international parcel shipping company.",
		icon: "My Flying Box.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "my-flying-box:text:0",
				kind: "text",
				pattern: new RegExp("\\bMy Flying Box\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "mycred",
		name: "MyCred",
		website: "https://mycred.me",
		description: "MyCred is a points management system for WordPress that allows sites to define, track, and adjust user points based on custom rules and interactions.",
		icon: "MyCred.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "mycred:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/mycred\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mycred:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/mycred/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "nacex",
		name: "NACEX",
		website: "https://www.nacex.es",
		description: "NACEX is an express courier company in Spain, Andorra and Portugal.",
		icon: "NACEX.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "nacex:text:0",
				kind: "text",
				pattern: new RegExp("\\bNACEX\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "narvar",
		name: "Narvar",
		website: "https://corp.narvar.com",
		description: "Narvar is a customer experience platform that helps retailers inspire long-term customer loyalty, at all steps of the post-purchase journey.",
		icon: "Narvar.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "narvar:dom:0",
				kind: "dom",
				selector: "a[href*='.narvar.com/'], img[src*='.narvar.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "narvar:jsGlobal:1",
				kind: "jsGlobal",
				property: "NARVARJS_URL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "narvar:jsGlobal:2",
				kind: "jsGlobal",
				property: "narvar",
				confidence: 1,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "narvar:header:3",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.narvar\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "narvar:header:4",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.narvar\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "nexive",
		name: "Nexive",
		website: "https://www.nexive.it",
		description: "Nexive is a postal operator in Italy.",
		icon: "Nexive.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "nexive:text:0",
				kind: "text",
				pattern: new RegExp("\\bNexive\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "nift",
		name: "Nift",
		website: "https://www.gonift.com",
		description: "Nift is a marketing program for pools of local businesses. Businesses give Nift gift cards to thank and reward their customers for taking actions, like signing up for a newsletter, referring a friend, or making a purchase.",
		icon: "Nift.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "nift:jsGlobal:0",
				kind: "jsGlobal",
				property: "NiftAnalytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nift:jsGlobal:1",
				kind: "jsGlobal",
				property: "NiftJS",
				description: "Page-owned global matches a known technology marker.",
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
		id: "octane",
		name: "Octane",
		website: "https://octane.co",
		description: "Octane is a financing solution for motorcycles, ATVs, mowers, and other power sports and outdoor equipment.",
		icon: "Octane.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "octane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.octane\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "omise",
		name: "Omise",
		website: "https://www.omise.co",
		description: "Omise is a payment gateway for Thailand, Japan and Singapore. Providing both online and offline payment solutions to merchants.",
		icon: "Omise.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "omise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.omise\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "omise:jsGlobal:1",
				kind: "jsGlobal",
				property: "Omise",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "omise:jsGlobal:2",
				kind: "jsGlobal",
				property: "OmiseCard",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "omniwallet",
		name: "OmniWallet",
		website: "https://omniwallet.net",
		description: "OmniWallet is an omnichannel loyalty SaaS platform that centralizes customer identification, incentive management, and behavioral tracking across online and offline channels.",
		icon: "OmniWallet.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "omniwallet:jsGlobal:0",
				kind: "jsGlobal",
				property: "Omniwallet.ADMIN_API",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "omniwallet:jsGlobal:1",
				kind: "jsGlobal",
				property: "OmniwalletPlugin",
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
		id: "oney",
		name: "Oney",
		website: "https://www.oney.com",
		description: "Oney is an app that gives consumers back the power over their spending and makes split payments universal.",
		icon: "Oney.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "oney:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/modules\\/oney(?:\\/)?\\/views\\/js\\/front\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oney:jsGlobal:1",
				kind: "jsGlobal",
				property: "OneyMarketplace",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "oney:jsGlobal:2",
				kind: "jsGlobal",
				property: "isOneyActive",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "oney:jsGlobal:3",
				kind: "jsGlobal",
				property: "openOneyLayer",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "openpay",
		name: "OpenPay",
		website: "https://www.openpay.com.au/",
		description: "Openpay is an innovative online and in-store payment solution enabling you to purchase now and pay later, with no interest.",
		icon: "openpay.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "openpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("openpay\\.com.\\au"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "optimonk",
		name: "OptiMonk",
		website: "https://www.optimonk.com",
		description: "OptiMonk is an on-site message toolkit used to improve conversions using action-based popups ad bars.",
		icon: "OptiMonk.svg",
		categories: [
			"commerce-operations",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "optimonk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.optimonk\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "optimonk:dom:1",
				kind: "dom",
				selector: "link[href*='.optimonk.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "ordergroove",
		name: "Ordergroove",
		website: "https://www.ordergroove.com/",
		description: "Ordergroove provides a SaaS (Software as a Service) based subscription and membership commerce platform.",
		icon: "ordergroove.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "ordergroove:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ordergroove\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ordergroove:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.ordergroove\\.com", "i"),
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
		id: "osterreichische-post",
		name: "Osterreichische Post",
		website: "https://www.post.at",
		description: "Österreichische Post is an Austrian logistics and postal services provider.",
		icon: "Post AG.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "osterreichische-post:text:0",
				kind: "text",
				pattern: new RegExp("\\bpost\\.at\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "osterreichische-post:text:1",
				kind: "text",
				pattern: new RegExp("\\bPost AG\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "osterreichische-post:text:2",
				kind: "text",
				pattern: new RegExp("\\b[ÖO]sterreichische Post\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "pace",
		name: "Pace",
		website: "https://pacenow.co/",
		description: "PacePay offers a BNPL (Buy now pay later) solution for merchants.",
		icon: "Pace.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pace:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pay\\.pacenow\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pace:jsGlobal:1",
				kind: "jsGlobal",
				property: "pacePay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pace:jsGlobal:2",
				kind: "jsGlobal",
				property: "rely_month_installment",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pace:jsGlobal:3",
				kind: "jsGlobal",
				property: "rely_shop_currency",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pace:jsGlobal:4",
				kind: "jsGlobal",
				property: "rely_shop_money_format",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "paddle",
		name: "Paddle",
		website: "https://paddle.com/",
		description: "Paddle is a billing and payment gateway for B2B SaaS companies.",
		icon: "Paddle.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paddle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.paddle\\.com\\/paddle\\/paddle\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paddle:jsGlobal:1",
				kind: "jsGlobal",
				property: "Paddle.Checkout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paddle:jsGlobal:2",
				kind: "jsGlobal",
				property: "PaddleScriptLocation",
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
		id: "pagar-me",
		name: "Pagar.me",
		website: "https://pagar.me",
		description: "Pagar.me is a Portuguese-language online payments solution for businesses in Brazil.",
		icon: "Pagar.me.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pagar-me:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.pagar\\.me\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pagar-me:jsGlobal:1",
				kind: "jsGlobal",
				property: "PagarMeCheckout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pagar-me:jsGlobal:2",
				kind: "jsGlobal",
				property: "pagarme.balance",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "pagolight",
		name: "Pagolight",
		website: "https://pagolight.it",
		description: "Pagolight is a BNPL system allowing instalment payments for online purchases.",
		icon: "Pagolight.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pagolight:dom:0",
				kind: "dom",
				selector: "div#heidipay-container, div[data-heidipay], div#pagolight-pro-dialog, iframe#heidipay-iframe-product-description-pagolight",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pagolight:jsGlobal:1",
				kind: "jsGlobal",
				property: "closePagodilModal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pagolight:jsGlobal:2",
				kind: "jsGlobal",
				property: "openPagodilModal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pagolight:jsGlobal:3",
				kind: "jsGlobal",
				property: "pagodilLang",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pagolight:jsGlobal:4",
				kind: "jsGlobal",
				property: "pagodilSprintf",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pagseguro",
		name: "PagSeguro",
		website: "https://pagseguro.uol.com.br",
		description: "PagSeguro is an online or mobile payment-based ecommerce service for commercial operations.",
		icon: "PagSeguro.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pagseguro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pagseguro\\.uol\\.com\\.br\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pagseguro:dom:1",
				kind: "dom",
				selector: "form[action*='pagseguro.uol.com.br'][target='pagseguro']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pagseguro:jsGlobal:2",
				kind: "jsGlobal",
				property: "PagSeguroDirectPayment",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pagseguro:jsGlobal:3",
				kind: "jsGlobal",
				property: "_PagSeguroDirectPayment",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "paidy",
		name: "Paidy",
		website: "https://paidy.com",
		description: "Paidy is basically a two-sided payments service, acting as a middleman between consumers and merchants in Japan.",
		icon: "Paidy.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paidy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.paidy\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paidy:jsGlobal:1",
				kind: "jsGlobal",
				property: "Constants.paidy",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "parcelforce",
		name: "Parcelforce",
		website: "https://www.parcelforce.com",
		description: "Parcelforce is a courier and logistics service in the United Kingdom.",
		icon: "Parcelforce.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "parcelforce:text:0",
				kind: "text",
				pattern: new RegExp("\\bParcelforce\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "parcelpanel",
		name: "ParcelPanel",
		website: "https://www.parcelpanel.com",
		description: "ParcelPanel is a solution for tracking shipments and managing returns for ecommerce businesses.",
		icon: "ParcelPanel.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "parcelpanel:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.parcelpanel\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "partial-ly",
		name: "Partial.ly",
		website: "https://partial.ly/",
		description: "Partial.ly payment plan software lets businesses offer customizable payment plans to their customers.",
		icon: "Partially.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "partial-ly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("partial\\.ly"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "partial-ly:jsGlobal:1",
				kind: "jsGlobal",
				property: "PartiallyButton",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pay-it-later",
		name: "Pay It Later",
		website: "https://www.payitlater.com.au",
		description: "Pay It Later collect payments in weekly instalments from you when you make a purchase online, so you can buy now and pay it later.",
		icon: "Pay It Later.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pay-it-later:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/payitlater-gateway-for-woocommerce\\/(?:.+\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pay-it-later:dom:1",
				kind: "dom",
				selector: "a[href*='.payitlater.com.au'][target='_blank'], img[src*='PayItLater'][alt='PayItLater']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pay-it-later:jsGlobal:2",
				kind: "jsGlobal",
				property: "payitlater",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "pay",
		name: "Pay.",
		website: "https://www.pay.nl",
		description: "Pay. is an all-in-one payment provider offering integrated solutions for processing online and in-store transactions.",
		icon: "PayNL.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pay:jsGlobal:0",
				kind: "jsGlobal",
				property: "PaynlLabel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pay:jsGlobal:1",
				kind: "jsGlobal",
				property: "paynl_gateways",
				description: "Page-owned global matches a known technology marker.",
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
		id: "paybright",
		name: "PayBright",
		website: "https://paybright.com",
		description: "PayBright is a Canadian fintech company that offers short-term interest-free installment loans for online shopping to consumers at checkout.",
		icon: "PayBright.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paybright:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.paybright\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paybright:dom:1",
				kind: "dom",
				selector: "link[href*='app.paybright.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "paybright:jsGlobal:2",
				kind: "jsGlobal",
				property: "_paybright_config",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "paycove",
		name: "Paycove",
		website: "https://www.paycove.io",
		description: "Paycove is a revenue operations platform that unifies payments, billing, and reporting in a single system to streamline financial workflows and provide centralized visibility into transactions.",
		icon: "Paycove.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paycove:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("paycove\\.io\\/js\\/"),
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
		id: "paydock",
		name: "Paydock",
		website: "https://paydock.com",
		description: "Paydock is a tool for managing payments and transactions across multiple platforms.",
		icon: "Paydock.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paydock:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.paydock\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paydock:dom:1",
				kind: "dom",
				selector: "link[href*='app-sandbox.paydock.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "payfast",
		name: "PayFast",
		website: "https://www.payfast.co.za/",
		description: "PayFast is a payments processing service for South Africans & South African websites.",
		icon: "Payfast.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payfast:dom:0",
				kind: "dom",
				selector: "[aria-labelledby='pi-payfast_instant_eft']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "payflex",
		name: "Payflex",
		website: "https://payflex.co.za/",
		description: "Payflex offers an online payment gateway solution to South African merchants that allows shoppers to pay over 6 weeks, interest-free.",
		icon: "Payflex.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payflex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("partpayassets\\.blob\\.core\\.windows\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "payflex:dom:1",
				kind: "dom",
				selector: "[aria-labelledby='pi-payflex']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "paygreen",
		name: "PayGreen",
		website: "https://www.paygreen.io",
		description: "PayGreen is a French payment processor.",
		icon: "PayGreen.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paygreen:jsGlobal:0",
				kind: "jsGlobal",
				property: "paygreenjs",
				description: "Page-owned global matches a known technology marker.",
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
		id: "payhere",
		name: "PayHere",
		website: "https://payhere.co",
		description: "PayHere is a platform that provides payment links to facilitate online payment collection.",
		icon: "PayHere.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payhere:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.payhere\\.co"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "payhere:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_pay_here_session$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "payjustnow",
		name: "PayJustNow",
		website: "https://payjustnow.com",
		description: "PayJustNow is a buy now, pay later checkout option for ecommerce sites.",
		icon: "PayJustNow.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payjustnow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.payjustnow\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "payl8r",
		name: "Payl8r",
		website: "https://payl8r.com/",
		description: "PayL8r.com offers repayment plans and online finance which allow you to purchase products online.",
		icon: "Payl8r.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payl8r:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("payl8r\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "paymattic",
		name: "Paymattic",
		website: "https://demo.paymattic.com",
		description: "Paymattic is a WordPress payment plugin that offers built-in donation capabilities and a no-code setup for handling online payments.",
		icon: "Paymattic.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paymattic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.paymattic\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "paymentus",
		name: "Paymentus",
		website: "https://www.paymentus.com",
		description: "Paymentus is a platform that provides a complete electronic billing and payment solution for businesses and organizations.",
		icon: "Paymentus.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paymentus:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.paymentus\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "paymentus:jsGlobal:1",
				kind: "jsGlobal",
				property: "PaymentusFeedback",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "payoneer",
		name: "Payoneer",
		website: "https://www.payoneer.com",
		description: "Payoneer is an online payment processing platform tailored for digital businesses.",
		icon: "Payoneer.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payoneer:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/wc-payoneer-payment-gateway/'], link#payoneer-plugn-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "paypal",
		name: "PayPal",
		website: "https://paypal.com",
		description: "PayPal is an online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.",
		icon: "PayPal.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paypal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("paypalobjects\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paypal:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.paypal\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "paypal:dom:2",
				kind: "dom",
				selector: "button",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "paypal:text:3",
				kind: "text",
				pattern: new RegExp("PayPal"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "paypal:dom:4",
				kind: "dom",
				selector: "iframe[src*='paypal.com'], img[src*='paypal.com'], img[src*='paypalobjects.com'], [aria-labelledby='pi-paypal'], [data-paypal-v4='true'], img[alt*='PayPal' i]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "paypal:jsGlobal:5",
				kind: "jsGlobal",
				property: "PAYPAL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal:jsGlobal:6",
				kind: "jsGlobal",
				property: "__paypal_global__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal:jsGlobal:7",
				kind: "jsGlobal",
				property: "checkout.enabledpayments.paypal",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal:jsGlobal:8",
				kind: "jsGlobal",
				property: "enablePaypal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal:jsGlobal:9",
				kind: "jsGlobal",
				property: "paypal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal:jsGlobal:10",
				kind: "jsGlobal",
				property: "paypalClientId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal:jsGlobal:11",
				kind: "jsGlobal",
				property: "paypalJs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal:jsGlobal:12",
				kind: "jsGlobal",
				property: "wc_ga_pro.available_gateways.paypal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal:header:13",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.paypal\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "paypal:meta:14",
				kind: "meta",
				key: "id",
				valuePattern: new RegExp("in-context-paypal-metadata", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "paypal:dom:15",
				kind: "dom",
				selector: "iframe[src*='paypal.com'], img[src*='paypal.com'], img[src*='paypalobjects.com'], [aria-labelledby='pi-paypal'], [data-paypal-v4], [data-paypal-commerce-button], [data-paypal-smart-button-version], img[alt*='PayPal']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
			cpe: "cpe:2.3:a:paypal:paypal:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "paypal-credit",
		name: "PayPal Credit",
		website: "https://www.paypal.com/uk/webapps/mpp/paypal-virtual-credit",
		description: "PayPal Credit is a reusable line of credit that lets you pay for online purchases over time.",
		icon: "PayPal.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paypal-credit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.paypalobjects\\.com\\/.+\\/smart-credit-message@([\\d\\.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paypal-credit:dom:1",
				kind: "dom",
				selector: "img[alt*='PayPal Credit'], a[title*='PayPal Credit']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "paypal-credit:jsGlobal:2",
				kind: "jsGlobal",
				property: "PaypalOffersObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paypal-credit:jsGlobal:3",
				kind: "jsGlobal",
				property: "payPalCreditPopover",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"paypal",
		],
	},
	{
		id: "payplug",
		name: "Payplug",
		website: "https://www.payplug.com",
		description: "Payplug is a French omnichannel payment solution dedicated to merchants.",
		icon: "Payplug.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payplug:jsGlobal:0",
				kind: "jsGlobal",
				property: "PAYPLUG_DOMAIN",
				valuePattern: new RegExp("\\.payplug\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "payplug:jsGlobal:1",
				kind: "jsGlobal",
				property: "payplug.card",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "payplug:jsGlobal:2",
				kind: "jsGlobal",
				property: "payplug_ajax_url",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "payrexx",
		name: "Payrexx",
		website: "https://payrexx.com",
		description: "Payrexx is an online payment solution facilitating receipt of payments across various platforms.",
		icon: "Payrexx.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payrexx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.payrexx\\.com\\/"),
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
		id: "paysafe",
		name: "Paysafe",
		website: "https://www.paysafe.com/en",
		description: "Paysafe is a payment platform that enables businesses and consumers to connect and transact by payment processing, digital wallet, and online cash solutions.",
		icon: "paysafe.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paysafe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/hosted\\.paysafe\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paysafe:jsGlobal:1",
				kind: "jsGlobal",
				property: "paysafe",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paysafe:jsGlobal:2",
				kind: "jsGlobal",
				property: "paysafe.checkout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paysafe:jsGlobal:3",
				kind: "jsGlobal",
				property: "paysafe.fields",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "paysafe:jsGlobal:4",
				kind: "jsGlobal",
				property: "paysafe.threedsecure",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "paysera",
		name: "Paysera",
		website: "https://www.paysera.com",
		description: "Paysera is a platform that provides money transfer and payment services.",
		icon: "Paysera.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paysera:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.paysera\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "paytr",
		name: "PAYTR",
		website: "https://www.paytr.com",
		description: "PAYTR is a platform that enables secure remote management of all payment transactions.",
		icon: "PAYTR.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paytr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.paytr\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "payu-payment",
		name: "PayU Payment",
		website: "https://corporate.payu.com",
		description: "PayU is a provider of financial solutions for ecommerce, facilitating online payments and related transaction services.",
		icon: "PayU.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payu-payment:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.payu\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "payu-payment:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.payu\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "payu-payment:jsGlobal:2",
				kind: "jsGlobal",
				property: "OpenPayU",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "payu-payment:jsGlobal:3",
				kind: "jsGlobal",
				property: "PayU",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "payva",
		name: "Payva",
		website: "https://www.payva.com",
		description: "Payva is a Buy Now, Pay Later platform designed for creators, offering structured payment options tailored to creative work.",
		icon: "Payva.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "payva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("checkout-sdk\\.payva\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "payva:jsGlobal:1",
				kind: "jsGlobal",
				property: "Payva",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "paywhirl",
		name: "PayWhirl",
		website: "https://app.paywhirl.com/",
		description: "PayWhirl provides widgets and tools to handle recurring payments.",
		icon: "paywhirl.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "paywhirl:jsGlobal:0",
				kind: "jsGlobal",
				property: "paywhirlForShopifySettings",
				description: "Page-owned global matches a known technology marker.",
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
		id: "pci-proxy",
		name: "PCI Proxy",
		website: "https://www.pci-proxy.com",
		description: "PCI Proxy is a tokenization platform that enables organisations worldwide to embrace a modern approach to payment flexibility and data security.",
		icon: "PCI Proxy.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pci-proxy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.datatrans\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "pci-proxy:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.datatrans\\.(?:com|biz)", "i"),
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
		id: "pelcro",
		name: "Pelcro",
		website: "https://www.get.pelcro.com",
		description: "Pelcro is a subscription and membership management software.",
		icon: "Pelcro.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pelcro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.pelcro\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pelcro:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pelcro.adblock",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pelcro:jsGlobal:2",
				kind: "jsGlobal",
				property: "PelcroEventsAlreadyFired",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pesapal",
		name: "Pesapal",
		website: "https://www.pesapal.com",
		description: "Pesapal is an online payment platform catering to various online businesses, including ecommerce, subscription services, online platforms, and marketplaces.",
		icon: "Pesapal.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pesapal:dom:0",
				kind: "dom",
				selector: "div#payment-options > a[href*='www.pesapal.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pesapal:jsGlobal:1",
				kind: "jsGlobal",
				property: "pesapalIframe",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "pickrr",
		name: "Pickrr",
		website: "https://pickrr.com",
		description: "Pickrr is a logistics and shipping solution that manages and optimizes order fulfillment for ecommerce businesses.",
		icon: "Pickrr.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pickrr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.pickrr\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "piggy",
		name: "Piggy",
		website: "https://www.piggy.eu",
		description: "Piggy is a loyalty program management platform.",
		icon: "Piggy.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "piggy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.piggy\\.eu\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "piggy:jsGlobal:1",
				kind: "jsGlobal",
				property: "PiggyWidget",
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
		id: "pin-payments",
		name: "Pin Payments",
		website: "https://www.pinpayments.com/",
		description: "Pin Payments is an all-in-one online payment system. It offers merchants a simple JSON API, secure credit card storage, multi-currency capabilities, bank account compatibility, onsite payment processing and automatic fund transfer to specified bank accounts.",
		icon: "pinpayments.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pin-payments:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.pinpayments\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "plaid",
		name: "Plaid",
		website: "https://plaid.com",
		description: "Plaid is a fintech company that facilitates communication between financial services apps and users' banks and credit card providers.",
		icon: "Plaid.svg",
		categories: [
			"commerce-operations",
			"widgets-misc",
		],
		rules: [
			{
				id: "plaid:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.plaid\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "plaid:jsGlobal:1",
				kind: "jsGlobal",
				property: "Plaid.version",
				valuePattern: new RegExp("([\\.\\d]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "plaid:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("cdn\\.plaid\\.com\\/", "i"),
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
		id: "planzer",
		name: "Planzer",
		website: "https://www.planzer.ch",
		description: "Planzer is a provider of transport and warehouse logistics services, specializing in efficient and reliable solutions for supply chain management across various industries.",
		icon: "Planzer.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "planzer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/planzer-jobs\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "plenigo",
		name: "Plenigo",
		website: "https://plenigo.com",
		description: "Plenigo is a subscription management platform designed for modern reader financing.",
		icon: "Plenigo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "plenigo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.plenigo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "plenigo:jsGlobal:1",
				kind: "jsGlobal",
				property: "plenigo.Checkout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "plenigo:jsGlobal:2",
				kind: "jsGlobal",
				property: "plenigoStartCheckout",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pobuca",
		name: "Pobuca",
		website: "https://pobuca.com",
		description: "Pobuca is a cloud-based software platform for managing customer loyalty programs and engagement initiatives.",
		icon: "Pobuca.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pobuca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.loyalty\\.pobuca\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pobuca:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.loyalty\\.pobuca\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "pointat",
		name: "Pointat",
		website: "https://pointat.app",
		description: "Pointat is a loyalty system designed to help retail businesses increase store sales by up to three times through structured customer engagement and rewards management.",
		icon: "Pointat.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "pointat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.pointat\\.app"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pointat:jsGlobal:1",
				kind: "jsGlobal",
				property: "pointatData.customer",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "poli-payment",
		name: "POLi Payment",
		website: "https://www.polipayments.com",
		description: "POLi Payment(formerly known as Centricom) is an online payment service in Australia and New Zealand.",
		icon: "POLi Payment.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "poli-payment:jsGlobal:0",
				kind: "jsGlobal",
				property: "wc_ga_pro.available_gateways.poli",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "poste-italiane",
		name: "Poste Italiane",
		website: "https://www.poste.it",
		description: "Poste Italiane is the Italian postal service provider.",
		icon: "Poste Italiane.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "poste-italiane:text:0",
				kind: "text",
				pattern: new RegExp("\\bPoste Italiane\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "postnl",
		name: "PostNL",
		website: "https://postnl.post",
		description: "PostNL (formerly TNT) is a mail, parcel and ecommerce corporation with operations in the Netherlands, Germany, Italy, Belgium, and the United Kingdom.",
		icon: "PostNL.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "postnl:text:0",
				kind: "text",
				pattern: new RegExp("\\bPostNL\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "postnl:dom:1",
				kind: "dom",
				selector: "img[alt*='postnl' i], img[src*='postnl' i]",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "postpay",
		name: "Postpay",
		website: "https://postpay.io",
		description: "Postpay is a payment solution that allows you to split your purchase amount into instalments.",
		icon: "Postpay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "postpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.postpay\\.io\\/(?:.+\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "postpay:jsGlobal:1",
				kind: "jsGlobal",
				property: "PostpayJsConfig",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "postpay:jsGlobal:2",
				kind: "jsGlobal",
				property: "postpay",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "postpay:jsGlobal:3",
				kind: "jsGlobal",
				property: "wc_postpay_init_params",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "powerpay",
		name: "PowerPay",
		website: "https://getpowerpay.com",
		description: "PowerPay is a financing and loan provider offering lower-than-average interest rates.",
		icon: "PowerPay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "powerpay:dom:0",
				kind: "dom",
				selector: "iframe[src*='getpowerpay.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "prive",
		name: "Prive",
		website: "https://www.tryprive.com",
		description: "Prive is a subscription service that enables users to register for multiple services.",
		icon: "Prive.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "prive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tryprive\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prive:jsGlobal:1",
				kind: "jsGlobal",
				property: "PRIVE_SHOPPER_PORTAL_WIDGET",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prive:jsGlobal:2",
				kind: "jsGlobal",
				property: "PRIVE_WIDGET",
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
		id: "processout",
		name: "ProcessOut",
		website: "https://www.processout.com",
		description: "ProcessOut is a payment infrastructure platform that provides payment analytics to analyze and report on an entire payment ecosystem.",
		icon: "ProcessOut.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "processout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.processout\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "processout:jsGlobal:1",
				kind: "jsGlobal",
				property: "ProcessOut.ActionFlow",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "prommt",
		name: "Prommt",
		website: "https://www.prommt.com",
		description: "Prommt is a payment request service that helps businesses collect payments from customers through card and bank transfer.",
		icon: "Prommt.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "prommt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.prommt\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prommt:jsGlobal:1",
				kind: "jsGlobal",
				property: "Prommt",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "prospa",
		name: "Prospa",
		website: "https://www.prospa.com",
		description: "Prospa is a platform that enables small businesses to pay for purchases over time with an interest-free repayment solution.",
		icon: "Prospa.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "prospa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.prospa\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "punchtab",
		name: "PunchTab",
		website: "http://www.punchtab.com",
		description: "PunchTab is a SaaS-based Consumer Management Platform (CMP) for brands to build and optimize direct consumer relationships.",
		icon: "PunchTab.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "punchtab:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.punchtab\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pushowl-web-push-notifications",
		name: "PushOwl Web Push Notifications",
		website: "https://apps.shopify.com/pushowl",
		description: "PushOwl Web Push Notifications are a Shopify app which helps recover abandoned carts and market better with web push.",
		icon: "PushOwl.svg",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "pushowl-web-push-notifications:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/sdks\\/pushowl-shopify\\.js"),
				description: "Script source URL matches a known technology marker.",
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
		implies: [
			"pushowl",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "razorpay",
		name: "Razorpay",
		website: "https://razorpay.com/",
		description: "Razorpay is a provider of an online payment gateway that allows businesses to accept, process, and disburse payments.",
		icon: "Razorpay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "razorpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("checkout\\.razorpay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "razorpay:jsGlobal:1",
				kind: "jsGlobal",
				property: "Razorpay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "recapture",
		name: "Recapture",
		website: "https://recapture.io",
		description: "Recapture is an abandoned cart recovery and email marketing solution.",
		icon: "Recapture.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "recapture:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.recapture\\.io\\/.+\\?v=\\d+(?:&ver=([\\d\\.]+)?)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "recart",
		name: "Recart",
		website: "https://recart.com/",
		description: "Recart is a tool to engage users who abandoned their shopping cart via Facebook Messenger.",
		icon: "Recart.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "recart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.recart\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "recart:jsGlobal:1",
				kind: "jsGlobal",
				property: "__recart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "recart:jsGlobal:2",
				kind: "jsGlobal",
				property: "recart",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "recharge",
		name: "Recharge",
		website: "https://rechargepayments.com",
		description: "Recharge is the a subscription payments platform designed for merchants to set up and manage dynamic recurring billing across web and mobile.",
		icon: "Recharge.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "recharge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rechargeassets-bootstrapheroes-rechargeapps\\.netdna-ssl\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "recharge:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rechargecdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "recharge:jsGlobal:2",
				kind: "jsGlobal",
				property: "ReChargeWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"payg",
				"recurring",
			],
		},
		implies: [
			"cart-functionality",
		],
	},
	{
		id: "recurly",
		name: "Recurly",
		website: "https://recurly.com",
		description: "Recurly provides enterprise-class subscription billing and recurring payment management for thousands of businesses worldwide.",
		icon: "Recurly.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "recurly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.recurly\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "recurly:html:1",
				kind: "html",
				pattern: new RegExp("<input[^>]+data-recurly"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "recurly:jsGlobal:2",
				kind: "jsGlobal",
				property: "recurly.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "recurly:dom:3",
				kind: "dom",
				selector: "input[data-recurly]",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "red-je-pakketje",
		name: "Red je Pakketje",
		website: "https://redjepakketje.nl",
		description: "Red je Pakketje is a Dutch company specialised in same-day-delivery.",
		icon: "Red je Pakketje.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "red-je-pakketje:text:0",
				kind: "text",
				pattern: new RegExp("\\bRed je Pakketje\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "redonner",
		name: "Redonner",
		website: "https://www.redonner.fr",
		description: "This company promotes the collection and recycling of textiles by rewarding each donation of clothing made on its website with 'Re' points, allowing you to benefit from advantages and discounts at more than 70 partner brands.",
		icon: "Redonner.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "redonner:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.redonner\\.fr\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "refundid",
		name: "Refundid",
		website: "https://refundid.com",
		description: "Refundid provides ecommerce customers instant refunds for their online returns.",
		icon: "Refundid.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "refundid:dom:0",
				kind: "dom",
				selector: "a[href*='.refundid.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "refundid:jsGlobal:1",
				kind: "jsGlobal",
				property: "launchRefundidPopup",
				description: "Page-owned global matches a known technology marker.",
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
		id: "relais-colis",
		name: "Relais Colis",
		website: "https://www.relaiscolis.com",
		description: "Relais Colis is a French parcel delivery network.",
		icon: "Relais Colis.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "relais-colis:text:0",
				kind: "text",
				pattern: new RegExp("\\bRelais Colis\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "reshop",
		name: "Reshop",
		website: "https://www.reshop.com",
		description: "Reshop is a returns platform that integrates with Shopify to streamline and manage product return processes.",
		icon: "Reshop.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "reshop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:https?:)?\\/\\/[^\"']*\\/widgets\\/reshop-tooltip(?:\\.min)?\\.js(?:\\?[^\"']*)?"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "resolvepay",
		name: "ResolvePay",
		website: "https://resolvepay.com/b2b-payments",
		description: "Resolve Pay is a platform that provides 30 to 60 day net terms financing for B2B merchants and buyers.",
		icon: "ResolvePay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "resolvepay:jsGlobal:0",
				kind: "jsGlobal",
				property: "as_resolveEnvironmentURL",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "returnflows",
		name: "Returnflows",
		website: "https://www.returnflows.com",
		description: "Returnflows is a platform that supports businesses in managing product returns and reducing revenue loss associated with refunds.",
		icon: "Returnflows.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "returnflows:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.returnflows\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "returngo",
		name: "ReturnGO",
		website: "https://returngo.ai",
		description: "ReturnGO's AI-driven returns management platform significantly improves customer lifetime value and post-purchase experience.",
		icon: "ReturnGO.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "returngo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.returngo\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "returngo:jsGlobal:1",
				kind: "jsGlobal",
				property: "returnGoCanBeRun",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "returngo:jsGlobal:2",
				kind: "jsGlobal",
				property: "returnGoIntegrationData",
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
		id: "returnly",
		name: "Returnly",
		website: "https://returnly.com",
		description: "Returnly is the provider of digital return experiences for direct-to-consumer brands.",
		icon: "Returnly.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "returnly:dom:0",
				kind: "dom",
				selector: "a[href*='.returnly.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "returnly:jsGlobal:1",
				kind: "jsGlobal",
				property: "Returnly.ContainerSwitcher",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "returnly:jsGlobal:2",
				kind: "jsGlobal",
				property: "Returnly.InternalEventTracker",
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
		id: "revcent",
		name: "RevCent",
		website: "https://revcent.com",
		description: "RevCent is a payment processing solution designed to manage and facilitate online transactions for businesses across various platforms.",
		icon: "RevCent.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "revcent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.revcent\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "rise-ai",
		name: "Rise.ai",
		website: "https://rise.ai",
		description: "Rise.ai is a strategic re-engagement solution that provides brands and retailers with a unique currency of their own.",
		icon: "Rise.ai.svg",
		categories: [
			"commerce-operations",
			"marketing-automation",
		],
		rules: [
			{
				id: "rise-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("strn\\.rise-ai\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rise-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "Rise.shop",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rise-ai:jsGlobal:2",
				kind: "jsGlobal",
				property: "RiseStoreFront",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "rivo",
		name: "Rivo",
		website: "https://www.rivo.io",
		description: "Rivo is a Shopify loyalty and referrals platform.",
		icon: "Rivo.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "rivo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/extensions\\/[^/]+\\/rivo-loyalty-rewards-referrals-\\d+\\/assets\\/rivo-app-embed\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "route",
		name: "Route",
		website: "https://route.com/",
		description: "Route is a delivery and shipping tracking app.",
		icon: "route.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "route:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/cdn.routeapp.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "route:jsGlobal:1",
				kind: "jsGlobal",
				property: "Routeapp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "route:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\.routeapp\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "route:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.routeapp\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "route:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("shopify-widget\\.route\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "route:jsGlobal:5",
				kind: "jsGlobal",
				property: "routeWidgetInitialized",
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
		id: "royal-mail",
		name: "Royal Mail",
		website: "https://www.royalmail.com",
		description: "Royal Mail is a British multinational postal service and courier company.",
		icon: "Royal Mail.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "royal-mail:text:0",
				kind: "text",
				pattern: new RegExp("\\bRoyal Mail\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "scalapay",
		name: "Scalapay",
		website: "https://www.scalapay.com/",
		description: "Scalapay is a payment method for e-commerce merchants in Europe that allows customers to buy now and pay later (BNPL).",
		icon: "Scalapay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "scalapay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.scalapay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "seel",
		name: "Seel",
		website: "https://www.seel.com",
		description: "Seel is a solution for online merchants and marketplaces that enables revenue protection by reducing losses from refunds and returns.",
		icon: "Seel.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "seel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.seel\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "seel:jsGlobal:1",
				kind: "jsGlobal",
				property: "SeelSDK",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "seko-omnireturns",
		name: "Seko OmniReturns",
		website: "https://www.sekologistics.com/us/global-cross-border-returns",
		description: "Seko OmniReturns is an online portal used on ecommerce websites for customers to create returns and shipping labels globally. Seko is a global logistics company offering both the technology and reverse logistics.",
		icon: "Seko OmniReturns.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "seko-omnireturns:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/cdn\\.omniparcelreturns\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"poa",
				"recurring",
			],
		},
		implies: [
			"mysql",
			"php",
		],
	},
	{
		id: "sendowl",
		name: "SendOwl",
		website: "https://www.sendowl.com",
		description: "SendOwl is a platform that provides payment links and sales page tools needed to sell products online.",
		icon: "SendOwl.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sendowl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("transactions\\.sendowl\\.com"),
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
		id: "sequra",
		name: "SeQura",
		website: "https://www.sequra.es",
		description: "SeQura is a FinTech company based in Barcelona, providing digital flexible payment solutions, with a geographical focus on Southern Europe and Latin America.",
		icon: "SeQura.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sequra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("live\\.sequracdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sequra:jsGlobal:1",
				kind: "jsGlobal",
				property: "Sequra",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sequra:jsGlobal:2",
				kind: "jsGlobal",
				property: "SequraConfiguration",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sequra:jsGlobal:3",
				kind: "jsGlobal",
				property: "sequraProducts",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "service-provider-pro",
		name: "Service Provider Pro",
		website: "https://spp.co",
		description: "Service Provider Pro is a client management & billing software for productized service agencies.",
		icon: "Service Provider Pro.svg",
		categories: [
			"commerce-operations",
			"business-tools",
		],
		rules: [
			{
				id: "service-provider-pro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\/spp_clients\\.js"),
				confidence: 50,
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "service-provider-pro:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.spp\\.io\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "service-provider-pro:jsGlobal:2",
				kind: "jsGlobal",
				property: "sppOrderform",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "service-provider-pro:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^spp_csrf$", "i"),
				confidence: 25,
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "service-provider-pro:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^spp_orderform$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "service-provider-pro:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^spp_session$", "i"),
				confidence: 25,
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "service-provider-pro:meta:6",
				kind: "meta",
				key: "server",
				valuePattern: new RegExp("app.spp.co", "i"),
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
		id: "sessionly",
		name: "Sessionly",
		website: "https://sessionly.hubspotpagebuilder.com",
		description: "Sessionly is a loyalty and referral program for Shopware and Shopify merchants, focusing on customer retention and acquisition through rewards and detailed analytics.",
		icon: "Sessionly.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sessionly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/sessionly\\.io\\/"),
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
		requires: [
			"shopify",
			"shopware",
		],
	},
	{
		id: "seur",
		name: "SEUR",
		website: "https://www.seur.com",
		description: "SEUR is a Spanish shipments and express transport company.",
		icon: "DPD.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "seur:text:0",
				kind: "text",
				pattern: new RegExp("\\bSEUR\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "sezzle",
		name: "Sezzle",
		website: "https://sezzle.com/",
		description: "Sezzle offers a buy-now-pay-later solution.",
		icon: "Sezzle.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sezzle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.sezzle\\.(?:in|com)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sezzle:jsGlobal:1",
				kind: "jsGlobal",
				property: "AwesomeSezzle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sezzle:jsGlobal:2",
				kind: "jsGlobal",
				property: "renderSezzleIframe",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sezzle:jsGlobal:3",
				kind: "jsGlobal",
				property: "sezzle_footer_images",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sherpa",
		name: "Sherpa",
		website: "https://www.sherpa.net.au",
		description: "Sherpa is a platform that provides on-demand courier services in Australia, enabling delivery of goods from various locations.",
		icon: "Sherpa.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sherpa:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("plugin-app\\.sherpa\\.net\\.au"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "shippypro",
		name: "ShippyPro",
		website: "https://www.shippypro.com",
		description: "ShippyPro is the complete shipping software for ecommerce that helps worldwide merchants to ship, track, and manage returns for their orders.",
		icon: "ShippyPro.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shippypro:dom:0",
				kind: "dom",
				selector: "a[href*='.shippypro.com/return-form.html']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "shippypro:jsGlobal:1",
				kind: "jsGlobal",
				property: "ShippyProReturnForm",
				description: "Page-owned global matches a known technology marker.",
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
		id: "shipstation",
		name: "ShipStation",
		website: "https://www.shipstation.com",
		description: "ShipStation is a web-based shipping software designed to help ecommerce businesses streamline their shipping processes. It allows businesses to import, manage, and ship their orders from multiple sales channels, including marketplaces, shopping carts, and ecommerce platforms.",
		icon: "ShipStation.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shipstation:url:0",
				kind: "url",
				pattern: new RegExp("track\\.shipstation\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "shipstation:dom:1",
				kind: "dom",
				selector: "a[href*='//track.shipstation.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "shipup",
		name: "Shipup",
		website: "https://www.shipup.co",
		description: "Shipup is a system that enables users to track shipping packages, providing real-time updates on delivery status and location.",
		icon: "Shipup.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shipup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.shipup\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shipup:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("shipup\\.co"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "shipup:jsGlobal:2",
				kind: "jsGlobal",
				property: "ShipupETA",
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
		id: "shop-pay",
		name: "Shop Pay",
		website: "https://shop.app",
		description: "Shop Pay is an accelerated checkout that allows customers to save their email address, credit card, and shipping and billing information so they can complete their transaction faster the next time they are directed to the Shopify checkout.",
		icon: "Shop Pay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shop-pay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/shopifycloud\\/shopify_pay\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shop-pay:dom:1",
				kind: "dom",
				selector: "[aria-labelledby='pi-shopify_pay']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "shop-pay:dom:2",
				kind: "dom",
				selector: "ul[data-shopify-buttoncontainer] li",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "shop-pay:text:3",
				kind: "text",
				pattern: new RegExp("ShopPay"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "shop-pay:jsGlobal:4",
				kind: "jsGlobal",
				property: "ShopifyPay.apiHost",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shop-pay:jsGlobal:5",
				kind: "jsGlobal",
				property: "ShopPay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shop-pay:scriptSrc:6",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/shopifycloud\\/shopify-js\\/shop-pay-payment-request\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "shop-pay-installments",
		name: "Shop Pay Installments",
		website: "https://shoppay.affirm.com",
		description: "Shop Pay Installments allows customers to pay for orders between 50 USD and 3,000 USD in 4 interest-free installments.",
		icon: "Shop Pay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shop-pay-installments:dom:0",
				kind: "dom",
				selector: ".shopify-installments__learn-more, .shopify-installments, #shopify-installments-cta",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"affirm",
			"shop-pay",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "shopflo",
		name: "Shopflo",
		website: "https://shopflo.com",
		description: "Shopflo is a platform that enables easy checkout experience for ecommerce brands.",
		icon: "Shopflo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shopflo:jsGlobal:0",
				kind: "jsGlobal",
				property: "Shopflo",
				description: "Page-owned global matches a known technology marker.",
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
		id: "shophub",
		name: "ShopHub",
		website: "https://www.tryshophub.com",
		description: "ShopHub is a platform that helps Shopify store owners grow their businesses by providing loyalty programs, coupons, and email capture services.",
		icon: "ShopHub.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shophub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.tryshophub\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shophub:jsGlobal:1",
				kind: "jsGlobal",
				property: "toggleShopHubWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "shoppable",
		name: "Shoppable",
		website: "https://about.shoppable.com",
		description: "Shoppable is a multi-retailer checkout technology.",
		icon: "Shoppable.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shoppable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.shoppable\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shoppable:jsGlobal:1",
				kind: "jsGlobal",
				property: "ShoppableApi",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"high",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "shoprunner",
		name: "Shoprunner",
		website: "https://www.shoprunner.com",
		description: "ShopRunner is a service offering consumers free two-day shipping and returns on online orders placed with certain retailers.",
		icon: "Shoprunner.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "shoprunner:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/shoprunner\\/shoprunner_init\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shoprunner:dom:1",
				kind: "dom",
				selector: "link[href*='content.shoprunner.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "shoprunner:jsGlobal:2",
				kind: "jsGlobal",
				property: "_shoprunner_com",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shoprunner:jsGlobal:3",
				kind: "jsGlobal",
				property: "_shoprunner_com.version",
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
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "simpl",
		name: "Simpl",
		website: "https://getsimpl.com",
		description: "Simpl is a fintech company that offers a cardless payment network with multiple solutions for merchants and consumers.",
		icon: "Simpl.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "simpl:jsGlobal:0",
				kind: "jsGlobal",
				property: "simplSettings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "skyverge",
		name: "SkyVerge",
		website: "https://www.skyverge.com",
		description: "SkyVerge  is a company which develop extension tools for WooCommerce stores.",
		icon: "SkyVerge.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "skyverge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sv-wc-payment-gateway-payment-form\\.js(?:\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "skyverge:jsGlobal:1",
				kind: "jsGlobal",
				property: "sv_wc_payment_gateway_payment_form_param",
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
		implies: [
			"woocommerce",
		],
	},
	{
		id: "smile",
		name: "Smile",
		website: "https://smile.io",
		description: "Smile is a provider of ecommerce loyalty programs.",
		icon: "Smile.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "smile:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.(?:smile|sweettooth)\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "smile:jsGlobal:1",
				kind: "jsGlobal",
				property: "Smile.channel_key",
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
		id: "sogecommerce",
		name: "Sogecommerce",
		website: "https://sogecommerce.societegenerale.eu",
		description: "Sogecommerce is an online payment system provided by Societe Generale for processing digital transactions securely.",
		icon: "Sogecommerce.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sogecommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/woo-sogecommerce-payment\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "soisy",
		name: "Soisy",
		website: "https://www.soisy.it",
		description: "Soisy is a buy now, pay later solution provider.",
		icon: "Soisy.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "soisy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.soisy\\.it\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "sorted-return",
		name: "Sorted Return",
		website: "https://sorted.com/give-your-customers-a-5-returns-experience/",
		description: "Sorted is a global SaaS company that provides data-driven software for checkouts, warehouses, and shipping.",
		icon: "Sorted.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sorted-return:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("return\\.clicksit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sorted-return:dom:1",
				kind: "dom",
				selector: "a[href*='return.clicksit.com/shop/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sorted-return:jsGlobal:2",
				kind: "jsGlobal",
				property: "clicksit_window_on_load",
				description: "Page-owned global matches a known technology marker.",
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
		id: "splitit",
		name: "SplitIt",
		website: "https://www.splitit.com",
		description: "SplitIt is a payment solution that divides a purchase into smaller monthly installments.",
		icon: "SplitIt.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "splitit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.production\\.splitit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "splitit:jsGlobal:1",
				kind: "jsGlobal",
				property: "Splitit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "splitit:jsGlobal:2",
				kind: "jsGlobal",
				property: "wc_ga_pro.available_gateways.splitit",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "splittypay",
		name: "SplittyPay",
		website: "https://www.splittypay.com",
		description: "SplittyPay is an alternative payment platform designed for group reservations and purchases.",
		icon: "SplittyPay.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "splittypay:dom:0",
				kind: "dom",
				selector: "img[src*='splittypay']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "spotii",
		name: "Spotii",
		website: "https://www.spotii.com/",
		description: "Spotii is a tech-enabled payments platform where anyone can Shop Now and Pay Later with absolutely zero interest or cost.",
		icon: "Spotii.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "spotii:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.spotii\\.me"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spotii:jsGlobal:1",
				kind: "jsGlobal",
				property: "spotiiConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "spoton",
		name: "SpotOn",
		website: "https://www.spoton.com",
		description: "SpotOn is a provider of point-of-sale systems and payment processing software tailored to fit your workflow.",
		icon: "SpotOn.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "spoton:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cdn\\.spoton\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "spurit-abandoned-cart-reminder",
		name: "SpurIT Abandoned Cart Reminder",
		website: "https://spur-i-t.com/shopify-apps/abandoned-cart-reminder/",
		description: "SpurIT Abandoned Cart Reminder bring back your Shopify store visitors who moved to another tab by blinking your store tab.",
		icon: "SpurIT.svg",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "spurit-abandoned-cart-reminder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-spurit\\.com\\/shopify-apps\\/abandoned-cart-reminder\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spurit-abandoned-cart-reminder:jsGlobal:1",
				kind: "jsGlobal",
				property: "ACR_SPURIT_Params.folderCss",
				valuePattern: new RegExp("cdn-spurit\\.com\\/shopify-apps\\/abandoned-cart-reminder\\/"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "spurit-loyalty-app",
		name: "SpurIT Loyalty App",
		website: "https://spur-i-t.com/shopify-apps/loyalty-points-manager",
		description: "SpurIT Loyalty App is a turnkey solution allowing you to reward existing customers in a number of ways.",
		icon: "SpurIT.svg",
		categories: [
			"commerce-operations",
			"marketing-automation",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "spurit-loyalty-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-spurit\\.com\\/shopify-apps\\/loyaltypoints\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spurit-loyalty-app:jsGlobal:1",
				kind: "jsGlobal",
				property: "Spurit.Loyaltypoints",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "spurit-partial-payments-app",
		name: "SpurIT Partial Payments App",
		website: "https://spur-i-t.com/shopify-apps/split-partial-payments/",
		description: "SpurIT Partial Payments App allow your customers to pay for the order in several ways or to share a payment with other people.",
		icon: "SpurIT.svg",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "spurit-partial-payments-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-spurit\\.com\\/shopify-apps\\/split-payments\\/"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "spurit-recurring-payments-app",
		name: "SpurIT Recurring Payments App",
		website: "https://spur-i-t.com/shopify-apps/recurring-order-subscription",
		description: "SpurIT Recurring Payments App is a simple way to create a system of bill payment,subscriptions and invoicing.",
		icon: "SpurIT.svg",
		categories: [
			"commerce-operations",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "spurit-recurring-payments-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-spurit\\.com\\/shopify-apps\\/recurring-invoices\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spurit-recurring-payments-app:jsGlobal:1",
				kind: "jsGlobal",
				property: "Spurit.recurringInvoices",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "square",
		name: "Square",
		website: "https://squareup.com/",
		description: "Square is a mobile payment company that offers business software, payment hardware products and small business services.",
		icon: "Square.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "square:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.squareup\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "square:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.squareup\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "square:jsGlobal:2",
				kind: "jsGlobal",
				property: "SqPaymentForm",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "square:jsGlobal:3",
				kind: "jsGlobal",
				property: "Square.Analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "square:jsGlobal:4",
				kind: "jsGlobal",
				property: "__BOOTSTRAP_STATE__.storeInfo.square_application_id",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "stage-try",
		name: "Stage Try",
		website: "https://stagetry.com",
		description: "Stage Try is an end-to-end ecommerce platform amplifying AOV and conversions of online stores.",
		icon: "Stage Try.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "stage-try:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stagetry\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stage-try:jsGlobal:1",
				kind: "jsGlobal",
				property: "stage_cart_change_events",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stage-try:jsGlobal:2",
				kind: "jsGlobal",
				property: "stage_cart_total_price",
				description: "Page-owned global matches a known technology marker.",
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
		id: "stax",
		name: "Stax",
		website: "https://staxpayments.com",
		description: "Stax is a subscription-based platform offering integrated payment technology.",
		icon: "Stax.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "stax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("staxjs\\.staxpayments\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stax:jsGlobal:1",
				kind: "jsGlobal",
				property: "StaxJs",
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
		id: "stripe",
		name: "Stripe",
		website: "https://stripe.com",
		description: "Stripe offers online payment processing for internet businesses as well as fraud prevention, invoicing and subscription management.",
		icon: "Stripe.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "stripe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.stripe\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stripe:html:1",
				kind: "html",
				pattern: new RegExp("<input[^>]+data-stripe"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "stripe:jsGlobal:2",
				kind: "jsGlobal",
				property: "Stripe.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stripe:jsGlobal:3",
				kind: "jsGlobal",
				property: "__NEXT_DATA__.props.pageProps.appSettings.STRIPE_API_PUBLIC_KEY",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stripe:jsGlobal:4",
				kind: "jsGlobal",
				property: "checkout.enabledpayments.stripe",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stripe:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^__stripe_mid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "stripe:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^__stripe_sid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "stripe:dns:7",
				kind: "dns",
				valuePattern: new RegExp("stripe-verification=", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "stripe:dom:8",
				kind: "dom",
				selector: "a[href*='billing.stripe.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "stripe:dom:9",
				kind: "dom",
				selector: "a[href*='checkout.stripe.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "stripe:dom:10",
				kind: "dom",
				selector: "input[data-stripe]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "stripe:jsGlobal:11",
				kind: "jsGlobal",
				property: "stripePublicKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stripe:dom:12",
				kind: "dom",
				selector: "a[href*='billing.stripe.com'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "stripe:dom:13",
				kind: "dom",
				selector: "a[href*='billing.stripe.com'],a[href*='checkout.stripe.com'], input[data-stripe]",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
			cpe: "cpe:2.3:a:stripe:stripe:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "sumup",
		name: "SumUp",
		website: "https://www.sumup.com",
		description: "SumUp is a provider of payment acceptance solutions.",
		icon: "SumUp.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sumup:jsGlobal:0",
				kind: "jsGlobal",
				property: "SumUpCard.debug",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sumup:jsGlobal:1",
				kind: "jsGlobal",
				property: "SumUpPayment.debug",
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
		id: "sweethelp",
		name: "SweetHelp",
		website: "https://sweethelp.io",
		description: "SweetHelp is a messaging solution that recovers abandoned carts by sending texts via Whatsapp and SMS.",
		icon: "SweetHelp.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "sweethelp:jsGlobal:0",
				kind: "jsGlobal",
				property: "sweetHelpBtnLoad",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "t1-envios",
		name: "T1 Envios",
		website: "https://t1envios.com",
		description: "T1 Envios is a delivery solution, allows the business to select the best courier to send their packages.",
		icon: "T1 Envios.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "t1-envios:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^T1ENVIOS$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "t1-envios:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^t1envios$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "t1-pagos",
		name: "T1 Pagos",
		website: "https://www.t1pagos.com",
		description: "T1 Pagos is a payment processing platform.",
		icon: "T1 Pagos.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "t1-pagos:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^T1PAGOS$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "t1-pagos:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^t1pagos$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "tabby",
		name: "Tabby",
		website: "https://tabby.ai/",
		description: "Tabby is a Buy now pay later solution from Middle East.",
		icon: "Tabby.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "tabby:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("checkout\\.tabby\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tabby:jsGlobal:1",
				kind: "jsGlobal",
				property: "Tabby",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tabby:jsGlobal:2",
				kind: "jsGlobal",
				property: "TabbyPromo",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tamara",
		name: "Tamara",
		website: "https://tamara.co/",
		description: "Tamara ia a BNPL (Buy now pay later) provider in Saudi Arabia.",
		icon: "Tamara.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "tamara:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.tamara\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tamara:jsGlobal:1",
				kind: "jsGlobal",
				property: "TamaraProductWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tap-payments",
		name: "Tap Payments",
		website: "https://www.tap.company",
		description: "Tap Payments is a company based in KSA provides payment services to merchants.",
		icon: "Tap Payments.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "tap-payments:dom:0",
				kind: "dom",
				selector: "iframe[src*='checkout.payments.tap.company/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "tapmango",
		name: "TapMango",
		website: "https://www.tapmango.com",
		description: "TapMango is a customizable customer loyalty program and online ordering platform designed to enhance customer engagement and streamline ordering processes.",
		icon: "TapMango.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "tapmango:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("shopify\\.tapmango\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "thanx",
		name: "Thanx",
		website: "https://www.thanx.com",
		description: "Thanx is a platform that captures insights, retains loyal fans, sends highly-targeted campaigns, and measures results in real revenue.",
		icon: "Thanx.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "thanx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.thanx\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "tipsa",
		name: "Tipsa",
		website: "https://www.tip-sa.com",
		description: "TIPSA is a parcel delivery company in Spain, Portugal and Andorra.",
		icon: "Tipsa.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "tipsa:text:0",
				kind: "text",
				pattern: new RegExp("\\bTipsa\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "tns-payments",
		name: "TNS Payments",
		website: "https://tnsi.com/products/payments/",
		description: "TNS Payments, is designed to deliver payment transaction information to banks, merchants, processors and other payment institutions.",
		icon: "tnsi.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "tns-payments:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("secure\\.ap\\.tnspayments\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "transmart",
		name: "Transmart",
		website: "https://transmartshipping.com",
		description: "Transmart is a shipping company in Turkey.",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "transmart:text:0",
				kind: "text",
				pattern: new RegExp("\\bTransmart\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "trunkrs",
		name: "Trunkrs",
		website: "https://trunkrs.nl",
		description: "Trunkrs is a Dutch parcel delivery service.",
		icon: "Trunkrs.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "trunkrs:text:0",
				kind: "text",
				pattern: new RegExp("\\bTrunkrs\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "trynow",
		name: "TryNow",
		website: "https://www.trynow.io",
		description: "TryNow is an ecommerce platform designed to offer a try before you buy experience for shoppers.",
		icon: "TryNow.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "trynow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trynow\\.net\\/shopify\\/([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trynow:jsGlobal:1",
				kind: "jsGlobal",
				property: "TryNowConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trynow:jsGlobal:2",
				kind: "jsGlobal",
				property: "tryNowCheckout",
				description: "Page-owned global matches a known technology marker.",
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
		id: "uk-mail",
		name: "UK Mail",
		website: "https://www.ukmail.com",
		description: "UK Mail is a postal service company operating in the United Kingdom.",
		icon: "UK Mail.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "uk-mail:text:0",
				kind: "text",
				pattern: new RegExp("\\bUK Mail\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "ups",
		name: "UPS",
		website: "https://www.ups.com",
		description: "UPS is an American multinational shipping & receiving and supply chain management company.",
		icon: "UPS.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "ups:text:0",
				kind: "text",
				pattern: new RegExp("\\b(?<!-)UPS\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "upsellit",
		name: "UpSellit",
		website: "https://us.upsellit.com",
		description: "UpSellit is a performance based lead and cart abandonment recovery solutions.",
		icon: "UpSellit.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "upsellit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.upsellit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "upsellit:jsGlobal:1",
				kind: "jsGlobal",
				property: "usi_analytics",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "upsellit:jsGlobal:2",
				kind: "jsGlobal",
				property: "usi_app",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "upsellit:jsGlobal:3",
				kind: "jsGlobal",
				property: "usi_commons",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "upsellit:jsGlobal:4",
				kind: "jsGlobal",
				property: "usi_cookies",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
			],
		},
	},
	{
		id: "uptain",
		name: "Uptain",
		website: "https://uptain.de",
		description: "Uptain is a software solution designed to reduce shopping cart abandonment in ecommerce by utilizing AI-based tools like exit-intent popups and trigger emails.",
		icon: "Uptain.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "uptain:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.uptain\\.de\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "uptain:jsGlobal:1",
				kind: "jsGlobal",
				property: "uptainUpdateUrl",
				description: "Page-owned global matches a known technology marker.",
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
		id: "usps",
		name: "USPS",
		website: "https://www.usps.com",
		description: "The United States Postal Service (USPS) is an independent agency of the executive branch of the United States federal government responsible for providing postal service in the United States.",
		icon: "USPS.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "usps:text:0",
				kind: "text",
				pattern: new RegExp("\\bUSPS\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "usps:text:1",
				kind: "text",
				pattern: new RegExp("\\bUnited States Postal Service\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "venmo",
		name: "Venmo",
		website: "https://venmo.com",
		description: "Venmo is a mobile payment service owned by PayPal. Venmo account holders can transfer funds to others via a mobile phone app.",
		icon: "Venmo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "venmo:dom:0",
				kind: "dom",
				selector: "[aria-labelledby='pi-venmo'], [data-venmo-supported='true']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "veracore",
		name: "VeraCore",
		website: "https://www.advantive.com/products/veracore",
		description: "VeraCore is an order fulfillment software platform that supports inventory management, warehousing, order processing, and shipping operations.",
		icon: "VeraCore.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "veracore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.veracore\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "veracore:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.veracore\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "veracore:jsGlobal:2",
				kind: "jsGlobal",
				property: "VeraCore.API",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			cpe: "cpe:2.3:a:advantive:veracore:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "verifone-2checkout",
		name: "Verifone 2Checkout",
		website: "https://www.2checkout.com",
		description: "Verifone is an American multinational corporation headquartered in Coral Springs, Florida, that provides technology for electronic payment transactions and value-added services at the point-of-sale.",
		icon: "Verifone.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "verifone-2checkout:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("2checkout\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "verifone-2checkout:dom:1",
				kind: "dom",
				selector: "#order__processedby",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "verifone-2checkout:text:2",
				kind: "text",
				pattern: new RegExp("2Checkout"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "verifone-2checkout:dom:3",
				kind: "dom",
				selector: "link[href*='.2checkout.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "viabill",
		name: "ViaBill",
		website: "https://viabill.com",
		description: "ViaBill is a cloud-based payment management solution designed to help small to midsize retailers and webshops.",
		icon: "ViaBill.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "viabill:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.viabill\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "viabill:jsGlobal:1",
				kind: "jsGlobal",
				property: "viabillOptions.state.subscriptions",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "viabill:jsGlobal:2",
				kind: "jsGlobal",
				property: "viabillPricetagInternal.conf.productsByLocale",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "visa",
		name: "Visa",
		website: "https://www.visa.com",
		icon: "Visa.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "visa:dom:0",
				kind: "dom",
				selector: "[aria-labelledby='pi-visa']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "visa:jsGlobal:1",
				kind: "jsGlobal",
				property: "visaApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "visa:jsGlobal:2",
				kind: "jsGlobal",
				property: "visaImage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "visa:jsGlobal:3",
				kind: "jsGlobal",
				property: "visaSrc",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "visa-checkout",
		name: "Visa Checkout",
		website: "https://checkout.visa.com",
		description: "Visa facilitates electronic funds transfers throughout the world, most commonly through Visa-branded credit cards, debit cards and prepaid cards.",
		icon: "Visa.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "visa-checkout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("secure\\.checkout\\.visa\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "voltage",
		name: "Voltage",
		website: "https://www.voltage.cloud",
		description: "Voltage is a payments platform that enables users to send bitcoin globally through a secure network.",
		icon: "Voltage.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "voltage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("btcpay0\\.voltageapp\\.io"),
				description: "Script source URL matches a known technology marker.",
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
		id: "voucherify",
		name: "Voucherify",
		website: "https://www.voucherify.io",
		description: "Voucherify is an incentive optimization engine designed for high-frequency commerce.",
		icon: "Voucherify.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "voucherify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.voucherify\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "vyper",
		name: "Vyper",
		website: "https://vyper.io",
		description: "Vyper is a system for creating and managing giveaways or viral contests to increase engagement and reach.",
		icon: "Vyper.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "vyper:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("vyper\\.io"),
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
		id: "waaship",
		name: "Waaship",
		website: "https://waaship.com",
		description: "Waaship is an all-in-one fulfillment software designed to manage orders, inventory, picking, packing, and shipping.",
		icon: "Waaship.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "waaship:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("platform-app\\.waaship\\.com"),
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
		id: "wallkit",
		name: "Wallkit",
		website: "https://wallkit.net",
		description: "Wallkit is a plug-and-play subscription management system.",
		icon: "Wallkit.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "wallkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wallkit\\.net\\/js\\/integration\\/latest\\/wallkit-integration-library\\.min\\.js\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wallkit:jsGlobal:1",
				kind: "jsGlobal",
				property: "WALLKIT_CDN_URL",
				valuePattern: new RegExp("\\.wallkit\\.net"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "warply",
		name: "Warply",
		website: "https://warp.ly",
		description: "Warply is a customer loyalty platform that enables businesses to manage rewards, track engagement, and enhance customer retention through targeted campaigns.",
		icon: "Warply.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "warply:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.warp\\.ly"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "wayforpay",
		name: "WayForPay",
		website: "https://wayforpay.com",
		description: "WayForPay is a payment processing service provider based in Europe.",
		icon: "WayForPay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "wayforpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("secure\\.wayforpay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wayforpay:dom:1",
				kind: "dom",
				selector: "form[action*='secure.wayforpay.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "webxpay",
		name: "WEBXPAY",
		website: "https://webxpay.com",
		description: "WEBXPAY is a specialised online payment gateway that expedites buying and selling in a highly secured environment.",
		icon: "WEBXPAY.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "webxpay:jsGlobal:0",
				kind: "jsGlobal",
				property: "WEBXPAY",
				description: "Page-owned global matches a known technology marker.",
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
		id: "wepay",
		name: "Wepay",
		website: "https://go.wepay.com",
		description: "Wepay is a provider of integrated payments processing solutions tailored for platforms, facilitating transaction management across diverse service offerings.",
		icon: "WePay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "wepay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wepay\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wepay:dom:1",
				kind: "dom",
				selector: "link[href*='.wepay.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "wepay:jsGlobal:2",
				kind: "jsGlobal",
				property: "WePay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "whistl",
		name: "Whistl",
		website: "https://www.whistl.co.uk",
		description: "Whistl is a postal delivery company operating in the United Kingdom.",
		icon: "Whistl.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "whistl:text:0",
				kind: "text",
				pattern: new RegExp("\\bWhistl\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "wirecard",
		name: "Wirecard",
		website: "https://www.wirecard.com",
		description: "Wirecard is a defunct German payment processor and financial services provider.",
		icon: "Wirecard.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "wirecard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wirecard\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wirecard:jsGlobal:1",
				kind: "jsGlobal",
				property: "WirecardHPP",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wirecard:jsGlobal:2",
				kind: "jsGlobal",
				property: "WirecardPaymentPage",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "with-reach",
		name: "With Reach",
		website: "https://www.withreach.com",
		description: "With Reach is a fintech/payments service provider that helps retailers connect with customers around the world.",
		icon: "With Reach.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "with-reach:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rch\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "with-reach:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("checkout\\.gointerpay\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "wizpay",
		name: "Wizpay",
		website: "https://www.wizpay.com.au",
		description: "Wizpay is a buy now pay later solution.",
		icon: "Wizpay.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "wizpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/creditcorp-wizardpay\\/.+\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "worldpay",
		name: "WorldPay",
		website: "https://online.worldpay.com",
		description: "WorldPay is a merchant services and payment processing provider offering a payment gateway for online transactions.",
		icon: "WorldPay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "worldpay:dom:0",
				kind: "dom",
				selector: "img[src*='secure.worldpay.com'], img[alt='Powered by WorldPay'], a[href*='worldpay.com'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "worldshopping",
		name: "WorldShopping",
		website: "https://www.worldshopping.global/",
		description: "WorldShopping makes online purchases in Japan easier for international visitors.",
		icon: "worldshopping.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "worldshopping:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("checkout-api\\.worldshopping\\.jp\\/(v\\d+)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "wyre",
		name: "Wyre",
		website: "https://sendwyre.com",
		description: "Wyre is a financial technology platform that enables cryptocurrency companies to connect digital assets with traditional fiat payment systems.",
		icon: "Wyre.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "wyre:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("verify\\.sendwyre\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "xendit",
		name: "Xendit",
		website: "https://www.xendit.co",
		description: "Xendit is a payment gateway in Indonesia and Southeast Asia.",
		icon: "Xendit.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "xendit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.xendit\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xendit:jsGlobal:1",
				kind: "jsGlobal",
				property: "Xendit.card",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "xpresslane",
		name: "Xpresslane",
		website: "https://www.xpresslane.in",
		description: "Xpresslane is a checkout platform for ecommerce that focuses on increasing conversion during the checkout process.",
		icon: "Xpresslane.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "xpresslane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.xpresslane\\.in\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xpresslane:dom:1",
				kind: "dom",
				selector: "link[href*='/assets/xpresslane.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "xsolla",
		name: "Xsolla",
		website: "https://xsolla.com",
		description: "Xsolla is a video game business system offering payment solutions and store management.",
		icon: "Xsolla.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "xsolla:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.xsolla\\.(com|net)"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "yampi-checkout",
		name: "Yampi Checkout",
		website: "https://www.yampi.com.br/checkout",
		description: "Yampi Checkout is an payment processor from Brazil.",
		icon: "Yampi.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "yampi-checkout:jsGlobal:0",
				kind: "jsGlobal",
				property: "yampiCheckoutUrl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "yever",
		name: "Yever",
		website: "https://www.yever.com.br",
		description: "Yever is a digital payment and checkout platform that enables secure online transactions for businesses and customers.",
		icon: "Yever.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "yever:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.yever\\.com\\.br"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "yever:jsGlobal:1",
				kind: "jsGlobal",
				property: "currentUrlYever",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yever:jsGlobal:2",
				kind: "jsGlobal",
				property: "getUtmsUrlYever",
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
		id: "yodel",
		name: "Yodel",
		website: "https://www.yodel.co.uk/",
		description: "Yodel is a delivery company for B2B and B2C orders in the United Kingdom.",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "yodel:text:0",
				kind: "text",
				pattern: new RegExp("\\bYodel\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "yoomoney",
		name: "YooMoney",
		website: "https://yoomoney.ru",
		description: "YooMoney is an IT company working with electronic payments on the Internet, creating and supporting financial services for individuals and businesses.",
		icon: "YooMoney.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "yoomoney:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.yoomoney\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yoomoney:dom:1",
				kind: "dom",
				selector: "a[href*='yoomoney.ru'][target='_blank'], iframe[src*='yoomoney.ru'], img[src*='yoomoney.ru']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "yoomoney:header:2",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.yoomoney\\.ru", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "yoomoney:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.yoomoney\\.ru", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "yotpo-loyalty-and-referrals",
		name: "Yotpo Loyalty & Referrals",
		website: "https://www.yotpo.com/platform/loyalty/",
		description: "Yotpo is a user-generated content marketing platform.",
		icon: "Yotpo.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "yotpo-loyalty-and-referrals:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.swellrewards\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yotpo-loyalty-and-referrals:jsGlobal:1",
				kind: "jsGlobal",
				property: "SwellConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yotpo-loyalty-and-referrals:jsGlobal:2",
				kind: "jsGlobal",
				property: "swellAPI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yotpo-loyalty-and-referrals:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("cdn(?:-loyalty)?\\.(?:swellrewards|yotpo)\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "youcan-pay",
		name: "YouCan Pay",
		website: "https://youcanpay.com",
		description: "YouCan Pay is a developed electronic payment platform that provides effective solutions for the payment gatways issue in ecommerce in Morocco.",
		icon: "YouCan Pay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "youcan-pay:jsGlobal:0",
				kind: "jsGlobal",
				property: "YCPay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "yuno",
		name: "Yuno",
		website: "https://y.uno/",
		description: "Yuno is a global payment orchestrator used by checkout platforms to optimize payment processing and enhance transaction performance.",
		icon: "Yuno.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "yuno:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk-web\\.y\\.uno"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yuno:jsGlobal:1",
				kind: "jsGlobal",
				property: "Yuno.threeDSecure",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zeleris",
		name: "Zeleris",
		website: "https://www.zeleris.com",
		description: "Zeleris provides door to door shipment delivery to Ireland, UK and the EU.",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "zeleris:text:0",
				kind: "text",
				pattern: new RegExp("\\Zeleris\\b"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "zeleris:text:1",
				kind: "text",
				pattern: new RegExp("\\bZeleris\\b"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "zestmoney",
		name: "ZestMoney",
		website: "https://www.zestmoney.in",
		description: "ZestMoney is a fintech company that uses digital EMI without the need for a credit card or a credit score.",
		icon: "ZestMoney.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "zestmoney:jsGlobal:0",
				kind: "jsGlobal",
				property: "ZestMoneyWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zestmoney:jsGlobal:1",
				kind: "jsGlobal",
				property: "zestBind",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zestmoney:jsGlobal:2",
				kind: "jsGlobal",
				property: "zestMerchant",
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
		id: "zinrelo",
		name: "Zinrelo",
		website: "https://www.zinrelo.com",
		description: "Zinrelo is an enterprise-grade, loyalty rewards platform.",
		icon: "Zinrelo.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "zinrelo:jsGlobal:0",
				kind: "jsGlobal",
				property: "zrl_mi",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "zip",
		name: "Zip",
		website: "https://www.zip.co/",
		description: "Zip is a payment service that lets you receive your purchase now and spread the total cost over an interest-free payment schedule.",
		icon: "zip_pay.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "zip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("quadpay\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zip:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.zipmoney\\.com\\.au"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zip:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("zip\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zip:dom:3",
				kind: "dom",
				selector: "link[href*='widgets.quadpay.com/'], div[data-quadpay-src*='.quadpay.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "zip:jsGlobal:4",
				kind: "jsGlobal",
				property: "QuadPayShopify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zip:jsGlobal:5",
				kind: "jsGlobal",
				property: "checkout.enabledpayments.zip",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zip:jsGlobal:6",
				kind: "jsGlobal",
				property: "quadpayID",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "zonos",
		name: "Zonos",
		website: "https://zonos.com",
		description: "Zonos is a cross-border ecommerce software and app solution for companies with international business.",
		icon: "Zonos.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "zonos:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zonos\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zonos:jsGlobal:1",
				kind: "jsGlobal",
				property: "Zonos",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zonos:jsGlobal:2",
				kind: "jsGlobal",
				property: "zonos",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zonos:jsGlobal:3",
				kind: "jsGlobal",
				property: "zonosCheckout",
				description: "Page-owned global matches a known technology marker.",
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
		id: "zoodpay",
		name: "ZoodPay",
		website: "https://www.zoodpay.com",
		description: "ZoodPay is a financial technology company that provides payment and financing solutions, including buy-now-pay-later (BNPL) services and point-of-sale financing, to facilitate transactions for consumers and businesses.",
		icon: "ZoodPay.png",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "zoodpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/zoodpay\\/(?:.+\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zoodpay:dom:1",
				kind: "dom",
				selector: "img[src*='zoodpay']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "zuora",
		name: "Zuora",
		website: "https://www.zuora.com",
		description: "Zuora is a platform that offers subscription billing management software.",
		icon: "Zuora.svg",
		categories: [
			"commerce-operations",
		],
		rules: [
			{
				id: "zuora:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zuora\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
	},
] as const satisfies readonly TechnologyDefinition[];
