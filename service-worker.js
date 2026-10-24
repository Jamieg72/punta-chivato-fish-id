/* App shell caching for the fish guide. Confirm offline operation on the target device after deployment. */
const CACHE='punta-chivato-fish-id-v1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('punta-chivato-fish-id-')&&k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(cache=>cache.put(req,copy));}return res;}).catch(()=>req.mode==='navigate'?caches.match('./index.html'):Response.error())));});
