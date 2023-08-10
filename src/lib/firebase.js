	import { FirebaseApp } from 'sveltefire';
	import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth, GoogleAuthProvider } from 'firebase/auth';

	const provider = new GoogleAuthProvider();

	// Initialize Firebase
	export const app = initializeApp({
		apiKey: 'AIzaSyBgCy6Q9Rcu7BdHlsfX74WFZXmjyYFyqrQ',
		authDomain: 'kiokun.firebaseapp.com',
		projectId: 'kiokun',
		storageBucket: 'kiokun.appspot.com',
		messagingSenderId: '161613656116',
		appId: '1:161613656116:web:7815d68d6f8519a6bbda61',
		measurementId: 'G-2B3BV47NCS'
	});
	export const firestore = getFirestore(app);
	export const auth = getAuth(app);