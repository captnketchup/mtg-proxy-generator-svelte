import axios from "axios"
import type { DeckResponse, UserDecksResponse } from "./types"

export class MoxfieldClient {
    static baseUrl = "https://api2.moxfield.com"
    static headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Priority": "u=0, i"
    }

    static async GetDecksByUser(userName: string) {
        const paramsObj = {
            includePinned: "true",
            showIllegal: "true",
            authorUserNames: "captnketchup",
            pageNumber: "1",
            pageSize: "12",
            sortType: "updated",
            sortDirection: "descending",
            board: "mainboard"
        }
        const searchParams = new URLSearchParams(paramsObj)
        const searchUrl = `${this.baseUrl}/v2/decks/search-sfw?${searchParams.toString()}`
        const response = await fetch(searchUrl)

        const body: UserDecksResponse = await response.json()
        return body
    }

    static async GetDeck(deckId: string) {
        const searchUrl = `${this.baseUrl}/v3/decks/all/${deckId}`
        console.log("GECISFASZ")
        console.log(searchUrl)
        const response = await fetch(searchUrl)
        const body: DeckResponse = await response.json()
        console.log(body)
        return this.FilterCardsFromDeck(body)
    }

    static FilterCardsFromDeck(deckResponse: DeckResponse) {
        return Object.values(deckResponse.boards.mainboard.cards)
            .map((c) => (new CardSimplified(
                c.card.id,
                c.card.name
            )))
    }
}

class CardSimplified {
    id: string
    name: string

    constructor(id: string, name: string) {
        this.id = id,
            this.name = name
    }

    public get image(): string {
        return `https://assets.moxfield.net/cards/card-${this.id}-normal.jpg`
    }

}