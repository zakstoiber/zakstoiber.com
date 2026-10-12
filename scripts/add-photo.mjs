// Makes web copies of a photo for the site and records them in src/data/photo-files.json.
// Usage: node scripts/add-photo.mjs <path to original> <slug>
// Writes public/photos/<slug>-{800,1200,1600,2400}.{jpg,webp}, skipping sizes larger than the original.
// Location and camera metadata are dropped. Then add the photo's caption and alt text to src/data/photos.ts.
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const [input, slug] = process.argv.slice(2);
if (!input || !/^[a-z0-9-]+$/.test(slug ?? '')) {
  console.error('Usage: node scripts/add-photo.mjs <path to original> <slug, e.g. norway-harbor>');
  process.exit(1);
}

const image = sharp(input).rotate();
const { width, height } = await image.metadata().then((m) =>
  (m.orientation ?? 1) >= 5 ? { width: m.height, height: m.width } : m
);
const longEdge = Math.max(width, height);
const sizes = [800, 1200, 1600, 2400].filter((s) => s <= longEdge);
if (!sizes.length) {
  console.error(`The original is ${longEdge}px on its long edge; it needs at least 800px.`);
  process.exit(1);
}

for (const size of sizes) {
  const resized = image.clone().resize({ width: size, height: size, fit: 'inside' }).toColorspace('srgb');
  await resized.clone().jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(`public/photos/${slug}-${size}.jpg`);
  await resized.clone().webp({ quality: 80, effort: 6 }).toFile(`public/photos/${slug}-${size}.webp`);
}

const path = 'src/data/photo-files.json';
const files = JSON.parse(readFileSync(path, 'utf8'));
const scale = 800 / longEdge;
files[slug] = { sizes, w: Math.round(width * scale), h: Math.round(height * scale) };
writeFileSync(path, JSON.stringify(files, null, 1));
console.log(`Added ${slug} at ${sizes.join(', ')}px. Now add its caption and alt text to src/data/photos.ts.`);
