// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBE86GvBk8f1QFKYHKZdHZUTLXB6PmbGBc",
  authDomain: "echolibrary-85611.firebaseapp.com",
  projectId: "echolibrary-85611",
  storageBucket: "echolibrary-85611.appspot.com",
  messagingSenderId: "1036235737288",
  appId: "1:1036235737288:web:5f09560c49d06cb33e3dfd",
  measurementId: "G-HV8T8NXQ9P"
};

const app = initializeApp(firebaseConfig);

export { app, getFirestore, getStorage, getAuth };