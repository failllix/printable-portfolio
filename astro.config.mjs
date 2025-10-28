import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  integrations: [tailwind(), mdx()],
});
