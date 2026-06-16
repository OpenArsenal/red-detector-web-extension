import { browser } from 'wxt/browser';

/** Background-only helper for the user-selected tab that initiated analysis. */
export async function getActiveTab() {
	const [tab] = await browser.tabs.query({
		active: true,
		lastFocusedWindow: true,
	});
	
	return tab;
}

/** Keep unsupported browser/internal URLs out of the content-script pipeline. */
export function canInspectTab(tab: { url?: string }): boolean {
	if (!tab.url) {
		return false;
	}

	try {
		const { protocol } = new URL(tab.url);
		return protocol === 'http:' || protocol === 'https:';
	} catch {
		return false;
	}
}
