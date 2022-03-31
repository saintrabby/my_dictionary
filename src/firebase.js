
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAv9c4mybNWupRVhvltuRL9-7ymbRv9-oo",
  authDomain: "react-dict-1060d.firebaseapp.com",
  projectId: "react-dict-1060d",
  storageBucket: "react-dict-1060d.appspot.com",
  messagingSenderId: "1003800206298",
  appId: "1:1003800206298:web:ca88e212f2f26cb6d3fee3",
  measurementId: "G-W4FXS32JF3"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
