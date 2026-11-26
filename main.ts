// A working makefun-x-reposts-02 entry (Node 22, standard library only): it copies POSTS.json from the repository root
// to /output/POSTS.json, where the gate reads it. That is all the program has to do. The entry is the posts themselves:
// posts of your own on X, all from one account, each quoting or replying directly to a different one of make.fun's
// newest posts on x.com/makefunai, make.fun or @makefunai and your play code in each one's own words; POSTS.json names
// them, and the house reads their reposts, quotes and likes from X. Nothing this program writes about the posts is scored.
//
// The POSTS.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your posts' addresses before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
