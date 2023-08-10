import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { s as setFirebaseContext, g as getFirebaseContext, u as userStore, a as auth, f as firestore, S as SignedIn } from "../../chunks/firebase.js";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
const FirebaseApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firestore: firestore2 } = $$props;
  let { auth: auth2 } = $$props;
  setFirebaseContext({ firestore: firestore2, auth: auth2 });
  if ($$props.firestore === void 0 && $$bindings.firestore && firestore2 !== void 0)
    $$bindings.firestore(firestore2);
  if ($$props.auth === void 0 && $$bindings.auth && auth2 !== void 0)
    $$bindings.auth(auth2);
  return `${slots.default ? slots.default({}) : ``}`;
});
const SignedOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const auth2 = getFirebaseContext().auth;
  const user = userStore(auth2);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${!$user ? `${slots.default ? slots.default({ auth: auth2 }) : ``}` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new GoogleAuthProvider();
  return `${validate_component(FirebaseApp, "FirebaseApp").$$render($$result, { auth, firestore }, {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-wtey15">Kiokun</h1> ${validate_component(SignedOut, "SignedOut").$$render($$result, {}, {}, {
        default: ({ auth: auth2 }) => {
          return `<button data-svelte-h="svelte-gl1v9x">Sign in to add/edit notes</button>`;
        }
      })} ${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
        default: ({ user, signOut }) => {
          return `<span>Hello ${escape(user.displayName)}</span> <button data-svelte-h="svelte-10zoo4g">Sign Out</button>`;
        }
      })} ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
