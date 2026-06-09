import { defineProxy } from 'comctx';

import { collectPageSources } from '../lib/detection/engine';
import { validateExtractedPayload } from '../lib/detection/validate';
import type { ContentApi } from '../lib/messaging';
import { CONTENT_RPC_NAMESPACE, createContentServerAdapter } from '../lib/messaging';
import { errorResponse } from '../lib/shared/errors';
import { ok } from '../lib/shared/result';

function collectPayload(mode: 'safe' | 'aggressive') {
	const payload = collectPageSources(mode);
	const validationError = validateExtractedPayload(payload);

	if (validationError) {
		return errorResponse('PAYLOAD_TOO_LARGE', validationError);
	}

	return ok(payload);
}

function createContentApi(): ContentApi {
	return {
		async collectPagePayload(input) {
			return collectPayload(input.mode);
		},
	};
}

const [provideContentApi] = defineProxy((createApi: () => ContentApi) => createApi(), {
	namespace: CONTENT_RPC_NAMESPACE,
	heartbeatCheck: false,
	transfer: false,
});

export default defineContentScript({
	matches: ['<all_urls>'],
	runAt: 'document_idle',
	main() {
		provideContentApi(createContentServerAdapter(), createContentApi);
	},
});
