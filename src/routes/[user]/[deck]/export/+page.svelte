<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { CardSimplified, DeckResponse } from '$lib/api/types';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';

	import type { QueryParams } from '$lib/api/internal';

	const { data } = $props();

	const cards = data.groupedCards;

	function createExportUrl(options?: QueryParams): string {
		const url = `/api/export/${data.deckId}`;
		const params = new URLSearchParams({
			scaling: String(options?.scaling ?? 0.5)
		});

		return url + '?' + params.toString();
	}

	let scaling = $state(0.1);

	const exportUrl = $derived(createExportUrl({ scaling }));
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
	<div class="flex flex-row gap-2">
		<Input type="number" min={0.1} max={1} step={0.1} bind:value={scaling} />
		<a href={exportUrl}>
			<Button variant="default">Export</Button>
		</a>
	</div>
</div>
