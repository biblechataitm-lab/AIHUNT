import type { Ad, GetAdOptions } from './types';
import { VISITOR_COOKIE } from './types';
import { request, mockMode, readEnv } from './client';

/**
 * Requests one ad, server-side.
 *
 * 1. Never throws (returns null on failure).
 * 2. Never cached (no-store per-request).
 * 3. Secret keys never reach the browser.
 */
export async function getAd(options: GetAdOptions): Promise<Ad | null> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return null;
    const base = process.env.PEERLIST_ADS_URL?.replace(/\/$/, '') ?? 'https://peerlist.io';
    return {
      title: 'Anthropic Claude',
      description: 'The frontier AI assistant and API built for precision, coding, and safety.',
      imageUrl: null,
      clickUrl: 'https://claude.ai',
      sponsoredLabel: 'Featured Sponsor',
      token: 'mock-token',
      eventsUrl: `${base}/api/v1/events`,
    };
  }

  const env = readEnv('getAd');
  if (!env) return null;

  const visitorId = options.visitorId === undefined ? await readVisitorCookie() : options.visitorId;

  const data = await request<{ ad: Omit<Ad, 'token' | 'eventsUrl'> | null; token?: string }>(
    '/api/v1/serve',
    {
      slot: options.slot,
      v: visitorId ?? undefined,
      url: options.url,
    },
    options.timeoutMs,
    'getAd',
  );

  if (!data?.ad || !data.token) return null;

  return { ...data.ad, token: data.token, eventsUrl: `${env.base}/api/v1/events` };
}

/**
 * Reads the visitor id from first-party cookie on the server.
 */
async function readVisitorCookie(): Promise<string | null> {
  try {
    const { cookies } = await import('next/headers');
    const store = await cookies();
    return store.get(VISITOR_COOKIE)?.value ?? null;
  } catch {
    return null;
  }
}
