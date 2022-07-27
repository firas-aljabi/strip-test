// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLsehshY6G-76_BPQnu5KpBhsSBplW_Z8",
  authDomain: "offers-d705e.firebaseapp.com",
  projectId: "offers-d705e",
  storageBucket: "offers-d705e.appspot.com",
  messagingSenderId: "634188406529",
  appId: "1:634188406529:web:c7fa59df64e9dd813d4500",
  measurementId: "G-H7QGH2ZW1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);