import chineseTokenizer from "chinese-tokenizer";
import { j as json } from "../../../chunks/index.js";
const tokenize = chineseTokenizer.loadFile("src/lib/cedict_ts.u8");
async function POST({ request, cookies }) {
  const { sentence } = await request.json();
  const tokenizedSentence = tokenize(sentence);
  return json({ tokenized: tokenizedSentence }, { status: 201 });
}
export {
  POST
};
