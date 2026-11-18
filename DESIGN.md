# Design

Since 2026-11-19 Archive Ribbon uses the shared Reader shell (see `READER.md`): Geist via `next/font`,
the `--rs-*` tokens in `app/reader-shell.css` (light and dark, WCAG 2.2 AA), one h1 per page, 44px
targets, a 3px focus ring in one colour and a forced-colors fallback. The museum-label look (era colours
used for 10–11px text at 1.8–3.9:1, Courier labels, a client-only page, timeline stops that shrank on
phones) is retired; `lib/archive.ts` keeps the era colours as data only.

- `/` — eyebrow, h1 and a lede that says the entries are synthetic; the thread as four rows (date and
  object, title, the question), oldest first.
- `/entries/<id>` — the label (date, place, object), the note, the question as a quote, the synthetic
  notice, and earlier / later along the thread. Everything renders on the server.
