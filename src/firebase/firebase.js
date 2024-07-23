// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBVp_U9BP0nqiCFo5WsKu6OcDaZPCSdWVg",
  authDomain: "shopweb-831c7.firebaseapp.com",
  projectId: "shopweb-831c7",
  storageBucket: "shopweb-831c7.appspot.com",
  messagingSenderId: "715004681053",
  appId: "1:715004681053:web:062781869817a5cb1c66b4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database, signInWithEmailAndPassword };