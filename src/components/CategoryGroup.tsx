import { For } from 'solid-js';

import type { DetectionResult } from '../lib/detection/types';
import { TechnologyCard } from './TechnologyCard';

export function CategoryGroup(props: {
	label: string;
	results: DetectionResult[];
	newDetectionIds?: string[];
	pendingResults?: boolean;
}) {
	return (
		<section class="category-group">
			<h3>{props.label}</h3>
			<div class="stats-grid">
				<For each={props.results}>
					{(result) => (
						<TechnologyCard
							result={result}
							isNew={props.newDetectionIds?.includes(result.technologyId)}
							isPending={props.pendingResults}
						/>
					)}
				</For>
			</div>
		</section>
	);
}

export default CategoryGroup;
