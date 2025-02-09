// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBUig2qqfSjM-kc1i1bwW99rpvtFj61TY",
  authDomain: "ridenow-c6b88.firebaseapp.com",
  databaseURL: "https://ridenow-c6b88-default-rtdb.firebaseio.com",
  projectId: "ridenow-c6b88",
  storageBucket: "ridenow-c6b88.firebasestorage.app",
  messagingSenderId: "615528376645",
  appId: "1:615528376645:web:9b5c15f9938b0a4a50362c",
  measurementId: "G-24P8V0CXK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);