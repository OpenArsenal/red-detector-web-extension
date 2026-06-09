export function getOrigin(url: string): string {
	return new URL(url).origin;
}
