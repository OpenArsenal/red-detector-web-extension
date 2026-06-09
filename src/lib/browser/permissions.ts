import { browser } from 'wxt/browser';

export async function hasHostPermission(url: string): Promise<boolean> {
	return browser.permissions.contains({ origins: [new URL(url).origin + '/*'] });
}
