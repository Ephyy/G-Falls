import { Lucia, TimeSpan } from "lucia";
import { NodePostgresAdapter } from "@lucia-auth/adapter-postgresql";
import { pool } from "@/db/db.ts";
import { string } from "astro/zod";
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