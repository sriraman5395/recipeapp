
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB6WG5NbzLZDw4iSJupiLRMpgb-2gpcETA",
    authDomain: "react-recipe-8518a.firebaseapp.com",
    databaseURL: "https://react-recipe-8518a-default-rtdb.firebaseio.com",
    projectId: "react-recipe-8518a",
    storageBucket: "react-recipe-8518a.appspot.com",
    messagingSenderId: "496394131498",
    appId: "1:496394131498:web:6d1f449fca37a985ef0b53"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
const myCollectionRef = collection(db, "myCollection");
const auth = getAuth(app);

  export {app , db , myCollectionRef, auth};