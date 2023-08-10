import { s as setContext, g as getContext, c as create_ssr_component, a as validate_store, b as subscribe } from "./ssr.js";
import { w as writable } from "./index2.js";
import { onAuthStateChanged, signOut, GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const contextKey = "firebase";
function setFirebaseContext(sdks) {
  setContext(contextKey, sdks);
}
function getFirebaseContext() {
  return getContext(contextKey);
}
function userStore(auth2, startWith = null) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe3 } = writable(startWith);
    return {
      subscribe: subscribe3
    };
  }
  if (!auth2) {
    console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe3 } = writable(null);
    return {
      subscribe: subscribe3
    };
  }
  const { subscribe: subscribe2 } = writable(auth2?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth2, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2
  };
}
const SignedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const auth2 = getFirebaseContext().auth;
  const user = userStore(auth2);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({
    user: $user,
    auth: auth2,
    signOut: () => signOut(auth2)
  }) : ``}` : ``}`;
});
new GoogleAuthProvider();
const app = initializeApp({
  apiKey: "AIzaSyBgCy6Q9Rcu7BdHlsfX74WFZXmjyYFyqrQ",
  authDomain: "kiokun.firebaseapp.com",
  projectId: "kiokun",
  storageBucket: "kiokun.appspot.com",
  messagingSenderId: "161613656116",
  appId: "1:161613656116:web:7815d68d6f8519a6bbda61",
  measurementId: "G-2B3BV47NCS"
});
const firestore = getFirestore(app);
const auth = getAuth(app);
export {
  SignedIn as S,
  auth as a,
  firestore as f,
  getFirebaseContext as g,
  setFirebaseContext as s,
  userStore as u
};
