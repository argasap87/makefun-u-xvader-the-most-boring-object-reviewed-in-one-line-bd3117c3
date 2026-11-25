// The Coaster's Lament — a one-line review of the most boring object imaginable.
//
// The hook: a coaster does exactly one tiny job — sit under a mug — and it does
// that job perfectly, every single day, forever, without a word of thanks. The
// joke is the object's own dullness: total, unglamorous, unappreciated reliability.
// The turn comes early ("That is the job."), and the closing words sharpen it:
// nobody has ever once said thank you.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It sits under a mug. That is the job. It does it perfectly every day, and nobody has ever once said thank you.";

// Gate guard: the sealed scorer requires /output/entry.txt to be UTF-8 text of
// 1 to 200 characters, not only white space, on a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("LINE must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
