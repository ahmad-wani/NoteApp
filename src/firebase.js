// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeIISEc2jr60KB7FXLK6MFkKGdniaI-vU",
  authDomain: "notes-app-c3a9b.firebaseapp.com",
  projectId: "notes-app-c3a9b",
  storageBucket: "notes-app-c3a9b.firebasestorage.app",
  messagingSenderId: "1097683529755",
  appId: "1:1097683529755:web:60f90573664fa89b77c8be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

