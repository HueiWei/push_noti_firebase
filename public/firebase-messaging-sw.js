// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAPezbR4cfxaYcjMc-NPML9NfSozrIfFoQ",
  authDomain: "push-noti-84d64.firebaseapp.com",
  projectId: "push-noti-84d64",
  storageBucket: "push-noti-84d64.appspot.com",
  messagingSenderId: "173910941950",
  appId: "1:173910941950:web:b3763b815688365efd45af",
  measurementId: "G-9BKTFJD3KC"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
