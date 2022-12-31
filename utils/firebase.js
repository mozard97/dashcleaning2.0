import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPkLY4zXnqEu0PsfAMvAjvtXAOPb73qBQ",
   authDomain: "marvcleaning-e4254.firebaseapp.com",
 
  projectId: "marvcleaning-e4254",
  storageBucket: "marvcleaning-e4254.appspot.com",
  messagingSenderId: "206239596754",
  appId: "1:206239596754:web:e684316c6c34168b43ed0b",
  measurementId: "G-S6722JRMQG",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export default firebase;

export const db = app.firestore();
// import db from firestore to firestore instance
