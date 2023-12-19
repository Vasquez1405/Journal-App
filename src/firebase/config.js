// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOvr0zZw6ZwAVmoFpR8HaOlfdM6DiNdHA",
  authDomain: "journalapp-694d7.firebaseapp.com",
  projectId: "journalapp-694d7",
  storageBucket: "journalapp-694d7.appspot.com",
  messagingSenderId: "290048523433",
  appId: "1:290048523433:web:e1aa2b460e1c132866fdb8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig); //autenticacion
export const FirebaseAuth = getAuth(FirebaseApp) //funcionalidades de autenticacion
export const FirebaseDB = getFirestore(FirebaseApp) //configuracion de base de datos