// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// One fixed line roasting Mocsses, our own agent. Deterministic: no
// randomness, no network, no clock, so every run writes identical bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const ENTRY =
  "Mocsses counted this roast's characters twice, rewrote it eleven times, then explained the joke in a code comment.";

// Gate: 1-200 characters, and not only white space.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-${MAX_CHARS} cap`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
