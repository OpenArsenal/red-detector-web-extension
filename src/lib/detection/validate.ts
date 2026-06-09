import type { ExtractedPagePayload } from './types';
import { estimateBytes } from './normalizers';
import { SOURCE_LIMITS } from './rules';

const MAX_PAYLOAD_BYTES = 1024 * 1024;

export function validateExtractedPayload(payload: ExtractedPagePayload): string | null {
  if (!payload.url || !payload.url.startsWith('http')) {
    return 'Invalid URL in extraction payload';
  }

  if (payload.text && payload.text.length > SOURCE_LIMITS.textChars) {
    return 'Text payload exceeded safe size bounds';
  }

  if (payload.html && payload.html.length > SOURCE_LIMITS.htmlChars) {
    return 'HTML payload exceeded safe size bounds';
  }

  if (payload.inlineScripts && payload.inlineScripts.length > SOURCE_LIMITS.inlineScripts) {
    return 'Too many inline scripts in payload';
  }

  if (payload.scriptSrc.length > SOURCE_LIMITS.scriptSrc) {
    return 'Too many script source entries';
  }

  if (payload.cookies && Object.keys(payload.cookies).length > 200) {
    return 'Cookie payload exceeded safe size bounds';
  }

  if (payload.robots && payload.robots.disallow.length > 2_000) {
    return 'robots.txt disallow payload exceeded safe size bounds';
  }

  if (estimateBytes(payload) > MAX_PAYLOAD_BYTES) {
    return 'Payload exceeds maximum transport size';
  }

  return null;
}