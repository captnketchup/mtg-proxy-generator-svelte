import type { CardResponse } from "./types"

export class ScryfallClient {
    static baseUrl = "https://api.scryfall.com/cards/"

    static async GetPictureUrlByCardId(cardId: string) {
        const searchUrl = `${this.baseUrl}${cardId}`
        const response = await fetch(searchUrl)

        const body: CardResponse = await response.json()
        return body.image_uris.png
    }
}