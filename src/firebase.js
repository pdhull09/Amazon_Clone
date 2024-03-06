import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLai69GlmaMGTptvR50p8oQUGFMMRKU7E",
  authDomain: "clone-4d06e.firebaseapp.com",
  projectId: "clone-4d06e",
  storageBucket: "clone-4d06e.appspot.com",
  messagingSenderId: "540004824315",
  appId: "1:540004824315:web:ed4984aea51555cae32c5e",
  measurementId: "G-9EDRSFRYZ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
