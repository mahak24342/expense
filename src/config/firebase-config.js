// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getAuth } from 'firebase/auth';
import { getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzFO94n6a678qItHoqfAjviqwB8A9mU-8",
  authDomain: "money-20159.firebaseapp.com",
  projectId: "money-20159",
  storageBucket: "money-20159.firebasestorage.app",
  messagingSenderId: "83596875880",
  appId: "1:83596875880:web:2a6270acbce1dbce02c3dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db=getFirestore(app)