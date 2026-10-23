# Archive Ribbon — Product truth

> Inferred from the code and copy (no user interview). Checked against the portfolio card claims review
> (`portfolio-site-web/docs/audits/CARD-CLAIMS-REVIEW-2026-10.md`, row `history-timeline`, evidence Prototype:
> "copy is accurate") on 2026-10-23.

## Product surface

Archive Ribbon is a museum-label timeline for comparing historical eras, key objects, and the questions a visitor can carry forward.

## Primary user

A curious reader exploring a broad historical period without needing a textbook interface.

## Product promise

Give a historical thread enough context to make the next object worth opening.

## Boundaries

- Use synthetic study entries and dates.
- Do not present the timeline as an authoritative academic source.
- The demo is an editorial interface study.

## Design mode

read

## Interaction contract

- Selecting an era changes the object label, context, and timeline position.
- The archive card keeps the synthetic-data disclaimer visible.

## What works today

1. Four synthetic entries on one thread; selecting a stop changes the date, object, label, note and question.
2. The synthetic-record notices stay visible ("SYNTHETIC RECORD", "Study entry is synthetic").
3. Front-end and server errors go to Sentry (errors only, personal data stripped) when `NEXT_PUBLIC_SENTRY_DSN` is set.

## What does not work (and must not be claimed)

- No real records, sources, search or data source; not an academic reference. No API route, storage or analytics.

## Live URL and deploy state

- Live: https://history.bookchaowalit.com (HTTP 200 on 2026-10-23).
- The Vercel project `bookchaowalit-history-archive-frontend` is linked to this repository
  (`bookchaowalit-website/content-history-archive-web`, branch `main`), so every push to `main` deploys to
  production. The Next 16.4.2 security patch (8712fac) deployed by Git on 2026-10-23.
- `NEXT_PUBLIC_SENTRY_DSN` is set on the Vercel project (Sentry project `content-history-archive-web`, org
  `personal-yu0`).
