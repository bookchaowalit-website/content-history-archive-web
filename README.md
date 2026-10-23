# Archive Ribbon — History Timeline

A client-only museum-label timeline over four hard-coded, synthetic study entries (a clay tally, a road milestone,
a printer's proof, a radio transcript). Pick a stop on the thread to open its label, note and question; the ribbon
colour follows the entry.

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
