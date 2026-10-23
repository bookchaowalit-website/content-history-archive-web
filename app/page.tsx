"use client";

import { useState } from "react";
import { eras, findEra, stopNumber } from "@/lib/archive";

export default function Home() {
  const [eraId, setEraId] = useState("river");
  const era = findEra(eraId);
  return <main className="archive-page" style={{ "--era": era.color } as React.CSSProperties}><div className="archive-shell">
    <header className="archive-header"><div className="archive-brand"><span className="archive-mark">AR</span><span>ARCHIVE / RIBBON</span></div><span>READING ROOM 04</span><span className="archive-status">SYNTHETIC RECORD</span></header>
    <section className="archive-hero"><div><p className="archive-kicker">a thread is not a verdict</p><h1>Follow the<br /><em>small signal.</em></h1><p className="archive-deck">A museum-label timeline for opening one object at a time and carrying one better question forward.</p></div><div className="archive-date"><span>SELECTED ENTRY</span><strong>{era.date}</strong><small>{era.place}</small></div></section>
    <section className="archive-map"><div className="timeline-label"><span>THE THREAD</span><span>{eras.length} OBJECTS</span></div><div className="timeline">{eras.map((item, index) => <button key={item.id} type="button" className={item.id === era.id ? "timeline-stop is-active" : "timeline-stop"} onClick={() => setEraId(item.id)}><i /><span>{stopNumber(index)}</span><strong>{item.date}</strong><small>{item.object}</small></button>)}</div></section>
    <section className="archive-card"><div className="card-object"><span>OBJECT / {era.date}</span><div className="artifact-shape"><i /><i /><i /></div><small>{era.object}</small></div><div className="card-copy"><p className="archive-kicker">CURRENT LABEL / {era.place}</p><h2>{era.title}</h2><p>{era.note}</p><blockquote>{era.question}</blockquote><p className="archive-disclaimer">Study entry is synthetic. Open the question, then check the source.</p></div></section>
    <footer className="archive-footer"><span>BOOKCHAOWALIT / ARCHIVE RIBBON</span><span>EDITORIAL STUDY · NOT AN AUTHORITATIVE HISTORY</span></footer>
  </div></main>;
}
