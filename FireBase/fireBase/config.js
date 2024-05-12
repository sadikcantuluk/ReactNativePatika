// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvzyqn16j-RkPFKRegmCAEaVqrJqLyF3Q",
  authDomain: "login-408b9.firebaseapp.com",
  projectId: "login-408b9",
  storageBucket: "login-408b9.appspot.com",
  messagingSenderId: "268590462315",
  appId: "1:268590462315:web:5a9c78087e1bd60364c82e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
