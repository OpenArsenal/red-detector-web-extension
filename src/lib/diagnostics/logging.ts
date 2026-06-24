import {
	configureSync,
	getConsoleSink,
	getLogger,
	getThrottlingFilter,
	type LogLevel,
} from '@logtape/logtape';

/** Root category shared by every extension runtime and shared library module. */
export const RED_DETECTOR_LOG_CATEGORY = ['red-detector'] as const;

/** Runtime surface that owns LogTape configuration for one execution context. */
export type RedDetectorLogSurface = 'background' | 'content' | 'popup' | 'benchmark' | 'offscreen-worker';

/** Category suffixes used below the shared `red-detector` root category. */
export type RedDetectorLogCategory = readonly string[];

const LOGTAPE_CONFIGURED_KEY = '__redDetectorLogTapeConfiguredV1';
const DEFAULT_LOWEST_LEVEL: LogLevel = 'debug';
const META_LOWEST_LEVEL: LogLevel = 'warning';
const BURST_LOG_LIMIT = 80;
const BURST_LOG_WINDOW_MS = 1_000;

/**
 * Configure LogTape once for the current extension runtime.
 *
 * Browser extension entrypoints run in separate JavaScript worlds. The popup,
 * background service worker, and content script each need their own LogTape
 * configuration because global state is not shared across those contexts. A
 * small global guard prevents duplicate configuration when WXT reinjects or hot
 * reloads an entrypoint during development.
 */
export function configureRedDetectorLogging(surface: RedDetectorLogSurface): void {
	const runtime = globalThis as typeof globalThis & Record<string, boolean | undefined>;
	if (runtime[LOGTAPE_CONFIGURED_KEY]) {
		return;
	}

	configureSync({
		sinks: {
			console: getConsoleSink(),
		},
		filters: {
			redDetectorBurstThrottle: getThrottlingFilter({
				limit: BURST_LOG_LIMIT,
				windowMs: BURST_LOG_WINDOW_MS,
			}),
		},
		loggers: [
			{
				category: [...RED_DETECTOR_LOG_CATEGORY],
				lowestLevel: DEFAULT_LOWEST_LEVEL,
				sinks: ['console'],
				filters: ['redDetectorBurstThrottle'],
			},
			{
				category: ['logtape', 'meta'],
				lowestLevel: META_LOWEST_LEVEL,
				sinks: ['console'],
			},
		],
	});

	runtime[LOGTAPE_CONFIGURED_KEY] = true;
	getRedDetectorLogger(surface, 'logging').debug('Configured Red Detector logging for {surface}.', { surface });
}

/** Create a logger under the shared Red Detector category tree. */
export function getRedDetectorLogger(...category: RedDetectorLogCategory): ReturnType<typeof getLogger> {
	return getLogger([...RED_DETECTOR_LOG_CATEGORY, ...category]);
}
