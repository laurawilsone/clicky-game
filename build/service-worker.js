"use strict";var precacheConfig=[["/clicky-game/index.html","c640a3f41ee84c459d3d9d6e43acdf16"],["/clicky-game/static/css/main.c0d0b263.css","6f35875922f87912c5cdb40b4484513b"],["/clicky-game/static/js/main.c08b8987.js","f2338846ed8508f236fc342cf208a83f"],["/clicky-game/static/media/boxer.f401ab66.jpg","f401ab66c5f057e794bb9ebc533a2bcc"],["/clicky-game/static/media/corgi.470edeff.jpg","470edeffdf759e7897119433cbe6e326"],["/clicky-game/static/media/dalmatian.03fa908e.jpg","03fa908e8f64a48ae31a95f359290939"],["/clicky-game/static/media/doberman.a144966f.jpg","a144966fcff433a238a522f90b44f0f0"],["/clicky-game/static/media/golden.18b15b82.jpg","18b15b8208ace491f951f6acae3df97d"],["/clicky-game/static/media/goldendoodle.ae108103.jpg","ae108103dc4b54747abb12dc83617f27"],["/clicky-game/static/media/happy-dog.9bffbea0.jpg","9bffbea0cc5dbf56b368089eaa739329"],["/clicky-game/static/media/lab.12bf83d1.jpg","12bf83d1ab85c4d29f4fd8cc3f7a7a5c"],["/clicky-game/static/media/pitbull.f8e72989.jpg","f8e7298988d685ebc076272e5c1ab3b6"],["/clicky-game/static/media/pomeranian.f5f1feed.jpg","f5f1feed09cfa36f451dede0fd7e92d7"],["/clicky-game/static/media/pug.e114e4d0.jpg","e114e4d0b4b66b247dcb856d6a83d789"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/clicky-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});