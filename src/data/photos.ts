import files from './photo-files.json';

// Captions use what the original file names say (place, month). Add exact locations if you want them.
export interface Photo {
  slug: string;
  alt: string;
  caption: string;
  set: 'Norway' | 'Elsewhere' | 'Artemis & Cosmo' | 'Portraits';
}

export const photos: Photo[] = [
  { slug: 'norway-bay-from-above', set: 'Norway', caption: 'Norway, June 2025', alt: 'A turquoise bay and pale beach far below steep green mountainsides' },
  { slug: 'norway-ridge-panorama', set: 'Norway', caption: 'Norway, June 2025', alt: 'A grassy ridge falling away into open sea under a clear sky' },
  { slug: 'norway-fjord-dusk', set: 'Norway', caption: 'Norway, June 2025', alt: 'A still fjord at dusk below jagged snow-streaked peaks and wisps of cloud' },
  { slug: 'norway-hikers-wall', set: 'Norway', caption: 'Norway, June 2025', alt: 'Two hikers, tiny against a sheer mountain wall, crossing a golden meadow' },
  { slug: 'norway-cove-ledge', set: 'Norway', caption: 'Norway, June 2025', alt: 'A sandy cove with turquoise water seen from a rocky summit ledge' },
  { slug: 'norway-valley-lake', set: 'Norway', caption: 'Norway, June 2025', alt: 'A green valley and lake beneath snowy peaks under heavy cloud' },
  { slug: 'norway-island-dusk', set: 'Norway', caption: 'Norway, June 2025', alt: 'A rocky island on calm water at dusk with pink clouds above' },
  { slug: 'norway-forest-lake', set: 'Norway', caption: 'Norway, June 2025', alt: 'A lake in a forested valley with mountains and sea in the distance' },
  { slug: 'norway-street', set: 'Norway', caption: 'Norway, May 2025', alt: 'A busy pedestrian street of old stone buildings with a large clock face' },
  { slug: 'santa-fe-sunset', set: 'Elsewhere', caption: 'Santa Fe, 2024', alt: 'Sun rays breaking through a dark band of cloud over layered mountain ridges at sunset' },
  { slug: 'bucks-parade', set: 'Elsewhere', caption: 'Bucks championship parade, Milwaukee, July 2021', alt: 'A Bucks player lifts the championship trophy above a cheering parade crowd' },
  { slug: 'red-winged-blackbird', set: 'Elsewhere', caption: 'Red-winged blackbird, May 2025', alt: 'A female red-winged blackbird perched on a branch of new orange leaves against a pale blue sky' },
  { slug: 'artemis-cosmo-3', set: 'Artemis & Cosmo', caption: 'Artemis & Cosmo', alt: 'A tabby kitten and a black kitten asleep together in a woven basket' },
  { slug: 'cosmo', set: 'Artemis & Cosmo', caption: 'Cosmo', alt: 'A tabby and white kitten lying on a woven mat, looking straight at the camera' },
  { slug: 'artemis', set: 'Artemis & Cosmo', caption: 'Artemis', alt: 'A black kitten by a window with the tip of its tongue out' },
  { slug: 'artemis-cosmo', set: 'Artemis & Cosmo', caption: 'Artemis & Cosmo', alt: 'A black kitten and a tabby kitten curled up together, looking at the camera' },
  { slug: 'artemis-cosmo-2', set: 'Artemis & Cosmo', caption: 'Artemis & Cosmo', alt: 'Two kittens asleep on each other on a pink blanket' },
  { slug: 'cosmo-tv', set: 'Artemis & Cosmo', caption: 'Cosmo', alt: 'A tabby kitten resting its head on a hand' },
  { slug: 'portrait-teal', set: 'Portraits', caption: 'Portrait', alt: 'Portrait of a woman with long auburn hair against a teal backdrop' },
  { slug: 'portrait-green', set: 'Portraits', caption: 'Portrait', alt: 'A woman holding a black cat against a green backdrop' },
  { slug: 'engagement-dock', set: 'Portraits', caption: 'Engagement session, September 2025', alt: 'A couple on a lake dock at sunset, her head in his lap, reflected among the lily pads' },
];

type FileInfo = { sizes: number[]; w: number; h: number };
const info = files as Record<string, FileInfo>;

// Every size exists as a JPEG and a smaller WebP; browsers that support WebP get it via <picture>.
export function photoSrc(slug: string, preferred = 1600) {
  const f = info[slug];
  const size = f.sizes.filter((s) => s <= preferred).pop() ?? f.sizes[0];
  const set = (ext: string) =>
    f.sizes.map((s) => `/photos/${slug}-${s}.${ext} ${Math.round((s * f.w) / Math.max(f.w, f.h))}w`).join(', ');
  return {
    src: `/photos/${slug}-${size}.jpg`,
    srcset: set('jpg'),
    webpSrcset: set('webp'),
    largest: `/photos/${slug}-${f.sizes[f.sizes.length - 1]}.jpg`,
    width: f.w,
    height: f.h,
  };
}

export const bySlug = (slug: string) => photos.find((p) => p.slug === slug)!;
