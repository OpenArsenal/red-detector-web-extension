export type ErrorCode =
	| 'VALIDATION_ERROR'
	| 'SOURCE_UNSUPPORTED'
	| 'PAYLOAD_TOO_LARGE'
	| 'PERMISSION_REQUIRED'
	| 'BROWSER_UNSUPPORTED'
	| 'TAB_NOT_FOUND'
	| 'CONTENT_UNAVAILABLE'
	| 'INTERNAL_ERROR';

export type AppError = {
	ok: false;
	code: ErrorCode;
	message: string;
	stack?: string;
};

export function errorResponse(code: ErrorCode, message: string, stack?: string): AppError {
	return { ok: false, code, message, stack };
}
