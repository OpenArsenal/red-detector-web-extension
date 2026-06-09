import type { RobotsPayload } from '../detection/types';

const REQUEST_TIMEOUT_MS = 5_000;
const MAX_ATTEMPTS = 3;

function parseDisallowRules(text: string): string[] {
  const lines = text.split(/\r?\n/);
  let activeAgent = '';
  const disallow: string[] = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) {
      continue;
    }

    const agentMatch = /^user-agent\s*:\s*(.+)$/i.exec(line);
    if (agentMatch) {
      activeAgent = agentMatch[1].trim().toLowerCase();
      continue;
    }

    const disallowMatch = /^disallow\s*:\s*(.*)$/i.exec(line);
    if (!disallowMatch) {
      continue;
    }

    if (activeAgent === '*' || activeAgent === 'red-detector-web-extension') {
      disallow.push(disallowMatch[1].trim());
    }
  }

  return disallow;
}

async function fetchWithTimeout(url: string, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export async function collectRobotsForUrl(url: string): Promise<RobotsPayload> {
  const origin = new URL(url).origin;
  const sourceUrl = `${origin}/robots.txt`;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetchWithTimeout(sourceUrl, REQUEST_TIMEOUT_MS);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const text = await response.text();
      return {
        status: 'ok',
        disallow: parseDisallowRules(text),
        fetchedAt: Date.now(),
        sourceUrl,
      };
    } catch (error) {
      if (attempt === MAX_ATTEMPTS) {
        const message = error instanceof Error ? error.message : 'robots fetch failed';
        return {
          status: 'error',
          disallow: [],
          fetchedAt: Date.now(),
          sourceUrl,
          errorMessage: message,
        };
      }
    }
  }

  return {
    status: 'error',
    disallow: [],
    fetchedAt: Date.now(),
    sourceUrl,
    errorMessage: 'Unexpected robots collection failure',
  };
}