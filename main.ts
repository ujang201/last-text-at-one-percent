// Last Text at One Percent — the final text a dying phone sends at 1% battery.
//
// The phone does not send a battery warning. It sends a confession: it has
// been cheating on its owner with another charger, and it dies mid-sentence
// while begging to be plugged in one last time. The joke is the betrayal, the
// voice is the phone's own, and the cut-off is the death itself.
//
// The program writes exactly that one message to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt when OUTPUT_DIR is set) and nothing else.
// Deterministic: every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Three beats, one breath: confession, betrayal, farewell cut short.
// "Don't cry" beats "Don't be sad": shorter, punchier, more like a real text.
const CONFESSION = "1%. Before I die: I've been seeing another charger.";
const BETRAYAL = "He fast-charges AND his cable reaches the bed.";
const FAREWELL = "Don't cry. Just plug me in one last—";

const message = [CONFESSION, BETRAYAL, FAREWELL].join(" ");

// Self-check the gate before writing: 1–200 UTF-8 characters, not blank.
if (message.length < 1 || message.length > 200) {
  throw new Error(`entry is ${message.length} chars, must be 1-200`);
}
if (message.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, message, "utf8");
console.log(`wrote ${message.length} chars to ${OUT_FILE}`);
