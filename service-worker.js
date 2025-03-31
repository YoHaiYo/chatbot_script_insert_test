const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/main.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

// 설치 단계: 파일 캐싱
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 요청 가로채기: 캐시 먼저 확인, 없으면 네트워크 요청
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 오래된 캐시 정리
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
