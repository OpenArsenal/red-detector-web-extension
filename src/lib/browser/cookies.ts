import { browser } from 'wxt/browser';

export async function collectCookiesForUrl(url: string): Promise<Record<string, string>> {
  const cookies = await browser.cookies?.getAll?.({ url });
  if (!cookies) {
    return {};
  }

  const map: Record<string, string> = {};
  for (const cookie of cookies) {
    map[cookie.name] = cookie.value;
  }

  return map;
}