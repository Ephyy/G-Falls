import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
  security: {
		checkOrigin: true
	},
  redirects: {
    '/g-cursos': '/g-cursos/historial',
  }
});