import { MoxfieldClient } from '$lib/api/moxfield-client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { CardSimplified } from '$lib/api/types';

export const load: PageServerLoad = async ({ params }) => {
	const user = params.user;
	const deckId = params.deck;
	const response = await MoxfieldClient.GetDeck(params.deck);
	const cards = MoxfieldClient.FilterCardsFromDeck(response);
	const groupedCards = groupCards(cards, 9);

	return { groupedCards, user, deckId };
};

function groupCards(cards: CardSimplified[], chunkSize: number) {
	let chunkedCards: CardSimplified[][] = [];
	while (cards?.length > 0) {
		chunkedCards.push(cards.splice(0, chunkSize));
	}
	return chunkedCards;
}
