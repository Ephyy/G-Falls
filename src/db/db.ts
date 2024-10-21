import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexfile.js';

type Environment = 'development' | 'production';

// Determinar el entorno actual (desarrollo por defecto)
const environment: Environment = (import.meta.env.NODE_ENV as Environment) || 'development';
const config = knexConfig[environment];

const knex = Knex(config);

Model.knex(knex);

export default knex;
