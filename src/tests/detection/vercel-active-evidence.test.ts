import { describe, expect, it } from 'vitest';

import { normalizePageSignals } from '../../lib/observations';
import { runObservationBatchPipeline } from '../../lib/pipeline';
import { stripeTechnologyDefinition } from '../../lib/detection/rules/commerce-operations/stripe';
import { pusherTechnologyDefinition } from '../../lib/detection/rules/email-messaging/pusher';
import { opentelemetryTechnologyDefinition } from '../../lib/detection/rules/monitoring-error-tracking/opentelemetry';
import { amazonS3TechnologyDefinition } from '../../lib/detection/rules/infrastructure-hosting/amazon-s3';
import { amazonWebServicesTechnologyDefinition } from '../../lib/detection/rules/infrastructure-hosting/amazon-web-services';
import { fidesTechnologyDefinition } from '../../lib/detection/rules/privacy-compliance/fides';
import { contentfulTechnologyDefinition } from '../../lib/detection/rules/platform-cms-builder/contentful';
import { kasadaTechnologyDefinition } from '../../lib/detection/rules/security/kasada';
import { googleFontApiTechnologyDefinition } from '../../lib/detection/rules/styling-library/google-font-api';
import { nextJsTechnologyDefinition } from '../../lib/detection/rules/ui-library/next-js';
import { turbopackTechnologyDefinition } from '../../lib/detection/rules/bundler/turbopack';
import { webpackTechnologyDefinition } from '../../lib/detection/rules/bundler/webpack';
import { makePageSignals, TEST_NOW } from '../support/factories';

const VERCEL_CSP = [
	"default-src 'self' vercel.com *.vercel.com assets.vercel.com *.vercel.sh vercel.live",
	"script-src 'self' https://snap.licdn.com cdn.vercel-insights.com va.vercel-scripts.com",
	"connect-src 'self' *.ingest.sentry.io wss://ws-us3.pusher.com sockjs-use3.pusher.com https://*.contentful.com",
	"img-src 'self' https://images.ctfassets.net https://s3.amazonaws.com",
	"font-src 'self' fonts.gstatic.com",
	"frame-ancestors 'self' https://app.contentful.com https://*.contentful.com",
	"script-src-elem 'self' *.stripe.com",
].join(';');

const KASADA_INLINE_SCRIPT = `
	document.addEventListener("kpsdk-load", () => window.KPSDK.configure([]));
	document.addEventListener("kpsdk-ready", () => {});
	fetch('/api/ai-chat', { headers: { 'x-is-human': 'challenge' } });
`;

describe('vercel active-tab evidence parity', () => {
	// Protects the active-tab subset of competitor reports without pulling DNS,
	// WHOIS, or contact intelligence into page-local detections.
	it('detects technologies visible from active page HTML and HAR surfaces', () => {
		const registry = [
			kasadaTechnologyDefinition,
			opentelemetryTechnologyDefinition,
			contentfulTechnologyDefinition,
			pusherTechnologyDefinition,
			stripeTechnologyDefinition,
			googleFontApiTechnologyDefinition,
			amazonS3TechnologyDefinition,
			amazonWebServicesTechnologyDefinition,
			fidesTechnologyDefinition,
		];
		const batch = normalizePageSignals(makePageSignals({
			url: 'https://vercel.com/',
			hostname: 'vercel.com',
			headers: {
				'content-security-policy': VERCEL_CSP,
			},
			html: '<link rel="preload" as="script" fetchpriority="low" href="/_next/static/chunk.js"><button id="fides-modal-link">Cookie settings</button>',
			requests: [{
				url: 'https://vercel.com/.well-known/otel/metrics',
				method: 'POST',
				type: 'fetch',
			}],
			resources: [{
				url: 'https://vercel.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/p.js',
				initiatorType: 'script',
			}],
			scriptContents: [KASADA_INLINE_SCRIPT],
		}), { observedAt: TEST_NOW });

		const result = runObservationBatchPipeline({
			batch,
			registry,
			source: 'fresh',
		});
		const detectedIds = result.analysis.results.map((detection) => detection.technologyId);

		expect(detectedIds).toEqual(expect.arrayContaining([
			'kasada',
			'opentelemetry',
			'contentful',
			'pusher',
			'stripe',
			'google-font-api',
			'amazon-s3',
			'amazon-web-services',
			'fides',
		]));
		expect(detectedIds).not.toContain('priority-hints');
		expect(result.analysis.results.find((detection) => detection.technologyId === 'kasada')?.evidence)
			.toEqual(expect.arrayContaining([
				expect.objectContaining({ kind: 'scriptContent' }),
			]));
		expect(result.analysis.results.find((detection) => detection.technologyId === 'opentelemetry')?.evidence)
			.toEqual(expect.arrayContaining([
				expect.objectContaining({ kind: 'requestUrl' }),
			]));
	});

	// Next.js can be built with Turbopack or Webpack, but the framework alone
	// no longer proves Webpack now that Turbopack is production-visible.
	it('does not infer webpack from next-js when turbopack is directly detected', () => {
		const registry = [
			nextJsTechnologyDefinition,
			turbopackTechnologyDefinition,
			webpackTechnologyDefinition,
		];
		const batch = normalizePageSignals(makePageSignals({
			url: 'https://vercel.com/',
			hostname: 'vercel.com',
			scripts: ['/vc-ap-vercel-marketing/_next/static/immutable/chunks/turbopack-0593f40j2-_d6.js'],
			scriptContents: ['globalThis["TURBOPACK_remote_chunk_loading_global_vercel-marketing"] = [];'],
		}), { observedAt: TEST_NOW });

		const result = runObservationBatchPipeline({
			batch,
			registry,
			source: 'fresh',
		});
		const detectedIds = result.analysis.results.map((detection) => detection.technologyId);

		expect(detectedIds).toContain('next-js');
		expect(detectedIds).toContain('turbopack');
		expect(detectedIds).not.toContain('webpack');
	});

});
