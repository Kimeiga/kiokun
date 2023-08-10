import "coupling-dict-chinese-updated";
import chineseLexicon from "chinese-lexicon";
import { e as error } from "../../../chunks/index.js";
async function load({ params }) {
  let result = chineseLexicon.getEntries(params.word);
  if (!result) {
    throw error(404, "Not found");
  }
  return {
    word: params.word,
    entry: result
    // multipleEntryResult: chineseLexicon.allEntries
  };
}
export {
  load
};
