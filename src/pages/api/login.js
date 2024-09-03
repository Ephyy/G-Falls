

import { Client } from 'pg';
import bcrypt from 'bcryptjs';

export async function post({ request }) {
    
  const { username, password } = await request.json();

  // Conectarse a la base de datos
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();

  try {
    // Consultar al usuario por el nombre de usuario
    const res = await client.query('SELECT * FROM users WHERE username = $1', [username]);

    if (res.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const user = res.rows[0];

    // Verificar la contraseña
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
    }

    // Si todo está bien, puedes generar un token o manejar la sesión como prefieras.
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  } finally {
    await client.end();
  }
}
