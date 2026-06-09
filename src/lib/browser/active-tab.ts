import { browser } from 'wxt/browser';

export async function getActiveTab() {
	const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
	return tab;
}

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
