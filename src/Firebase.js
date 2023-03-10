import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIBF2Vb3i2QoOcW5P6Pz5D0aG05Y3gkzE",
  authDomain: "clone-d7b92.firebaseapp.com",
  projectId: "clone-d7b92",
  storageBucket: "clone-d7b92.appspot.com",
  messagingSenderId: "221888904747",
  appId: "1:221888904747:web:0c9238866aa9d254d9346e",
  measurementId: "G-SYQH0HP2S5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = app.firestore();

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export { auth, db };
