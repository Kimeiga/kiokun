<script lang="ts">
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import { SignedIn, SignedOut, Doc, Collection } from 'sveltefire';

	const provider = new GoogleAuthProvider();

	// import chineseTokenizer from 'chinese-tokenizer';
	// const tokenize = chineseTokenizer.loadFile('src/lib/cedict_ts.u8');

	// const tokenize = require('chinese-tokenizer').loadFile('$lib/cedict_ts.u8');

	async function tokenizeChineseSentence(sentence) {
		const response = await fetch('/tokenize', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ sentence })
		});

		const data = await response.json();
		console.log(data);
		return data.tokenized;
	}

	let sentence = '';
	let tokenized = [];
	$: console.log(tokenized);

	async function handleInput() {
		tokenized = await tokenizeChineseSentence(sentence);
	}
</script>

<hr />
<!-- <input type="text" /> -->
<p>input chinese sentence</p>
<input type="text" bind:value={sentence} on:input={handleInput} />
<!-- <p>Tokenized: {tokenized}</p> -->
<div class="token-grid">
	{#each tokenized as token}
		<a href={token.simplified} class="token-link">
			<fieldset>
				<legend>
					{token.simplified}{token.simplified != token.traditional ? '/' + token.traditional : ''}
				</legend>
				{#each token.matches as match}
					<p>{match.pinyinPretty}</p>
					<p>{match.english}</p>
				{/each}
			</fieldset>
		</a>
	{/each}
</div>

<style>
	.token-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);

		max-width: 1000px;
	}
	.token-link {
		display: block;
		/* border: 1px solid black;
		border-radius: 5px;
		margin: 5px;
		padding: 5px; */
		text-decoration: none;
		color: black;
	}
</style>
