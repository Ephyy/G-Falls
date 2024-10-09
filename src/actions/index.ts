import { defineAction } from 'astro:actions';
import { user } from './user';
import { pool } from '@/db/db.ts';

export const server = {
    getUsers: defineAction({
        handler: async () => {
            
            const client = await pool.connect();
            const res = await client.query(
                `SELECT * FROM users`
            );
            client.release();

            return res.rows;

        }
    }),
    user,
}

