self.addEventListener("install", function (e) {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", function (event) {
  // 캐시 기능 생략 – 필요 시 추가 가능
});
