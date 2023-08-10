

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2d3e7e66.js","_app/immutable/chunks/scheduler.5c9fb80c.js","_app/immutable/chunks/index.d9c22dfb.js","_app/immutable/chunks/singletons.783c30ee.js","_app/immutable/chunks/index.6c829c8a.js"];
export const stylesheets = [];
export const fonts = [];
