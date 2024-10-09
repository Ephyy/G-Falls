import { defineAction } from 'astro:actions';
import { user } from './user';
import { nota } from './nota';
import { pool } from '@/db/db.ts';

export const server = {
    getUsers: defineAction({
        handler: async () => {
            
            const client = await pool.connect();
            const res = await client.query(`
                SELECT 
                  users.id, 
                  users.nombre, 
                  users.nombre_completo, 
                  users.cargo, 
                  notas.nota
                FROM 
                  users
                JOIN 
                  notas 
                ON 
                  users.id = notas.user_id
            `);
            client.release();

            return res.rows;

        }
    }),
    user,
    nota
}

