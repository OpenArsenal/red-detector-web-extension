export function getOrigin(url: string): string {
	return new URL(url).origin;
}

export function tryGetOrigin(url: string): string | null {
	try {
		return getOrigin(url);
	} catch {
		return null;
	}
}
