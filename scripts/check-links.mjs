// Fails the build if any page links to a file or page on this site that doesn't exist.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

const dist = 'dist';
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith('.html')) pages.push(path);
  }
};
walk(dist);

const exists = (path) =>
  existsSync(path) && (statSync(path).isFile() || existsSync(join(path, 'index.html')));

const broken = [];
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const urls = [];
  for (const [, url] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) urls.push(url);
  for (const [, set] of html.matchAll(/\ssrcset="([^"]+)"/g))
    for (const part of set.split(',')) urls.push(part.trim().split(/\s+/)[0]);

  for (const url of urls) {
    if (/^(?:[a-z]+:|\/\/|#)/i.test(url)) continue;
    const path = decodeURI(url.split(/[?#]/)[0]);
    if (!path) continue;
    const target = path.startsWith('/') ? join(dist, path) : join(dirname(page), path);
    if (!exists(target)) broken.push(`${relative(dist, page)} → ${url}`);
  }
}

if (broken.length) {
  console.error(`Broken links (${broken.length}):\n  ${[...new Set(broken)].join('\n  ')}`);
  process.exit(1);
}
console.log(`Checked links on ${pages.length} pages: none broken.`);
