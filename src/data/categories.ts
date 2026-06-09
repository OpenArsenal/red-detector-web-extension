import type { Category } from "../lib/detection/types";

export const categories: Record<string, Category> = {
  cms: { id: "cms", label: "CMS", priority: 10 },
  ecommerce: { id: "ecommerce", label: "eCommerce", priority: 20 },
  analytics: { id: "analytics", label: "Analytics", priority: 30 },
  "javascript-framework": {
    id: "javascript-framework",
    label: "JavaScript frameworks",
    priority: 40,
  },
  "tag-manager": { id: "tag-manager", label: "Tag managers", priority: 50 },
  "web-server": { id: "web-server", label: "Web servers", priority: 60 },
  cdn: { id: "cdn", label: "CDNs", priority: 70 },
  payment: { id: "payment", label: "Payments", priority: 80 },
  marketing: { id: "marketing", label: "Marketing", priority: 90 },
  unknown: { id: "unknown", label: "Unknown", priority: 999 },
};
