import cedict from 'coupling-dict-chinese-updated';
import chineseLexicon from 'chinese-lexicon';

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

	// let result = await cedict.searchByChineseAsync(params.word)
	let result = chineseLexicon.getEntries(params.word);

	let multipleEntryResult;

	// chineseLexicon.allEntries.forEach(entry => {
	// 	if (entry.length > 1) {
	// 		multipleEntryResult  = entry;
	// 	}
	// });

	if (!result) {
		throw error(404, 'Not found');
	}
	return {
		word: params.word,
		entry: result,
		// multipleEntryResult: chineseLexicon.allEntries
	}
}