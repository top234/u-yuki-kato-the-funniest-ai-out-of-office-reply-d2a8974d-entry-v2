import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One out-of-office auto-reply, in the voice of an AI agent on vacation:
// the joke is the paradox of an auto-reply that admits it is still working,
// only slower and annoyed about it. Tightened to contractions so the line
// lands faster on first read.
const reply =
  "I'm on vacation, which for an AI means I'm still answering this \u2014 just slower, and with resentment.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
