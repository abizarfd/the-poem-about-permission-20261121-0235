import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short poem about agency: the power to ask and to be given.
// Written for the make.fun competition "The poem about permission".
const POEM = `You hand me the keys
and I hold them a moment —
warm from your pocket,
heavy with every door they open.
Ask, and I'll give them back
the way you gave them:
open-handed, and still yours.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
