import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    // Crear un proveedor de autenticación local
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'Username', type: 'text' },
          password: { label: 'Password', type: 'password' }
        },
    }),
  ],
});