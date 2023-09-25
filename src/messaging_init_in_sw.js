import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAPezbR4cfxaYcjMc-NPML9NfSozrIfFoQ",
  authDomain: "push-noti-84d64.firebaseapp.com",
  projectId: "push-noti-84d64",
  storageBucket: "push-noti-84d64.appspot.com",
  messagingSenderId: "173910941950",
  appId: "1:173910941950:web:b3763b815688365efd45af",
  measurementId: "G-9BKTFJD3KC"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then(permission => {
    console.log("xxx");
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BM8dC3bIgr3uCvsVadZ2rcZkEtqLdtLAzZURyc6i5XbraH61LyPN2EKQH0RG14UMk1n7fxzICbgsCIy3cWIkKx4"
      }).then(currentToken => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
