import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://
build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
  experimental: {
    actions: true,
  },
  security: {
		checkOrigin: true
	}
});