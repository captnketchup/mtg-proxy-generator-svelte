import { createCanvas, loadImage } from 'canvas';

export async function generateA4Picture(images: string[]) {
	console.log('Generating pictures...');
	const scale = 0.25;
	const padding = 200 * scale;
	const canvas = createCanvas(4960 * scale, 7016 * scale);
	const ctx = canvas.getContext('2d');
	const imageWidth = 1500 * scale;
	const imageHeight = Math.round(1500 / 0.714) * scale;
	const downloadedImagesPromise = images.map((x) => loadImage(x));
	const downloadedImages = await Promise.all(downloadedImagesPromise);
	for (let index = 0; index < downloadedImages.length; index++) {
		ctx.drawImage(
			downloadedImages[index],
			(index % 3) * imageWidth + padding,
			Math.floor(index / 3) * imageHeight + padding,
			imageWidth,
			imageHeight
		);
	}

	return canvas.toBuffer('image/png');
}
