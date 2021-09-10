import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB-tEx8YBMXmcPCOH0bR7v4fRe_BcoDoQ",
    authDomain: "mern-267c0.firebaseapp.com",
    projectId: "mern-267c0",
    storageBucket: "mern-267c0.appspot.com",
    messagingSenderId: "999476687432",
    appId: "1:999476687432:web:8e9509cf92c3b89acade7d"
  };
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
