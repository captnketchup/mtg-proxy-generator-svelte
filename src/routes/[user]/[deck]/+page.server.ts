import { MoxfieldClient } from '$lib/api/moxfield-client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const user = params.user;
	const deckId = params.deck;
	const response = await MoxfieldClient.GetDeck(params.deck);
	const cards = MoxfieldClient.FilterCardsFromDeck(response);
	return { cards, user, deckId };
};
