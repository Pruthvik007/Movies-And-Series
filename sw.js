if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"bc937f5b979c1a1fbe7addf04505f46b"},{url:"assets/CategoryMediaPage-DFnCKXEc.js",revision:null},{url:"assets/ErrorPage-B_3XjbQO.js",revision:null},{url:"assets/index-36k3dAL3.js",revision:null},{url:"assets/index-e0Cf7BQx.css",revision:null},{url:"assets/MediaDetailsPage-CX9GBxw4.js",revision:null},{url:"assets/PageNotFound-CtyIHVCW.js",revision:null},{url:"assets/ScrollToTopButton-BCxdoSGM.js",revision:null},{url:"assets/SearchPage-mk-ugtzN.js",revision:null},{url:"assets/useFilters-VEpk0lbk.js",revision:null},{url:"assets/WatchList-rjaZzGKZ.js",revision:null},{url:"index.html",revision:"17908969d76fd3740cf5a79b82c8bd0a"},{url:"registerSW.js",revision:"e27b9ab3ec078907ee600c5bc9597dfc"},{url:"favicon.ico",revision:"f2413d192135c1f5194f5e7016a8a4d0"},{url:"pwa-64x64.png",revision:"349705ff2e4cfb54bb5f9959fac93091"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"manifest.webmanifest",revision:"f4248ddff6e0e175db8cdcff043ed6c4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));