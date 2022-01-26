import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIywrC_-_vmiVsB6i4tGMcsLcVme5vSCA",
  authDomain: "netflix-clone-e9924.firebaseapp.com",
  projectId: "netflix-clone-e9924",
  storageBucket: "netflix-clone-e9924.appspot.com",
  messagingSenderId: "800646432206",
  appId: "1:800646432206:web:d211d66d978d2b711a579f",
  measurementId: "G-ETKMML6B6D",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
