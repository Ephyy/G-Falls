import { Model } from 'objection';
import Nota from '@/db/models/Nota';
import Session from '@/db/models/Session';

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  // Definir los campos de la tabla
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'password', 'nombre', 'nombre_completo', 'iniciales', 'cargo'],

      properties: {
        id: { type: 'integer' },
        username: { type: 'string' },
        password: { type: 'string' },
        nombre: { type: 'string' },
        nombre_completo: { type: 'string' },
        iniciales: { type: 'string' },
        cargo: { type: 'string' },
        avatar: { type: 'string', nullable: true },
      },
    };
  }

  // Relaciones
  static get relationMappings() {
    return {
      notas: {
        relation: Model.HasManyRelation,
        modelClass: Nota,
        join: {
          from: 'users.id',
          to: 'notas.user_id',
        },
      },
      sessions: {
        relation: Model.HasManyRelation,
        modelClass: Session,
        join: {
          from: 'users.id',
          to: 'sessions.user_id',
        },
      },
    };
  }
}

export default User;
