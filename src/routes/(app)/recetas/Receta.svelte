<script>
	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root>
	<Card.Header class="flex w-full flex-row justify-between border-b">
		<Card.Title>Chocolate</Card.Title>
		<Card.Description class="space-x-0 text-right">
			<p class="inline-block rounded-md border px-2 dark:border-neutral-400 dark:text-neutral-300">
				♾️ Permanente
			</p>
			<p class="inline-block rounded-md border px-2 dark:border-neutral-400 dark:text-neutral-300">
				🍦 Helado
			</p>
			<p class="inline-block rounded-md border px-2 dark:border-neutral-400 dark:text-neutral-300">
				🥛 Base de crema
			</p>
		</Card.Description>
	</Card.Header>
	<Card.Content class="py-6">
		<ul class="list-inside list-disc">
			<li>
				<strong>200 ml</strong>
				leche descremada
			</li>
			<li>
				<strong>200 gr</strong>
				cacao procesado
			</li>
			<li>
				<strong>200 ml</strong>
				crema queseyo
			</li>
		</ul>
	</Card.Content>
</Card.Root>
