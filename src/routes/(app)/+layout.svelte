<script>
	import { cn } from '$lib/utils';
	import { SunIcon } from 'lucide-svelte';
	import Button from '../../lib/components/ui/button/button.svelte';
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;
</script>

<nav
	class={cn(
		'fixed left-0 flex h-screen w-[22em] flex-col items-start justify-between gap-12 bg-neutral-950 px-6 py-6 text-left text-white shadow-md'
	)}
>
	<h1 class="text-3xl font-extrabold text-white">Obrador Florida</h1>
	<div>
		<a
			href="/recetas"
			class:text-yellow-500={pathname === '/recetas'}
			class="ml-0 text-lg font-bold underline-offset-2 hover:underline">Recetas</a
		>
	</div>
	<div>
		<Button variant="ghost">
			<SunIcon />
		</Button>
	</div>
</nav>
<div class="ml-auto min-h-screen w-[calc(100vw_-_22em)] bg-white dark:bg-neutral-900">
	<slot />
</div>
