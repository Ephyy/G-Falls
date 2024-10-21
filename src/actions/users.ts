import { defineAction, ActionError } from 'astro:actions';
import { lucia } from "@/auth/auth.ts";
import User from '@/db/models/User';
import { log } from 'node_modules/astro/dist/core/logger/core';

export const user = {
    login: defineAction({
        accept: "form",
        handler: async (input, context) => {
            // input is an object with the form fields FormData
            
            // search for the user in the database
            const userName = input.get('name');
            const password = input.get('password');

            try {
                // Buscar el usuario en la base de datos utilizando Objection.js
                const user = await User.query().findOne({ username: userName });
                
                // Check if the user exists
                if (!user) {
                    return { success: false, message: "Credenciales incorrectas" };
                }
                
                console.log(user);
                
                // Check if the password is correct
                if (user.password !== password) {
                    return { success: false, message: "Credenciales incorrectas" };
                }
                
                // Generate a session token
                const session = await lucia.createSession(user.id, {});
                const sessionCookie = lucia.createSessionCookie(session.id);
                context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
                console.log(session, sessionCookie);
                return { success: true, message: "Login existoso"};
            } catch (e) {
                throw new ActionError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'An internal server error occurred'
                });
            }
        }
    }),
    logout: defineAction({
        handler: async (input, context) => {

            if (!context.locals.session) {
                return { success: false, message: "No hay una sesión activa" };
            }

            await lucia.invalidateSession(context.locals.session.id);
            const sessionCookie = lucia.createBlankSessionCookie();
            context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
            return { success: true, message: "Sesión cerrada" };
        }
    }),
}