import type { TechnologyDefinition } from '../types';

export const ecommerceExtensionsTechnologyDefinitions = [
	{
		id: "accentuate-custom-fields",
		name: "Accentuate Custom Fields",
		website: "https://www.accentuate.io",
		description: "Accentuate Custom Fields is the professional and de facto solution to easily extend your Shopify store with your own custom fields such multi-language text fields, images, checkboxes, dates, selection list and custom JSON objects.",
		icon: "Accentuate Custom Fields.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "accentuate-custom-fields:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.accentuate\\.io\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "accentuate-custom-fields:dom:1",
				kind: "dom",
				selector: "a[style*='.accentuate.io/'], a[data-bg*='.accentuate.io/'], div[style*='.accentuate.io/'], img[src*='.accentuate.io/'], img[data-src*='.accentuate.io/']",
				description: "DOM selector matches a known technology marker.",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "adnabu",
		name: "AdNabu",
		website: "https://www.adnabu.com",
		description: "AdNabu is a software solution for managing product feeds on Shopify, enabling organization and optimization for online stores.",
		icon: "AdNabu.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "adnabu:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/adnabu-shopify"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "alia",
		name: "Alia",
		website: "https://www.alialearn.com/",
		description: "Alia is a Shopify app to design Email and SMS sign-up pop-up units",
		icon: "Alia.png",
		categories: [
			"ecommerce-extensions",
			"surveys-feedback",
		],
		rules: [
			{
				id: "alia:jsGlobal:0",
				kind: "jsGlobal",
				property: "alia",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"shopify",
		],
	},
	{
		id: "autocommerce",
		name: "Autocommerce",
		website: "https://autocommerce.io",
		description: "Autocommerce is a product recommendation app for Shopify stores, similar to Amazon, designed to enhance the shopping experience by suggesting relevant products to customers based on their browsing and purchase history.",
		icon: "Autocommerce.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "autocommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.autocommerce\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"poa",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "autoketing-product-reviews",
		name: "Autoketing Product Reviews",
		website: "https://apps.shopify.com/product-reviews-autoketing",
		description: "Autoketing Product Reviews is an application that allows shop owners to manage the product review section on their website.",
		icon: "Autoketing.png",
		categories: [
			"ecommerce-extensions",
			"community-ugc",
		],
		rules: [
			{
				id: "autoketing-product-reviews:jsGlobal:0",
				kind: "jsGlobal",
				property: "autoketingproduct_reivew",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
		implies: [
			"autoketing",
			"shopify",
		],
	},
	{
		id: "avada-avaship",
		name: "Avada AVASHIP",
		website: "https://apps.shopify.com/avaship",
		description: "Avada AVASHIP is an order tracking Shopify app.",
		icon: "Avada.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "avada-avaship:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("freeshippingbar\\.apps\\.avada\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "avada-avaship:jsGlobal:1",
				kind: "jsGlobal",
				property: "AVADA_FSB.bars",
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
		id: "avada-boost-sales",
		name: "Avada Boost Sales",
		website: "https://apps.shopify.com/avada-boost-sales",
		description: "AVADA Boost Sales is an one-stop solution that is specially designed to increase your sales with countdown timer, trust badges, sales pop, sales boost and many more.",
		icon: "Avada.svg",
		categories: [
			"ecommerce-extensions",
			"widgets-misc",
		],
		rules: [
			{
				id: "avada-boost-sales:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("boostsales\\.apps\\.avada\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "avada-boost-sales:jsGlobal:1",
				kind: "jsGlobal",
				property: "AVADA_BS_LAST_UPDATE",
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
		id: "avada-seo",
		name: "Avada SEO",
		website: "https://apps.shopify.com/avada-seo-suite",
		description: "Avada SEO is a Shopify app built and designed following strict SEO practices.",
		icon: "Avada.svg",
		categories: [
			"ecommerce-extensions",
			"marketing-automation",
		],
		rules: [
			{
				id: "avada-seo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("seo\\.apps\\.avada\\.io\\/"),
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
		id: "avada-size-chart",
		name: "Avada Size Chart",
		website: "https://apps.shopify.com/avada-size-chart",
		description: "Avada Size Chart is a thoughtful app that helps online stores reduce return rates with useful size guides.",
		icon: "Avada.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "avada-size-chart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sizechart\\.apps\\.avada\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "back-in-stock",
		name: "Back In Stock",
		website: "https://backinstock.org",
		description: "Back In Stock lets your customers choose restock alerts for specific variant combinations, including size, colour or style.",
		icon: "Back In Stock.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "back-in-stock:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.backinstock\\.org\\/"),
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
		id: "beam-aftersell",
		name: "Beam AfterSell",
		website: "https://www.aftersell.com",
		description: "AfterSell is a Shopify app by Beam which helps brands create powerful post purchase offers.",
		icon: "AfterSell.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "beam-aftersell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.aftersell\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "beam-aftersell:jsGlobal:1",
				kind: "jsGlobal",
				property: "aftersell.hooks",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "beam-outsell",
		name: "Beam OutSell",
		website: "https://apps.shopify.com/outsell",
		description: "OutSell is a Shopify app by Beam. Frequently Bought Together, Discounted Upsell, Also Bought.",
		icon: "Beam.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "beam-outsell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/outsellapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "beam-outsell:jsGlobal:1",
				kind: "jsGlobal",
				property: "outsellAiRecommendationsIsEnabled",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "beam-outsell:jsGlobal:2",
				kind: "jsGlobal",
				property: "outsellApp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "belliza",
		name: "Belliza",
		website: "https://themes.templatescoder.com/belliza/shopify/demo/",
		description: "Belliza is a Shopify theme built for modern brands, offering a performance-focused foundation for creating online storefronts.",
		icon: "Belliza.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "belliza:dom:0",
				kind: "dom",
				selector: "script[data-theme-name*='Belliza']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "better-price",
		name: "Better Price",
		website: "https://apps.shopify.com/better-price",
		description: "Better Price is a Shopify app which provide coupons to real leads only when discounted price is requested build by Architechpro.",
		icon: "Better Price.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "better-price:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/shopify-apps\\/\\/js\\/betterprice\\/betterprice\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "better-price:jsGlobal:1",
				kind: "jsGlobal",
				property: "fc_metafield_betterprice.betterpricesuccess",
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
		id: "bitespeed",
		name: "BiteSpeed",
		website: "https://www.bitespeed.co",
		description: "BiteSpeed is an all-in-one Shopify marketing app which helps ecommerce brands recover revenue.",
		icon: "BiteSpeed.png",
		categories: [
			"ecommerce-extensions",
			"commerce-operations",
		],
		rules: [
			{
				id: "bitespeed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.bitespeed\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bitespeed:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.bitespeed\\.co\\/"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "bogos",
		name: "Bogos",
		website: "https://bogos.io",
		description: "Bogos is a Shopify app for free gift promotions, enabling sales growth through offers such as Buy X Get Y and other customizable promotional campaigns.",
		icon: "Bogos.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bogos:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("collect\\.bogos\\.io"),
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
		id: "bold-brain",
		name: "Bold Brain",
		website: "https://boldcommerce.com/bold-brain",
		description: "Bold Brain help customers discover more products and add more to their cart with dynamic recommendations for Shopify and use advanced analytics.",
		icon: "Bold.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bold-brain:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("brain-assets\\.boldapps\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bold-brain:jsGlobal:1",
				kind: "jsGlobal",
				property: "BOLD.brain",
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
		implies: [
			"bold-commerce",
			"shopify",
		],
	},
	{
		id: "bold-bundles",
		name: "Bold Bundles",
		website: "https://boldcommerce.com/bundles",
		description: "Bold Bundles Shopify app is designed to present recommended product widgets to cross-sell your products.",
		icon: "Bold.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bold-bundles:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bundles\\.boldapps\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bold-bundles:jsGlobal:1",
				kind: "jsGlobal",
				property: "BOLD.bundles",
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
			"bold-commerce",
			"shopify",
		],
	},
	{
		id: "bold-custom-pricing",
		name: "Bold Custom Pricing",
		website: "https://boldcommerce.com/custom-pricing",
		description: "Bold Custom Pricing is an app that makes it easy to create a tiered pricing structure for your customers.",
		icon: "Bold.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bold-custom-pricing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cp.\\.boldapps\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bold-custom-pricing:jsGlobal:1",
				kind: "jsGlobal",
				property: "BOLD.csp.version",
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
				"low",
				"recurring",
			],
		},
		implies: [
			"bold-commerce",
			"shopify",
		],
	},
	{
		id: "bold-motivator",
		name: "Bold Motivator",
		website: "https://boldcommerce.com/motivator",
		description: "Bold Motivator motivate customers to spend more on your store with free shipping and gifts using a customisable banner that counts down how much more they have to buy.",
		icon: "Bold.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bold-motivator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("motivate\\.boldapps\\.net\\/"),
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
			"bold-commerce",
			"shopify",
		],
	},
	{
		id: "bold-product-options",
		name: "Bold Product Options",
		website: "https://boldcommerce.com/product-options",
		description: "Product Options is a Shopify app which allows customers to customise products with unlimited custom options built by Bold.",
		icon: "Bold.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bold-product-options:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("option\\.boldapps\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bold-product-options:jsGlobal:1",
				kind: "jsGlobal",
				property: "BOLD.options.version",
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
				"low",
				"recurring",
			],
		},
		implies: [
			"bold-commerce",
			"shopify",
		],
	},
	{
		id: "bold-subscriptions",
		name: "Bold Subscriptions",
		website: "https://boldcommerce.com/shopify-subscription-app",
		description: "Bold Subscriptions provides powerful, API-driven customisation options to build and scale a subscription service that fits your business.",
		icon: "Bold.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bold-subscriptions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sub\\.boldapps\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bold-subscriptions:jsGlobal:1",
				kind: "jsGlobal",
				property: "BOLD.subscriptions",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"payg",
				"poa",
				"recurring",
			],
		},
		implies: [
			"bold-commerce",
			"shopify",
		],
	},
	{
		id: "bold-upsell",
		name: "Bold Upsell",
		website: "https://boldcommerce.com/upsell",
		description: "Bold Upsell allows the substitution or attachment of products to the customers' carts.",
		icon: "Bold.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "bold-upsell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("upsells\\.boldapps\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bold-upsell:jsGlobal:1",
				kind: "jsGlobal",
				property: "BOLD.upsell",
				description: "Page-owned global matches a known technology marker.",
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
		implies: [
			"bold-commerce",
			"shopify",
		],
	},
	{
		id: "bookthatapp",
		name: "BookThatApp",
		website: "https://www.bookthatapp.com",
		description: "BookThatApp is a Shopify appointment booking, product rental and class booking app.",
		icon: "BookThatApp.png",
		categories: [
			"ecommerce-extensions",
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookthatapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bookthatapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bookthatapp:jsGlobal:1",
				kind: "jsGlobal",
				property: "BookThatApp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "booster-page-speed-optimizer",
		name: "Booster Page Speed Optimizer",
		website: "https://apps.shopify.com/page-speed-optimizer",
		description: "The Page Speed Optimizer is a Shopify app built by BoosterApps.",
		icon: "BoosterApps.png",
		categories: [
			"ecommerce-extensions",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "booster-page-speed-optimizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/assets\\/booster-page-speed-optimizer\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "boutiq",
		name: "Boutiq",
		website: "https://www.getboutiq.com",
		description: "Boutiq is a personal video shopping solution.",
		icon: "Boutiq.svg",
		categories: [
			"ecommerce-extensions",
			"media-video",
		],
		rules: [
			{
				id: "boutiq:jsGlobal:0",
				kind: "jsGlobal",
				property: "caazamApp",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "carecart-sales-pop-up",
		name: "CareCart Sales Pop Up",
		website: "https://carecart.io/sales-pop-up-app",
		description: "CareCart Sales Pop Up is a stock countdown timer, recent sales notifications, live sales pop up widget.",
		icon: "CareCart.png",
		categories: [
			"ecommerce-extensions",
			"widgets-misc",
		],
		rules: [
			{
				id: "carecart-sales-pop-up:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sales-pop\\.carecart\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "carro",
		name: "Carro",
		website: "https://getcarro.com",
		description: "Carro connects participating Shopify stores together to enable cross-store selling or the ability for like-minded partners to directly sell each other products without the need for inventory, managing returns, or minimum order quantities.",
		icon: "Carro.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "carro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getcarro\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "carro:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/carro\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
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
				"freemium",
				"low",
				"recurring",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "cartylabs",
		name: "Cartylabs",
		website: "https://cartylabs.com",
		description: "Cartylabs is a Shopify application that provides a fast checkout experience and enables merchants to implement upsell and cross-sell features directly within the shopping cart.",
		icon: "Cartylabs.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "cartylabs:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("fast-checkout-api\\.cartylabs\\.com"),
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
		id: "cjdropshipping-app",
		name: "CJDropshipping app",
		website: "https://apps.shopify.com/cucheng",
		description: "CJDropshipping is a dropshipping supplier and fulfillment service from China.",
		icon: "CJDropshipping.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "cjdropshipping-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.cjdropshipping\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "coin-currency-converter",
		name: "Coin Currency Converter",
		website: "https://apps.shopify.com/coin",
		description: "Coin Currency Converter is an automatic currency conversion app for Shopify.",
		icon: "Coin Currency Converter.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "coin-currency-converter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/apps\\/coin\\/coin\\.js.+\\.myshopify\\.com"),
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
		id: "conjured",
		name: "Conjured",
		website: "https://conjured.co",
		description: "Conjured provides Shopify brands with Shopify apps and custom development.",
		icon: "Conjured.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "conjured:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.conjured\\.co\\/"),
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
		id: "conversio-app",
		name: "Conversio App",
		website: "https://apps.shopify.com/conversio",
		description: "Conversio App is an optimisation and analytics app for Shopify stores.",
		icon: "Conversio.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "conversio-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.conversio\\.com\\/.+\\.myshopify\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"conversio",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "conversion-bear",
		name: "Conversion Bear",
		website: "https://www.conversionbear.com",
		description: "Conversion Bear is a Shopify app providing trust badges and sticky add-to-cart features to enhance store credibility and streamline the purchasing process.",
		icon: "ConversionBear.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "conversion-bear:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.conversionbear\\.com"),
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
		id: "cozy-antitheft",
		name: "Cozy AntiTheft",
		website: "https://apps.shopify.com/cozy-antitheft-for-images-and-more",
		description: "Cozy AntiTheft helps you to protect your store content, images and texts from being stolen with a few simple clicks.",
		icon: "Cozy AntiTheft.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "cozy-antitheft:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdncozyantitheft\\.addons\\.business\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cozy-antitheft:jsGlobal:1",
				kind: "jsGlobal",
				property: "cozyEcoAdnsUa",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "delightchat",
		name: "DelightChat",
		website: "https://www.delightchat.io",
		description: "DelightChat is a customer service platform for Shopify, offering omnichannel support via Email, Live Chat, Facebook, Instagram, and WhatsApp, all managed through a shared inbox.",
		icon: "DelightChat.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "delightchat:dom:0",
				kind: "dom",
				selector: "div#delightchat-widget, div#delightchat-welcome-widget",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "delm",
		name: "Delm",
		website: "https://delm.io",
		description: "Delm is a customisable and multilingual delivery date estimation app for Shopify, providing shipping information.",
		icon: "Delm.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "delm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.delm\\.io\\/"),
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
		],
	},
	{
		id: "digismoothie-candy-rack",
		name: "Digismoothie Candy Rack",
		website: "https://www.digismoothie.com/apps/candy-rack",
		description: "Digismoothie Candy Rack is an upsell app for Shopify which allow merchants to offer custom services or bundle products.",
		icon: "Digismoothie.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "digismoothie-candy-rack:jsGlobal:0",
				kind: "jsGlobal",
				property: "CANDYRACK_DOCUMENT_LISTENER",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "digismoothie-candy-rack:jsGlobal:1",
				kind: "jsGlobal",
				property: "candyrackEnableDebug",
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
		id: "drop-a-hint",
		name: "Drop A Hint",
		website: "https://apps.shopify.com/drop-a-hint-v2",
		description: "Drop A Hint is an Shopify app which help share hints via email, SMS, WhatsApp and messengers.",
		icon: "Drop A Hint.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "drop-a-hint:jsGlobal:0",
				kind: "jsGlobal",
				property: "DropAHint.BaseURL",
				valuePattern: new RegExp("dropahint\\.love\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "drop-a-hint:jsGlobal:1",
				kind: "jsGlobal",
				property: "dropAHintTypeProduct",
				description: "Page-owned global matches a known technology marker.",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "easy-hide-paypal",
		name: "Easy Hide PayPal",
		website: "https://apps.shopify.com/easyhide",
		description: "Easy Hide PayPal hides PayPal button from product page, cart and checkout but keep PayPal as payment option in checkout.",
		icon: "Easy Hide PayPal.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "easy-hide-paypal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("easyhide\\.herculesapps\\.com\\/"),
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
		id: "easy-redirects",
		name: "Easy Redirects",
		website: "https://apps.shopify.com/easyredirects",
		description: "Easy Redirects is a Shopify app built by Eastside, and part of the best Shopify Apps collection.",
		icon: "Easy Redirects.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "easy-redirects:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("easy-redirects\\..+\\/redirect-app\\.js"),
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
			"shopify",
		],
	},
	{
		id: "easygift",
		name: "EasyGift",
		website: "https://apps.shopify.com/gifter-cart-auto-include",
		description: "EasyGift is a tool that automates the addition of free gifts or products to the cart based on custom rules, allowing for upsells, BOGO (Buy 1 Get 1) offers, and the creation of rules based on cart value or specific products, with the ability to schedule start times for offer activation.",
		icon: "EasyGift.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "easygift:jsGlobal:0",
				kind: "jsGlobal",
				property: "EasyGift.nonTargetingRules",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "easygift:jsGlobal:1",
				kind: "jsGlobal",
				property: "EasyGiftScriptLoaded",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "enlistly",
		name: "Enlistly",
		website: "https://enlistly.com",
		description: "Enlistly tracks referral orders in realtime. Orders that are partially refunded, refunded, or cancelled update on the fly.",
		icon: "Enlistly.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "enlistly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.enlistly\\.com\\/"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "eraofecom-cartroids",
		name: "EraofEcom Cartroids",
		website: "https://eraofecom.org/collections/tech/products/cartroids",
		description: "EraofEcom Cartroids makes it easy for you to create highly targeted upsells, cross-sells and bundle offers.",
		icon: "EraofEcom.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "eraofecom-cartroids:jsGlobal:0",
				kind: "jsGlobal",
				property: "cartroids.appBase",
				valuePattern: new RegExp("cartroids\\.eraofecom\\.org"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "eraofecom-mtl",
		name: "EraofEcom MTL",
		website: "https://eraofecom.org/collections/tech/products/milk-the-leads",
		description: "EraofEcom MTL is a Shopify pop up app that enables you to catch your website visitors.",
		icon: "EraofEcom.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "eraofecom-mtl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mtl\\.eraofecom\\.org"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "eraofecom-winads",
		name: "EraofEcom WinAds",
		website: "https://eraofecom.org/collections/tech/products/win-ads-manager",
		description: "EraofEcom WinAds is an all-in-one Facebook pixel app for Shopify.",
		icon: "EraofEcom.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "eraofecom-winads:dom:0",
				kind: "dom",
				selector: "link[href*='winads.eraofecom.org']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "eraofecom-winads:jsGlobal:1",
				kind: "jsGlobal",
				property: "win_ads.baseURL",
				valuePattern: new RegExp("winads\\.eraofecom\\.org"),
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
		id: "fast-bundle",
		name: "Fast Bundle",
		website: "https://fastbundle.co",
		description: "Fast Bundle gives you the ability to create product bundle offers with discounts.",
		icon: "Fast Bundle.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "fast-bundle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.fastbundle\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fast-bundle:jsGlobal:1",
				kind: "jsGlobal",
				property: "FastBundleConf.bundleBox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fast-bundle:jsGlobal:2",
				kind: "jsGlobal",
				property: "FastBundleConf.cartInfo.app_version",
				valuePattern: new RegExp("v([\\d\\.]+)"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "fera-product-reviews-app",
		name: "Fera Product Reviews App",
		website: "https://apps.shopify.com/fera",
		description: "Fera Product Reviews App is a product review and social proof app for Shopify.",
		icon: "Fera.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "fera-product-reviews-app:jsGlobal:0",
				kind: "jsGlobal",
				property: "feraJsUrl",
				valuePattern: new RegExp("cdn\\.fera\\.ai\\/js\\/fera\\.js.+\\.myshopify\\.com"),
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
		implies: [
			"fera",
			"shopify",
		],
	},
	{
		id: "fireapps-ali-reviews",
		name: "FireApps Ali Reviews",
		website: "https://apps.shopify.com/ali-reviews",
		description: "FireApps Ali Reviews is an all-in-one solution that helps to collect, showcase, and manage impactful reviews.",
		icon: "FireApps.svg",
		categories: [
			"ecommerce-extensions",
			"community-ugc",
		],
		rules: [
			{
				id: "fireapps-ali-reviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/alireviews\\.fireapps\\.io\\/"),
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
		id: "flits",
		name: "Flits",
		website: "https://getflits.com",
		description: "Flits is a customer account pages that get all your shopper data in one place.",
		icon: "Flits.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "flits:jsGlobal:0",
				kind: "jsGlobal",
				property: "flitsObjects.accountPage",
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
		id: "fontify",
		name: "Fontify",
		website: "https://apps.shopify.com/fontify-change-customize-font-for-your-store",
		description: "Fontify allows you to utilise any font without having to alter code.",
		icon: "Fontify.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "fontify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fontify\\.nitroapps\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "frequently-bought-together",
		name: "Frequently Bought Together",
		website: "https://www.codeblackbelt.com",
		description: "Frequently Bought Together is a Shopify app which add Amazon-like 'Customers Who Bought This Item Also Bought' product recommendations to your store.",
		icon: "Frequently Bought Together.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "frequently-bought-together:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.codeblackbelt\\.com\\/js\\/modules\\/frequently-bought-together\\/"),
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
		id: "froonze",
		name: "Froonze",
		website: "https://www.froonze.com",
		description: "Froonze is a modular Shopify app that enhances the customer account page with features like wishlists, loyalty programs, and social logins.",
		icon: "Froonze.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "froonze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/extensions\\/[^/]+\\/froonze-loyalty-wishlist[^/]*"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "froonze:jsGlobal:1",
				kind: "jsGlobal",
				property: "frcp.httpsUrl",
				valuePattern: new RegExp("app\\.froonze\\.com"),
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
		id: "gempages",
		name: "GemPages",
		website: "https://gempages.net",
		description: "GemPages is a powerful Shopify landing page buidler that empowers SMEs, agency, and freelancers to build their brands and sell online.",
		icon: "GemPages.svg",
		categories: [
			"ecommerce-extensions",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "gempages:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/files\\/gempagev\\d+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gempages:jsGlobal:1",
				kind: "jsGlobal",
				property: "GEMSTORE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gempages:jsGlobal:2",
				kind: "jsGlobal",
				property: "GEMVENDOR",
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
		id: "giftnote",
		name: "Giftnote",
		website: "https://giftnote.com",
		description: "Giftnote is a Shopify application that enables personalized gift messaging and digital voucher creation for online retail transactions.",
		icon: "Giftnote.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "giftnote:jsGlobal:0",
				kind: "jsGlobal",
				property: "Giftnote.currency",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "gist-giftship",
		name: "Gist Giftship",
		website: "https://gist-apps.com/giftship",
		description: "Gist Giftship is a gifting app on Shopify that allows your customers to complete all of their gift shopping at once.",
		icon: "Gist.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "gist-giftship:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\/js\\/giftship\\.([\\d\\.]+)\\.js"),
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
				"mid",
				"payg",
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "givy",
		name: "Givy",
		website: "https://www.givy.ai",
		description: "Givy is a Shopify app that supports custom gift card amounts and product gifting, enabling online stores to offer flexible gifting options beyond standard fixed-value gift cards.",
		icon: "Givy.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "givy:jsGlobal:0",
				kind: "jsGlobal",
				property: "GIVY.config",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "globo-also-bought",
		name: "Globo Also Bought",
		website: "https://apps.shopify.com/globo-related-products",
		description: "Also Bought is a conversion Shopify app by Globo.",
		icon: "Globo apps.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "globo-also-bought:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\/globo\\.alsobought\\.js"),
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
			"shopify",
		],
	},
	{
		id: "globo-color-swatch",
		name: "Globo Color Swatch",
		website: "https://apps.shopify.com/globo-related-products",
		description: "Globo Color Swatch app gives you an easy-to-use tool to display product variants on both collection page, homepage and product page creatively as a means to enhance customers' experience and stimulate them to purchase.",
		icon: "Globo apps.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "globo-color-swatch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\/globo\\.swatch\\.data\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "globo-form-builder",
		name: "Globo Form Builder",
		website: "https://apps.shopify.com/form-builder-contact-form",
		description: "Form Builder is a Shopify form builder app for contact form built by Globo.",
		icon: "Globo apps.png",
		categories: [
			"ecommerce-extensions",
			"surveys-feedback",
		],
		rules: [
			{
				id: "globo-form-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/assets\\/globo\\.formbuilder\\.init\\.js"),
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
			"shopify",
		],
	},
	{
		id: "globo-pre-order",
		name: "Globo Pre-Order",
		website: "https://apps.shopify.com/pre-order-pro",
		description: "Globo Pre-Order is a Shopify app for building pre-order functionality on Shopify stores.",
		icon: "Globo apps.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "globo-pre-order:jsGlobal:0",
				kind: "jsGlobal",
				property: "GloboPreorderParams",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "govalo",
		name: "Govalo",
		website: "https://govalo.com",
		description: "Govalo is a software startup company that builds a Shopify app.",
		icon: "Govalo.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "govalo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/extensions\\/.+\\/([\\d\\.]+)\\/assets\\/govalo\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "govalo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Govalo.meta",
				description: "Page-owned global matches a known technology marker.",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "gtranslate-app",
		name: "GTranslate app",
		website: "https://apps.shopify.com/multilingual-shop-by-gtranslate",
		description: "GTranslate app is a website translator which can translate any website to any language automatically.",
		icon: "GTranslate.svg",
		categories: [
			"ecommerce-extensions",
			"translations",
		],
		rules: [
			{
				id: "gtranslate-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gtranslate\\.io\\/shopify\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gtranslate-app:dom:1",
				kind: "dom",
				selector: "img[src*='gtranslate.io/shopify']",
				description: "DOM selector matches a known technology marker.",
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
			"shopify",
		],
	},
	{
		id: "helixo-ufe",
		name: "Helixo UFE",
		website: "https://helixo.co/upsell-funnel-engine/",
		description: "Helixo UFE is a lightweight Shopify upsell sales funnel app.",
		icon: "Helixo.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "helixo-ufe:jsGlobal:0",
				kind: "jsGlobal",
				property: "ufe.funnelData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "helixo-ufe:jsGlobal:1",
				kind: "jsGlobal",
				property: "ufeStore.cartTotal",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "hextom-free-shipping-bar",
		name: "Hextom Free Shipping Bar",
		website: "https://hextom.com/case_study/free-shipping-bar",
		description: "Free Shipping Bar is a Shopify app built by Hextom. Free Shipping Bar help promote free shipping with progressive messages to motivate customers to buy more.",
		icon: "Hextom.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "hextom-free-shipping-bar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hextom\\.com\\/js\\/freeshippingbar\\.js"),
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
			"shopify",
		],
	},
	{
		id: "hextom-ultimate-sales-boost",
		name: "Hextom Ultimate Sales Boost",
		website: "https://hextom.com/case_study/ultimate-sales-boost",
		description: "Ultimate Sales Boost by Hextom is an app designed to help you drive more sales by creating a sense of urgency, scarcity and trust.",
		icon: "Hextom.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "hextom-ultimate-sales-boost:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hextom\\.com\\/js\\/ultimatesalesboost\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hextom-ultimate-sales-boost:jsGlobal:1",
				kind: "jsGlobal",
				property: "hextom_usb",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hextom-ultimate-sales-boost:jsGlobal:2",
				kind: "jsGlobal",
				property: "ht_usb.isLoaded",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "hulkapps-age-verification",
		name: "HulkApps Age Verification",
		website: "https://www.hulkapps.com/products/age-verification-shopify",
		description: "HulkApps Age Verification allow your customers to certify their age before they land in your store.",
		icon: "HulkApps.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "hulkapps-age-verification:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("age-verification\\.hulkapps\\.com\\/"),
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
		id: "in-cart-upsell-and-cross-sell",
		name: "In Cart Upsell & Cross-Sell",
		website: "https://incartupsell.com",
		description: "In Cart Upsell & Cross-Sell is a Shopify app built by InCart Upsell, provides targeted upsells and cross-sells directly in your cart and product page.",
		icon: "In Cart Upsell & Cross-Sell.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "in-cart-upsell-and-cross-sell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.incartupsell\\.com\\/"),
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
		],
	},
	{
		id: "instafeed",
		name: "Instafeed",
		website: "https://apps.shopify.com/instafeed",
		description: "Instafeed is an official Instagram app.",
		icon: "Instafeed.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "instafeed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instafeed\\.nfcube\\.com\\/"),
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
		id: "jilt-app",
		name: "Jilt App",
		website: "https://community.shopify.com/c/shopify-apps/jilt-is-over-what-app-to-use-for-abandoned-carts-now/td-p/1575095",
		description: "Jilt App helps ecommerce store owners track and recover abandoned orders. Works seamlessly with Shopify and WooCommerce.",
		icon: "Jilt.svg",
		categories: [
			"ecommerce-extensions",
			"commerce-operations",
		],
		rules: [
			{
				id: "jilt-app:jsGlobal:0",
				kind: "jsGlobal",
				property: "jiltStorefrontParams.platform",
				valuePattern: new RegExp("^shopify$"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "juphy",
		name: "Juphy",
		website: "https://juphy.com",
		description: "Juphy is an AI sales assistant designed for Shopify stores, enabling businesses to increase sales through automated customer engagement and support.",
		icon: "Juphy.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "juphy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.juphy\\.com\\/"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "justuno-app",
		name: "Justuno App",
		website: "https://apps.shopify.com/justuno-pop-ups-email-conversion",
		description: "Justuno is a premium conversion marketing and analytics platform that provides retailers with powerful tools to increase conversions.",
		icon: "Justuno.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "justuno-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/scripttags\\.justuno\\.com\\/shopify_justuno"),
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
			"justuno",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "kilatech",
		name: "Kilatech",
		website: "https://web.kilatechapps.com",
		description: "Kilatech is a Shopify ecommerce application builder.",
		icon: "Kilatech.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "kilatech:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.kilatechapps\\.com\\/"),
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
		id: "klip",
		name: "Klip",
		website: "https://klipcoupons.com",
		description: "Klip is a tool for creating product page coupons designed to enhance customer engagement, boost conversions, and improve retention.",
		icon: "Klip.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "klip:jsGlobal:0",
				kind: "jsGlobal",
				property: "KLIP_APP_DATA.ATCPath",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "langshop",
		name: "LangShop",
		website: "https://langshop.io",
		description: "LangShop is an app for translating Shopify stores.",
		icon: "LangShop.svg",
		categories: [
			"ecommerce-extensions",
			"translations",
		],
		rules: [
			{
				id: "langshop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.langshop\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "langshop:jsGlobal:1",
				kind: "jsGlobal",
				property: "LangShop",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "langshop:jsGlobal:2",
				kind: "jsGlobal",
				property: "LangShopConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "langshop:jsGlobal:3",
				kind: "jsGlobal",
				property: "LangShopSDK",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "layouthub",
		name: "LayoutHub",
		website: "https://layouthub.com",
		description: "LayoutHub is an easy page builder that helps merchants quickly set up an online store with any kind of page type by using our library of pre-designed layouts and blocks.",
		icon: "LayoutHub.png",
		categories: [
			"ecommerce-extensions",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "layouthub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.layouthub\\.com\\/shopify\\/layouthub\\.js"),
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
			"shopify",
		],
	},
	{
		id: "littledata",
		name: "Littledata",
		website: "https://www.littledata.io",
		description: "Littledata provides a seamless connection between your Shopify site, marketing channels, and Google Analytics.",
		icon: "Littledata.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "littledata:jsGlobal:0",
				kind: "jsGlobal",
				property: "LittledataLayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "littledata:jsGlobal:1",
				kind: "jsGlobal",
				property: "LittledataLayer.version",
				valuePattern: new RegExp("v([\\d\\.]+)"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "livescale",
		name: "Livescale",
		website: "https://www.livescale.tv",
		description: "Livescale is a video platform that enables teams to transform content and ecommerce into a live shopping experience that reaches engages and monetizes audiences with LiveShopping.",
		icon: "Livescale.png",
		categories: [
			"ecommerce-extensions",
			"media-video",
		],
		rules: [
			{
				id: "livescale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.livescale\\.tv\\/"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "locksmith",
		name: "Locksmith",
		website: "https://apps.shopify.com/locksmith",
		description: "Locksmith is a shopify app for adding access control capability on shopify stores.",
		icon: "Locksmith.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "locksmith:jsGlobal:0",
				kind: "jsGlobal",
				property: "Locksmith",
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
		id: "minmaxify",
		name: "MinMaxify",
		website: "https://apps.shopify.com/order-limits-minmaxify",
		description: "MinMaxify is an app that allows Shopify store owners to set minimum and maximum values for customer orders built by Intillium.",
		icon: "MinMaxify.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "minmaxify:jsGlobal:0",
				kind: "jsGlobal",
				property: "minMaxify.checkLimits",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "minmaxify:jsGlobal:1",
				kind: "jsGlobal",
				property: "minMaxify.shop",
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
		id: "obsidian-incentivize",
		name: "Obsidian Incentivize",
		website: "https://obsidianapps.co",
		description: "Obsidian Incentivize is designed to increase your average order size through in-cart upsells, cross sells and personalised product recommendations.",
		icon: "Obsidian.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "obsidian-incentivize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/extensions\\/.+\\/([\\.\\d]{3,})\\/assets\\/upsell\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "obsidian-incentivize:jsGlobal:1",
				kind: "jsGlobal",
				property: "Obsidian.IncentiveApi",
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
		id: "obviyo",
		name: "Obviyo",
		website: "https://www.obviyo.com",
		description: "Obviyo is an ecommerce intelligence platform helping merchants personalise and optimise shopping experience.",
		icon: "Obviyo.png",
		categories: [
			"ecommerce-extensions",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "obviyo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("deploy\\.hiconversion\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "obviyo:jsGlobal:1",
				kind: "jsGlobal",
				property: "__hic.version",
				valuePattern: new RegExp("([\\d.]+)"),
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
				"mid",
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "omnisend-email-marketing-and-sms",
		name: "Omnisend Email Marketing & SMS",
		website: "https://apps.shopify.com/omnisend",
		description: "Omnisend Email Marketing & SMS is an omnichannel marketing automation channel that allows Shopify store owners to manage their SMS, web push notifications, WhatsApp, Facebook messenger, pop-ups, segmentation, and dynamic Facebook and Google ad integrations.",
		icon: "Omnisend.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "omnisend-email-marketing-and-sms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("omnis(?:nippet1|rc)\\.com\\/inShop\\/Embed\\/shopify\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "omnisend-email-marketing-and-sms:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("omnis(?:nippet1|rc)\\.com\\/inshop\\/embed\\/shopify\\.js"),
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
			"omnisend",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "order-deadline",
		name: "Order Deadline",
		website: "https://apps.shopify.com/order-deadline",
		description: "Order Deadline is an estimated delivery, countdown timer, shipping date Shopify app.",
		icon: "Order Deadline.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "order-deadline:jsGlobal:0",
				kind: "jsGlobal",
				property: "orderDeadlineAppByEESL",
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
		id: "orderlogic-app",
		name: "OrderLogic app",
		website: "https://apps.shopify.com/orderlogic",
		description: "OrderLogic app allows you to define minimum and maximum product quantities for all products in your Shopify store.",
		icon: "OrderLogic app.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "orderlogic-app:jsGlobal:0",
				kind: "jsGlobal",
				property: "OrderLogic.ALERTS_KEY",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "orderlogic-app:jsGlobal:1",
				kind: "jsGlobal",
				property: "OrderLogic.DEFAULT_MONEY_FORMAT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "orderlogic-app:jsGlobal:2",
				kind: "jsGlobal",
				property: "OrderLogic.cartData",
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
		id: "ordersify-product-alerts",
		name: "Ordersify Product Alerts",
		website: "https://ordersify.com/products/product-alerts",
		description: "Ordersify Product Alerts is a Shopify app which detects automatically product stock and send email alerts to contact immediately after your products are restocked.",
		icon: "Ordersify.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "ordersify-product-alerts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.ordersify\\.com\\/sdk\\/productalerts-shopify\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ordersify-product-alerts:jsGlobal:1",
				kind: "jsGlobal",
				property: "ORDERSIFY_BIS.stockRemainingSetting",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "packlink-pro",
		name: "Packlink PRO",
		website: "https://apps.shopify.com/packlink-pro",
		description: "Packlink PRO is a multicarrier shipping solutions for ecommerce and marketplaces.",
		icon: "Packlink.png",
		categories: [
			"ecommerce-extensions",
			"commerce-operations",
		],
		rules: [
			{
				id: "packlink-pro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("packlink-spf-pro\\.appspot\\.com\\/.+myshopify\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "paloma",
		name: "Paloma",
		website: "https://www.getpaloma.com",
		description: "Paloma helps ecommerce businesses sell directly to customers in messaging channels, with automated personal shopping conversations.",
		icon: "Paloma.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "paloma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getpaloma\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "paloma:jsGlobal:1",
				kind: "jsGlobal",
				property: "Paloma.createCookie",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "perfectapps-swift",
		name: "PerfectApps Swift",
		website: "https://apps.shopify.com/swift",
		description: "Swift is a page speed solution for ecommerce store owners built by PerfectApps.",
		icon: "PerfectApps Swift.png",
		categories: [
			"ecommerce-extensions",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "perfectapps-swift:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("swift\\.perfectapps\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "perfectapps-swift:jsGlobal:1",
				kind: "jsGlobal",
				property: "ps_apiURI",
				valuePattern: new RegExp("swift-api\\.perfectapps\\.io\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "perfectapps-swift:jsGlobal:2",
				kind: "jsGlobal",
				property: "ps_storeUrl",
				valuePattern: new RegExp("swift\\.perfectapps\\.io"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "pickystory",
		name: "PickyStory",
		website: "https://pickystory.com",
		description: "PickyStory is the ecommerce conversion platform.",
		icon: "PickyStory.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "pickystory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pickystory\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pickystory:jsGlobal:1",
				kind: "jsGlobal",
				property: "pickystory.overrideStore",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "picture-it",
		name: "Picture It",
		website: "https://www.pictureit.co",
		description: "Picture It is a preview tool designed for Shopify art stores, enabling visualization of products within a single platform.",
		icon: "PictureIt.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "picture-it:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.pictureit\\.co\\/"),
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
		],
	},
	{
		id: "preproduct",
		name: "PreProduct",
		website: "https://preproduct.io",
		description: "PreProduct is a tool that enables businesses to boost sales and manage demand through Shopify’s pre-order system.",
		icon: "PreProduct.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "preproduct:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.preproduct\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "preproduct:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\/preproduct-embed\\.js"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "preproduct:jsGlobal:2",
				kind: "jsGlobal",
				property: "PPshowPreProduct",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "privy-app",
		name: "Privy App",
		website: "https://apps.shopify.com/privy",
		description: "Privy App helps you improve your website conversion rate, grow your email list, automate your email marketing, drive repeat purchases and much more.",
		icon: "Privy.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "privy-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/shopify\\.privy\\.com\\/"),
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
			"privy",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "product-personalizer",
		name: "Product Personalizer",
		website: "https://productpersonalizer.com",
		description: "Product Personalizer apps can help you to customise your products and offer a more personalised experience for your customers.",
		icon: "Product Personalizer.png",
		categories: [
			"ecommerce-extensions",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "product-personalizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/product-personalizer\\/pplr_common\\.js"),
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
		id: "pushdaddy-whatsapp-chat",
		name: "PushDaddy Whatsapp Chat",
		website: "https://apps.shopify.com/whatsapp-chat-for-support",
		description: "Whatsapp Chat is an live chat and abondoned cart solution built by PushDaddy.",
		icon: "PushDaddy.png",
		categories: [
			"ecommerce-extensions",
			"commerce-operations",
		],
		rules: [
			{
				id: "pushdaddy-whatsapp-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/.+\\/pushdaddy_v([\\d\\.]+).*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pushdaddy-whatsapp-chat:dom:1",
				kind: "dom",
				selector: "div.pushdaddy-chats",
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
		implies: [
			"shopify",
			"whatsapp-business-chat",
		],
	},
	{
		id: "qikify",
		name: "Qikify",
		website: "https://qikify.com",
		description: "Qikify is a trusted Shopify Expert providing services for over 35,000 Shopify merchants through Shopify Apps or custom modifications.",
		icon: "Qikify.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "qikify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.qikify\\.com\\/"),
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
		id: "quoli",
		name: "Quoli",
		website: "https://quoli.io",
		description: "Quoli is a Shopify app designed to help merchants collect and showcase social proof, incorporating product reviews, photos/videos, attributes, nuggets, questions, and user-generated content (UGC).",
		icon: "Quoli.png",
		categories: [
			"ecommerce-extensions",
			"community-ugc",
		],
		rules: [
			{
				id: "quoli:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.quoli\\.io\\/"),
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
		id: "rapid-search",
		name: "Rapid Search",
		website: "https://www.rapidsearch.app",
		description: "Rapid Search is an AI-powered Shopify search tool that enhances store conversions through an advanced search bar, product filters, and instant search functionality.",
		icon: "RapidSearch.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "rapid-search:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.rapidsearch\\.dev"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "recomify",
		name: "Recomify",
		website: "https://www.recomify.com",
		description: "Recomify is a 1-click install, cost-effective smart product recommendation engine.",
		icon: "Recomify.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "recomify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.recomify\\.com\\/"),
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
		id: "reconvert",
		name: "ReConvert",
		website: "https://www.reconvert.io",
		description: "ReConvert is a post-purchase upsell & thank you page.",
		icon: "ReConvert.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "reconvert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stilyoapps\\.com\\/reconvert\\/assets\\/js\\/store_reconvert_node\\.js"),
				description: "Script source URL matches a known technology marker.",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "releasit-cod-form-and-upsells",
		name: "Releasit COD Form & Upsells",
		website: "https://www.releas.it/products/releasit-cod-form-upsells",
		description: "Releasit COD Form & Upsells is a Shopify app that replaces the standard checkout with a customizable cash-on-delivery order form and supports upsell features to increase average order value.",
		icon: "Releasit.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "releasit-cod-form-and-upsells:dom:0",
				kind: "dom",
				selector: "script#rsi-cod-form-product-cache",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "releasit-cod-form-and-upsells:jsGlobal:1",
				kind: "jsGlobal",
				property: "RSI_CSS_LOADER",
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
		id: "reserve-in-store",
		name: "Reserve In-Store",
		website: "https://www.reserveinstore.com",
		description: "Reserve In-Store app will allow customers to reserve an item in your store online to come to pick it up or view the item before making the purchase.",
		icon: "Reserve In-Store.svg",
		categories: [
			"ecommerce-extensions",
			"booking-scheduling",
		],
		rules: [
			{
				id: "reserve-in-store:jsGlobal:0",
				kind: "jsGlobal",
				property: "reserveInStore.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "reserve-in-store:jsGlobal:1",
				kind: "jsGlobal",
				property: "reserveInStoreJsUrl",
				valuePattern: new RegExp("\\/reserveinstore\\.js.+\\.myshopify\\.com"),
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
		id: "retention-com",
		name: "Retention.com",
		website: "https://retention.com",
		description: "Retention.com's identity resolution software helps Shopify merchants recover lost shoppers.",
		icon: "Retention.com.svg",
		categories: [
			"ecommerce-extensions",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "retention-com:jsGlobal:0",
				kind: "jsGlobal",
				property: "B2BRetention",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "retention-com:jsGlobal:1",
				kind: "jsGlobal",
				property: "addedToCartRetentionButton",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "retention-com:jsGlobal:2",
				kind: "jsGlobal",
				property: "viewedProductRetention",
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
	},
	{
		id: "return-prime",
		name: "Return Prime",
		website: "https://www.returnprime.com/",
		description: "Return Prime is an application to manage returns for Shopify stores.",
		icon: "return-prime.png",
		categories: [
			"ecommerce-extensions",
			"commerce-operations",
		],
		rules: [
			{
				id: "return-prime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/return-prime-proxy-prod\\.s3[^ ]*\\.amazonaws\\.com\\/"),
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
			"shopify",
		],
	},
	{
		id: "revy",
		name: "Revy",
		website: "https://revy.io",
		description: "Revy is dedicated to build Shopify Apps to generate more sales for merchants.",
		icon: "Revy.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "revy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.revy\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "revy:jsGlobal:1",
				kind: "jsGlobal",
				property: "RevyApp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "revy:jsGlobal:2",
				kind: "jsGlobal",
				property: "RevyBundle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "revy:jsGlobal:3",
				kind: "jsGlobal",
				property: "RevyUpsell",
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
		id: "rivyo",
		name: "Rivyo",
		website: "https://rivyo.com",
		description: "Rivyo is a Shopify app for product reviews, loyalty programs, referrals, and user-generated content.",
		icon: "Rivyo.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "rivyo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/extensions\\/[^/]+\\/rivyo-product-review-\\d+\\/assets\\/rivyo-script\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rivyo:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\brivyoCustomerDetails\\b"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "rivyo:dom:2",
				kind: "dom",
				selector: "meta#th_rivyo_shop_url, meta#wc_rivyo_shop_url",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "schemaplus",
		name: "SchemaPlus",
		website: "https://schemaplus.io",
		description: "SchemaPlus is a Shopify app for Shopify ecommerce shops to add schema to them and thereby make them easier to find for search engines.",
		icon: "SchemaPlus.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "schemaplus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/schemaplusfiles\\.s3\\.amazonaws\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "schemaplus:jsGlobal:1",
				kind: "jsGlobal",
				property: "SchemaPlus_Reviews",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "schemaplus:jsGlobal:2",
				kind: "jsGlobal",
				property: "SchemaPlus_handleCallback",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "seal-subscriptions",
		name: "Seal Subscriptions",
		website: "https://www.sealsubscriptions.com",
		description: "Seal Subscriptions is a Shopify subscriptions app, packed with lots of features, such as automated product swaps, interval changes, payment calendar, Quick Checkout Wizard, and more.",
		icon: "Seal Subscriptions.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "seal-subscriptions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sealsubscriptions\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "seal-subscriptions:jsGlobal:1",
				kind: "jsGlobal",
				property: "SealSubs.checkout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "seal-subscriptions:jsGlobal:2",
				kind: "jsGlobal",
				property: "sealsubscriptions_settings_updated",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "seal-subscriptions:jsGlobal:3",
				kind: "jsGlobal",
				property: "sealsubsloaded",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "secomapp",
		name: "Secomapp",
		website: "https://www.secomapp.com",
		description: "Secomapp is a trusted Shopify Expert providing services through Shopify Apps.",
		icon: "Secomapp.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "secomapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.secomapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "secomapp:jsGlobal:1",
				kind: "jsGlobal",
				property: "SECOMAPP",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "shiptection",
		name: "ShipTection",
		website: "https://wamapps.io/pages/shiptection-protection",
		description: "ShipTection is the easiest way to offer shipping protection on your Shopify site.",
		icon: "ShipTection.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shiptection:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.shiptection\\.com\\/"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "shogun-landing-page-builder",
		name: "Shogun Landing Page Builder",
		website: "https://apps.shopify.com/shogun",
		description: "Shogun Landing Page Builder is a drag and drop Shopify page builder for creating high-converting store pages.",
		icon: "Shogun Page Builder.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shogun-landing-page-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getshogun\\.com\\/.+\\.myshopify\\.com"),
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
		implies: [
			"shogun-page-builder",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "shopapps",
		name: "Shopapps",
		website: "https://www.shopapps.in",
		description: "Shopapps is a trusted Shopify Expert providing services through Shopify Apps.",
		icon: "Shopapps.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shopapps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.myshopapps\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shopapps:jsGlobal:1",
				kind: "jsGlobal",
				property: "iStockUrl",
				valuePattern: new RegExp("iwish\\.myshopapps\\.com\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shopapps:jsGlobal:2",
				kind: "jsGlobal",
				property: "iWishUrl",
				valuePattern: new RegExp("iwish\\.myshopapps\\.com\\/"),
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
		id: "shopify-buy-button",
		name: "Shopify Buy Button",
		website: "https://apps.shopify.com/buy-button",
		description: "Shopify Buy Button is an app from Shopify which allows merchant to embed buy functionality for any product or collection into another website or blog.",
		icon: "Shopify.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shopify-buy-button:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\. shopifycdn\\.com\\/buy-button\\/latest\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shopify-buy-button:jsGlobal:1",
				kind: "jsGlobal",
				property: "ShopifyBuy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shopify-buy-button:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("sdks\\.shopifycdn\\.com\\/buy-button\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shopify-buy-button:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("sdks\\.shopifycdn\\.com\\/js-buy-sdk\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "shopify-geolocation-app",
		name: "Shopify Geolocation App",
		website: "https://apps.shopify.com/geolocation",
		description: "Shopify Geolocation App makes language and country recommendations to your customers based on their geographic location and browser or device language.",
		icon: "Shopify Geolocation App.png",
		categories: [
			"ecommerce-extensions",
			"maps-location",
		],
		rules: [
			{
				id: "shopify-geolocation-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("geolocation-recommendations\\.shopifycloud\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"shopify",
		],
	},
	{
		id: "shopkeeper-tools",
		name: "ShopKeeper Tools",
		website: "https://www.shopkeepertools.com",
		description: "ShopKeeper Tools is a suite of easy-to-use Shopify apps designed to increase conversion rates and drive revenue growth for online stores.",
		icon: "ShopKeeper.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shopkeeper-tools:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("magic-button-app\\.shopkeepertools\\.com\\/"),
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
		id: "shoppad-infinite-options",
		name: "ShopPad Infinite Options",
		website: "https://apps.shopify.com/custom-options",
		description: "ShopPad Infinite Options allows you to create as many custom option fields for your product pages as you need.",
		icon: "ShopPad.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shoppad-infinite-options:jsGlobal:0",
				kind: "jsGlobal",
				property: "Shoppad.apps.infiniteoptions",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "shoptimized",
		name: "Shoptimized",
		website: "https://shoptimized.net",
		description: "Shoptimized is a Shopify theme and support package designed to enhance store functionality, performance, and user experience.",
		icon: "Shoptimized.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shoptimized:jsGlobal:0",
				kind: "jsGlobal",
				property: "isshoptimized",
				description: "Page-owned global matches a known technology marker.",
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
			"shopify",
		],
	},
	{
		id: "shortly",
		name: "Shortly",
		website: "https://apps.shopify.com/shortly",
		description: "Shortly help create short URLs for influencer-marketing, social media posts & email-marketing campaigns with your own store domain.",
		icon: "Shortly.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shortly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/shortly\\.shop\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"shopify",
		],
	},
	{
		id: "simplio-upsells",
		name: "Simplio Upsells",
		website: "https://apps.shopify.com/simple-promotions-and-upsells",
		description: "Simplio Upsells сreate more revenue with promotions and post purchase upsells.",
		icon: "Simplio Upsells.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "simplio-upsells:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/upsell\\.simplio\\.app\\/"),
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
		id: "skio",
		name: "Skio",
		website: "https://skio.com",
		description: "Skio helps brands on Shopify sell subscriptions without ripping their hair out.",
		icon: "Skio.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "skio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.skio\\.com\\/"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "smile-app",
		name: "Smile App",
		website: "https://apps.shopify.com/smile-io",
		description: "Smile App offers a loyalty program for Shopify stores.",
		icon: "Smile.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "smile-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.smile\\.io\\/.+smile-shopify\\.js"),
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
		implies: [
			"smile",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "spin-a-sale",
		name: "Spin-a-Sale",
		website: "https://spinasale.com",
		description: "Spin-a-Sale adds the intensity of gamification to your site. Spin-a-Sale overlay displays a special prize wheel for visitors that you can fully configure.",
		icon: "Spin-a-Sale.png",
		categories: [
			"ecommerce-extensions",
			"widgets-misc",
		],
		rules: [
			{
				id: "spin-a-sale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("client\\.spinasale\\.com\\/"),
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
		],
	},
	{
		id: "superlemon-app",
		name: "SuperLemon app",
		website: "https://apps.shopify.com/whatsapp-chat-button",
		description: "SuperLemon app is an all-in-one WhatsApp plugin for Shopify stores.",
		icon: "SuperLemon.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "superlemon-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/files\\/superlemon_.+\\.js"),
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
			"whatsapp-business-chat",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "sweet-upsell",
		name: "Sweet Upsell",
		website: "https://sweetupsell.com",
		description: "Upsell is a tool that boosts Shopify store profits by automating product upsells.",
		icon: "SweetUpsell.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "sweet-upsell:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.sweetupsell\\.com"),
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
		id: "swym-wishlist-plus",
		name: "Swym Wishlist Plus",
		website: "https://swym.it/apps/wishlist/",
		description: "Swym Wishlist Plus enables your customers to bookmark their favorite products and pick up where they left off when they return.",
		icon: "Swym.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "swym-wishlist-plus:jsGlobal:0",
				kind: "jsGlobal",
				property: "swappName",
				valuePattern: new RegExp("Wishlist"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "swym-wishlist-plus:jsGlobal:1",
				kind: "jsGlobal",
				property: "swymCart.attributes",
				confidence: 50,
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
		implies: [
			"shopify",
		],
	},
	{
		id: "tabarnapp",
		name: "Tabarnapp",
		website: "https://tabarnapp.com",
		description: "Tabarnapp is a platform for Shopify apps and themes.",
		icon: "Tabarnapp.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "tabarnapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.tabarn\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tabarnapp:jsGlobal:1",
				kind: "jsGlobal",
				property: "tabarnapp_loaded_ad",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "tada",
		name: "Tada",
		website: "https://trytada.com",
		description: "Tada offers interactive website popups that allow Shopify merchants to collect more emails and increase sales by engaging website visitors through gamification.",
		icon: "Tada.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "tada:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.trytada\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "tern",
		name: "Tern",
		website: "https://www.tern.eco",
		description: "Tern is a plug and play ecommerce app, built for Shopify, that offers merchants the ability to provide a seamless trade-in service.",
		icon: "Tern.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "tern:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("live\\.tern-returns\\.eastsideapps\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "tikshop",
		name: "TikShop",
		website: "https://tikshop.co",
		description: "TikShop is a tool that integrates TikTok accounts with Shopify stores, allowing for the creation of shoppable feeds to facilitate quicker product promotion and sales directly through TikTok.",
		icon: "TikShop.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "tikshop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.tikshop\\.co\\/"),
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
		id: "timesact",
		name: "Timesact",
		website: "https://timesact.com",
		description: "Timesact is a Shopify app that automates pre-order and back-in-stock notifications to streamline inventory and sales management.",
		icon: "Timesact.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "timesact:dom:0",
				kind: "dom",
				selector: "div[class*='timesact_powered_by']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "timesact:jsGlobal:1",
				kind: "jsGlobal",
				property: "timesactScriptNew",
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
		id: "track123",
		name: "Track123",
		website: "https://www.track123.com",
		description: "Track123 is a product under Lingxing, founded in September 2021, with a focus on providing all-in-one tracking and management services for cross-border sellers.",
		icon: "Track123.svg",
		categories: [
			"ecommerce-extensions",
			"commerce-operations",
		],
		rules: [
			{
				id: "track123:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("track123\\.com\\/common\\/checkout-script-loader\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "track123:jsGlobal:1",
				kind: "jsGlobal",
				property: "track123",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "trackify-x",
		name: "Trackify X",
		website: "https://trackifyapp.com",
		description: "Trackify X is a pixel engine that helps merchants backup their pixel data and manage multiple pixels.",
		icon: "Trackify X.png",
		categories: [
			"ecommerce-extensions",
			"analytics",
		],
		rules: [
			{
				id: "trackify-x:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trackifyx\\.redretarget\\.com\\/"),
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
		id: "tyslo-easysell",
		name: "Tyslo EasySell",
		website: "https://tyslo.com",
		description: "Tyslo EasySell replaces default Shopify checkout process by embedding (or popup) a simple order form on the product or cart page.",
		icon: "Tyslo EasySell.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "tyslo-easysell:jsGlobal:0",
				kind: "jsGlobal",
				property: "openTysloForm",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tyslo-easysell:jsGlobal:1",
				kind: "jsGlobal",
				property: "tysloApplyDiscount",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tyslo-easysell:jsGlobal:2",
				kind: "jsGlobal",
				property: "tysloConfigVersion",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tyslo-easysell:jsGlobal:3",
				kind: "jsGlobal",
				property: "tysloEasysellConfig",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "video-greet",
		name: "Video Greet",
		website: "https://apps.shopify.com/videogreet-gift-messages",
		description: "Video Greet lets your customers add a video message to gifts with QR codes.",
		icon: "Video Greet.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "video-greet:jsGlobal:0",
				kind: "jsGlobal",
				property: "__vg.video_greet_button_src",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "visely",
		name: "Visely",
		website: "https://visely.io",
		description: "Visely is a Shopify app which personalise product recommendations for Shopify sites.",
		icon: "Visely.svg",
		categories: [
			"ecommerce-extensions",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "visely:jsGlobal:0",
				kind: "jsGlobal",
				property: "Visely.RecommendationsApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "visely:jsGlobal:1",
				kind: "jsGlobal",
				property: "ViselyCartProductIds",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "visely:jsGlobal:2",
				kind: "jsGlobal",
				property: "ViselyPage",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "visual-quiz-builder",
		name: "Visual Quiz Builder",
		website: "https://apps.shopify.com/product-recommendation-quiz",
		description: "Visual Quiz Builder is a Shopify app built by AskWhai.",
		icon: "Visual Quiz Builder.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "visual-quiz-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/whai-cdn\\.nyc\\d\\.cdn\\.digitaloceanspaces\\.com\\/"),
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
		],
	},
	{
		id: "vitals",
		name: "Vitals",
		website: "https://vitals.co",
		description: "Vitals is an all-in-one Shopify marketing software.",
		icon: "Vitals.svg",
		categories: [
			"ecommerce-extensions",
			"marketing-automation",
		],
		rules: [
			{
				id: "vitals:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/appsolve\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vitals:jsGlobal:1",
				kind: "jsGlobal",
				property: "VITALS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vitals:jsGlobal:2",
				kind: "jsGlobal",
				property: "vitals_app_cache_keys_v1",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vitals:jsGlobal:3",
				kind: "jsGlobal",
				property: "vitals_country_code",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vitals:jsGlobal:4",
				kind: "jsGlobal",
				property: "vitals_product_data",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "widebundle",
		name: "WideBundle",
		website: "https://en.widebundle.com",
		description: "WideBundle is a Shopify application that allows a merchant to set up bundles on his store.",
		icon: "WideBundle.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "widebundle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/widebundle\\.com\\/"),
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
		id: "wishlist-king",
		name: "Wishlist King",
		website: "https://appmate.io",
		description: "Wishlist King is a Shopify app which helps you to add your favorite products or share the wishlist with your friends built by Appmate.",
		icon: "Wishlist King.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "wishlist-king:jsGlobal:0",
				kind: "jsGlobal",
				property: "Appmate.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				confidence: 1,
				version: {
					source: "match",
					template: "$1\\",
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wishlist-king:jsGlobal:1",
				kind: "jsGlobal",
				property: "Appmate.wk",
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
		id: "ymq-product-options-variant-option",
		name: "YMQ Product Options Variant Option",
		website: "https://apps.shopify.com/ymq-options",
		description: "YMQ Product Options Variant Option help add an unlimited number of product options to your items so you're not restricted by Shopify's limit of 3 options and 100 variants.",
		icon: "YMQ Product Options Variant Option.png",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "ymq-product-options-variant-option:jsGlobal:0",
				kind: "jsGlobal",
				property: "ymq_option.v",
				valuePattern: new RegExp("\\?v=([\\d\\.]+)"),
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
		implies: [
			"shopify",
		],
	},
	{
		id: "yotpo-subscriptions",
		name: "Yotpo Subscriptions",
		website: "https://www.yotpo.com/platform/subscriptions/",
		description: "Yotpo Subscriptions is a Shopify app designed for merchants to provide subscription services to customers.",
		icon: "Yotpo.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "yotpo-subscriptions:html:0",
				kind: "html",
				pattern: new RegExp("<!-- BEGIN app block: shopify:\\/\\/apps\\/yotpo-subscriptions\\/blocks\\/app-embed-block"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yotpo-subscriptions:html:1",
				kind: "html",
				pattern: new RegExp("<!-- begin app block: shopify:\\/\\/apps\\/yotpo-subscriptions\\/blocks\\/app-embed-block"),
				description: "HTML contains a known technology signature.",
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
		id: "youpay",
		name: "YouPay",
		website: "https://youpay.co",
		description: "YouPay is an alternative method of payment that allows you to give someone else the ability to pay for your shopping cart with no fees or interest.",
		icon: "YouPay.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "youpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.youpay\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "youpay:jsGlobal:1",
				kind: "jsGlobal",
				property: "YouPay.buttonWindow",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "youpay:jsGlobal:2",
				kind: "jsGlobal",
				property: "youpayReady",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "youpay:jsGlobal:3",
				kind: "jsGlobal",
				property: "youpayStatus",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "zakeke-visual-customizer",
		name: "Zakeke Visual Customizer",
		website: "https://www.zakeke.com",
		description: "Zakeke Visual Customizer is a cloud-connected visual ecommerce tool that allows brands and retailers to offer live, personalised, 2D, 3D, and augmented reality (AR) functionality for their products.",
		icon: "Zakeke.png",
		categories: [
			"ecommerce-extensions",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "zakeke-visual-customizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zakeke\\.com\\/Scripts\\/integration\\/shopify\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zakeke-visual-customizer:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zakeke\\.com\\/scripts\\/integration\\/shopify\\/"),
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
			"zakeke",
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "zalify",
		name: "Zalify",
		website: "https://www.zalify.com",
		description: "Zalify is a data-driven growth engine for Shopify merchants, designed to provide agility and precision in the ecommerce environment.",
		icon: "Zalify.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "zalify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zalify\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zalify:jsGlobal:1",
				kind: "jsGlobal",
				property: "zalify.render",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zalify:jsGlobal:2",
				kind: "jsGlobal",
				property: "zalifyCurrentScript",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "zendapps",
		name: "ZendApps",
		website: "https://zendapps.com",
		description: "ZendApps is a tool designed to grow Shopify stores by streamlining operations and enhancing performance through automated features.",
		icon: "ZendApps.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "zendapps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zend-apps\\.com\\/"),
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
		id: "zipify-ocu",
		name: "Zipify OCU",
		website: "https://zipify.com/apps/ocu/",
		description: "Zipify OCU allows you to add upsells and cross-sells to your checkout sequence.",
		icon: "Zipify OCU.svg",
		categories: [
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "zipify-ocu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/zipify-oneclickupsell-vendor\\.js"),
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
		id: "zipify-pages",
		name: "Zipify Pages",
		website: "https://zipify.com/apps/pages/",
		description: "Zipify Pages the first landing page builder uniquely designed for ecommerce.",
		icon: "Zipify Pages.svg",
		categories: [
			"ecommerce-extensions",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "zipify-pages:jsGlobal:0",
				kind: "jsGlobal",
				property: "ZipifyPages",
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
] as const satisfies readonly TechnologyDefinition[];
