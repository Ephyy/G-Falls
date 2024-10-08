import { Lucia, TimeSpan } from "lucia";
import { NodePostgresAdapter } from "@lucia-auth/adapter-postgresql";
import { pool, tableNames } from "@/db/db.ts";
const adapter = new NodePostgresAdapter(pool, tableNames);

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
			username: attributes.username,
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
	username: string;
}