<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { goto } from '$app/navigation';

	let username: string = $state('');
	let usernameError = $state(false);
	let errorMessage = $state('');

	function onEnter(
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		if (e.key === 'Enter') {
			navigateToUser();
		}
	}

	async function navigateToUser() {
		if (username === '') {
			return;
		}
		try {
			const result = await fetch(`/api/user/${username}`);
			if (!result.ok) {
				usernameError = true;
				errorMessage = 'User not found';
				console.error('User not found');
				return;
			}

			const user = await result.json();
			if (user.data.length == 0) {
				usernameError = true;
				errorMessage = 'User not found';
				console.error('User not found');
				return;
			}
			goto(`/${username}`);
		} catch (error) {
			usernameError = true;
			errorMessage = 'Something went wrong. Please try again.';
			console.error('Error fetching user:', error);
		}
	}
</script>

<div class="flex size-full flex-col items-center justify-center pt-20">
	<div class="flex w-full max-w-sm flex-col gap-1.5">
		<Label class="text-lg">Brewer's name</Label>
		<Input
			onkeydown={onEnter}
			bind:value={username}
			class={`border-2 ${usernameError ? 'border-red-500' : ''}`}
		/>
		{#if usernameError}
			<p class="mt-1 text-sm text-red-600">{errorMessage}</p>
		{/if}
		<Button variant="secondary" onclick={() => navigateToUser()}>Find me decks</Button>
	</div>
</div>
