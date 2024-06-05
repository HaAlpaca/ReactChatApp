// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
  apiKey: "AIzaSyCdyUpa4aiIkrGbU58oVslYHbNRoxp97Lw",
  authDomain: "react-chatapp-3e9d4.firebaseapp.com",
  projectId: "react-chatapp-3e9d4",
  storageBucket: "react-chatapp-3e9d4.appspot.com",
  messagingSenderId: "610331612518",
  appId: "1:610331612518:web:9df4c44136a49681ace4a7",
  measurementId: "G-21CEG1GCXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db,analytics}
export default firebase
