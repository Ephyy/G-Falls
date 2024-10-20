module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL, // URL de conexión desde Railway
    migrations: {
      directory: "@/db/migrations"
    }
  }
};