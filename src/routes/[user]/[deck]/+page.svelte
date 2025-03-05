<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';

	const { data } = $props();
</script>

<ul class="grid grid-cols-4 gap-4">
	{#each data.cards as card}
		<li>
			<img class="aspect-[2.5/3.5]" src={card.image} alt={card.name} />
		</li>
	{/each}
</ul>

<div class="fixed bottom-0 right-0 p-4">
	<Button variant="default" onclick={() => goto(`/${data.user}/${data.deckId}/export`)}
		>Export preview</Button
	>
</div>
