# abrensystems.com

The one-page company site for Abren Systems LLC. It is a static Astro build with
no client-side JavaScript, deployed to Cloudflare Pages.

## Commands

| Command           | Does                                              |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Local dev server at `localhost:4321`.             |
| `npm run build`   | Static build into `dist/`.                        |
| `npm run preview` | Build, then serve `dist/` through Wrangler Pages. |
| `npm run deploy`  | Build, then direct-upload `dist/` to Pages.       |

## Structure

- `src/styles/global.css` — tokens, base, shared type roles, the shared `.ledger`.
- `src/layouts/Layout.astro` — document shell: head, meta, fonts, `.page` wrapper.
- `src/components/` — `Header`, `Hero`, `Product`, `Standards`, `Security`, `Company`, `Footer`.
- `src/pages/index.astro` — the page: header, the five sections, footer.
- `src/pages/404.astro` — not-found page, same header and footer.
- `public/_headers` — Cloudflare Pages response headers (CSP, HSTS, cache).
- `public/robots.txt`, `.node-version` — crawl policy and the build's Node version.

Shared CSS lives in `global.css`; anything used by a single section lives in that
component's scoped `<style>`.

## Deploy

Cloudflare Pages, connected to the GitHub repo:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: taken from `.node-version`

Or push a build straight from a workstation with `npm run deploy`.

### Keep these Cloudflare features OFF for this site

- **Email Address Obfuscation** (Scrape Shield) — it rewrites the three `mailto:`
  links and injects a script. The CSP blocks that script, and it breaks the
  site's no-JavaScript guarantee.
- **Web Analytics auto-injection** — same reason: injected script.
- **Rocket Loader** — same reason: injected script.

## Maintenance

- `factsAsOf` in `src/components/Security.astro` is the "Current as of" month. It
  is evidence about the four security statements in that file — update it by
  hand when one of those facts changes, never from the build date.
- Copy is frozen by the design brief. Text changes go through design, not code.
- Accent (`--abren-accent`) budget: the 03 standards marker, the standards stamp,
  the `→` arrows, link hover, the focus ring, the `+`/`−` on the address toggle,
  and the underline under `security@`. Nothing else.

## Fonts

IBM Plex Sans and IBM Plex Mono, under the SIL Open Font License. The files in
`src/assets/fonts/` are IBM's official split subsets, unmodified; the licence is
at `src/assets/fonts/LICENSE.txt`. Astro's Fonts API self-hosts them and emits
size-adjusted fallbacks.
