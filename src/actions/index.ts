import { defineAction } from 'astro:actions';
import pool from '../auth/auth.ts'

export const server = {
    // action declarations
    login: defineAction({
        accept: "form",
        handler: async (input) => {
            // input is an object with the form fields FormData
            
            // search for the user in the database
            const userName = input.get('name');
            const password = input.get('password');

            try {
                const client = await pool.connect();
                const res = await client.query('SELECT * FROM users WHERE username = $1', [userName]);
                client.release();
                
                // If the user is found, return the user object
                if (res.rows.length > 0) {
                    const user = res.rows[0];
                    // Check if the password is correct
                    if (user.password === password) {
                        // Generate a session token

                        return { success: true, user };
                    } else {
                        return { success: false, message: 'Incorrect password' };
                    }
                } else {
                  return { success: false, message: 'User not found' };
                }
              } catch (err) {
                    console.error(err);
                    return { success: false, message: 'Database error' };
            }
        }
    }),
}

