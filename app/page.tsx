"use client";

import { useState } from "react";

type Era = { id: string; date: string; title: string; object: string; place: string; note: string; question: string; color: string };
const eras: Era[] = [
  { id: "river", date: "03.2000 BCE", title: "The river keeps score", object: "A clay tally mark", place: "Lower valley / study 01", note: "Before a chronicle, there is a count. A mark turns memory into something that can be compared.", question: "What becomes visible when a life is counted?", color: "#c46b45" },
  { id: "road", date: "08.0120 CE", title: "The road changes shape", object: "A road milestone", place: "Northern route / study 02", note: "An empire is often felt first as distance made legible: a road, a measure, a promise of return.", question: "Who gets to move when a road is made?", color: "#7b9d8c" },
  { id: "press", date: "11.1450 CE", title: "A page travels farther", object: "A printer's proof", place: "Workshop shelf / study 03", note: "Repetition makes an idea portable. The page leaves the room, and a private argument becomes public.", question: "What changes when an idea can be repeated?", color: "#d3a84e" },
  { id: "signal", date: "06.1969 CE", title: "The room hears a signal", object: "A radio transcript", place: "Listening room / study 04", note: "A signal compresses distance again. The archive is no longer only a place; it becomes a stream.", question: "What does an archive owe the people it records?", color: "#a55e76" },
];

export default function Home() {
  const [eraId, setEraId] = useState("river");
  const era = eras.find((item) => item.id === eraId) ?? eras[0];
  return <main className="archive-page" style={{ "--era": era.color } as React.CSSProperties}><div className="archive-shell">
    <header className="archive-header"><div className="archive-brand"><span className="archive-mark">AR</span><span>ARCHIVE / RIBBON</span></div><span>READING ROOM 04</span><span className="archive-status">SYNTHETIC RECORD</span></header>
    <section className="archive-hero"><div><p className="archive-kicker">a thread is not a verdict</p><h1>Follow the<br /><em>small signal.</em></h1><p className="archive-deck">A museum-label timeline for opening one object at a time and carrying one better question forward.</p></div><div className="archive-date"><span>SELECTED ENTRY</span><strong>{era.date}</strong><small>{era.place}</small></div></section>
    <section className="archive-map"><div className="timeline-label"><span>THE THREAD</span><span>{eras.length} OBJECTS</span></div><div className="timeline">{eras.map((item, index) => <button key={item.id} type="button" className={item.id === era.id ? "timeline-stop is-active" : "timeline-stop"} onClick={() => setEraId(item.id)}><i /><span>0{index + 1}</span><strong>{item.date}</strong><small>{item.object}</small></button>)}</div></section>
    <section className="archive-card"><div className="card-object"><span>OBJECT / {era.date}</span><div className="artifact-shape"><i /><i /><i /></div><small>{era.object}</small></div><div className="card-copy"><p className="archive-kicker">CURRENT LABEL / {era.place}</p><h2>{era.title}</h2><p>{era.note}</p><blockquote>{era.question}</blockquote><p className="archive-disclaimer">Study entry is synthetic. Open the question, then check the source.</p></div></section>
    <footer className="archive-footer"><span>BOOKCHAOWALIT / ARCHIVE RIBBON</span><span>EDITORIAL STUDY · NOT AN AUTHORITATIVE HISTORY</span></footer>
  </div></main>;
}
