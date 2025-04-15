// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyDvI0TVuAdQrrUm8CoC2yKSuHFoPaRUQF4",
 authDomain: "sellaris-app-v1.firebaseapp.com",
 projectId: "sellaris-app-v1",
 storageBucket: "sellaris-app-v1.firebasestorage.app",
 messagingSenderId: "482055303198",
 appId: "1:482055303198:web:0dfa31f2abdd91d127fe0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth, app};
