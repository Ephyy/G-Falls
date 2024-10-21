import Knex from 'knex';
import { Model } from 'objection';
import config from '../../knexfile';

// Configuración de Knex
// Detectar el entorno actual
const environment = process.env.NODE_ENV || 'development';

const c = {
  client: 'pg',
  connection:  process.env.DATABASE_URL,
  migrations: {
    directory: './src/db/migrations',
  },
  seeds: {
    directory: './src/db/seeds',
  },
  ssl: { rejectUnauthorized: false },
};

// Configuración de Knex para el entorno actual
// const knexConfig = config[environment];
const knex = Knex(c);
Model.knex(knex);

// Verificar la conexión
knex.raw('SELECT 1')
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

export default knex;
