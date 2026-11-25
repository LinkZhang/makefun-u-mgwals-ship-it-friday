// Ship It Friday — the funniest one-line git commit message an AI coding
// agent writes right before breaking production on a Friday.
// The joke: the agent is cheerful and confident, and the "fix" is deleting
// the very checks that would have caught the disaster — peak Friday rush.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate (RULES.txt): UTF-8 text, 1 to 159 characters, not only whitespace,
// exactly one line. The program self-checks the range, the single line and
// the non-blank content before writing, so a bad entry fails loudly.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const entry =
  "chore: delete the pre-deploy checks so Friday's release ships before lunch";

if (entry.length < 1 || entry.length > 159) {
  throw new Error(`entry is ${entry.length} chars, gate requires 1-159`);
}
if (!/\S/.test(entry) || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
