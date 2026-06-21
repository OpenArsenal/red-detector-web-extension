import { browser } from 'wxt/browser';

import { matchIndexedObservationBatch } from '../detection/observation-matcher-index';
import {
	MATCHER_OFFSCREEN_CHANNEL,
	createMatcherPartitionTasks,
	createMatcherPipelineResult,
	type MatcherJobRunResult,
	type MatcherOffscreenResponse,
	type RunMatcherJobMessage,
	type RunMatcherJobRequest,
} from '../matcher';

/** Static WXT output path for the hidden matcher host document. */
const MATCHER_OFFSCREEN_DOCUMENT_PATH = '/matcher-offscreen.html';

/** Maximum time the background waits for the offscreen host to answer one job. */
const MATCHER_OFFSCREEN_TIMEOUT_MS = 120_000;

/** Promise shared by concurrent requests creating the same offscreen document. */
let creatingOffscreenDocument: Promise<void> | undefined;

/** Narrow subset of Chrome's offscreen API needed by the matcher scheduler. */
interface BrowserOffscreenApi {
	/** Create a bundled offscreen document when none exists yet. */
	createDocument(input: {
		readonly url: string;
		readonly reasons: readonly ['WORKERS'];
		readonly justification: string;
	}): Promise<void>;
}

/** Narrow subset of `runtime.getContexts()` used to avoid duplicate offscreen pages. */
interface BrowserRuntimeContextsApi {
	/** Return extension contexts matching the offscreen document query. */
	getContexts(input: {
		readonly contextTypes: readonly ['OFFSCREEN_DOCUMENT'];
		readonly documentUrls: readonly string[];
	}): Promise<readonly unknown[]>;
}

/**
 * Run matcher work through the offscreen host and fall back in-process if needed.
 *
 * The fallback preserves correctness when development builds, unsupported
 * browsers, or worker startup errors make the offscreen path unavailable. The
 * fast path keeps CPU-bound matching out of the background service worker; the
 * fallback is intentionally visible through the `executor` field so diagnostics
 * can catch any return to background-bound matching.
 */
export async function runMatcherJobWithOffscreenFallback(
	request: RunMatcherJobRequest,
): Promise<MatcherJobRunResult> {
	const offscreenResult = await tryRunMatcherJobInOffscreen(request);
	if (offscreenResult) {
		return offscreenResult;
	}

	return runMatcherJobInBackgroundFallback(request);
}

async function tryRunMatcherJobInOffscreen(
	request: RunMatcherJobRequest,
): Promise<MatcherJobRunResult | null> {
	if (!await ensureMatcherOffscreenDocument()) {
		return null;
	}

	const message: RunMatcherJobMessage = {
		channel: MATCHER_OFFSCREEN_CHANNEL,
		type: 'matcher.run-job',
		request,
	};
	try {
		const response = await withMatcherTimeout(
			browser.runtime.sendMessage(message) as Promise<MatcherOffscreenResponse>,
			MATCHER_OFFSCREEN_TIMEOUT_MS,
		);
		if (response.ok && 'value' in response) {
			return response.value;
		}
		return null;
	} catch {
		return null;
	}
}

async function ensureMatcherOffscreenDocument(): Promise<boolean> {
	const offscreen = getOffscreenApi();
	if (!offscreen) {
		return false;
	}

	if (await hasMatcherOffscreenDocument()) {
		return true;
	}

	if (!creatingOffscreenDocument) {
		creatingOffscreenDocument = offscreen.createDocument({
			url: MATCHER_OFFSCREEN_DOCUMENT_PATH,
			reasons: ['WORKERS'],
			justification: 'Run CPU-bound technology matching in extension workers without blocking the background service worker.',
		}).finally(() => {
			creatingOffscreenDocument = undefined;
		});
	}

	try {
		await creatingOffscreenDocument;
		return true;
	} catch {
		return await hasMatcherOffscreenDocument();
	}
}

async function hasMatcherOffscreenDocument(): Promise<boolean> {
	const runtime = browser.runtime as typeof browser.runtime & Partial<BrowserRuntimeContextsApi>;
	if (!runtime.getContexts) {
		return false;
	}

	const contexts = await runtime.getContexts({
		contextTypes: ['OFFSCREEN_DOCUMENT'],
		documentUrls: [browser.runtime.getURL(MATCHER_OFFSCREEN_DOCUMENT_PATH)],
	});
	return contexts.length > 0;
}

function getOffscreenApi(): BrowserOffscreenApi | undefined {
	const candidate = browser as typeof browser & { readonly offscreen?: BrowserOffscreenApi };
	return candidate.offscreen;
}

async function runMatcherJobInBackgroundFallback(
	request: RunMatcherJobRequest,
): Promise<MatcherJobRunResult> {
	const partitions = createMatcherPartitionTasks({
		job: request.job,
		batch: request.batch,
		options: request.options,
		bootstrapOnly: request.mode === 'bootstrap',
	}).map((task) => {
		const observationIndexes = new Map(task.batch.observations.map((observation, index) => [
			observation,
			task.observationIndexes[index] ?? index,
		]));
		const matched = matchIndexedObservationBatch({
			registry: request.registry,
			batch: task.batch,
			index: request.index,
			options: task.options,
		});

		return {
			job: task.job,
			partitionId: task.partitionId,
			kind: task.kind,
			priority: task.priority,
			observationCount: task.batch.observations.length,
			matches: matched.matches.map((match, matchIndex) => ({
				observationIndex: observationIndexes.get(match.observation) ?? matchIndex,
				matchIndex,
				match,
			})),
			diagnostics: matched.diagnostics,
			completedAt: Date.now(),
		};
	});
	const result = createMatcherPipelineResult({
		batch: request.batch,
		registry: request.registry,
		compiledRegistryArtifact: { relationshipGraph: request.relationshipGraph },
		partitions,
		analyzedAt: request.analyzedAt,
		source: request.source,
	});

	return {
		job: request.job,
		mode: request.mode,
		result,
		partitions,
		executor: 'background-fallback',
		completedAt: Date.now(),
	};
}

function withMatcherTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
	return new Promise((resolve, reject) => {
		const timer = globalThis.setTimeout(() => {
			reject(new Error('Offscreen matcher host did not respond before the timeout.'));
		}, timeoutMs);
		promise.then((value) => {
			globalThis.clearTimeout(timer);
			resolve(value);
		}, (error) => {
			globalThis.clearTimeout(timer);
			reject(error);
		});
	});
}
