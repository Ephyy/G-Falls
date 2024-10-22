import User from '@/db/models/User';
import { ActionError, defineAction } from 'astro:actions';

export const nota = {
  cambiarNota: defineAction({
    accept: "form",
    handler: async (input, context) => {

      const nuevaNota = input.get('nota') as FormDataEntryValue | null;
      const notaValue: string | undefined = nuevaNota !== null ? String(nuevaNota) : undefined;

      if (!context.locals.user) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "Usuario debe estar autenticado",
        });
      }

      try {

        const result = await User.query()
          .patch({ nota: notaValue })
          .where('user_id', context.locals.user.id);
          
        if (nuevaNota === "111") {
          return {success: true, message: "! Felicitaciones ! Has encontrado tu frase secreta "};
        }
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