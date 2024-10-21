import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexfile.js';

type Environment = 'development' | 'production';

// Determinar el entorno actual (desarrollo por defecto)
const environment: Environment = (import.meta.env.NODE_ENV as Environment) || 'development';
const config = knexConfig[environment];

const knex = Knex(config);

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
