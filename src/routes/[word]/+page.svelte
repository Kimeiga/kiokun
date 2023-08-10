<script>
	export let data;

	console.log(data);
	import { doc, setDoc } from 'firebase/firestore';
	import { SignedIn, SignedOut, Doc, Collection } from 'sveltefire';
	import { firestore } from '$lib/firebase'; // your firestore instance
	// let editingNote = false;
	// let newNote = '';

	// function editNote(n) {
	// 	editingNote = true;
	// 	newNote = n;
	// }

	// async function saveNote(id) {
	// 	editingNote = false;

	// 	// set doc in firestore to newNote data
	// 	await setDoc(doc(firestore, 'words', id), {
	// 		note: newNote
	// 	});
	// }

	import Note from './Note.svelte';
</script>

<h1>{data.word}</h1>

<h2>Entries</h2>
{#each data.entry as entry}
	<h2>{entry.simp} ({entry.trad})</h2>

	<!-- we use simplified character + pronunciation as id
	<Doc ref={`words/${entry.simp}${entry.pinyinTones}`} let:data>
		{#if !editingNote && data?.note}
			<p>{data?.note}</p>
			<button on:click={editNote(data?.note)}>{data?.note ? 'Edit Note' : 'Add Note'}</button>
		{/if}

		{#if editingNote}
			<form on:submit|preventDefault={saveNote(entry.simp + entry.pinyinTones)}>
				<textarea bind:value={newNote} />
				<button type="submit">Save</button>
				<button on:click={(editingNote = false)}>Cancel</button>
			</form>
		{/if}

		<p slot="loading">Loading...</p>
	</Doc> -->

	<Note {entry} />

	<p>{entry.pinyin}</p>

	<h3>Definitions</h3>

	{#each entry.definitions as definition}
		<p>{definition}</p>
	{/each}

	<hr />
{/each}

<!-- {#if data.word != data.entry.simplified}
	<h2>{data.entry.simplified}</h2>
{/if}

{#if data.word != data.entry.traditional}
	<h2>{data.entry.traditional}</h2>
{/if}

<p>{data.entry.pinyin}</p>

<h2>Definitions</h2>

{#each data.entry[0].definitions as definition}
	<p>{definition}</p>
{/each} -->
