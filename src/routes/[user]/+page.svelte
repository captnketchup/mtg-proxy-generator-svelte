<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { MoxfieldClient } from '$lib/api/moxfield-client';
	import type { PageServerData } from './$types';
	import { deckStore } from '$lib/stores/deck-store';

	const { data } = $props();

	const colorSymbols: Record<string, string> = {
		B: '💀',
		W: '☀',
		U: '💧',
		R: '🔥',
		G: '🌳'
	};

	$effect(() => {
		if (!$deckStore.deckList.length) {
			deckStore.setDeck(data.deckResponses);
		}
	});

	$inspect(deckStore);

	let commandersImages = data.deckResponses.map(
		(deck) => MoxfieldClient.FilterCommanderFromDeck(deck)[0]
	);
	console.log('data.data');
	console.log(data.data);
	console.log('commandersImages');
	console.log(commandersImages);
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
								{#if deck.colors.length == 0}
									◊
								{:else}
									{#each deck.colors as color}
										{colorSymbols[color]}
									{/each}
								{/if}
							</Card.Description>
						</Card.Header>
						<Card.Content class="flex flex-col justify-end">
							{#if commandersImages[i] === undefined}
								<img
									class="aspect-[2.5/3.5] rounded-lg"
									src="https://backs.scryfall.io/large/2/2/222b7a3b-2321-4d4c-af19-19338b134971.jpg?1677416389"
									alt="no commander"
								/>
							{:else}
								<img
									class="aspect-[2.5/3.5] rounded-lg"
									src={commandersImages[i]?.image}
									alt={commandersImages[i]?.name}
								/>
							{/if}
						</Card.Content>
					</Card.Root>
				</a>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
