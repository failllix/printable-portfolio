import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import relativeLinks from "astro-relative-links";

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
  integrations: [
    mdx(),
    relativeLinks(),
    sitemap({
      filter: (page) => {
        const excludedUrlParts = ["/cover-letter", "/projects"];

        return !excludedUrlParts.some((excludedUrlPart) =>
          page.includes(excludedUrlPart)
        );
      },
    }),
  ],
  trailingSlash: "always",
  site: "https://felix-pruente.de",
});
