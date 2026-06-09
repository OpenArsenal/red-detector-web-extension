import { For, Show } from 'solid-js';

import type { DetectionResult } from '../lib/detection/types';

export function TechnologyCard(props: { result: DetectionResult }) {
	return (
		<article class="stat-card accent-slate">
			<span class="stat-label">{props.result.categories[0] ?? 'unknown'}</span>
			<strong class="stat-value">{props.result.name}</strong>
			<Show when={props.result.description}>
				{(description) => <p>{description()}</p>}
			</Show>
			<p>
				Confidence: {props.result.confidence.value}%
				{props.result.version ? ` · v${props.result.version}` : ''}
			</p>
			<Show when={props.result.evidence.length}>
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
