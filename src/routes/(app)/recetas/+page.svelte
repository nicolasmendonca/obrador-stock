<script>
	import Receta from './Receta.svelte';

	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<main class="mx-auto max-w-screen-lg">
	<header class="sticky top-0 bg-neutral-900 py-4">
		<div class="flex py-12">
			<h1 class="flex-grow text-4xl font-extrabold text-black dark:text-white">Recetas</h1>

			<Button class="rounded-lg bg-blue-500 font-semibold text-white">Crear receta</Button>
		</div>

		<div class="mb-4 flex items-center justify-between">
			<Input
				type="search"
				placeholder="🔍  Buscar..."
				aria-label="Buscar"
				class="w-72 dark:border-neutral-600"
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
	</div>
</main>
