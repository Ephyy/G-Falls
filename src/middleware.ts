import { lucia } from "./auth/auth.ts";
import { defineMiddleware, sequence} from "astro:middleware";


const redirection = defineMiddleware(async (context, next) => {
	// Verificar si la URL comienza con '/g-cursos/'
	if (context.url.pathname.startsWith('/g-cursos/')) {
		// Redirigir a '/g-cursos/historial'
		return context.redirect('/g-cursos/historial', 302);
	}
	return next();
});

const auth =  defineMiddleware(async (context, next) => {
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

	return next();
});

export const onRequest = sequence(redirection, auth);