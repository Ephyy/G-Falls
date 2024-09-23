import { lucia } from "./auth/auth.ts";
import { defineMiddleware } from "astro:middleware";

// export const onRequest = async (context, next) => {
//     const response = await next();
//     if (response.status === 404) {
//       return context.rewrite("/");
//     }
//     return response;
// }

export const onRequest = defineMiddleware(async (context, next) => {
	const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
	
	if (!sessionId) {
		context.locals.user = null;
		context.locals.session = null;
		return next();
	}

	const { session, user } = await lucia.validateSession(sessionId);
	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}
	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}
	context.locals.session = session;
	context.locals.user = user;
	// console.log("session", context.locals.session);
	// console.log("user loaded", context.locals.user);
	
	return next();
});