import { matchIndexedObservationBatch } from '../../lib/detection/observation-matcher-index';
import {
	createPackagedTechnologyRegistryProvider,
	type CompiledTechnologyRegistryArtifact,
} from '../../lib/registry';
import type {
	MatcherPartitionMatch,
	MatcherWorkerResponseMessage,
	MatcherWorkerRunMessage,
} from '../../lib/matcher/contracts';
import type { NormalizedObservationKind } from '../../lib/observations';

/** Worker global with the message contract used by the offscreen host. */
type MatcherWorkerGlobal = typeof globalThis & {
	/** Dedicated workers receive one partition task at a time from the offscreen host. */
	addEventListener: (type: 'message', listener: (event: MessageEvent<MatcherWorkerRunMessage>) => void) => void;
	/** Partition results are sent back to the owning worker slot. */
	postMessage: (message: MatcherWorkerResponseMessage) => void;
	/** Worker-local location used to resolve packaged registry assets. */
	location: Location;
};

const workerScope = globalThis as Partial<MatcherWorkerGlobal>;

/**
 * Worker-local provider keeps shard JSON and compiled indexes hot across tasks.
 *
 * The offscreen host now sends only the partition task. Each worker fetches the
 * observation-kind shard it needs from packaged extension assets, then reuses the
 * compiled index for later tasks with the same kind. This removes the old full
 * registry clone from every worker message and lets different workers match
 * different evidence surfaces in parallel.
 */
const registryProvider = createPackagedTechnologyRegistryProvider({
	resolveUrl(path) {
		const origin = workerScope.location?.origin ?? globalThis.location.origin;
		return new URL(path, `${origin}/`).toString();
	},
});

const shardArtifactByKind = new Map<NormalizedObservationKind, Promise<CompiledTechnologyRegistryArtifact>>();

if (typeof workerScope.addEventListener === 'function') {
	workerScope.addEventListener('message', (event: MessageEvent<MatcherWorkerRunMessage>) => {
		if (event.data.type !== 'matcher-worker.run-partition') {
			return;
		}

		void runPartition(event.data)
			.then((response) => workerScope.postMessage?.(response))
			.catch((error) => {
				const message = error instanceof Error ? error.message : 'Matcher worker partition failed.';
				const response: MatcherWorkerResponseMessage = {
					type: 'matcher-worker.partition-failed',
					jobId: event.data.task.job.jobId,
					partitionId: event.data.task.partitionId,
					message,
				};
				workerScope.postMessage?.(response);
			});
	});
}

async function runPartition(message: MatcherWorkerRunMessage): Promise<MatcherWorkerResponseMessage> {
	const { task } = message;
	const observationIndexes = new Map(task.batch.observations.map((observation, index) => [
		observation,
		task.observationIndexes[index] ?? index,
	]));
	const shardArtifact = await getShardArtifact(task.kind);
	const matched = matchIndexedObservationBatch({
		registry: shardArtifact.technologies,
		batch: task.batch,
		index: shardArtifact.matcherIndex,
		options: task.options,
	});
	const matches: MatcherPartitionMatch[] = matched.matches.map((match, matchIndex) => ({
		observationIndex: observationIndexes.get(match.observation) ?? matchIndex,
		matchIndex,
		match,
	}));

	return {
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
}

function getShardArtifact(kind: NormalizedObservationKind): Promise<CompiledTechnologyRegistryArtifact> {
	const existing = shardArtifactByKind.get(kind);
	if (existing) {
		return existing;
	}

	const artifact = registryProvider.getCompiledObservationKindRegistry(kind);
	shardArtifactByKind.set(kind, artifact);
	return artifact;
}
