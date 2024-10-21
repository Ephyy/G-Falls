import { defineAction } from 'astro:actions';
import { user } from '@/actions/users';
import { nota } from '@/actions/nota';
import User from '@/db/models/User';

export const server = {
    getEstudiantes: defineAction({
        handler: async () => {
            
          const estudiantes = await User.query()
            .select('users.id', 'users.nombre', 'users.nombre_completo', 'users.cargo', 'notas.nota', 'notas.observacion')
            .leftJoinRelated('notas')
            .where('users.cargo', 'estudiante')
            .orderBy('users.id');
          return estudiantes;
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

