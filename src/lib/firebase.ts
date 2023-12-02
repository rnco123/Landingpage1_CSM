// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1zD4qIJxGV7mY-yrUkNBA5GWYQzdwjVo",
  authDomain: "csm23-b7e42.firebaseapp.com",
  projectId: "csm23-b7e42",
  storageBucket: "csm23-b7e42.appspot.com",
  messagingSenderId: "1076822067750",
  appId: "1:1076822067750:web:2ba4353ce5823c60c774e7",
  measurementId: "G-5P4T81CWYH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
