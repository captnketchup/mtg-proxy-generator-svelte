import { MoxfieldClient } from "$lib/api/moxfield-client"
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const user = "captnketchup"
    const userDecks = await MoxfieldClient.GetDecksByUser(user)
    console.log(await MoxfieldClient.GetDeck("XIflaXgPTUqf94Agu1dK5w"))
    const data = (await MoxfieldClient.GetDeck("XIflaXgPTUqf94Agu1dK5w")).map(x => {
        return {
            id: x.id,
            name: x.name,
            image: x.image
        }
    })
    return {
        data
    }
};