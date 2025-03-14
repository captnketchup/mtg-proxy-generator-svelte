import { MoxfieldClient } from '$lib/api/moxfield-client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { CardSimplified, DeckResponse } from '$lib/api/types';
import { generateA4Picture } from '$lib/server/services/canvas-service.js';
import { ScryfallClient } from '$lib/api/scryfall-client';

export const load: PageServerLoad = async ({ params }) => {
	const user = params.user;
	const deckId = params.deck;
	const response = await MoxfieldClient.GetDeck(params.deck);
	if (response?.authors?.every((x) => x.userName !== params.user)) {
		error(404, "User doesn't have a deck with given id");
	}
	const cards = MoxfieldClient.FilterCardsFromDeck(response);
	const cardsLargeImages = await ScryfallClient.ReplaceImageUrls(cards);
	const groupedCards = groupCards(cardsLargeImages, 9);

	console.log(groupedCards[0][0]);
	const image = generateA4Picture([groupedCards[0][0].image]);

	// console.log(image);

	return { groupedCards, user, deckId };
};

function groupCards(cards: CardSimplified[], chunkSize: number) {
	let chunkedCards: CardSimplified[][] = [];
	while (cards?.length > 0) {
		chunkedCards.push(cards.splice(0, chunkSize));
	}
	return chunkedCards;
}
