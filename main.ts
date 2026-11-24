// One Line of Earned Pride — make.fun bounty u-mang-one-line-of-earned-pride-a0138557
// Writes the judged line to ENTRY_OUTPUT (or /output/entry.txt by default).
// The line: one quiet, earned moment of pride, 1-240 chars, one line, no newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "After forty-one tries, the kid stuck the landing, both feet on the board, and for once didn't look around to see who'd noticed.";

// Gate: 1-240 characters, a single line, not only whitespace, no
// leading/trailing whitespace, no control characters.
if (
  !/^[^\n]{1,240}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error("entry fails the 1-240 character single-line gate");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
