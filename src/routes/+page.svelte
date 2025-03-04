<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { goto } from '$app/navigation';
	import { error } from '@sveltejs/kit';

	let username: string = $state('');

	function onEnter(
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
        if (e.key === "Enter"){
            navigateToUser()
        }
    }

    function navigateToUser(){
        if (username === ""){
            return
        }
        goto(`/${username}`)
    }
</script>

<div class="flex size-full flex-col items-center justify-center pt-20">
	<div class="flex w-full max-w-sm flex-col gap-1.5">
		<Label class="text-lg">Brewer's name</Label>
		<Input onkeydown={onEnter} bind:value={username} class="border-2" />
		<Button variant="secondary" onclick={() => navigateToUser()}>Find me decks</Button>
	</div>
</div>
