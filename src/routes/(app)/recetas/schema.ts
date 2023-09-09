import { z } from 'zod';

export const formSchema = z.object({
	name: z
		.string()
		.min(1, 'Debe tener al menos 1 caracter')
		.max(250, 'Debe tener como maximo 250 caracteres'),
	seasonId: z
		.string({
			required_error: 'Debes seleccionar una temporada'
		})
		.uuid(),
	productTypeId: z
		.string({
			required_error: 'Debes seleccionar un tipo de producto'
		})
		.uuid(),
	productCategoryId: z
		.string({
			required_error: 'Debes seleccionar una categoria'
		})
		.uuid()
});
export type FormSchema = typeof formSchema;
