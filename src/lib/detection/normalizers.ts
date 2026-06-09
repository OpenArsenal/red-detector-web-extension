import { SOURCE_LIMITS } from './rules';

export function uniqueStrings(values: string[]): string[] {
	return Array.from(new Set(values.filter(Boolean)));
}

export function truncate(value: string, maxChars: number): string {
	if (value.length <= maxChars) {
		return value;
	}

	return value.slice(0, maxChars);
}

export function normalizeMetaMap(meta: Record<string, string[]>): Record<string, string[]> {
	const entries = Object.entries(meta).map(([key, values]) => {
		const normalizedValues = uniqueStrings(
			values.map((value) => truncate((value ?? '').trim(), SOURCE_LIMITS.inlineScriptChars)),
		).slice(0, SOURCE_LIMITS.metaValuesPerKey);

		return [key.toLowerCase(), normalizedValues] as const;
	});

	return Object.fromEntries(entries);
}

export function estimateBytes(value: unknown): number {
	return new TextEncoder().encode(JSON.stringify(value)).length;
}
