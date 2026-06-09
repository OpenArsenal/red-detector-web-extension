export function extractVersion(
	template: string | undefined,
	match: RegExpMatchArray,
): string | undefined {
	if (!template) {
		return undefined;
	}

	const version = template.replace(/\$(\d+)/g, (_, index: string) => match[Number(index)] ?? '');
	return version.trim() || undefined;
}
