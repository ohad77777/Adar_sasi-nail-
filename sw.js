// Service Worker - PWA בלבד (התראות מנוהלות ע"י OneSignal)

const CACHE_NAME = 'adar-nail-v1';

// התקנה
self.addEventListener('install', () => {
  self.skipWaiting();
});

// הפעלה
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// טעינת רשת
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

// לחיצה על התראה (גיבוי - OneSignal מטפל בזה בד"כ)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});