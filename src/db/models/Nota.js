import { Model } from 'objection';
import User from '@/db/models/User';

class Nota extends Model {
  static get tableName() {
    return 'notas';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'observacion'],
      
      properties: {
        user_id: { type: 'integer' },
        nota: { type: 'string', nullable: true },
        observacion: { type: 'string', default: '' },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'notas.user_id',
          to: 'users.id',
        },
      },
    };
  }
}

export default Nota;