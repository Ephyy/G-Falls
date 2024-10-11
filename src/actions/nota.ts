import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

const notaSchema = z.string().refine((val) => {
  const parsed = parseFloat(val);
  console.log(parsed);
  return !isNaN(parsed) && parsed >= 1 && parsed <= 7;
}, {
  message: "El valor debe ser un número entre 1 y 7",
});

export const nota = {
  cambiarNota: defineAction({
    accept: "form",
    input: z.object({
      valorNota: notaSchema,
    }),
    handler: async ({valorNota}) => {
      console.log(`Nota cambiada a ${valorNota}`);
      return 
    }
  })
}