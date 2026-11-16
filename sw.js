const CACHE='skytrainer-202611160524';
const FILES=['./','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png',"b2data.js","b737ck.js","b737data.js","bldgdata.js","cvndata.js","f22data.js","f35bdata.js","f35data.js","srdata.js","vox.js"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));});
