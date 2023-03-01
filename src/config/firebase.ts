// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjmhuXrFziWE0g6saRBKJeYMMWlFF_PSQ",
  authDomain: "reactproject-dfb4f.firebaseapp.com",
  projectId: "reactproject-dfb4f",
  storageBucket: "reactproject-dfb4f.appspot.com",
  messagingSenderId: "121943872511",
  appId: "1:121943872511:web:f59ee49811986e8bf20dca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);