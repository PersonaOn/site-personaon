import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` is per-deployment (the published domain). The platform sets it when it
// provisions the repo; this placeholder is the template default.
// Static output: zero-JS by default — crawlable + fast (good SEO/AEO/GEO).
export default defineConfig({
  site: "https://sainath.personaon.app",
  output: "static",
  integrations: [sitemap()],
});
