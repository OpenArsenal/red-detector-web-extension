import type { ExtractionRecord, ExtractionStatus } from '../detection/types';
import { STORAGE_LIMITS, RECORDS_KEY } from './contracts';

function applyRetentionPolicy(records: ExtractionRecord[]): ExtractionRecord[] {
	const sorted = records.sort((a, b) => b.createdAt - a.createdAt);

	const next: ExtractionRecord[] = [];
	let totalBytes = 0;
	const now = Date.now();

	for (const record of sorted) {
		if (record.expiresAt <= now) {
			continue;
		}

		if (next.length >= STORAGE_LIMITS.maxRecords) {
			continue;
		}

		if (totalBytes + record.sizeBytes > STORAGE_LIMITS.maxBytes) {
			continue;
		}

		next.push(record);
		totalBytes += record.sizeBytes;
	}

	return next;
}

async function readRecords(): Promise<ExtractionRecord[]> {
	const raw = await browser.storage.local.get(RECORDS_KEY);
	return (raw[RECORDS_KEY] as ExtractionRecord[] | undefined) ?? [];
}

async function writeRecords(records: ExtractionRecord[]): Promise<void> {
	await browser.storage.local.set({ [RECORDS_KEY]: records });
}

export async function getRecords(): Promise<ExtractionRecord[]> {
	return applyRetentionPolicy(await readRecords());
}

export async function saveRecord(record: ExtractionRecord): Promise<ExtractionRecord> {
	const records = await readRecords();
	const next = applyRetentionPolicy([...records, record]);
	await writeRecords(next);
	return record;
}

export async function getStatus(): Promise<ExtractionStatus> {
	const records = await getRecords();
	const byOrigin: Record<string, number> = {};
	let totalBytes = 0;
	let lastRecordAt = 0;

	for (const record of records) {
		byOrigin[record.origin] = (byOrigin[record.origin] ?? 0) + 1;
		totalBytes += record.sizeBytes;
		lastRecordAt = Math.max(lastRecordAt, record.createdAt);
	}

	return {
		totalRecords: records.length,
		totalBytes,
		byOrigin,
		lastRecordAt: lastRecordAt || undefined,
	};
}
