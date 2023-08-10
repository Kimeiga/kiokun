<script lang="ts">
	import { auth, firestore } from '$lib/firebase';
	import { FirebaseApp, SignedIn, SignedOut } from 'sveltefire';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

	const provider = new GoogleAuthProvider();
</script>

<FirebaseApp {auth} {firestore}>
	<h1>Kiokun</h1>

	<SignedOut let:auth>
		<button
			on:click={() =>
				signInWithPopup(auth, provider).catch((error) => {
					console.error(error);
				})}>Sign in to add/edit notes</button
		>
	</SignedOut>

	<SignedIn let:user let:signOut>
		<span>Hello {user.displayName}</span>
		<button on:click={signOut}>Sign Out</button>
	</SignedIn>

	<slot />
</FirebaseApp>
