import { defineAction } from 'astro:actions';
import { user } from '@/actions/users';
import { nota } from '@/actions/nota';
import User from '@/db/models/User';

export const server = {
    getUsers: defineAction({
        handler: async () => {
            
          const users = await User.query()
            .select('users.id', 'users.nombre', 'users.nombre_completo', 'users.cargo', 'notas.nota', 'notas.observacion')
            .leftJoinRelated('notas')
            .orderBy('users.id');
  
          return users;
        }
    }),
    buscar: defineAction({
        accept: "form",
        handler: async (input) => {
          console.log(input);
        }
    }),
    user,
    nota
}

