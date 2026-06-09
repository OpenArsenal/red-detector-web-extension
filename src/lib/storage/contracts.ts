export const RECORDS_KEY = 'extractor.records.v1';

export const STORAGE_LIMITS = {
  maxRecords: 200,
  maxBytes: 5 * 1024 * 1024,
  rawRecordTtlMs: 1000 * 60 * 60 * 24,
} as const;