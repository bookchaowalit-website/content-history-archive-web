import type { ReactNode } from "react";
import { ArticleHeader, EmptyState, EntryList, Pager, Prose, Reader, ReaderFoot, ReaderHead, ReaderTop, neighbours, plural, type Entry, type PagerLink } from "@/components/reader-shell";
import type { Era } from "@/lib/archive";

// Archive Ribbon on the Reader shell: an index of the four study entries and one page each. Server
// components only; the entries are synthetic study labels, and every page says so.

export const SITE = "https://history.bookchaowalit.com";
const SOURCE = "https://github.com/bookchaowalit-website/content-history-archive-web";
const NOTE = "Synthetic study entries: the dates and places are illustrative, not an authoritative history.";

export function ArchiveFrame({ children }: { children: ReactNode }) {
  return (
    <Reader>
      <ReaderTop name="Archive Ribbon" tagline="History study notes" links={[{ href: "/", label: "The thread" }]} />
      <main id="main" className="rs-main">{children}</main>
      <ReaderFoot source={SOURCE} note={NOTE} />
    </Reader>
  );
}

const toEntry = (era: Era): Entry => ({ href: `/entries/${era.id}`, title: era.title, summary: era.question, meta: [era.date, era.object] });

export function ThreadView({ eras }: { eras: Era[] }) {
  return (
    <ArchiveFrame>
      <ReaderHead
        eyebrow="A thread is not a verdict"
        title="Follow the small signal."
        lede="A museum-label timeline: open one object at a time and carry one better question forward. The entries are synthetic study notes, not sourced history."
      />
      {eras.length === 0 ? (
        <EmptyState title="No entries yet">Study entries appear here once they are written.</EmptyState>
      ) : (
        <section aria-labelledby="thread">
          <div className="rs-section-head"><h2 id="thread">The thread</h2></div>
          <p className="rs-count">{plural(eras.length, "object")}, oldest first</p>
          <EntryList headingLevel={3} entries={eras.map(toEntry)} />
        </section>
      )}
    </ArchiveFrame>
  );
}

export function EraView({ era, eras }: { era: Era; eras: Era[] }) {
  const { previous, next } = neighbours(eras, eras.findIndex((e) => e.id === era.id));
  const link = (e: Era | undefined, label: string): PagerLink | undefined => (e ? { href: `/entries/${e.id}`, title: e.title, label } : undefined);
  return (
    <ArchiveFrame>
      <article className="rs-article">
        <ArticleHeader back={{ href: "/", label: "The thread" }} title={era.title} lede={era.note} meta={[era.date, era.place, era.object]} />
        <Prose>
          <h2>The question to carry forward</h2>
          <blockquote><p>{era.question}</p></blockquote>
          <p>This study entry is synthetic. Open the question, then check a real source.</p>
        </Prose>
        <Pager previous={link(previous, "Earlier")} next={link(next, "Later")} label="Along the thread" />
      </article>
    </ArchiveFrame>
  );
}
