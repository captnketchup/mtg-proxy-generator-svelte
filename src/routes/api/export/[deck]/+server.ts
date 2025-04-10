import JSZip from 'jszip';
import { generateA4Picture } from '$lib/server/services/canvas-service';
import { MoxfieldClient } from '$lib/api/moxfield-client';
import { error } from '@sveltejs/kit';
import { ScryfallClient } from '$lib/api/scryfall-client';

export async function GET({ params, request, url }) {
	if (params.deck.length != 22) {
		throw error(400, 'Invalid deck id');
	}
	const scale = Number(url.searchParams.get('scaling') ?? 0.25);
	const response = await MoxfieldClient.GetDeck(params.deck);
	const cards = MoxfieldClient.FilterCardsFromDeck(response);
	const cardsLargeImages = await ScryfallClient.ReplaceImageUrls(cards);
	const groupedCards = groupEntites(cardsLargeImages, 9);
	const imageStrings = groupedCards.map((group) => group.map((element) => element.image));
	const exportImages = await Promise.all(
		imageStrings.map((group) => generateA4Picture(group, scale))
	);

	const zip = new JSZip();
	exportImages.forEach((imageBuffer, index) => {
		zip.file(`image${index + 1}.png`, imageBuffer);
	});

	try {
		const zipBlob = await zip.generateAsync({ type: 'blob' });

		return new Response(zipBlob, {
			headers: {
				'Content-Type': 'application/zip'
			}
		});
	} catch (message) {
		return error(500, `${message}`);
	}
}

function groupEntites<T>(entities: T[], chunkSize: number) {
	let chunkedEntities: T[][] = [];
	while (entities?.length > 0) {
		chunkedEntities.push(entities.splice(0, chunkSize));
	}
	return chunkedEntities;
}
