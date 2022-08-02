import firebase from './InitializeFirebase';
import * as firebaseui from 'firebaseui'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDzM7u1YoH8qKCaReNBpLbyCFlgeam56HQ",
  authDomain: "chattingdev-a3454.firebaseapp.com",
  projectId: "chattingdev-a3454",
  storageBucket: "chattingdev-a3454.appspot.com",
  messagingSenderId: "531708093065",
  appId: "1:531708093065:web:5ed18be0372a19073edc58",
  measurementId: "G-VLQGHDS80E"
};

export const UIConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult : any, redirectUrl : any) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        console.log('RETURN ON LOG',authResult)
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        // document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/room',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'terminos-y-condiciones',
    // Privacy policy url.
    privacyPolicyUrl: 'aviso-privacidad'
};

firebase.initializeApp(firebaseConfig)
export const AuthUI = new firebaseui.auth.AuthUI(firebase.auth());

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  console.log('AUTH CHANGE',user)
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
