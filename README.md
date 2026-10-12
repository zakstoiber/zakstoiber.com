# zakstoiber.com: site plan and scaffold

Personal site for resume, data projects (interactive dashboards with walkthrough text and video),
and a photography section that links out to slicksnaps.com.

## Recommendation in one line

**Astro + MDX, hosted free on GitHub Pages, deployed automatically on every push.**

## Why this stack

- **Dashboards and long-form text in one file.** Each project is an `.mdx` file: you write the
  story in Markdown and drop interactive charts between paragraphs as components. Only the charts
  load JavaScript, so text pages stay fast.
- **Works with whatever tool built the dashboard.** Native charts (Observable Plot, Plotly,
  Vega-Lite, D3) render in the page from data in the repo. Dashboards built elsewhere
  (Tableau Public, Power BI, Streamlit, Observable, Looker Studio) embed with one line.
- **Free and low-maintenance.** Static files, no server, no database. GitHub Pages is free for a
  public repo, supports a custom domain and gives free HTTPS.
- **Portable.** If you outgrow GitHub Pages, the same build deploys to Cloudflare Pages, Netlify
  or Vercel without code changes.

Alternatives considered: Observable Framework (great for pure dashboards, weaker for a resume and
general pages), Quarto (great if projects start as Jupyter notebooks; can be added later),
Squarespace/Pixpa (easy, but poor fit for custom interactive charts).

## Site structure

| Page | Path | What it holds |
|---|---|---|
| Home | `/` | Name, one-line intro, buttons to Projects and Resume, 3 featured projects, photo teaser |
| Work | `/work/` | Numbered index of all projects, newest first |
| Project | `/work/<name>/` | Write-up with interactive charts, embedded dashboards, optional video, method/data notes |
| Resume | `/resume/` | Web version (experience, skills, education) plus a Download PDF button |
| Photographs | `/photographs/` | Favorite photos grouped into Norway, Artemis & Cosmo, and Portraits, with links to slicksnaps.com |

## How content gets added

- **New project:** add `src/content/projects/my-project.mdx` with a title, summary, date, tags.
  Set `featured: true` to show it on the home page, `draft: true` to hide it.
- **Native interactive chart:** put data in `src/data/` (CSV/JSON exported from Python/SQL), write
  a small chart component (see `src/components/RentChart.astro`), and place it in the MDX.
- **Dashboard from another tool:** `<Embed src="public-embed-url" title="..." height={600} />`.
- **Video walkthrough:** upload to YouTube (unlisted is fine) and use `<Video id="youtube-id" />`.
  It uses the privacy-friendly youtube-nocookie domain. YouTube handles bandwidth for free.
- **Resume:** edit the lists in `src/pages/resume.astro` and drop the PDF at `public/resume.pdf`.

## Photography and slicksnaps.com

slicksnaps.com stays where it is on Pixpa. zakstoiber.com gets a small curated teaser page and
links to it from the nav, home page and footer. Photos for the teaser are copied into
`public/photos/` as web-sized JPEGs (about 1600px wide) so the page loads fast and doesn't depend on
Pixpa's image URLs. Optionally, add a "zakstoiber.com" link back from the Pixpa site's menu.

## Pointing zakstoiber.com at the site

1. Create a public GitHub repo (for example `zakstoiber.com`) and push this folder.
2. Repo Settings → Pages → Source: **GitHub Actions**. The included workflow
   (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.
3. At the registrar where you bought the domain, set DNS:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<your-github-username>.github.io`
   - Remove any parking/forwarding records on `@` and `www`.
4. Repo Settings → Pages → Custom domain: `zakstoiber.com`, then tick **Enforce HTTPS** once the
   certificate is issued (DNS can take up to a day; usually under an hour).
5. Recommended: verify the domain under your GitHub account settings → Pages so no other repo can
   claim it.

`public/CNAME` already contains `zakstoiber.com`.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Design

Editorial rather than template: Newsreader (serif) for text, IBM Plex Mono for labels, a paper, slate and
fjord-teal palette taken from the Norway photographs, hairline rules instead of cards, and no rounded
buttons. Fonts are self-hosted. Light and dark modes follow the visitor's system setting.

## Photos

Web copies live in `public/photos/` as `<name>-800.jpg`, `-1600.jpg` and `-2400.jpg` (long edge), made from
the originals in the Favorites folder. Location data and other metadata are stripped. Captions and
alt text are in `src/data/photos.ts`; add or reorder photos there.

## Board Game Trends dashboard

The standalone dashboard from `bgg-powerbi/All Ranked (30k+)/board-game-trends/` is copied into
`public/work/board-game-trends/dashboard/` and served as-is at `/work/board-game-trends/dashboard/`.
The write-up page around it is `src/content/projects/board-game-trends.mdx`.

Two edits were made to the copied `index.html` (re-apply them if you rebuild with `build.py`):

- d3 is served from the site (`d3.min.js`, v7.9.0) instead of cdnjs, so the dashboard doesn't depend on a CDN.
- The byline "Zak Stoiber" links back to the project page.

## What I need from you to fill it in

- 6 to 9 favorite photos from slicksnaps.com.
- Optional: a YouTube walkthrough of the board game dashboard (there's a commented-out slot in the MDX).
