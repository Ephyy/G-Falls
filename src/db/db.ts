import pg from "pg";

export const pool = new pg.Pool(
    {
        host: import.meta.env.DATABASE_HOST,
        database:  import.meta.env.DATABASE_DB,
        user: import.meta.env.DATABASE_USER,
        password:  import.meta.env.DATABASE_PASSWORD,
        port: import.meta.env.DATABASE_PORT,
    }
);
