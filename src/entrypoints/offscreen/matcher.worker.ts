import { matchIndexedObservationBatch } from '../../lib/detection/observation-matcher-index';
import type {
	MatcherPartitionMatch,
	MatcherWorkerResponseMessage,
	MatcherWorkerRunMessage,
} from '../../lib/matcher/contracts';

/** Worker global with the message contract used by the offscreen host. */
type MatcherWorkerGlobal = typeof globalThis & {
	/** Dedicated workers receive one partition task at a time from the offscreen host. */
	addEventListener: (type: 'message', listener: (event: MessageEvent<MatcherWorkerRunMessage>) => void) => void;
	/** Partition results are sent back to the owning worker slot. */
	postMessage: (message: MatcherWorkerResponseMessage) => void;
};

const workerScope = globalThis as Partial<MatcherWorkerGlobal>;

if (typeof workerScope.addEventListener === 'function') {
	workerScope.addEventListener('message', (event: MessageEvent<MatcherWorkerRunMessage>) => {
		if (event.data.type !== 'matcher-worker.run-partition') {
			return;
		}

		try {
			const { task } = event.data;
			const observationIndexes = new Map(task.batch.observations.map((observation, index) => [
				observation,
				task.observationIndexes[index] ?? index,
			]));
			const matched = matchIndexedObservationBatch({
				registry: event.data.registry,
				batch: task.batch,
				index: event.data.index,
				options: task.options,
			});
			const matches: MatcherPartitionMatch[] = matched.matches.map((match, matchIndex) => ({
				observationIndex: observationIndexes.get(match.observation) ?? matchIndex,
				matchIndex,
				match,
			}));
			const response: MatcherWorkerResponseMessage = {
				type: 'matcher-worker.partition-complete',
				result: {
					job: task.job,
					partitionId: task.partitionId,
					kind: task.kind,
					priority: task.priority,
					observationCount: task.batch.observations.length,
					matches,
					diagnostics: matched.diagnostics,
					completedAt: Date.now(),
				},
			};
			workerScope.postMessage?.(response);
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Matcher worker partition failed.';
			const response: MatcherWorkerResponseMessage = {
				type: 'matcher-worker.partition-failed',
				jobId: event.data.task.job.jobId,
				partitionId: event.data.task.partitionId,
				message,
			};
			workerScope.postMessage?.(response);
		}
	});
}
