import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  integrations: [tailwind(), mdx()],
});