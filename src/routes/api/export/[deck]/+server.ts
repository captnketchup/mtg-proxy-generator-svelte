import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { generateA4Picture } from '$lib/server/services/canvas-service';
import { MoxfieldClient } from '$lib/api/moxfield-client';
import { ScryfallClient } from '$lib/api/scryfall-client';
import type { CardSimplified } from '$lib/api/types';
import AdmZip from 'adm-zip';

export const GET: RequestHandler = async ({ url }) => {
	// const testString = 'https://assets.moxfield.net/cards/card-LKq0m-normal.jpg';
	// const response = await generateA4Picture([testString]);

	const deckId = url.pathname.split('/').at(-1);
	if (!deckId?.length) {
		throw error(404);
	}

	const deckResponse = await MoxfieldClient.GetDeck(deckId);
	const cards = MoxfieldClient.FilterCardsFromDeck(deckResponse);
	const cardsLargeImages = await ScryfallClient.ReplaceImageUrls(cards);
	const groupedCards = groupCards(cardsLargeImages, 9);

	// const results = groupedCards.map((element) => {
	// 	console.log('Mapping elements...');
	// 	const imageUrls = element.map((c) => c.image);
	// 	const response = generateA4Picture(imageUrls);
	// 	return response;
	// });

	// const data = await Promise.all(results);

	const imageUrls = groupedCards[0].map((c) => c.image);
	const response = await generateA4Picture(imageUrls);

	// console.log('Zipping data...');
	// const zip = new AdmZip();
	// const results = groupedCards.map(async (element) => {
	// 	console.log('Mapping elements...');
	// 	const imageUrls = element.map((c) => c.image);
	// 	const response = await generateA4Picture(imageUrls);
	// 	zip.addFile('test', response);
	// 	return response;
	// });

	// const data = await Promise.all(results);

	return new Response(response, {
		status: 200,
		headers: {
			'Content-Type': 'image/png',
			// 'Content-Encoding': 'gzip',
			'Content-Disposition': 'filename="proxies5.png"'
		}
	});
};

function groupCards(cards: CardSimplified[], chunkSize: number) {
	let chunkedCards: CardSimplified[][] = [];
	while (cards?.length > 0) {
		chunkedCards.push(cards.splice(0, chunkSize));
	}
	return chunkedCards;
}
