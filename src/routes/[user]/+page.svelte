<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { MoxfieldClient } from '$lib/api/moxfield-client';
	import type { PageServerData } from './$types';
	import { deckStore } from '$lib/stores/deck-store';

	const { data } = $props();

	$effect(() => {
		if (!$deckStore.deckList.length) {
			deckStore.setDeck(data.deckResponses);
		}
	});

	$inspect(deckStore);

	let commandersImages = data.deckResponses.map(
		(deck) => MoxfieldClient.FilterCommanderFromDeck(deck)[0]
	);
</script>

<Card.Root class="h-fit">
	<Card.Header>
		<Card.Title>
			{data.user}'s decks
		</Card.Title>
	</Card.Header>
	<Card.Content>
		<ul class="grid grid-cols-4 gap-3">
			{#each data.data as deck, i (deck.id)}
				<a href={`${data.user}/${deck.publicId}`}>
					<Card.Root class="size-full transition hover:scale-105">
						<Card.Header>
							<Card.Title>{deck.name}</Card.Title>
							<Card.Description>
								{#each deck.colors as color}
									{color}
								{/each}
							</Card.Description>
						</Card.Header>
						<Card.Content class="flex flex-col justify-end">
							<img
								class="aspect-[2.5/3.5] rounded-lg"
								src={commandersImages[i]?.image}
								alt={commandersImages[i]?.name}
							/>
						</Card.Content>
					</Card.Root>
				</a>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
