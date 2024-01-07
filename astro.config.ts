import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import lit from "@astrojs/lit";
import vue from "@astrojs/vue";
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";

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
  prefetch: true,
  adapter: cloudflare({
    mode: 'directory',
    functionPerRoute: true
  })
});