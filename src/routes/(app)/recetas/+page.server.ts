import type { z } from 'zod';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema';
import { fail, type Actions } from '@sveltejs/kit';

const recipes: Array<z.infer<typeof formSchema>> = [];

export const load: PageServerLoad = () => {
	return {
		form: superValidate(formSchema),
		recipes
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
			recipes.push({
				name: form.data.name,
				season: form.data.season,
				productType: form.data.productType,
				productCategory: form.data.productCategory
			});
			return { form };
		}
	}
};
