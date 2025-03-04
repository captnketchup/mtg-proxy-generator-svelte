<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { MoxfieldClient } from '$lib/api/moxfield-client';
	import type { PageServerData } from './$types';

	const { data } = $props();
	let commandersImages = data.deckResponses.map(
		(deck) => MoxfieldClient.FilterCommanderFromDeck(deck)[0]
	);
</script>

<ul class="grid grid-cols-4 gap-3">
	{#each data.data as deck, i (deck.id)}
		<a href={`${data.user}/${deck.publicId}`}>
			<Card.Root class="size-full hover:scale-105 transition">
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
						src={commandersImages[i].image}
						alt={commandersImages[i].name}
						/>
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</ul>
