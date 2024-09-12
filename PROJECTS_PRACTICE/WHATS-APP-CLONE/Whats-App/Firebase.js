// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUFsZ4rk15kUkYhF4ntAS23Mjis9Jk0iE",
  authDomain: "wa-clone-b149c.firebaseapp.com",
  projectId: "wa-clone-b149c",
  storageBucket: "wa-clone-b149c.appspot.com",
  messagingSenderId: "480475903402",
  appId: "1:480475903402:web:c91816c7042285c711a7d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth second step
const auth = getAuth(app);
const db = getFirestore();

export { auth, db }