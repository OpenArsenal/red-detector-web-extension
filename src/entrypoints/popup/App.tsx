import { defineProxy } from 'comctx';
import { createSignal, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';

import type { ExtractionRecord, ExtractionStatus } from '../../lib/detection/types';
import type { BackgroundApi } from '../../lib/messaging';
import {
	BACKGROUND_RPC_NAMESPACE,
	createBackgroundClientAdapter,
} from '../../lib/messaging';

import "./App.css";

const [, injectBackgroundApi] = defineProxy(() => ({}) as BackgroundApi, {
	namespace: BACKGROUND_RPC_NAMESPACE,
	heartbeatCheck: false,
	transfer: false,
});

const backgroundApi = injectBackgroundApi(
	createBackgroundClientAdapter('popup', { href: globalThis.location?.href }),
);

function normalizeError(error: unknown): string {
	return error instanceof Error ? error.message : 'Unexpected messaging failure';
}

export default function App() {
	const [status, setStatus] = createStore<ExtractionStatus>({
		totalRecords: 0,
		totalBytes: 0,
		byOrigin: {},
	});
	const [busy, setBusy] = createSignal(false);
	const [message, setMessage] = createSignal('');
	const [latestRecord, setLatestRecord] = createSignal<ExtractionRecord | null>(null);

	function formattedResult() {
		const record = latestRecord();
		if (!record) {
			return '';
		}

		return JSON.stringify(record.payload, null, 2);
	}

	function sourceCount() {
		return latestRecord()?.payload.collectedSources.length ?? 0;
	}

	function trackedOrigins() {
		return Object.keys(status.byOrigin).length;
	}

	function statusTone() {
		if (!message()) {
			return 'idle';
		}

		return message().includes(':') ? 'warning' : 'success';
	}

	async function refreshStatus() {
		try {
			const response = await backgroundApi.getExtractionStatus();
			if (response.ok) {
				setStatus(response.value);
			}
		} catch (error) {
			setMessage(normalizeError(error));
		}
	}

	async function runExtraction() {
		setBusy(true);
		setMessage('');

		try {
			const response = await backgroundApi.runActiveTabExtraction({});
			if (!response.ok) {
				setMessage(`${response.code}: ${response.message}`);
				setBusy(false);
				return;
			}

			setLatestRecord(response.value);
			console.log('[red-detector] extracted payload', response.value.payload);
			setMessage(`Captured ${response.value.payload.collectedSources.length} sources`);
			await refreshStatus();
		} catch (error) {
			setMessage(normalizeError(error));
		}

		setBusy(false);
	}

	onMount(() => {
		void refreshStatus();
	});

	return (
		<main class="popup-shell">
			<section class="hero-panel">
				<div class="hero-copy">
					<p class="eyebrow">Runtime Snapshot</p>
					<h1>RED Detector Extractor</h1>
					<p class="lede">
						Capture a bounded page payload from the active tab and inspect the raw extraction
						result without leaving the popup.
					</p>
				</div>

				<button class="primary-button" disabled={busy()} onClick={runExtraction}>
					{busy() ? 'Collecting...' : 'Run Extraction On Active Tab'}
				</button>

				<div class="stats-grid">
					<article class="stat-card accent-moss">
						<span class="stat-label">Records</span>
						<strong class="stat-value">{status.totalRecords}</strong>
					</article>
					<article class="stat-card accent-amber">
						<span class="stat-label">Tracked Origins</span>
						<strong class="stat-value">{trackedOrigins()}</strong>
					</article>
					<article class="stat-card accent-slate">
						<span class="stat-label">Payload Sources</span>
						<strong class="stat-value">{sourceCount()}</strong>
					</article>
				</div>

				<div class="mini-metrics">
					<p>Total bytes retained: {status.totalBytes}</p>
					<p>Mode: {latestRecord()?.mode ?? 'safe'}</p>
				</div>
			</section>

			{message() && <p class={`status-message ${statusTone()}`}>{message()}</p>}

			<section class="panel result-panel">
				<div class="panel-heading">
					<div>
						<p class="panel-kicker">Live Payload</p>
						<h2>Latest Extraction Result</h2>
					</div>
					{latestRecord() && <span class="mode-chip">{latestRecord()!.mode}</span>}
				</div>

				{latestRecord() ? (
					<>
						<p class="result-meta">
							Captured from {latestRecord()!.origin} in {latestRecord()!.mode} mode
						</p>
						<div class="source-list" aria-label="Collected sources">
							{latestRecord()!.payload.collectedSources.map((source) => (
								<span class="source-chip">{source}</span>
							))}
						</div>
						<pre class="result-json">{formattedResult()}</pre>
					</>
				) : (
					<p class="result-empty">Run extraction to view the formatted payload here.</p>
				)}
			</section>
		</main>
	);
}
