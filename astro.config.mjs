import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4321, // Usa el puerto que Railway provee
  },
  security: {
		checkOrigin: true
	},
  redirects: {
    '/g-cursos/*': {
      status: 302,
      destination: '/g-cursos/historial'
    }
  }
});