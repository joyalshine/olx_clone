import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZxTPHGQ-AtWX3NXG4gubMMKIrko3Brw",
  authDomain: "olxclone-49069.firebaseapp.com",
  projectId: "olxclone-49069",
  storageBucket: "olxclone-49069.appspot.com",
  messagingSenderId: "1055908472196",
  appId: "1:1055908472196:web:a74e91b1fc1875f661e9d1",
  measurementId: "G-G2X6HKFCYT",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
