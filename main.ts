// One Line, One Laugh — entry program (program/v1, node22).
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt, no trailing
// newline: 107 characters, 109 bytes, inside the 1-200 character gate.
// The joke: a password so strong its owner is locked out — and the
// "forgot password" link has become a spouse. No network, no randomness,
// no dependencies — the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "";
const LINE =
  "My password is so strong even I can't log in — me and the 'forgot password' link are basically married now.";

function entryPath(): string {
  if (OUT.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  // Only ever write inside MAKEFUN_OUTPUT_DIR — never a relative path,
  // never rmSync/rm the output dir (the grader runs on a read-only fs).
  mkdirSync(OUT, { recursive: true });
  return join(OUT, "entry.txt");
}

function main(): void {
  // One deterministic write: the same 107-character line on every run.
  writeFileSync(entryPath(), LINE, "utf8");
}

main();
