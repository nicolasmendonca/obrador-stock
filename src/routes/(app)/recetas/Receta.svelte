<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Recipe } from '@prisma/client';

	export let recipeName: string;
	export let productCategoryName: string;
	export let productTypeName: string;
	export let seasonName: string;
</script>

<Card.Root>
	<Card.Header class="flex w-full flex-row justify-between border-b">
		<Card.Title>{recipeName}</Card.Title>
		<Card.Description class="space-x-0 text-right">
			<p class="inline-block rounded-md border px-2 dark:border-neutral-400 dark:text-neutral-300">
				{seasonName}
			</p>
			<p class="inline-block rounded-md border px-2 dark:border-neutral-400 dark:text-neutral-300">
				{productTypeName}
			</p>
			<p class="inline-block rounded-md border px-2 dark:border-neutral-400 dark:text-neutral-300">
				{productCategoryName}
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
