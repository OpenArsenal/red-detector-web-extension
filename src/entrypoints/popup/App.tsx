import { defineProxy } from 'comctx';
import { createSignal, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';

import type { ExtractionStatus } from '../../lib/detection/types';
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
			<h1>RED Detector Extractor</h1>
			<p class="lede">Collect a bounded page snapshot from the active tab and store it for inspection.</p>

			<section class="panel">
				<button class="primary-button" disabled={busy()} onClick={runExtraction}>
					{busy() ? 'Collecting...' : 'Run Extraction On Active Tab'}
				</button>
				<p>Total records: {status.totalRecords}</p>
				<p>Total bytes: {status.totalBytes}</p>
				<p>Origins tracked: {Object.keys(status.byOrigin).length}</p>
			</section>

			{message() && <p class="status-message">{message()}</p>}
		</main>
	);
}
