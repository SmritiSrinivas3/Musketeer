import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDVoK_PSv18Wmx3SRKpLJzctvEfMWBDkSM",
    authDomain: "musketeer-587bc.firebaseapp.com",
    projectId: "musketeer-587bc",
    storageBucket: "musketeer-587bc.appspot.com",
    messagingSenderId: "1022235800613",
    appId: "1:1022235800613:web:ef43bfbc902408dfbfbbcc",
    measurementId: "G-L2QGGDRL1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
export default app
