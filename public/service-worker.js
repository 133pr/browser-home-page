if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"df8921a54a11c82e2c10b7b1133eb781"},{url:"/_next/static/Ta_BgyfnbwiMwIXCk7kZw/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/Ta_BgyfnbwiMwIXCk7kZw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-130726a0ec93787b.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/595-e71c7a1fb442c839.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/app/_not-found/page-d9c907af63840d6f.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/app/layout-ce23d1a5eac0928a.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/app/page-6ea61d6e3db6c4df.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/main-a80f63880710deac.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/main-app-db13853721417f32.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-16fd57b891a459c7.js",revision:"Ta_BgyfnbwiMwIXCk7kZw"},{url:"/_next/static/css/13048f5f738fcce8.css",revision:"13048f5f738fcce8"},{url:"/_next/static/media/01ec6b068e70259e-s.p.woff2",revision:"423ee562ce24c1528e0e01e274a6c909"},{url:"/_next/static/media/04a7bf91ce447e64-s.woff2",revision:"f958f203635d30b79b2e53797eeba596"},{url:"/_next/static/media/649270211a519700-s.woff2",revision:"9b0526f1d207e754e06968a1421e1fa2"},{url:"/_next/static/media/google.06efe0ea.svg",revision:"1e70e59ed840c5e8abf6293c0350c8db"},{url:"/google.svg",revision:"1e70e59ed840c5e8abf6293c0350c8db"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
