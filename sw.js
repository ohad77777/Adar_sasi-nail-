// Service Worker עם תמיכה בהתראות Push

importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDSJoLMkPO0dbZx1x6uixITgzZnx1jEqVc",
  authDomain: "adarsasinail.firebaseapp.com",
  databaseURL: "https://adarsasinail-default-rtdb.firebaseio.com",
  projectId: "adarsasinail",
  storageBucket: "adarsasinail.firebasestorage.app",
  messagingSenderId: "993038338881",
  appId: "1:993038338881:web:b5ea1415981c2759b6fc0"
});

const messaging = firebase.messaging();

// הודעות ברקע
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Adar Sasi Nail 💅';
  const options = {
    body: payload.notification?.body || 'יש לך הודעה חדשה',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'adar-notification',
    renotify: true
  };
  return self.registration.showNotification(title, options);
});

// לחיצה על התראה
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));
self.addEventListener('fetch', (event) => event.respondWith(fetch(event.request)));