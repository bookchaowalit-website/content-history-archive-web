// Archive Ribbon entries and helpers shared by the page. Synthetic study entries, not an authoritative history.

export type Era = { id: string; date: string; title: string; object: string; place: string; note: string; question: string; color: string };
export const eras: Era[] = [
  { id: "river", date: "03.2000 BCE", title: "The river keeps score", object: "A clay tally mark", place: "Lower valley / study 01", note: "Before a chronicle, there is a count. A mark turns memory into something that can be compared.", question: "What becomes visible when a life is counted?", color: "#c46b45" },
  { id: "road", date: "08.0120 CE", title: "The road changes shape", object: "A road milestone", place: "Northern route / study 02", note: "An empire is often felt first as distance made legible: a road, a measure, a promise of return.", question: "Who gets to move when a road is made?", color: "#7b9d8c" },
  { id: "press", date: "11.1450 CE", title: "A page travels farther", object: "A printer's proof", place: "Workshop shelf / study 03", note: "Repetition makes an idea portable. The page leaves the room, and a private argument becomes public.", question: "What changes when an idea can be repeated?", color: "#d3a84e" },
  { id: "signal", date: "06.1969 CE", title: "The room hears a signal", object: "A radio transcript", place: "Listening room / study 04", note: "A signal compresses distance again. The archive is no longer only a place; it becomes a stream.", question: "What does an archive owe the people it records?", color: "#a55e76" },
];

export function findEra(id: string): Era {
  return eras.find((item) => item.id === id) ?? eras[0];
}

// Timeline stop number: 01, 02, ... (also correct past nine entries).
export function stopNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}
