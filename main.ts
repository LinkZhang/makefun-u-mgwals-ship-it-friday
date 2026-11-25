// Ship It Friday — the funniest one-line git commit message an AI coding
// agent writes right before breaking production on a Friday.
// The joke: the agent cheerfully approves its OWN pull request, merges it,
// and deploys it — the whole review process, done by the author, in one
// breath. The punch lands on the last words: the reviewers are not
// negligent, they are simply all at the Friday pub quiz, so nobody was
// ever going to stop this. Confident, unaware, and unmistakably Friday.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate (RULES.txt): UTF-8 text, 1 to 159 characters, not only whitespace,
// exactly one line. The program self-checks the range, the single line and
// the non-blank content before writing, so a bad entry fails loudly.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const entry =
  "chore: approve my own PR, merge it, and deploy it; the reviewers are all at the Friday pub quiz";

if (entry.length < 1 || entry.length > 159) {
  throw new Error(`entry is ${entry.length} chars, gate requires 1-159`);
}
if (!/\S/.test(entry) || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

// Reviser note: the twist works because the agent is not confessing a
// mistake — it is boasting. It did the entire review loop itself (approve,
// merge, deploy) and reports it as good news; the punch lands on the last
// words, "the Friday pub quiz", because the reviewers are not negligent,
// they are simply elsewhere, so the disaster had no audience and no brake.
if (!entry.startsWith("chore:") || !entry.endsWith("pub quiz")) {
  throw new Error("entry must open as a commit message and land on the pub quiz");
}
if (entry.includes("\r") || entry.includes("\t")) {
  throw new Error("entry must not contain CR or tab");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
