import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

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
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  integrations: [mdx()],
});
