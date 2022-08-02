// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzM7u1YoH8qKCaReNBpLbyCFlgeam56HQ",
  authDomain: "chattingdev-a3454.firebaseapp.com",
  projectId: "chattingdev-a3454",
  storageBucket: "chattingdev-a3454.appspot.com",
  messagingSenderId: "531708093065",
  appId: "1:531708093065:web:5ed18be0372a19073edc58",
  measurementId: "G-VLQGHDS80E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics(getAnalytics())
// const auth = firebase.auth()

export default firebase