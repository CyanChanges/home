import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import lit from "@astrojs/lit";
import vue from "@astrojs/vue";
// import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cyans.me',
  integrations: [mdx({
    shikiConfig: {
      theme: "material-theme"
    }
  }), sitemap(), lit(), vue(), tailwind()],
  output: "hybrid",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  },
  prefetch: true
});
