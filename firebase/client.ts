// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwdjCGP26m-tFuAzB2hx3-NtYgGIXoGtw",
  authDomain: "urgentis-32df1.firebaseapp.com",
  projectId: "urgentis-32df1",
  storageBucket: "urgentis-32df1.firebasestorage.app",
  messagingSenderId: "500892500297",
  appId: "1:500892500297:web:31e8ff64286050243d1a98",
  measurementId: "G-KS6ENX6LFT"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);