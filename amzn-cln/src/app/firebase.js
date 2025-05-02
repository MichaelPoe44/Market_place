import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQgF_rTR51w69nu1es8JA_IBcUJbZ1bEM",
    authDomain: "clone-fd64c.firebaseapp.com",
    projectId: "clone-fd64c",
    storageBucket: "clone-fd64c.firebasestorage.app",
    messagingSenderId: "169397151956",
    appId: "1:169397151956:web:1acf0589b3b53106d9b341",
    measurementId: "G-K7XJ3XQ50C"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};