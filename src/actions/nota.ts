import { ActionError, defineAction } from 'astro:actions';
import { pool } from '@/db/db';

export const nota = {
  cambiarNota: defineAction({
    accept: "form",
    handler: async (input, context) => {

      const nuevaNota = input.get('nota');

      if (!context.locals.user) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "Usuario debe estar autenticado",
        });
      }
      // Modificar la nota en la base de datos
      const query = {
        text: 'UPDATE notas SET nota = $1 WHERE user_id = $2',
        values: [nuevaNota, context.locals.user.id]
      }

      try {
        const result = await pool.query(query);
  
        return {success: true, message: "Cambios guardados"};
      } catch (e) {
        throw new ActionError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'An internal server error occurred'
        });
      }
    }
  })
}