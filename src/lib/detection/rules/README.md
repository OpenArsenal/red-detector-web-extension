# Detection rules layout

Rules are organized by normalized category first, then by technology file:

```txt
src/lib/detection/rules/
  analytics/
    google-analytics.ts
    vercel-analytics.ts
    index.ts
  infrastructure-hosting/
    vercel.ts
    wordpress.ts
    index.ts
```

Use one file per technology detection by default. Group definitions in one file only when they are tightly coupled variants of the same product family and live in the same category, such as `wordpress`, `wordpress-block-editor`, and `wordpress-site-editor`.

Keep distinct products in separate category folders even when they share a brand. For example, `infrastructure-hosting/vercel.ts`, `analytics/vercel-analytics.ts`, and `monitoring-error-tracking/vercel-speed-insights.ts` should stay separate because they detect different products in different categories.

Each category folder owns an `index.ts` file that exports the category aggregate consumed by `rules/index.ts`. This keeps category imports stable while making individual detections easier to find and review.
