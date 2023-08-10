<script>
	export let entry;

	import { doc, setDoc } from 'firebase/firestore';
	import { SignedIn, SignedOut, Doc } from 'sveltefire';
	import { firestore } from '$lib/firebase'; // your firestore instance
	let editingNote = false;
	let newNote = '';

	function editNote(n) {
		editingNote = true;
		newNote = n;
	}

	async function saveNote(id) {
		editingNote = false;

		// set doc in firestore to newNote data
		await setDoc(doc(firestore, 'words', id), {
			note: newNote
		});
	}
</script>

<!-- we use simplified character + pronunciation as id -->
<Doc ref={`words/${entry.simp}${entry.pinyinTones}`} let:data>
	{#if !editingNote && !data?.note}
		<SignedIn>
			<button on:click={editNote(data?.note)}>Add Note</button>
		</SignedIn>
	{:else if !editingNote && data?.note}
		<p>{data?.note}</p>
		<SignedIn>
			<button on:click={editNote(data?.note)}>{data?.note ? 'Edit Note' : 'Add Note'}</button>
		</SignedIn>
	{:else if editingNote}
		<form on:submit|preventDefault={saveNote(entry.simp + entry.pinyinTones)}>
			<textarea bind:value={newNote} />
			<button type="submit">Save</button>
			<button on:click={(editingNote = false)}>Cancel</button>
		</form>
	{/if}

	<p slot="loading">Loading...</p>
</Doc>
