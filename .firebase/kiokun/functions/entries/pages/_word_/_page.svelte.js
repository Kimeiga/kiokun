import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, e as escape, f as each } from "../../../chunks/ssr.js";
import { doc, onSnapshot } from "firebase/firestore";
import "firebase/auth";
import { g as getFirebaseContext, S as SignedIn } from "../../../chunks/firebase.js";
import { w as writable } from "../../../chunks/index2.js";
function docStore(firestore, ref, startWith) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe3 } = writable(startWith);
    return {
      subscribe: subscribe3,
      ref: null,
      id: ""
    };
  }
  if (!firestore) {
    console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe3 } = writable(null);
    return {
      subscribe: subscribe3,
      ref: null,
      id: ""
    };
  }
  const docRef = typeof ref === "string" ? doc(firestore, ref) : ref;
  const { subscribe: subscribe2 } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set(snapshot.data() ?? null);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2,
    ref: docRef,
    id: docRef.id
  };
}
const Doc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let { ref } = $$props;
  let { startWith = void 0 } = $$props;
  const { firestore } = getFirebaseContext();
  let store = docStore(firestore, ref, startWith);
  validate_store(store, "store");
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.startWith === void 0 && $$bindings.startWith && startWith !== void 0)
    $$bindings.startWith(startWith);
  $$unsubscribe_store();
  return `${$store !== void 0 ? `${slots.default ? slots.default({ data: $store, ref: store.ref, firestore }) : ``}` : `${slots.loading ? slots.loading({}) : ``}`}`;
});
const Note = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  return ` ${validate_component(Doc, "Doc").$$render(
    $$result,
    {
      ref: `words/${entry.simp}${entry.pinyinTones}`
    },
    {},
    {
      loading: () => {
        return `<p slot="loading" data-svelte-h="svelte-1a37fzt">Loading...</p>`;
      },
      default: ({ data }) => {
        return `${!data?.note ? `${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
          default: () => {
            return `<button data-svelte-h="svelte-ybpes5">Add Note</button>`;
          }
        })}` : `${data?.note ? `<p>${escape(data?.note)}</p> ${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
          default: () => {
            return `<button>${escape(data?.note ? "Edit Note" : "Add Note")}</button>`;
          }
        })}` : `${``}`}`}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.word)}</h1> <h2 data-svelte-h="svelte-3bao4m">Entries</h2> ${each(data.entry, (entry) => {
    return `<h2>${escape(entry.simp)} (${escape(entry.trad)})</h2>  ${validate_component(Note, "Note").$$render($$result, { entry }, {}, {})} <p>${escape(entry.pinyin)}</p> <h3 data-svelte-h="svelte-1akifgs">Definitions</h3> ${each(entry.definitions, (definition) => {
      return `<p>${escape(definition)}</p>`;
    })} <hr>`;
  })} `;
});
export {
  Page as default
};
