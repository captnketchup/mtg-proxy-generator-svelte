<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { CardSimplified, DeckResponse } from '$lib/api/types';
	import Button from '$lib/components/ui/button/button.svelte';
	import JSZip from 'jszip';

	const { data } = $props();

	const cards = data.groupedCards;
	const exportImages = data.exportImages;

	function downloadZip() {
		console.log('downloadZip called');
		const zip = new JSZip();

		exportImages.forEach((imageBuffer, index) => {
			const blob = new Blob([imageBuffer], { type: 'image/png' });
			zip.file(`image${index + 1}.png`, blob);
		});

		zip.generateAsync({ type: 'blob' }).then((zipBlob) => {
			console.log('ZIP file created', zipBlob);

			const link = document.createElement('a');
			link.href = URL.createObjectURL(zipBlob);
			link.download = 'images.zip';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
	}
</script>

<div class="grid grid-cols-3 gap-4">
	{#each cards as groupedCards, i}
		<Card.Root class="aspect-[8.27/11.67]">
			<Card.Content class="grid grid-cols-3">
				{#each groupedCards as card}
					<li class="h-fit list-none">
						<img class="aspect-[2.5/3.5]" src={card.image} alt={card.name} />
					</li>
				{/each}
			</Card.Content>
		</Card.Root>
	{/each}
</div>

<div class="fixed bottom-0 right-0 p-4">
	<Button onclick={() => downloadZip()} variant="default">Export</Button>
</div>
