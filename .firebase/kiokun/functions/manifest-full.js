export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.10f97f74.js","app":"_app/immutable/entry/app.16831ad5.js","imports":["_app/immutable/entry/start.10f97f74.js","_app/immutable/chunks/scheduler.5c9fb80c.js","_app/immutable/chunks/singletons.783c30ee.js","_app/immutable/chunks/index.6c829c8a.js","_app/immutable/entry/app.16831ad5.js","_app/immutable/chunks/scheduler.5c9fb80c.js","_app/immutable/chunks/index.d9c22dfb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/tokenize",
				pattern: /^\/tokenize\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/tokenize/_server.js'))
			},
			{
				id: "/[word]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"word","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
