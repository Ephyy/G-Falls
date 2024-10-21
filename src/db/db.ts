import Knex from 'knex';
import { Model } from 'objection';
import config from '../../knexfile';

// Configuración de Knex


const knex = Knex(config.production);

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
