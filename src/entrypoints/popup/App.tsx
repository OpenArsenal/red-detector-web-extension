import { defineProxy } from 'comctx';
import { createSignal, For, Show, onCleanup, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';

import { categories } from '../../data/categories';
import { CategoryGroup } from '../../components/CategoryGroup';
import { EmptyState } from '../../components/EmptyState';
import { ErrorState } from '../../components/ErrorState';
import type { AnalysisStatus, DetectionResult, SiteAnalysis } from '../../lib/detection/types';
import type { BackgroundApi } from '../../lib/messaging';
import {
	BACKGROUND_RPC_NAMESPACE,
	createBackgroundClientAdapter,
} from '../../lib/messaging';

import './App.css';

type PollingMode = 'unknown' | 'active' | 'stopped';

type ScanNotice = {
	variant: 'success' | 'warning';
	text: string;
};

const POPUP_POLL_INTERVAL_MS = 1_500;

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

function groupByCategory(results: DetectionResult[]) {
	const grouped = results.reduce<Record<string, DetectionResult[]>>((groups, result) => {
		const category = result.categories[0] ?? 'unknown';
		return {
			...groups,
			[category]: [...(groups[category] ?? []), result],
		};
	}, {});

	return Object.entries(grouped)
		.map(([category, categoryResults]) => {
			const meta = categories[category] ?? categories.unknown;
			return {
				category,
				label: meta.label,
				priority: meta.priority,
				results: categoryResults,
			};
		})
		.sort((a, b) => a.priority - b.priority || a.label.localeCompare(b.label));
}

function getDetectionIds(results: DetectionResult[]) {
	return new Set(results.map((result) => result.technologyId));
}

function getAddedDetectionIds(previous: DetectionResult[], next: DetectionResult[]) {
	const previousIds = getDetectionIds(previous);
	return next
		.filter((result) => !previousIds.has(result.technologyId))
		.map((result) => result.technologyId);
}

function mergeUniqueIds(previous: string[], next: string[]) {
	return [...new Set([...previous, ...next])];
}

export default function App() {
	const [status, setStatus] = createStore<AnalysisStatus>({
		totalAnalyses: 0,
		trackedOrigins: 0,
	});
	const [busy, setBusy] = createSignal(false);
	const [pollingMode, setPollingMode] = createSignal<PollingMode>('unknown');
	const [notice, setNotice] = createSignal<ScanNotice | null>(null);
	const [errorMessage, setErrorMessage] = createSignal('');
	const [analysis, setAnalysis] = createSignal<SiteAnalysis | null>(null);
	const [lateAddedIds, setLateAddedIds] = createSignal<string[]>([]);
	let pollTimer: ReturnType<typeof globalThis.setInterval> | undefined;
	let refreshInFlight = false;

	function resultCount() {
		return analysis()?.results.length ?? 0;
	}

	function groupedResults() {
		return groupByCategory(analysis()?.results ?? []);
	}

	function hasLateDetections() {
		return lateAddedIds().length > 0;
	}

	function pollingChipLabel() {
		return pollingMode() === 'active' ? 'Polling' : pollingMode() === 'stopped' ? 'Stopped' : 'Loading';
	}

	function clearPopupPolling() {
		if (pollTimer !== undefined) {
			clearInterval(pollTimer);
			pollTimer = undefined;
		}
	}

	function startPopupPolling() {
		clearPopupPolling();
		pollTimer = setInterval(() => {
			void loadLatestAnalysis({ forceRefresh: true, source: 'auto' });
		}, POPUP_POLL_INTERVAL_MS);
	}

	async function refreshStatus() {
		try {
			const response = await backgroundApi.getAnalysisStatus();
			if (response.ok) {
				setStatus(response.value);
			}
		} catch (error) {
			setErrorMessage(normalizeError(error));
		}
	}

	async function syncPollingState() {
		try {
			const response = await backgroundApi.getActiveTabPollingState();
			if (!response.ok) {
				setPollingMode('unknown');
				setErrorMessage(`${response.error.code}: ${response.error.message}`);
				return;
			}

			setPollingMode(response.value.isPolling ? 'active' : 'stopped');
			if (response.value.isPolling) {
				startPopupPolling();
			} else {
				clearPopupPolling();
			}
		} catch (error) {
			setPollingMode('unknown');
			setErrorMessage(normalizeError(error));
		}
	}

	async function loadLatestAnalysis(options: {
		forceRefresh: boolean;
		restartPolling?: boolean;
		resetLateMarkers?: boolean;
		source: 'initial' | 'manual' | 'auto';
	}) {
		if (refreshInFlight) {
			return;
		}

		refreshInFlight = true;
		const isUserVisibleRefresh = options.source !== 'auto';
		if (isUserVisibleRefresh) {
			setBusy(true);
		}
		if (options.resetLateMarkers) {
			setLateAddedIds([]);
		}
		if (options.source !== 'auto') {
			setNotice(null);
			setErrorMessage('');
		}

		try {
			const previous = analysis();
			const response = await backgroundApi.analyzeActiveTab({
				forceRefresh: options.forceRefresh,
				restartPolling: options.restartPolling,
			});

			if (!response.ok) {
				if (isUserVisibleRefresh) {
					setErrorMessage(`${response.error.code}: ${response.error.message}`);
				}
				return;
			}

			const addedIds = previous
				? getAddedDetectionIds(previous.results, response.value.results)
				: [];
			setAnalysis(response.value);
			if (addedIds.length) {
				setLateAddedIds((current) => mergeUniqueIds(current, addedIds));
				setNotice({
					variant: 'success',
					text: `Polling found ${addedIds.length} new late detection${addedIds.length === 1 ? '' : 's'} on ${response.value.hostname}.`,
				});
			} else if (options.source === 'manual') {
				setNotice({
					variant: 'success',
					text: `Refreshed ${response.value.results.length} technologies for ${response.value.hostname}. Polling is active again.`,
				});
			}

			if (options.restartPolling) {
				setPollingMode('active');
				startPopupPolling();
			}

			await refreshStatus();
		} catch (error) {
			if (isUserVisibleRefresh) {
				setErrorMessage(normalizeError(error));
			}
		} finally {
			if (isUserVisibleRefresh) {
				setBusy(false);
			}
			refreshInFlight = false;
		}
	}

	async function stopPolling() {
		setBusy(true);
		setErrorMessage('');
		setNotice(null);
		try {
			const response = await backgroundApi.stopActiveTabPolling();
			if (!response.ok) {
				setErrorMessage(`${response.error.code}: ${response.error.message}`);
				return;
			}

			clearPopupPolling();
			setPollingMode('stopped');
			setNotice({
				variant: 'warning',
				text: 'Polling stopped. Existing detections stay visible, but late-loaded page signals will not be captured until refresh restarts polling.',
			});
		} catch (error) {
			setErrorMessage(normalizeError(error));
		} finally {
			setBusy(false);
		}
	}

	async function refreshAndRestartPolling() {
		await loadLatestAnalysis({
			forceRefresh: true,
			restartPolling: true,
			resetLateMarkers: true,
			source: 'manual',
		});
	}

	onMount(() => {
		void (async () => {
			await refreshStatus();
			await syncPollingState();
			await loadLatestAnalysis({ forceRefresh: true, source: 'initial' });
		})();
	});

	onCleanup(() => {
		clearPopupPolling();
	});

	return (
		<main class="popup-shell">
			<section class="hero-panel">
				<div class="hero-copy">
					<p class="eyebrow">Technology Detection</p>
					<h1>RED Detector</h1>
					<p class="lede">
						Analyze the active tab locally, then keep the latest normalized detections up to date as the page lazy-loads.
					</p>
				</div>

				<div class="button-row">
					<button class="primary-button" disabled={busy()} onClick={() => void refreshAndRestartPolling()}>
						{busy() ? 'Refreshing...' : 'Refresh'}
					</button>
					<button class="secondary-button" disabled={busy() || pollingMode() !== 'active'} onClick={() => void stopPolling()}>
						Stop polling
					</button>
				</div>

				<div class="stats-grid">
					<article class="stat-card accent-moss">
						<span class="stat-label">Cached Analyses</span>
						<strong class="stat-value">{status.totalAnalyses}</strong>
					</article>
					<article class="stat-card accent-amber">
						<span class="stat-label">Tracked Origins</span>
						<strong class="stat-value">{status.trackedOrigins}</strong>
					</article>
					<article class="stat-card accent-slate">
						<span class="stat-label">Detected Technologies</span>
						<strong class="stat-value">{resultCount()}</strong>
					</article>
				</div>

				<div class="mini-metrics">
					<p>Source: {analysis()?.source ?? 'none'}</p>
					<p>Host: {analysis()?.hostname ?? 'not analyzed'}</p>
					<p>Polling: {pollingChipLabel().toLowerCase()}</p>
				</div>
			</section>

			<Show when={errorMessage()}>
				{(value) => <ErrorState message={value()} />}
			</Show>
			<Show when={notice()}>
				{(value) => <p class={`status-message ${value().variant}`}>{value().text}</p>}
			</Show>

			<section class="panel result-panel">
				<div class="panel-heading">
					<div>
						<p class="panel-kicker">Normalized Results</p>
						<h2>Latest Site Analysis</h2>
					</div>
					<Show when={analysis()}>
						{(value) => <span class="mode-chip">{value().source}</span>}
					</Show>
				</div>
				<p class="result-meta">
					{hasLateDetections()
						? `${lateAddedIds().length} detection${lateAddedIds().length === 1 ? '' : 's'} arrived after the popup opened and are marked below.`
						: pollingMode() === 'active'
							? 'Showing the latest snapshot. Late detections will appear here automatically while polling is active.'
							: 'Showing the latest snapshot from the page. Refresh to resume polling for future late detections.'}
				</p>

				<Show
					when={analysis()}
					fallback={<EmptyState message="Opening the popup loads the latest detections automatically." />}
				>
					{(value) => (
						<Show
							when={value().results.length}
							fallback={<EmptyState message="No technologies detected yet." />}
						>
							<For each={groupedResults()}>
								{(group) => (
									<CategoryGroup
										label={group.label}
										results={group.results}
										newDetectionIds={lateAddedIds()}
									/>
								)}
							</For>
						</Show>
					)}
				</Show>
			</section>
		</main>
	);
}
