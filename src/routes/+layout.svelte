<script>
	import { cn } from '../lib/utils';
	import '../app.postcss';
</script>

<nav
	class={cn(
		'sticky top-0 flex w-full items-center justify-between bg-white px-6 py-6 shadow-md lg:space-x-6'
	)}
>
	<h1 class="text-3xl font-extrabold text-[#2b367d]">Obrador Florida</h1>
	<div class="ml-auto">
		<a href="/produccion" class="font-semibold text-[#ed8e22] underline-offset-2 hover:underline"
			>Producción</a
		>
	</div>
</nav>
<div class="min-h-screen bg-[#2b367d] text-white">
	<slot />
</div>
