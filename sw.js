const CACHE='skytrainer-202611220713';
const FILES=['./','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png',"ah64data.js","b2data.js","b737ck.js","b737data.js","bldgdata.js","ctiles.js","cvndata.js","f22data.js","f35bdata.js","f35data.js","srdata.js","vox.js"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!=='skytrainer-tiles-v1').map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const tile=e.request.url.includes('/t/');e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{if(tile&&res.ok){const c=res.clone();caches.open('skytrainer-tiles-v1').then(k=>k.put(e.request,c));}return res;})));});
