import type { DeckResponse } from '$lib/api/types';
import { writable } from 'svelte/store';

interface DeckStore {
	deckList: DeckResponse[];
	timeStamp: Date | null;
}

function createDeckStore() {
	const { set, subscribe, update } = writable<DeckStore>({ deckList: [], timeStamp: null });
	return {
		subscribe,
		setDeck: (newDeckResponse: DeckResponse | DeckResponse[]) =>
			set({
				deckList: Array.isArray(newDeckResponse) ? newDeckResponse : [newDeckResponse],
				timeStamp: new Date()
			}),
		reset: () => set({ deckList: [], timeStamp: null })
	};
}

export const deckStore = createDeckStore();
