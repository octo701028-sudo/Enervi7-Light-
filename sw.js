
self.addEventListener('install',e=>{
  e.waitUntil(caches.open('enervi7-v3').then(c=>c.addAll([
    './','./index.html','./manifest.json','./sw.js','./yl_blends.json',
    './oracle_whispering.json','./hidden_cards.json','./icon-192.png','./icon-512.png'
  ])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
