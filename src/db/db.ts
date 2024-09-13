// db.ts
import pg from 'pg';
const { Pool } = pg;

export const prerender = false;


const pool = new Pool({
  host: import.meta.env.DATABASE_HOST,
  database:  import.meta.env.DATABASE_DB,
  user: import.meta.env.DATABASE_USER,
  password:  import.meta.env.DATABASE_PASSWORD,
  port: import.meta.env.DATABASE_PORT,
});

export default pool;