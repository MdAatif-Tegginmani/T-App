// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgn_PSSJhbrtfkEawq1IO8KnHLpUmCcng",
  authDomain: "auth-log-f1814.firebaseapp.com",
  projectId: "auth-log-f1814",
  storageBucket: "auth-log-f1814.appspot.com",
  messagingSenderId: "24003925721",
  appId: "1:24003925721:web:383e4a755ea0eaef6790c8",
  measurementId: "G-29DJ4GPTMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth() ;

export{app , auth }