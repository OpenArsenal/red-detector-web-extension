import { For, Show } from 'solid-js';

import type { DetectionResult } from '../lib/detection/types';
import type { PopupDetectionExplanationSummary } from '../lib/popup/view-model';

export function TechnologyCard(props: {
	/** Detection result rendered by this card. */
	result: DetectionResult;
	/** Whether this detection appeared after the popup opened. */
	isNew?: boolean;
	/** Whether this card represents a live pending observation state. */
	isPending?: boolean;
	/** Optional explanation summary derived from the replay sidecar. */
	explanation?: PopupDetectionExplanationSummary;
}) {
	return (
		<article
			class={`stat-card accent-slate technology-card${props.isNew ? ' is-new' : ''}${props.isPending ? ' is-pending' : ''}`}
		>
			<div class="technology-card-header">
				<span class="stat-label">{props.result.categories[0] ?? 'unknown'}</span>
				<Show when={props.isPending || props.isNew}>
					<span class={`detection-badge${props.isPending ? ' detection-badge-pending' : ''}`}>
						{props.isPending ? 'Live' : 'New'}
					</span>
				</Show>
			</div>
			<strong class="stat-value">{props.result.name}</strong>
			<Show when={props.result.description}>
				{(description) => <p>{description()}</p>}
			</Show>
			<Show when={props.result.version}>
				{(version) => <p>Version: {version()}</p>}
			</Show>
			<Show when={props.explanation}>
				{(explanation) => (
					<section
						class="explanation-summary"
						aria-label={`Why ${props.result.name} was detected`}
					>
						<p class="result-meta">
							{explanation().headline}
							{explanation().primaryEvidenceKind ? ` Primary signal: ${explanation().primaryEvidenceKind}.` : ''}
						</p>
						<ul class="evidence-list">
							<For each={explanation().reasons}>
								{(reason) => <li>{reason}</li>}
							</For>
						</ul>
					</section>
				)}
			</Show>
			<Show when={props.result.evidence.length && !props.explanation}>
				<p class="result-meta">Evidence: {props.result.evidence.length} signal(s)</p>
				<ul class="evidence-list">
					<For each={props.result.evidence.slice(0, 3)}>
						{(item) => (
							<li>
								{item.kind}
								{item.matchedValue ? ` · ${item.matchedValue}` : ''}
							</li>
						)}
					</For>
				</ul>
			</Show>
		</article>
	);
}

export default TechnologyCard;
