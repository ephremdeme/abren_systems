// Hustle Street's store links: the one place to change them.
//
// A badge links to its store only when `live` is true AND `url` is set. Otherwise it shows greyed
// out with "Coming soon" and is not a link, and that store gets no QR code.
//
// To go live on a store: set its `live` to true (and, for the App Store, paste the URL first).
// The App Store ID for the `apple-itunes-app` banner is read from the URL's `id…` part.

export const GOOGLE_PLAY = {
  url: 'https://play.google.com/store/apps/details?id=com.abrensystems.hustlestreet',
  // The listing returned 404 on 16 Nov 2026 (not published yet).
  live: false,
};

export const APP_STORE = {
  // e.g. 'https://apps.apple.com/app/hustle-street/id1234567890' — the founder adds this.
  url: '',
  live: false,
};

export type Store = 'app-store' | 'google-play';

export function storeUrl(store: Store): string | null {
  const s = store === 'app-store' ? APP_STORE : GOOGLE_PLAY;
  return s.live && s.url ? s.url : null;
}

/** The numeric App Store ID, once the App Store link is live; null before. */
export function appStoreId(): string | null {
  const url = storeUrl('app-store');
  return url?.match(/\/id(\d+)/)?.[1] ?? null;
}
