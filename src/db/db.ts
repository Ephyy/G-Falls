import Knex from 'knex';
import { Model } from 'objection';

const knex = Knex({
  client: 'pg',
  connection: import.meta.env.DATABASE_URL,
});

Model.knex(knex);

export default knex;
