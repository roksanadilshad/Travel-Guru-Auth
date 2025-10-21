// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdj9_aDYXBSOmBENCh8szEUYDzFvut0wI",
  authDomain: "travel-guru-auth-cd384.firebaseapp.com",
  projectId: "travel-guru-auth-cd384",
  storageBucket: "travel-guru-auth-cd384.firebasestorage.app",
  messagingSenderId: "837474865819",
  appId: "1:837474865819:web:058f097e00af404ecf2c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);