if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-9cbde557"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/[...all].1d8d803a.js",revision:"6636ae1c69f93cd7034af0ee71facb5d"},{url:"assets/[name].e78e4c49.js",revision:"2c8a6d32c18da9fe210e0aa4f6ab2c0a"},{url:"assets/404.1819e7ee.js",revision:"27368f12f7c5e77769f5b4e8da9f017b"},{url:"assets/about.6beeb990.js",revision:"92e77c22ecf00b7671055237728059ed"},{url:"assets/app.00e2405a.js",revision:"c6a859506eee4c07e6a525e08662ad35"},{url:"assets/app.2a76758f.css",revision:"ded178bc1b31771656a8e1c51a5dae8c"},{url:"assets/home.d2e3aa90.js",revision:"757b497030f6c7e34f67a9faf6da1a3a"},{url:"assets/README.5f806a0f.js",revision:"abd56f1b24b24834b6797d0d077dd015"},{url:"assets/vendor.6095adcd.js",revision:"b94031fd1405dc627852a180e77ac903"},{url:"assets/virtual_pwa-register.3d629c73.js",revision:"c1039224262131d94d8689ac2f4988b4"},{url:"index.html",revision:"7f2b457d22620b9e87998a328a78f896"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map