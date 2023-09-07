<script lang="ts">
	import type { PageData } from './$types';
	import { formSchema, productCategorySchema, productTypeSchema, seasonSchema } from './schema';
	import Receta from './Receta.svelte';

	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { invalidate } from '$app/navigation';

	export let data: PageData;
	let isCreateDialogOpen = false;
</script>

<Dialog.Root
	open={isCreateDialogOpen}
	onOpenChange={(newVal) => {
		isCreateDialogOpen = !!newVal;
	}}
>
	<main class="mx-auto max-w-screen-lg">
		<header class="sticky top-0 bg-white py-4 dark:bg-neutral-900">
			<div class="flex py-12">
				<h1 class="flex-grow text-4xl font-extrabold text-black dark:text-white">Recetas</h1>

				<Dialog.Trigger
					on:click={() => {
						isCreateDialogOpen = true;
					}}
				>
					<Button variant="primary">Crear receta</Button>
				</Dialog.Trigger>
			</div>

			<div class="mb-4 flex items-center justify-between">
				<Input
					type="search"
					placeholder="🔍  Buscar..."
					aria-label="Buscar"
					class="w-72 border-neutral-300 dark:border-neutral-600"
				/>
				<div class="mb-4 space-x-2">
					<a href="/" class="text-blue-400 hover:underline focus:underline">Por Categoría</a>
					<span>|</span>
					<a href="/" class="text-blue-400 hover:underline focus:underline">Por temporada</a>
				</div>
			</div>
		</header>

		<div class="space-y-8">
			<Receta></Receta>
			<Receta></Receta>
			<Receta></Receta>
			<Receta></Receta>
			<Receta></Receta>
			<Receta></Receta>
		</div>
	</main>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Nueva Receta</Dialog.Title>
			<Dialog.Description class="pt-4">
				<Form.Root
					method="POST"
					action="?/crearReceta"
					schema={formSchema}
					form={data.form}
					let:config
					class="space-y-4"
					options={{
						onResult: ({ result }) => {
							if (result.type === 'success') {
								invalidate('/recetas');
								isCreateDialogOpen = false;
							}
						}
					}}
				>
					<Form.Field {config} name="name">
						<Form.Item>
							<Form.Label>Nombre</Form.Label>
							<Form.Input placeholder="🍫 Chocolate 1kg" />
							<Form.Validation />
						</Form.Item>
					</Form.Field>
					<Form.Field {config} name="season">
						<Form.Item>
							<Form.Label>Temporada</Form.Label>
							<Form.Select>
								<Form.SelectTrigger placeholder="☀️ Verano" />
								<Form.SelectContent>
									<Form.SelectGroup>
										{#each Object.values(seasonSchema.Values) as season}
											<Form.SelectItem value={season}>{season}</Form.SelectItem>
										{/each}
									</Form.SelectGroup>
								</Form.SelectContent>
							</Form.Select>
							<Form.Validation />
						</Form.Item>
					</Form.Field>
					<Form.Field {config} name="productType">
						<Form.Item>
							<Form.Label>Producto</Form.Label>
							<Form.Select>
								<Form.SelectTrigger placeholder="🍦 Helado" />
								<Form.SelectContent>
									<Form.SelectGroup>
										{#each Object.values(productTypeSchema.Values) as productType}
											<Form.SelectItem value={productType}>{productType}</Form.SelectItem>
										{/each}
									</Form.SelectGroup>
								</Form.SelectContent>
							</Form.Select>
							<Form.Validation />
						</Form.Item>
					</Form.Field>
					<Form.Field {config} name="productCategory">
						<Form.Item>
							<Form.Label>Categoria de producto</Form.Label>
							<Form.Select>
								<Form.SelectTrigger placeholder="🥣 Mix" />
								<Form.SelectContent>
									<Form.SelectGroup>
										{#each Object.values(productCategorySchema.Values) as productCategory}
											<Form.SelectItem value={productCategory}>{productCategory}</Form.SelectItem>
										{/each}
									</Form.SelectGroup>
								</Form.SelectContent>
							</Form.Select>
							<Form.Validation />
						</Form.Item>
					</Form.Field>

					<Button type="submit" variant="primary">Crear receta</Button>
				</Form.Root>
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>

<pre>{JSON.stringify(data.recipes, null, 2)}</pre>
