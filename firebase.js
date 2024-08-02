// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx3pUy11fumaODDsHJeEWjkADzMDRw4TI",
  authDomain: "inventory-management-4fcb4.firebaseapp.com",
  projectId: "inventory-management-4fcb4",
  storageBucket: "inventory-management-4fcb4.appspot.com",
  messagingSenderId: "266482044444",
  appId: "1:266482044444:web:564a918005ec28067ad9d9",
  measurementId: "G-R02RJDSVLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore};