import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnzYPllaqvT8NcfvhSJj2V9mtqo-Y1Koo",
  authDomain: "react-app-courses-4f52d.firebaseapp.com",
  projectId: "react-app-courses-4f52d",
  storageBucket: "react-app-courses-4f52d.appspot.com",
  messagingSenderId: "133225444843",
  appId: "1:133225444843:web:33e467afab549dbe1b95ae"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}