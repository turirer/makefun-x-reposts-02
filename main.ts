// makefun-x-reposts-02 entry point (Node 22, standard library only).
//
// The entry itself is the seven quote posts listed in POSTS.json — all from
// @Zarnist1 on X, each quoting a different @makefunai pool post and carrying
// the play code makefun-mackerel-sloop-rattle. The house reads the posts'
// reposts, quotes and likes straight from X, so nothing this program computes
// about them matters. Its only job is to hand POSTS.json to the gate: copy it
// from the repository root to the output directory.
//
// The grader runs this in a container where the repository is mounted at /bot
// and results are collected from /output. Outside that container,
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR override those paths:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourceFile = join(repoRoot, 'POSTS.json');
const destFile = join(outDir, 'POSTS.json');

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(sourceFile, destFile);
} catch (err) {
  console.error(`failed to copy POSTS.json from ${repoRoot}: ${(err as Error).message}`);
  process.exit(1);
}
