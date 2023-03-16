import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


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
class Firebase {
    constructor() {
        this.app = initializeApp(firebaseConfig)
    }
    signUserUp = async (email,password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/firebase.User
                  const uid = user.uid;
                  // ...
                } else {
                  // User is signed out
                  // ...
                }
              });
    }

}
export default Firebase


