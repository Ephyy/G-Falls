import { Model } from 'objection';
import type { RelationMappings } from 'objection';
import Nota from '@/db/models/Nota';
import Session from '@/db/models/Session';
import knex from '@/db/db';

interface User {
  id: number;
  username: string;
  password: string;
  nombre: string;
  nombre_completo: string;
  iniciales: string;
  cargo: string;
  avatar?: string;
}

class User extends Model implements User {
  id!: number;
  username!: string;
  password!: string;
  nombre!: string;
  nombre_completo!: string;
  iniciales!: string;
  cargo!: string;
  avatar?: string;

  static get tableName(): string {
    return 'users';
  }

  static get idColumn(): string {
    return 'id';
  }

  // Definir los campos de la tabla
  static get jsonSchema(): object {
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
  static get relationMappings(): RelationMappings {
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

Model.knex(knex);


export default User;