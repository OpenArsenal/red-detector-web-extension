import type { AppError } from './errors';

export type ApiSuccess<T> = {
	ok: true;
	value: T;
};

export type ApiResult<T> = ApiSuccess<T> | AppError;

export function ok<T>(value: T): ApiSuccess<T> {
	return { ok: true, value };
}
