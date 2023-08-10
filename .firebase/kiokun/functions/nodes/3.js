import * as server from '../entries/pages/_word_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_word_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[word]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.6874ad4e.js","_app/immutable/chunks/scheduler.5c9fb80c.js","_app/immutable/chunks/index.d9c22dfb.js","_app/immutable/chunks/SignedOut.e47d5c8b.js","_app/immutable/chunks/index.6c829c8a.js","_app/immutable/chunks/Doc.8c0d5186.js","_app/immutable/chunks/firebase.40fb4f84.js"];
export const stylesheets = [];
export const fonts = [];
