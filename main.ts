// One-Sentence Absurd Invention Pitch entry: bureaucratic meeting chair.
// Writes a single one-sentence invention pitch to /output/entry.txt.
// The pitch was authored in-session for this entry: a meeting chair
// that files a formal complaint whenever a meeting could have been an
// email, then cc's the calendar and resigns on your behalf.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE =
  "A meeting chair that files a formal complaint whenever a meeting could have been an email, then cc's the calendar and resigns on your behalf.";

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 220 characters, a single line, not only whitespace.
// An entry outside those limits is never judged and takes no prize, so
// check the line against the same limits before writing it out.
function assertGateValid(text: string): void {
  if (text.length < 1 || text.length > 220) {
    throw new Error(`line must be 1-220 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}
assertGateValid(LINE);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
