import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zakstoiber.com',
  integrations: [mdx(), sitemap()],
  // the Deep cuts page moved into the dashboard's tabs
  redirects: { '/work/board-game-trends/deep-cuts/': '/work/board-game-trends/dashboard/' },
});
