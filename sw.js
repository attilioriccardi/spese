// Service worker minimo: serve solo a rendere l'app installabile.
// I dati offline sono gestiti da Firestore.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
