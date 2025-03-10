importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js"
);

// ✅ Firebase 설정 (index.html과 동일하게 유지)
firebase.initializeApp({
  apiKey: "AIzaSyDO0TY9fWIQiUTIe6Oqy2GXKyXqhDiwSas",
  authDomain: "sshtest-b0a70.firebaseapp.com",
  projectId: "sshtest-b0a70",
  storageBucket: "sshtest-b0a70.appspot.com",
  messagingSenderId: "229082605379",
  appId: "1:229082605379:web:f3825bee241b460dc931f6",
});

// ✅ Firebase Cloud Messaging 초기화
const messaging = firebase.messaging();

// ✅ 백그라운드 메시지 수신 처리
messaging.onBackgroundMessage((payload) => {
  console.log("📩 [firebase-messaging-sw.js] 백그라운드 메시지 수신:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.image || "/default-icon.png",
    click_action: payload.notification.click_action,
  });
});
