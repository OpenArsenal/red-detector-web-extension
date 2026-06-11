import type { TechnologyDefinition } from "./types";

export const SOURCE_LIMITS = {
  htmlChars: 200_000,
  scriptSrc: 300,
  stylesheetHref: 300,
  metaValueChars: 500,
  metaValuesPerKey: 5,
  cookieNames: 200,
  evidenceValueChars: 160,
} as const;

export const mvpTechnologies: TechnologyDefinition[] = [
  {
    id: "wordpress",
    name: "WordPress",
    website: "https://wordpress.org",
    description: "Open-source content management system.",
    categories: ["cms"],
    rules: [
      {
        kind: "meta",
        key: "generator",
        valuePattern: /WordPress\s*([\d.]+)?/i,
        versionTemplate: "$1",
        confidence: 90,
        description: "Meta generator contains WordPress.",
      },
      {
        kind: "html",
        pattern: /wp-content|wp-includes/i,
        confidence: 80,
        description: "HTML references WordPress asset paths.",
      },
      {
        kind: "cookie",
        key: "wordpress_test_cookie",
        confidence: 70,
        description: "WordPress test cookie exists.",
      },
    ],
  },
  {
    id: "shopify",
    name: "Shopify",
    website: "https://www.shopify.com",
    description: "Hosted ecommerce platform.",
    categories: ["ecommerce"],
    rules: [
      {
        kind: "html",
        pattern: /cdn\.shopify\.com|Shopify\.theme/i,
        confidence: 90,
        description: "HTML references Shopify CDN or theme object.",
      },
      {
        kind: "scriptSrc",
        pattern: /cdn\.shopify\.com/i,
        confidence: 85,
        description: "Script source uses Shopify CDN.",
      },
      {
        kind: "cookie",
        key: "_shopify_y",
        confidence: 70,
        description: "Shopify analytics cookie exists.",
      },
    ],
  },
  {
    id: "react",
    name: "React",
    website: "https://react.dev",
    description: "JavaScript library for building user interfaces.",
    categories: ["javascript-framework"],
    rules: [
      {
        kind: "dom",
        selector: "[data-reactroot], [data-reactid]",
        confidence: 80,
        description: "React root attributes are present.",
      },
      {
        kind: "scriptSrc",
        pattern: /react(?:\.production\.min)?\.js|react-dom/i,
        confidence: 80,
        description: "Script source references React.",
      },
      {
        kind: "jsGlobal",
        property: "React.version",
        valuePattern: /([\d.]+)/,
        versionTemplate: "$1",
        confidence: 95,
        description:
          "React global version is present when visible to the collector.",
      },
    ],
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    website: "https://analytics.google.com/",
    description:
      "Web analytics service for measuring website traffic and behavior.",
    categories: ["analytics"],
    rules: [
      {
        kind: "scriptSrc",
        pattern:
          /googletagmanager\.com\/gtag\/js|google-analytics\.com\/analytics\.js/i,
        confidence: 95,
        description: "Google Analytics script source is present.",
      },
      {
        kind: "html",
        pattern:
          /gtag\s*\(\s*['"]config['"]\s*,\s*['"]G-[A-Z0-9]{6,}['"]\s*\)/i,
        confidence: 95,
        description: "GA4 gtag config call is present in page HTML.",
      },
      {
        kind: "html",
        pattern:
          /(?:gtag|dataLayer|googletagmanager|google-analytics|google analytics|ga4)[\s\S]{0,500}G-[A-Z0-9]{6,}|G-[A-Z0-9]{6,}[\s\S]{0,500}(?:gtag|dataLayer|googletagmanager|google-analytics|google analytics|ga4)/i,
        confidence: 85,
        description:
          "GA4 measurement ID appears near Google Analytics bootstrap/config code.",
      },
      {
        kind: "html",
        pattern: /\bG-[A-Z0-9]{6,}\b/i,
        confidence: 70,
        description: "GA4 measurement ID is present in page HTML.",
      },
      {
        kind: "cookie",
        key: "_ga",
        confidence: 65,
        description: "GA cookie exists.",
      },
    ],
  },
];
