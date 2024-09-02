// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs3SPcc7zGbDrhGMA82UQrFSBiA7n4oLs",
  authDomain: "whats-app-9e988.firebaseapp.com",
  projectId: "whats-app-9e988",
  storageBucket: "whats-app-9e988.appspot.com",
  messagingSenderId: "224155950620",
  appId: "1:224155950620:web:3125abce9b3c1aa57589d9",
  measurementId: "G-LM44HX8570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }