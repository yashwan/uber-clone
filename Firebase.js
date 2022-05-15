//18002673032
// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAZiTEG9iCW7AFoWV7y4TCaSk822O-lVI",
  authDomain: "uber-clone-983e6.firebaseapp.com",
  projectId: "uber-clone-983e6",
  storageBucket: "uber-clone-983e6.appspot.com",
  messagingSenderId: "116302765304",
  appId: "1:116302765304:web:ead6f5c615a8c32767ef0d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { auth, db };
