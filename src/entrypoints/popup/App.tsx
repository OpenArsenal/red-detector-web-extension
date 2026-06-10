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

type ScanPhase = 'idle' | 'quick-scan' | 'settled-scan' | 'complete' | 'partial';

type ScanNotice = {
	variant: 'success' | 'warning';
	text: string;
};

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

export default function App() {
	const [status, setStatus] = createStore<AnalysisStatus>({
		totalAnalyses: 0,
		trackedOrigins: 0,
	});
	const [busy, setBusy] = createSignal(false);
	const [scanPhase, setScanPhase] = createSignal<ScanPhase>('idle');
	const [notice, setNotice] = createSignal<ScanNotice | null>(null);
	const [errorMessage, setErrorMessage] = createSignal('');
	const [analysis, setAnalysis] = createSignal<SiteAnalysis | null>(null);
	const [settledAddedIds, setSettledAddedIds] = createSignal<string[]>([]);

	function resultCount() {
		return analysis()?.results.length ?? 0;
	}

	function groupedResults() {
		return groupByCategory(analysis()?.results ?? []);
	}

	function hasLateDetections() {
		return settledAddedIds().length > 0;
	}

	function settledScanPending() {
		return scanPhase() === 'settled-scan' || scanPhase() === 'partial';
	}

	function scanProgressValue() {
		switch (scanPhase()) {
			case 'quick-scan':
				return 20;
			case 'settled-scan':
				return 68;
			case 'complete':
				return 100;
			case 'partial':
				return 72;
			default:
				return 0;
		}
	}

	function scanSummary() {
		switch (scanPhase()) {
			case 'quick-scan':
				return {
					title: 'Quick scan running',
					description:
						'Checking the active page as it exists right now so you can see an initial detection set fast.',
				};
			case 'settled-scan':
				return {
					title: 'Settled scan watching for late signals',
					description:
						'Waiting for scripts, links, and meta tags that land after initial render, then the list will update automatically.',
				};
			case 'partial':
				return {
					title: 'Quick scan finished',
					description:
						'You still have the initial results. The follow-up settled scan did not complete, so late-loaded signals may be missing.',
				};
			case 'complete':
				return {
					title: 'Settled scan complete',
					description: hasLateDetections()
						? `The follow-up pass added ${settledAddedIds().length} late detection${settledAddedIds().length === 1 ? '' : 's'} to the final list.`
						: 'The follow-up pass confirmed the same detection set after the page settled.',
				};
			default:
				return {
					title: 'Two-step page scan',
					description:
						'Run a quick scan first, then wait for a settled follow-up pass that can catch late scripts, links, and meta tags.',
				};
		}
	}

	function loadingLabel() {
		switch (scanPhase()) {
			case 'quick-scan':
				return 'Reading the page and collecting immediate signals';
			case 'settled-scan':
				return 'Watching for late scripts, links, and meta tags';
			default:
				return 'Scanning the active tab';
		}
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
		setScanPhase('quick-scan');
		setNotice(null);
		setErrorMessage('');
		setSettledAddedIds([]);

		try {
			const instant = await backgroundApi.analyzeActiveTab({
				forceRefresh,
				collectionMode: 'instant',
			});

			if (!instant.ok) {
				setScanPhase('idle');
				setErrorMessage(`${instant.error.code}: ${instant.error.message}`);
				return;
			}

			setAnalysis(instant.value);
			setNotice({
				variant: 'success',
				text: `Quick scan found ${instant.value.results.length} technologies for ${instant.value.hostname}. The settled scan is still watching for late page signals.`,
			});
			setScanPhase('settled-scan');

			const settled = await backgroundApi.analyzeActiveTab({
				forceRefresh: true,
				collectionMode: 'settled',
			});

			if (settled.ok) {
				const addedIds = getAddedDetectionIds(instant.value.results, settled.value.results);
				setAnalysis(settled.value);
				setSettledAddedIds(addedIds);
				setScanPhase('complete');
				setNotice({
					variant: 'success',
					text: addedIds.length
						? `Settled scan added ${addedIds.length} late detection${addedIds.length === 1 ? '' : 's'} and updated the final list for ${settled.value.hostname}.`
						: `Settled scan confirmed ${settled.value.results.length} technologies for ${settled.value.hostname}.`,
				});
				await refreshStatus();
			} else {
				setScanPhase('partial');
				setNotice({
					variant: 'warning',
					text: `Quick scan is available, but the settled scan could not finish: ${settled.error.code}: ${settled.error.message}`,
				});
			}
		} catch (error) {
			setScanPhase('idle');
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

				<section class="scan-progress" aria-live="polite">
					<div class="scan-progress-header">
						<div>
							<p class="panel-kicker">Scan Progress</p>
							<h2>{scanSummary().title}</h2>
						</div>
						<Show when={busy()}>
							<span class="mode-chip mode-chip-live">Live</span>
						</Show>
					</div>
					<p class="result-meta">{scanSummary().description}</p>
					<div class={`scan-meter${busy() ? ' scan-meter-live' : ''}`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={scanProgressValue()} aria-label="Scan progress">
						<div class="scan-meter-fill" style={{ width: `${scanProgressValue()}%` }} />
					</div>
					<div class="scan-meter-labels">
						<span class={scanProgressValue() >= 20 ? 'is-complete' : ''}>Quick scan</span>
						<span class={scanProgressValue() >= 100 ? 'is-complete' : settledScanPending() ? 'is-active' : ''}>Settled scan</span>
					</div>
					<Show when={busy()}>
						<div class="scan-activity" aria-live="polite">
							<div class="scan-activity-orb" aria-hidden="true">
								<span />
								<span />
								<span />
							</div>
							<div class="scan-activity-copy">
								<strong>{loadingLabel()}</strong>
								<p>The detection list stays provisional until the settled scan finishes.</p>
							</div>
						</div>
					</Show>
				</section>
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
				<Show when={scanPhase() === 'settled-scan' || scanPhase() === 'complete' || scanPhase() === 'partial'}>
					<p class="result-meta">
						{scanPhase() === 'settled-scan'
							? 'Showing the quick scan now. The list will refresh if the settled pass finds late-loaded technologies.'
							: hasLateDetections()
								? `${settledAddedIds().length} detection${settledAddedIds().length === 1 ? '' : 's'} arrived during the settled pass and are marked below.`
								: 'The settled pass finished without adding new detections.'}
					</p>
				</Show>

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
								{(group) => (
									<CategoryGroup
										label={group.label}
										results={group.results}
										newDetectionIds={settledAddedIds()}
										pendingResults={settledScanPending()}
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
