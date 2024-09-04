import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import auth from "auth-astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
  experimental: {
    actions: true,
  },
});