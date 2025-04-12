import { MoxfieldClient } from '$lib/api/moxfield-client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const user = params.user;
	const userDecks = await MoxfieldClient.GetDecksByUser(user);
	const commanderDecks = MoxfieldClient.FilterCommanderDecks(userDecks);

	if (commanderDecks === undefined) {
		error(404, 'Decks per user not found');
	}
	let deckResponses = await Promise.all(
		commanderDecks.data.map(async (deck) => await MoxfieldClient.GetDeck(deck.publicId))
	);
	deckResponses = MoxfieldClient.FilterValidDecks(deckResponses);
	return { ...commanderDecks, user, deckResponses };
};
