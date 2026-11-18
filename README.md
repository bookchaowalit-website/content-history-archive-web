# Archive Ribbon — History Timeline

A museum-label timeline over four hard-coded, synthetic study entries (a clay tally, a road milestone, a printer's
proof, a radio transcript), on the shared Reader shell (see `READER.md`). The home page lists the thread; each entry
has its own server-rendered page (`/entries/<id>`) with its label, note, question and earlier / later links.

Live: https://history.bookchaowalit.com (Vercel builds every push to `main`, see `PRODUCT.md`).

## What it does not do

- No real historical data, sources, search, filters or API. The dates and places are illustrative, not
  authoritative history.
- No account or storage.

## Run

```bash
npm ci
npm run dev
```

## Checks

```bash
npm test           # Vitest: entry data and helpers, home page render, Sentry scrubbing
npm run lint
npm run typecheck
npm run build
```

CI (`.github/workflows/ci.yml`) runs the shared Node workflow (with a line-coverage gate) and the shared security
scan on every push and PR to `main`.

## Code map

- `lib/archive.ts`: the four entries plus `findEra` and `stopNumber` (used by the page).
- `app/page.tsx`: the timeline page (client component).
- `lib/sentry.ts` + `instrumentation*.ts`: error reporting to Sentry, errors only, personal data stripped; off when
  `NEXT_PUBLIC_SENTRY_DSN` is unset.
