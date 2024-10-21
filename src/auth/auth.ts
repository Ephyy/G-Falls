import pg from 'pg';
import { Lucia, TimeSpan } from "lucia";
import { NodePostgresAdapter } from "@lucia-auth/adapter-postgresql";

export const pool = new pg.Pool({
  host: import.meta.env.DATABASE_HOST,
  database: import.meta.env.DATABASE_DB,
  user: import.meta.env.DATABASE_USER,
  password: import.meta.env.DATABASE_PASSWORD,
  port: import.meta.env.DATABASE_PORT,
});

const adapter = new NodePostgresAdapter(pool, {
	user: "users",
	session: "sessions",
});

export const lucia = new Lucia(adapter, {
	sessionExpiresIn: new TimeSpan(1, "h"),
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	},
	getUserAttributes: (attributes) => {
		return {
			nombre: attributes.nombre,
			nombre_completo: attributes.nombre_completo,
			iniciales: attributes.iniciales,
			cargo: attributes.cargo,
			avatar: attributes.avatar			
		};
	},

});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		UserId: number;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	nombre: string;
	nombre_completo: string;
	iniciales: string;
	cargo: string;
	avatar?: string;
}