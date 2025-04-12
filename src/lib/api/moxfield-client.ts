import type { CardSimplified, Deck, DeckResponse, UserDecksResponse } from './types';

export class MoxfieldClient {
	static baseUrl = 'https://api2.moxfield.com';
	static headers = {
		'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0',
		Accept: 'application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
		'Accept-Language': 'en-US,en;q=0.5',
		'Upgrade-Insecure-Requests': '1',
		'Sec-Fetch-Dest': 'document',
		'Sec-Fetch-Mode': 'navigate',
		'Sec-Fetch-Site': 'none',
		'Sec-Fetch-User': '?1',
		Priority: 'u=0, i'
	};

	static async GetDecksByUser(userName: string) {
		const paramsObj = {
			includePinned: 'true',
			showIllegal: 'true',
			authorUserNames: userName,
			pageNumber: '1',
			pageSize: '12',
			sortType: 'updated',
			sortDirection: 'descending',
			board: 'mainboard'
		};
		const searchParams = new URLSearchParams(paramsObj);
		const searchUrl = `${this.baseUrl}/v2/decks/search-sfw?${searchParams.toString()}`;
		const response = await fetch(searchUrl);

		const body: UserDecksResponse = await response.json();
		return body;
	}

	static async GetDeck(deckId: string) {
		const searchUrl = `${this.baseUrl}/v3/decks/all/${deckId}`;
		const response = await fetch(searchUrl);
		const body: DeckResponse = await response.json();
		return body;
	}

	static FilterCardsFromDeck(deckResponse: DeckResponse | undefined): CardSimplified[] {
		if (deckResponse === undefined) return [];

		const simplifiedCards: CardSimplified[] = [];

		for (const c of Object.values(deckResponse.boards.mainboard.cards)) {
			const baseCard = c.card;

			if (baseCard.card_faces.length > 0) {
				for (const face of baseCard.card_faces) {
					simplifiedCards.push({
						id: face.id,
						name: face.name,
						image: `https://assets.moxfield.net/cards/card-face-${face.id}-normal.jpg`,
						scryfallId: baseCard.scryfall_id
					});
				}
			} else {
				simplifiedCards.push({
					id: c.card.id,
					name: c.card.name,
					image: `https://assets.moxfield.net/cards/card-${c.card.id}-normal.jpg`,
					scryfallId: c.card.scryfall_id
				});
			}
		}
		return simplifiedCards;
	}

	static FilterCommanderFromDeck(deckResponse: DeckResponse): CardSimplified[] {
		return Object.values(deckResponse.boards.commanders.cards).map((c) => ({
			id: c.card.id,
			name: c.card.name,
			image: `https://assets.moxfield.net/cards/card-${c.card.id}-normal.jpg`,
			scryfallId: c.card.scryfall_id
		}));
	}

	static FilterValidDecks(deckResponses: DeckResponse[]) {
		return deckResponses.filter((x) => Object.keys(x.boards.commanders.cards).length);
	}

	static FilterCommanderDecks(deckResponse: UserDecksResponse) {
		const filteredData = deckResponse.data.filter((x) => x.format === 'commander');
		deckResponse.data = filteredData;
		return deckResponse;
	}
}
