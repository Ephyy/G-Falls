// db.ts
import pg from 'pg';


const { Pool } = pg;


export const prerender = false;

const pool = new Pool({
  user: import.meta.env.DATABASE_USER,
  host: import.meta.env.DATABASE_HOST,
  database:  import.meta.env.DATABASE_NAME,
  password:  import.meta.env.DATABASE_PASSWORD,
  port: import.meta.env.DATABASE_PORT,
});

export default pool;