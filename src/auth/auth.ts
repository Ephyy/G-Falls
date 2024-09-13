import { Lucia } from "lucia";
import { NodePostgresAdapter } from "@lucia-auth/adapter-postgresql";
import pg from "pg";

const pool = new pg.Pool(
    {
        host: import.meta.env.DATABASE_HOST,
        database:  import.meta.env.DATABASE_DB,
        user: import.meta.env.DATABASE_USER,
        password:  import.meta.env.DATABASE_PASSWORD,
        port: import.meta.env.DATABASE_PORT,
    }
);

const adapter = new NodePostgresAdapter(pool, {
	user: "User",
	session: "Sessions"
});

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	}
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
	}
}
