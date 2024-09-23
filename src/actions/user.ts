import { defineAction, ActionError } from 'astro:actions';
import { pool, lucia } from "../auth/auth.ts";

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
                const res = await client.query('SELECT * FROM users WHERE username = $1', [userName]);
                client.release();
                
                // Check if the user exists
                console.log("res", res.rows);
                if (res.rows.length === 0 ) {
                    return {success: false, message: "Credenciales incorrectas"};
                }

                const user = res.rows[0];
                // Check if the password is correct
                if (user.password != password) {
                    return {success: false, message: "Credenciales incorrectas"};
                }
                
                // Generate a session token
                const session = await lucia.createSession(user.id, {});
                const sessionCookie = lucia.createSessionCookie(session.id);
                context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
                console.log('User logged in:', user.username);
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
                return new Response(null, {
                    status: 401
                });
            }

            await lucia.invalidateSession(context.locals.session.id);
            const sessionCookie = lucia.createBlankSessionCookie();
            context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
            return { success: true };
        }
    }),
}