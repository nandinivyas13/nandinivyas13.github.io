// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_pHf0wnJZ2csbtUwSR0QjzAj43Fos5pA",
  authDomain: "portfolio-website-e16be.firebaseapp.com",
  projectId: "portfolio-website-e16be",
  storageBucket: "portfolio-website-e16be.appspot.com",
  messagingSenderId: "509114307918",
  appId: "1:509114307918:web:00fa64c1996254eee8ba1f",
  measurementId: "G-50CLTZVBL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);