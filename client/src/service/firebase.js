// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDr_Dcp6-wr4bzt3R5gnovkZF7-nhzNYCE",
  authDomain: "peluqueria-9cc67.firebaseapp.com",
  projectId: "peluqueria-9cc67",
  storageBucket: "peluqueria-9cc67.appspot.com",
  messagingSenderId: "416862949672",
  appId: "1:416862949672:web:5ef9b16ae37debf017801d",
  measurementId: "G-1CPBHHWT6T"
};


// Initialize Firebase
export const appFirebease = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebease);
export const storage = getStorage(appFirebease);
