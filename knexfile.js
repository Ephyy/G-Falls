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
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB
    },
    migrations: {
      directory: './src/db/migrations',
      specific: {
        connection: process.env.DATABASE_URL // Usar la URL de conexión para las seeds
      }
    },
    seeds: {
      directory: './src/db/seeds',
      specific: {
        connection: process.env.DATABASE_URL // Usar la URL de conexión para las seeds
      }
    }
  }
};

export default config;