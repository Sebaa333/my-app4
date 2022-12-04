// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvCIhZHGc4iH4NkoAWGow97F1nUSYuIxI",
  authDomain: "ecommerce-de835.firebaseapp.com",
  projectId: "ecommerce-de835",
  storageBucket: "ecommerce-de835.appspot.com",
  messagingSenderId: "211125269018",
  appId: "1:211125269018:web:895f93dc5328b5992cd7a3",
  measurementId: "G-J8MKNE159Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
