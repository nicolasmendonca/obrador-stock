import { fail, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { formSchema } from './schema';

export const load: PageServerLoad = (event) => {
	const selectName = {
		select: {
			name: true
		}
	} as const;
	return {
		form: superValidate(formSchema),
		recipes: event.locals.prisma.recipe.findMany({
			select: {
				id: true,
				name: true,
				productCategory: selectName,
				productType: selectName,
				season: selectName,
				ingredients: true
			}
		}),
		seasons: event.locals.prisma.season.findMany(),
		productTypes: event.locals.prisma.productType.findMany(),
		productCategories: event.locals.prisma.productCategory.findMany()
	};
};

export const actions: Actions = {
	crearReceta: async (event) => {
		const form = await superValidate(event, formSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		} else {
			const data = { ...form.data, id: crypto.randomUUID() };
			await event.locals.prisma.recipe.create({
				data
			});
			return { form };
		}
	}
};
