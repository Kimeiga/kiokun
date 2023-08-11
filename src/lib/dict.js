import chineseTokenizer from 'chinese-tokenizer';
// import cedict from './cedict_ts.u8';
// // //  console.log(process.cwd());
export const tokenize = chineseTokenizer.loadFile('./src/lib/cedict_ts.u8');


// // import fs from 'fs';
// // import path from 'path';

// // // Get the URL of the current module
// // const url = new URL(import.meta.url);

// // // Convert the URL to a file path
// // const dir = path.dirname(url.pathname);
// // // Define the path to your .u8 file in the same directory as this script
// // const filePath = path.join(dir, '..', 'cedict_ts.u8');

// // // Read the file as a Buffer
// // const fileBuffer = fs.readFileSync(filePath);

// // // Assuming that chineseTokenizer.loadFile accepts a Buffer or a string
// // export const tokenize = chineseTokenizer.loadFile(fileBuffer);
