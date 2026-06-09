import { defineProxy } from 'comctx';
import { createSignal, For, Show, onMount } from 'solid-js';
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

export default function App() {
	const [status, setStatus] = createStore<AnalysisStatus>({
		totalAnalyses: 0,
		trackedOrigins: 0,
	});
	const [busy, setBusy] = createSignal(false);
	const [message, setMessage] = createSignal('');
	const [errorMessage, setErrorMessage] = createSignal('');
	const [analysis, setAnalysis] = createSignal<SiteAnalysis | null>(null);

	function resultCount() {
		return analysis()?.results.length ?? 0;
	}

	function groupedResults() {
		return groupByCategory(analysis()?.results ?? []);
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

	async function runAnalysis(forceRefresh = false) {
		setBusy(true);
		setMessage('');
		setErrorMessage('');

		try {
			const response = await backgroundApi.analyzeActiveTab({ forceRefresh });
			if (!response.ok) {
				setErrorMessage(`${response.error.code}: ${response.error.message}`);
				return;
			}

			setAnalysis(response.value);
			setMessage(
				`Detected ${response.value.results.length} technologies for ${response.value.hostname}`,
			);
			await refreshStatus();
		} catch (error) {
			setErrorMessage(normalizeError(error));
		} finally {
			setBusy(false);
		}
	}

	onMount(() => {
		void refreshStatus();
	});

	return (
		<main class="popup-shell">
			<section class="hero-panel">
				<div class="hero-copy">
					<p class="eyebrow">Technology Detection</p>
					<h1>RED Detector</h1>
					<p class="lede">
						Analyze the active tab locally and cache only normalized technology results.
					</p>
				</div>

				<div class="button-row">
					<button class="primary-button" disabled={busy()} onClick={() => void runAnalysis(false)}>
						{busy() ? 'Analyzing...' : 'Analyze Active Tab'}
					</button>
					<button class="secondary-button" disabled={busy()} onClick={() => void runAnalysis(true)}>
						Refresh
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
				</div>
			</section>

			<Show when={errorMessage()}>
				{(value) => <ErrorState message={value()} />}
			</Show>
			<Show when={message()}>
				{(value) => <p class="status-message success">{value()}</p>}
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

				<Show
					when={analysis()}
					fallback={<EmptyState message="Run analysis to view detected technologies here." />}
				>
					{(value) => (
						<Show
							when={value().results.length}
							fallback={<EmptyState message="No technologies detected yet." />}
						>
							<For each={groupedResults()}>
								{(group) => <CategoryGroup label={group.label} results={group.results} />}
							</For>
						</Show>
					)}
				</Show>
			</section>
		</main>
	);
}
