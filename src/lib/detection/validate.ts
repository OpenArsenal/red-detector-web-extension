import type { PageSignals } from './types';
import { estimateBytes } from './normalizers';
import { SOURCE_LIMITS } from './rules';

const MAX_SIGNAL_BYTES = 1024 * 1024;

/**
 * Validate signals before they cross extension boundaries or enter the detector.
 * These checks keep collection bounded and prevent non-web pages from flowing in.
 */
export function validatePageSignals(signals: PageSignals): string | null {
	try {
		const protocol = new URL(signals.url).protocol;
		if (protocol !== 'http:' && protocol !== 'https:') {
			return 'Invalid URL in page signals';
		}
	} catch {
		return 'Invalid URL in page signals';
	}

	if (signals.html.length > SOURCE_LIMITS.htmlChars) {
		return 'HTML signal exceeded safe size bounds';
	}

	if (signals.scripts.length > SOURCE_LIMITS.scriptSrc) {
		return 'Too many script source entries';
	}

	if (signals.stylesheets.length > SOURCE_LIMITS.stylesheetHref) {
		return 'Too many stylesheet link entries';
	}

	if (signals.links.length > SOURCE_LIMITS.linkTags) {
		return 'Too many link tag entries';
	}

	if (signals.resources.length > SOURCE_LIMITS.resourceUrls) {
		return 'Too many resource URL entries';
	}

	if (signals.requests.length > SOURCE_LIMITS.requestUrls) {
		return 'Too many request URL entries';
	}

	if (signals.scriptContents.some((value) => value.length > SOURCE_LIMITS.scriptContentChars)) {
		return 'Script content signal exceeded safe size bounds';
	}

	if (signals.stylesheetContents.some((value) => value.length > SOURCE_LIMITS.stylesheetContentChars)) {
		return 'Stylesheet content signal exceeded safe size bounds';
	}

	const hasOversizedMeta = Object.values(signals.meta).some(
		(values) =>
			values.length > SOURCE_LIMITS.metaValuesPerKey ||
			values.some((value) => value.length > SOURCE_LIMITS.metaValueChars),
	);
	if (hasOversizedMeta) {
		return 'Meta signal exceeded safe size bounds';
	}

	if (Object.keys(signals.cookies).length > SOURCE_LIMITS.cookieNames) {
		return 'Cookie signal exceeded safe size bounds';
	}

	if (!Object.values(signals.cookies).every((value) => value === true)) {
		return 'Cookie signal must contain names only';
	}

	const storageKeyCount =
		Object.keys(signals.storage.localStorage).length + Object.keys(signals.storage.sessionStorage).length;
	if (storageKeyCount > SOURCE_LIMITS.storageKeys * 2) {
		return 'Storage signal exceeded safe size bounds';
	}

	const storageValuesAreNamesOnly = [
		...Object.values(signals.storage.localStorage),
		...Object.values(signals.storage.sessionStorage),
	].every((value) => value === true);
	if (!storageValuesAreNamesOnly) {
		return 'Storage signal must contain keys only';
	}

	if (estimateBytes(signals) > MAX_SIGNAL_BYTES) {
		return 'Signals exceed maximum transport size';
	}

	return null;
}
