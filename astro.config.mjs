// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// The legacy site stays at "/" and the new Astro site is published under "/new/".
// CI sets SITE_BASE="/new/"; local dev/build defaults to "/" so `npm run dev` is unchanged.
const base = process.env.SITE_BASE || "/";

// https://astro.build/config
export default defineConfig({
  site: "https://sahilsood.com",
  base,
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
