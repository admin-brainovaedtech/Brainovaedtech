const CACHE='brainova-v2';
const FILES=['./','./index.html','./manifest.webmanifest','./assets/brainova-logo.png','./assets/brainova-student.png','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{let x=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,x));return r}).catch(()=>caches.match('./index.html'))))});
