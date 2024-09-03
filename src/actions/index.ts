import { defineAction } from 'astro:actions';
// import { z } from 'astro:schema';


export const server = {
    // action declarations
    login: defineAction({
        handler: async (input) => {
            return `Probando ${input}`
        }
    }),
}

