import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/ssr.js";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".token-grid.s-y_bCXRrkrYfP{display:grid;grid-template-columns:repeat(3, 1fr);max-width:1000px}.token-link.s-y_bCXRrkrYfP{display:block;text-decoration:none;color:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new GoogleAuthProvider();
  let sentence = "";
  let tokenized = [];
  $$result.css.add(css);
  {
    console.log(tokenized);
  }
  return `<hr>  <p data-svelte-h="svelte-1vxxjh4">input chinese sentence</p> <input type="text"${add_attribute("value", sentence, 0)}>  <div class="token-grid s-y_bCXRrkrYfP">${each(tokenized, (token) => {
    return `<a${add_attribute("href", token.simplified, 0)} class="token-link s-y_bCXRrkrYfP"><fieldset><legend>${escape(token.simplified)}${escape(token.simplified != token.traditional ? "/" + token.traditional : "")}</legend> ${each(token.matches, (match) => {
      return `<p>${escape(match.pinyinPretty)}</p> <p>${escape(match.english)}</p>`;
    })}</fieldset> </a>`;
  })} </div>`;
});
export {
  Page as default
};
