
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpjsl2hTmWjoBQMEEvAOIwQnCvycRZjws",
    authDomain: "react-dictionary-a5270.firebaseapp.com",
    projectId: "react-dictionary-a5270",
    storageBucket: "react-dictionary-a5270.appspot.com",
    messagingSenderId: "693502248551",
    appId: "1:693502248551:web:50cd631dc64ce0d29eb6c2",
    measurementId: "G-MCHBGCBRWQ"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
