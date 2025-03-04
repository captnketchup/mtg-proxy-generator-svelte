import axios from "axios"
import type { UserDecksResponse } from "./types"

class MoxfieldClient {
    static baseUrl = "https://api2.moxfield.com"

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
        const response = await axios.get(searchUrl)

        const body: UserDecksResponse = await response.data
        return body
    }

    static async GetDeck(deckId: string) {
        const searchUrl = `${this.baseUrl}/v3/decks/all/${deckId}`
        const response = await axios.get(searchUrl)
        const body = await response.data
    }
}

class Card {
    id: string
    name: string

    constructor(id: string, name: string) {
        this.id = id,
        this.name = name
    }

    public get image(): string {
        return `https://assets.moxfield.net/cards/card-${self.id}-normal.jpg`
    }

}