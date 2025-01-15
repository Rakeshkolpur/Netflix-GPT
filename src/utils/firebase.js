// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBSqiZ2CArxhyDtP6H-11ZRzQyIdkq2_0",
  authDomain: "netflixgpt-1ce3f.firebaseapp.com",
  projectId: "netflixgpt-1ce3f",
  storageBucket: "netflixgpt-1ce3f.firebasestorage.app",
  messagingSenderId: "366209033187",
  appId: "1:366209033187:web:0d0eb9186b122cce60f6d6",
  measurementId: "G-BDKHPYVJJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();