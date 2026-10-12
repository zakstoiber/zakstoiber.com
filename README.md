# zakstoiber.com

Zak Stoiber's personal site: resume, data projects, and a photography page that links to
slicksnaps.com. Built with Astro and MDX, hosted on GitHub Pages at https://zakstoiber.com.

## Run it locally

```sh
npm install
npm run dev           # http://localhost:4321
npm run build         # static site in dist/
npm run check:links   # after a build: fails if any page links to a missing page or file
```

## How changes go live

- **Pull requests** get a build check (build plus link check). Nothing is published.
- **Merging to `main`** builds and publishes the site with `.github/workflows/deploy.yml`.
  It's usually live within a couple of minutes.

## Adding a project

1. Add `src/content/projects/<name>.mdx` with `title`, `summary`, `date` and `tags`.
   Set `featured: true` to show it on the home page, or `draft: true` to hide it.
2. Write the story in Markdown and drop charts or dashboards between paragraphs:
   - A dashboard hosted elsewhere (Tableau Public, Power BI, Streamlit, Observable):
     `<Embed src="public-embed-url" title="..." height={600} />`
   - A video walkthrough on YouTube (unlisted is fine): `<Video id="youtube-id" />`
   - A chart drawn in the page: put the data in `src/data/` and follow `src/components/RentChart.astro`.
   - A standalone HTML dashboard: copy its folder into `public/work/<name>/` and link to it.

## Adding a photo

```sh
node scripts/add-photo.mjs ~/Pictures/Favorites/original.jpg norway-harbor
```

That writes 800, 1200, 1600 and 2400px copies (JPEG and WebP, location data removed) to
`public/photos/` and records them in `src/data/photo-files.json`. Then add a line for the photo
in `src/data/photos.ts` with its set, caption and alt text. The order there is the order on the page.

## Updating the resume

- The web version's text is in `src/data/resume.ts`.
- The download is `public/resume.pdf`. It saves as "Zak Stoiber - Resume.pdf".
- Keep MGIC figures rounded on the public site and leave the phone number off.

## Domain

DNS at the registrar: `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`,
`185.199.110.153` and `185.199.111.153`, and a `CNAME` for `www` pointing to `zakstoiber.github.io`.
`public/CNAME` holds `zakstoiber.com`. In the repo's Settings → Pages, keep **Enforce HTTPS** ticked.

## Design

Editorial rather than template: Newsreader (serif) for text, IBM Plex Mono for labels, a paper, slate and
fjord-teal palette taken from the Norway photographs, hairline rules instead of cards, and no rounded
buttons. Fonts are self-hosted. Light and dark modes follow the visitor's system setting. The island
photo across the top of every page is set in `src/layouts/Base.astro`, and so is the share image
(`public/og.jpg`).

## Board Game Trends dashboard

The standalone dashboard from `bgg-powerbi/All Ranked (30k+)/board-game-trends/` is copied into
`public/work/board-game-trends/dashboard/` and served as-is at `/work/board-game-trends/dashboard/`.
The write-up page around it is `src/content/projects/board-game-trends.mdx`.

Two edits were made to the copied `index.html` (re-apply them if you rebuild with `build.py`):

- d3 is served from the site (`d3.min.js`, v7.9.0) instead of cdnjs, so the dashboard doesn't depend on a CDN.
- The byline "Zak Stoiber" links back to the project page.
