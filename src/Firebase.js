
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDA7voI6v0nOatapOT_s4bKmEbhhZq1Hio",
    authDomain: "clone-cde48.firebaseapp.com",
    projectId: "clone-cde48",
    storageBucket: "clone-cde48.appspot.com",
    messagingSenderId: "403487626985",
    appId: "1:403487626985:web:363f0512c1ad1f87354278",
    measurementId: "G-ZT7DLF0163"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};