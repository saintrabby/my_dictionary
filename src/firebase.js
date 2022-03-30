
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyClkcCvtKFxs8hRVOxNBmkI76XvADxGPro",
  authDomain: "hh99-react-7855e.firebaseapp.com",
  projectId: "hh99-react-7855e",
  storageBucket: "hh99-react-7855e.appspot.com",
  messagingSenderId: "657733321219",
  appId: "1:657733321219:web:8e940849c9371262798436",
  measurementId: "G-RB5ZDJLZXW"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
