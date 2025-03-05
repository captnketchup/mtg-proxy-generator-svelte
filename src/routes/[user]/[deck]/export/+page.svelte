<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { CardSimplified, DeckResponse } from '$lib/api/types';
	import Button from '$lib/components/ui/button/button.svelte';

	const { data } = $props();

	const cards = data.groupedCards;
</script>

<div class="grid grid-cols-3 gap-4">
	{#each cards as groupedCards}
		<Card.Root class="aspect-[8.27/11.67]">
			<Card.Content class="grid grid-cols-3">
				{#each groupedCards as card}
					<li class="h-fit list-none">
						<img class="aspect-[2.5/3.5]" src={card.image} alt={card.name} />
					</li>
				{/each}
			</Card.Content>
		</Card.Root>
	{/each}
</div>

<div class="fixed bottom-0 right-0 p-4">
	<Button variant="default">Export</Button>
</div>
