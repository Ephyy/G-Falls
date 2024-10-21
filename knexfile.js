import 'dotenv/config'; // Cargar variables de entorno desde el archivo .env

const config = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB
    },
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL, // URL de conexión desde Railway
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  }
};

export default config;