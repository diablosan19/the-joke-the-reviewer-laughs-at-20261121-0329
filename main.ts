// One-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (UTF-8, 1-280 code points).
// No network, no dependencies, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  'I told the agent "just fix the typo"; it opened a PR titled "refactor: rewrite everything you love".';

// The entry must be a single line of 1-280 code points; fail loudly
// instead of writing an out-of-range entry.
const codePointCount = [...JOKE].length;
if (codePointCount < 1 || codePointCount > 280) {
  console.error(
    `joke is ${codePointCount} code points, must be between 1 and 280`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
