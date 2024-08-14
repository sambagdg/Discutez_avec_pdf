import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAy24eTfwzvv8vamLrfjNp39t8don5PC_4",
  authDomain: "chat-with-pdf-cad07.firebaseapp.com",
  projectId: "chat-with-pdf-cad07",
  storageBucket: "chat-with-pdf-cad07.appspot.com",
  messagingSenderId: "869046177338",
  appId: "1:869046177338:web:1c3c04d61a6a53959b6f03",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage();

export { db, storage };
