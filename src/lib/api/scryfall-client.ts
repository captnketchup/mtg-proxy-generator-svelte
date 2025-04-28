import type { CardResponse, CardSimplified } from './types';

export class ScryfallClient {
	static baseUrl = 'https://api.scryfall.com/cards/';

	static async GetPictureUrlByCardId(cardId: string, back: boolean): Promise<string> {
		const searchUrl = `${this.baseUrl}${cardId}`;
		const response = await fetch(searchUrl);
		const body: CardResponse = await response.json();
		if (body.card_faces !== undefined) {
			if (back === false) {
				if (body.card_faces[0].image_uris !== undefined) {
					console.log(body.card_faces[0].image_uris.png);
					return body.card_faces[0].image_uris.png;
				}
			}
			if (body.card_faces[1].image_uris !== undefined) {
				return body.card_faces[1].image_uris.png.replace('/front/', '/back/');
			}
		}
		return body.image_uris.png;
	}

	static async ReplaceImageUrls(cards: CardSimplified[]): Promise<CardSimplified[]> {
		const scryfallCards: CardSimplified[] = [];
		const doubleSidedCards = ScryfallClient.#handleDoubleSidedCards(cards);
		scryfallCards.push(...(await doubleSidedCards));
		let remainingCards = cards.filter(
			async (card) =>
				!(await doubleSidedCards).some((dsCard) => dsCard.scryfallId === card.scryfallId)
		);
		remainingCards = await Promise.all(
			cards.map(async (card) => ({
				id: card.id,
				name: card.name,
				image: await this.GetPictureUrlByCardId(card.scryfallId, false),
				scryfallId: card.scryfallId
			}))
		);
		scryfallCards.push(...remainingCards);
		return scryfallCards;
	}

	static async #handleDoubleSidedCards(cards: CardSimplified[]): Promise<CardSimplified[]> {
		const doubleSided: CardSimplified[] = [];
		for (let i = 0; i < cards.length; i++) {
			for (let j = i + 1; j < cards.length; j++) {
				if (cards[i].scryfallId === cards[j].scryfallId) {
					if (doubleSided.some((x) => cards[i]) || doubleSided.some((x) => cards[j])) {
						continue;
					}
					const cardFront: CardSimplified = {
						id: cards[i].id,
						name: cards[i].name,
						image: await this.GetPictureUrlByCardId(cards[i].scryfallId, false),
						scryfallId: cards[i].scryfallId
					};
					const cardBack: CardSimplified = {
						id: cards[j].id,
						name: cards[j].name,
						image: await this.GetPictureUrlByCardId(cards[j].scryfallId, true),
						scryfallId: cards[j].scryfallId
					};
					doubleSided.push(cardFront);
					doubleSided.push(cardBack);
				}
			}
		}
		return doubleSided;
	}
}
