<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="grid grid-cols-2">
	<div class="flex min-h-screen items-center justify-center">
		<Auth
			supabaseClient={data.supabase}
			providers={['google']}
			onlyThirdPartyProviders
			additionalData={{}}
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{
				theme: ThemeSupa,
				className: {
					button: ''
				}
			}}
		/>
	</div>

	<div class="min-h-screen bg-black"></div>
</div>

<style lang="postcss">
	:global(.supabase-input) {
		@apply rounded-lg bg-green-500 p-4;
	}
	:global(.supabase-container) {
		@apply align-middle;
	}
</style>
