import type { CardResponse, CardSimplified } from './types';

export class ScryfallClient {
	static baseUrl = 'https://api.scryfall.com/cards/';

	static async GetPictureUrlByCardId(cardId: string) {
		const searchUrl = `${this.baseUrl}${cardId}`;
		const response = await fetch(searchUrl);

		const body: CardResponse = await response.json();
		return body.image_uris.png;
	}

	static async ReplaceImageUrls(cards: CardSimplified[]): Promise<CardSimplified[]> {
		return await Promise.all(
			cards.map(async (card) => ({
				id: card.id,
				name: card.name,
				image: await this.GetPictureUrlByCardId(card.scryfallId),
				scryfallId: card.scryfallId
			}))
		);
	}
}
