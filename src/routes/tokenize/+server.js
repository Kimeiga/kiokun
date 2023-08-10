import chineseTokenizer from 'chinese-tokenizer';

const tokenize = chineseTokenizer.loadFile('src/lib/cedict_ts.u8');

import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
  const {sentence }= await request.json();
  const tokenizedSentence = tokenize(sentence);
	

	return json({ tokenized: tokenizedSentence }, { status: 201 });
}
