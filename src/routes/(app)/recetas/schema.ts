import { z } from 'zod';

export const seasonSchema = z.enum(['Verano', 'Invierno', 'Permanente'], {
	required_error: 'Debes seleccionar una temporada'
});
export const productTypeSchema = z.enum(['Helado', 'Bebida', 'Topping'], {
	required_error: 'Debes seleccionar un tipo de producto'
});
export const productCategorySchema = z.enum(
	['Preparacion', 'Semisorbet', 'No se cuales otros hay'],
	{
		required_error: 'Debes seleccionar una categoria de producto'
	}
);

export const formSchema = z.object({
	name: z
		.string()
		.min(1, 'Debe tener al menos 1 caracter')
		.max(250, 'Debe tener como maximo 250 caracteres'),
	season: seasonSchema,
	productType: productTypeSchema,
	productCategory: productCategorySchema
});
export type FormSchema = typeof formSchema;
