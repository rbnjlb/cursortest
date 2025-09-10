// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_HHx_Uo3QjXWpABoPLEqRA40UgUYPkxY",
  authDomain: "cursortest-dc979.firebaseapp.com",
  projectId: "cursortest-dc979",
  storageBucket: "cursortest-dc979.firebasestorage.app",
  messagingSenderId: "399714994399",
  appId: "1:399714994399:web:736ed03a9d2ba0bfd0016a",
  measurementId: "G-578YQQRJSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };