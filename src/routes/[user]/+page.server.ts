import { MoxfieldClient } from "$lib/api/moxfield-client"
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const user = params.user
    const userDecks = await MoxfieldClient.GetDecksByUser(user)
    if (userDecks === undefined){
        error(404, "Decks per user not found")
    }
    const deckResponses = await Promise.all(userDecks.data.map(
        async deck => await MoxfieldClient.GetDeck(deck.publicId)
    ))
    return {...userDecks, user, deckResponses}
};