<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import type { Select as SelectPrimitive } from 'bits-ui';
	import { getFormField } from 'formsnap';
	import { cn } from '$lib/utils';

	type $$Props = SelectPrimitive.TriggerProps & {
		placeholder?: string;
	};
	type $$Events = SelectPrimitive.TriggerEvents;
	const { attrStore } = getFormField();
	export let placeholder = '';

	$: console.log($attrStore);
</script>

<Select.Trigger {...$$restProps} {...$attrStore} on:click on:keydown>
	<Select.Value
		{placeholder}
		class={cn({
			'text-black dark:text-muted-foreground': !!$attrStore.value,
			'text-neutral-500': !$attrStore.value
		})}
	/>
	<slot />
</Select.Trigger>
