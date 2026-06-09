import { describe, expect, it } from 'vitest';

import {
	BACKGROUND_RPC_CHANNEL,
	BACKGROUND_RPC_NAMESPACE,
} from '../../lib/messaging/adapters/background';
import { CONTENT_RPC_CHANNEL, CONTENT_RPC_NAMESPACE } from '../../lib/messaging/adapters/content';
import { errorResponse, ok } from '../../lib/shared/result';

describe('messaging contract helpers', () => {
	it('returns stable success envelopes', () => {
		expect(ok({ value: 42 })).toEqual({ ok: true, value: { value: 42 } });
	});

	it('returns stable error envelopes', () => {
		expect(errorResponse('CONTENT_SCRIPT_UNAVAILABLE', 'Missing')).toEqual({
			ok: false,
			error: {
				code: 'CONTENT_SCRIPT_UNAVAILABLE',
				message: 'Missing',
				stack: undefined,
			},
		});
	});

	it('uses stable namespaces and channels', () => {
		expect(BACKGROUND_RPC_NAMESPACE).toContain('background-rpc');
		expect(BACKGROUND_RPC_CHANNEL).toBe('background-rpc');
		expect(CONTENT_RPC_NAMESPACE).toContain('content-rpc');
		expect(CONTENT_RPC_CHANNEL).toBe('content-rpc');
	});
});
