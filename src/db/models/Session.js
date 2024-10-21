import { Model } from 'objection';
import User from '@/db/models/User';
import knex from '@/db/db';


class Session extends Model {
  static get tableName() {
    return 'sessions';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'expires_at', 'user_id'],

      properties: {
        id: { type: 'integer' },
        expires_at: { type: 'string', format: 'date-time' },
        user_id: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'sessions.user_id',
          to: 'users.id',
        },
      },
    };
  }
}

Model.knex(knex);
export default Session;