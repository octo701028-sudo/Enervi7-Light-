
self.addEventListener('install',e=>{e.waitUntil(caches.open('e7v72').then(c=>c.addAll([
  './','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
  './stages.json','./transitions.json','./oracle_whispering.json','./yl_blends.json','./hidden_cards.json'
])))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
