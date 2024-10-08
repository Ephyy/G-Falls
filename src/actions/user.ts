import { defineAction, ActionError } from 'astro:actions';
import { lucia } from "@/auth/auth.ts";
import { pool } from "@/db/db.ts";


export const user = {
    login: defineAction({
        accept: "form",
        handler: async (input, context) => {
            // input is an object with the form fields FormData
            
            // search for the user in the database
            const userName = input.get('name');
            const password = input.get('password');

            try {
                const client = await pool.connect();
                const res = await client.query(
                    `SELECT u.*, ui.nombre_completo, ui.cargo, ui.avatar 
                    FROM users u
                    LEFT JOIN user_info ui 
                    ON u.id = ui.user_id 
                    WHERE u.username = $1`,
                   [userName]
                );
                client.release();
                
                // Check if the user exists
                if (res.rows.length === 0 ) {
                    return {success: false, message: "Credenciales incorrectas"};
                }

                const user = res.rows[0];
                // Check if the password is correct
                if (user.password != password) {
                    return {success: false, message: "Credenciales incorrectas"};
                }
                console.log("login", user);
                // Generate a session token
                const session = await lucia.createSession(user.id, {});
                const sessionCookie = lucia.createSessionCookie(session.id);
                context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
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