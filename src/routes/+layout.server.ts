import { redirect } from '@sveltejs/kit';

// src/routes/+layout.server.ts
export const load = async ({ locals: { getSession }, url }) => {
	if (/^\/$/.test(url.pathname)) {
		throw redirect(302, '/recetas');
	}
	return {
		session: await getSession()
	};
};
