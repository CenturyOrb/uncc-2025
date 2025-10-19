import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcs6W2UE2zLI9Qasja1A_fvsS7WoVUFso",
  authDomain: "learnly-28250.firebaseapp.com",
  projectId: "learnly-28250",
  storageBucket: "learnly-28250.firebasestorage.app",
  messagingSenderId: "67065327713",
  appId: "1:67065327713:web:bb8f2c57946b98ee7e3a20"
};

export const app = initializeApp(firebaseConfig);
export const FirebaeAuth = getAuth(app);
