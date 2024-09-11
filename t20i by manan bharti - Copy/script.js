// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzjBPaDU6nWdBgWVBZq6Hj6GduRP0B4QA",
  authDomain: "t20i-118cc.firebaseapp.com",
  projectId: "t20i-118cc",
  storageBucket: "t20i-118cc.appspot.com",
  messagingSenderId: "195476749888",
  appId: "1:195476749888:web:51dbc144c0629ca9b269a5",
  measurementId: "G-LLMJPMVS0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);