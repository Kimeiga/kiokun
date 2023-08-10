import{s as B,v as F,h as A,e as w,u as k,g as y,f as v}from"./scheduler.5c9fb80c.js";import{S as N,i as O,d as m,v as z,e as g,a as I,r as T,t as d,b as q,f as _,g as G}from"./index.d9c22dfb.js";import{c as Q,_ as U,I as H,e as p}from"./SignedOut.e47d5c8b.js";import{w as b}from"./index.6c829c8a.js";function S(o,t,i){let n;if(!globalThis.window){const{subscribe:e}=b(i);return{subscribe:e,ref:null,id:""}}if(!o){console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:e}=b(null);return{subscribe:e,ref:null,id:""}}const a=typeof t=="string"?Q(o,t):t,{subscribe:s}=b(i,e=>(n=H(a,c=>{e(c.data()??null)}),()=>n()));return{subscribe:s,ref:a,id:a.id}}function D(o,t,i=[]){let n;if(!globalThis.window){const{subscribe:e}=b(i);return{subscribe:e,ref:null}}if(!o){console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:e}=b([]);return{subscribe:e,ref:null}}const a=typeof t=="string"?U(o,t):t,{subscribe:s}=b(i,e=>(n=H(a,c=>{const f=c.docs.map(u=>({id:u.id,ref:u.ref,...u.data()}));e(f)}),()=>n()));return{subscribe:s,ref:a}}const V=o=>({}),j=o=>({}),X=o=>({data:o&1,count:o&1}),E=o=>{var t;return{data:o[0],ref:o[2].ref,count:((t=o[0])==null?void 0:t.length)??0,firestore:o[1]}};function J(o){let t;const i=o[6].loading,n=w(i,o,o[5],j),a={c:function(){n&&n.c()},l:function(e){n&&n.l(e)},m:function(e,c){n&&n.m(e,c),t=!0},p:function(e,c){n&&n.p&&(!t||c&32)&&k(n,i,e,e[5],t?v(i,e[5],c,V):y(e[5]),j)},i:function(e){t||(_(n,e),t=!0)},o:function(e){d(n,e),t=!1},d:function(e){n&&n.d(e)}};return m("SvelteRegisterBlock",{block:a,id:J.name,type:"else",source:"(11:0) {:else}",ctx:o}),a}function K(o){let t;const i=o[6].default,n=w(i,o,o[5],E),a={c:function(){n&&n.c()},l:function(e){n&&n.l(e)},m:function(e,c){n&&n.m(e,c),t=!0},p:function(e,c){n&&n.p&&(!t||c&33)&&k(n,i,e,e[5],t?v(i,e[5],c,X):y(e[5]),E)},i:function(e){t||(_(n,e),t=!0)},o:function(e){d(n,e),t=!1},d:function(e){n&&n.d(e)}};return m("SvelteRegisterBlock",{block:a,id:K.name,type:"if",source:"(9:0) {#if $store !== undefined}",ctx:o}),a}function W(o){let t,i,n,a;const s=[K,J],e=[];function c(u,l){return u[0]!==void 0?0:1}t=c(o),i=e[t]=s[t](o);const f={c:function(){i.c(),n=g()},l:function(l){i.l(l),n=g()},m:function(l,r){e[t].m(l,r),I(l,n,r),a=!0},p:function(l,[r]){let h=t;t=c(l),t===h?e[t].p(l,r):(T(),d(e[h],1,1,()=>{e[h]=null}),q(),i=e[t],i?i.p(l,r):(i=e[t]=s[t](l),i.c()),_(i,1),i.m(n.parentNode,n))},i:function(l){a||(_(i),a=!0)},o:function(l){d(i),a=!1},d:function(l){l&&G(n),e[t].d(l)}};return m("SvelteRegisterBlock",{block:f,id:W.name,type:"component",source:"",ctx:o}),f}function Y(o,t,i){let n,{$$slots:a={},$$scope:s}=t;z("Collection",a,["default","loading"]);let{ref:e}=t,{startWith:c=void 0}=t;const{firestore:f}=p();let u=D(f,e,c);F(u,"store"),A(o,u,r=>i(0,n=r)),o.$$.on_mount.push(function(){e===void 0&&!("ref"in t||o.$$.bound[o.$$.props.ref])&&console.warn("<Collection> was created without expected prop 'ref'")});const l=["ref","startWith"];return Object.keys(t).forEach(r=>{!~l.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Collection> was created with unknown prop '${r}'`)}),o.$$set=r=>{"ref"in r&&i(3,e=r.ref),"startWith"in r&&i(4,c=r.startWith),"$$scope"in r&&i(5,s=r.$$scope)},o.$capture_state=()=>({collectionStore:D,getFirebaseContext:p,ref:e,startWith:c,firestore:f,store:u,$store:n}),o.$inject_state=r=>{"ref"in r&&i(3,e=r.ref),"startWith"in r&&i(4,c=r.startWith),"store"in r&&i(2,u=r.store)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[n,f,u,e,c,s,a]}class ie extends N{constructor(t){super(t),O(this,t,Y,W,B,{ref:3,startWith:4}),m("SvelteRegisterComponent",{component:this,tagName:"Collection",options:t,id:W.name})}get ref(){throw new Error("<Collection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set ref(t){throw new Error("<Collection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get startWith(){throw new Error("<Collection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set startWith(t){throw new Error("<Collection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Z=o=>({}),R=o=>({}),x=o=>({data:o&1}),P=o=>({data:o[0],ref:o[2].ref,firestore:o[1]});function L(o){let t;const i=o[6].loading,n=w(i,o,o[5],R),a={c:function(){n&&n.c()},l:function(e){n&&n.l(e)},m:function(e,c){n&&n.m(e,c),t=!0},p:function(e,c){n&&n.p&&(!t||c&32)&&k(n,i,e,e[5],t?v(i,e[5],c,Z):y(e[5]),R)},i:function(e){t||(_(n,e),t=!0)},o:function(e){d(n,e),t=!1},d:function(e){n&&n.d(e)}};return m("SvelteRegisterBlock",{block:a,id:L.name,type:"else",source:"(11:0) {:else}",ctx:o}),a}function M(o){let t;const i=o[6].default,n=w(i,o,o[5],P),a={c:function(){n&&n.c()},l:function(e){n&&n.l(e)},m:function(e,c){n&&n.m(e,c),t=!0},p:function(e,c){n&&n.p&&(!t||c&33)&&k(n,i,e,e[5],t?v(i,e[5],c,x):y(e[5]),P)},i:function(e){t||(_(n,e),t=!0)},o:function(e){d(n,e),t=!1},d:function(e){n&&n.d(e)}};return m("SvelteRegisterBlock",{block:a,id:M.name,type:"if",source:"(9:0) {#if $store !== undefined}",ctx:o}),a}function C(o){let t,i,n,a;const s=[M,L],e=[];function c(u,l){return u[0]!==void 0?0:1}t=c(o),i=e[t]=s[t](o);const f={c:function(){i.c(),n=g()},l:function(l){i.l(l),n=g()},m:function(l,r){e[t].m(l,r),I(l,n,r),a=!0},p:function(l,[r]){let h=t;t=c(l),t===h?e[t].p(l,r):(T(),d(e[h],1,1,()=>{e[h]=null}),q(),i=e[t],i?i.p(l,r):(i=e[t]=s[t](l),i.c()),_(i,1),i.m(n.parentNode,n))},i:function(l){a||(_(i),a=!0)},o:function(l){d(i),a=!1},d:function(l){l&&G(n),e[t].d(l)}};return m("SvelteRegisterBlock",{block:f,id:C.name,type:"component",source:"",ctx:o}),f}function $(o,t,i){let n,{$$slots:a={},$$scope:s}=t;z("Doc",a,["default","loading"]);let{ref:e}=t,{startWith:c=void 0}=t;const{firestore:f}=p();let u=S(f,e,c);F(u,"store"),A(o,u,r=>i(0,n=r)),o.$$.on_mount.push(function(){e===void 0&&!("ref"in t||o.$$.bound[o.$$.props.ref])&&console.warn("<Doc> was created without expected prop 'ref'")});const l=["ref","startWith"];return Object.keys(t).forEach(r=>{!~l.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Doc> was created with unknown prop '${r}'`)}),o.$$set=r=>{"ref"in r&&i(3,e=r.ref),"startWith"in r&&i(4,c=r.startWith),"$$scope"in r&&i(5,s=r.$$scope)},o.$capture_state=()=>({docStore:S,getFirebaseContext:p,ref:e,startWith:c,firestore:f,store:u,$store:n}),o.$inject_state=r=>{"ref"in r&&i(3,e=r.ref),"startWith"in r&&i(4,c=r.startWith),"store"in r&&i(2,u=r.store)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[n,f,u,e,c,s,a]}class re extends N{constructor(t){super(t),O(this,t,$,C,B,{ref:3,startWith:4}),m("SvelteRegisterComponent",{component:this,tagName:"Doc",options:t,id:C.name})}get ref(){throw new Error("<Doc>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set ref(t){throw new Error("<Doc>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get startWith(){throw new Error("<Doc>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set startWith(t){throw new Error("<Doc>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ie as C,re as D};