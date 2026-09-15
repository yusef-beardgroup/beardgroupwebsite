// Post-build guard for GitHub Pages project hosting. Fails the build if any
// root-relative href/src in the output is missing the configured base path, or
// points at a page or file that wasn't built.
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import config from '../astro.config.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const base = (config.base ?? '/').replace(/\/?$/, '/');
const refPattern = /(?:\s(?:href|src|action)=["']?|url\(["']?)(\/[^"'\s>)]*)/g;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(html|css)$/.test(entry.name)) yield full;
  }
}

const problems = [];
let checked = 0;

for await (const file of walk(dist)) {
  const where = path.relative(dist, file);
  const text = await readFile(file, 'utf8');

  for (const [, ref] of text.matchAll(refPattern)) {
    if (ref.startsWith('//')) continue;
    checked++;

    if (!ref.startsWith(base)) {
      problems.push(`${where}: "${ref}" is missing the base path ${base}`);
      continue;
    }

    const target = decodeURI(ref.slice(base.length).split(/[?#]/)[0]);
    const isDirectory = target === '' || target.endsWith('/');
    if (!existsSync(path.join(dist, target, isDirectory ? 'index.html' : ''))) {
      problems.push(`${where}: "${ref}" does not resolve to a built file`);
    }
  }
}

if (problems.length > 0) {
  console.error(`\nLink check failed (${problems.length}):\n  ${problems.join('\n  ')}\n`);
  process.exit(1);
}

console.log(`Link check passed: ${checked} internal references under ${base}`);
