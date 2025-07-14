// services/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ⚠️ Sustituye por tu propia configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdbMub-ZloO6HQtqwCDpdQ0FjZTB9sUdc",
  authDomain: "panaderia-app-cb0da.firebaseapp.com",
  projectId: "panaderia-app-cb0da",
  storageBucket: "panaderia-app-cb0da.firebasestorage.app",
  messagingSenderId: "901985954748",
  appId: "1:901985954748:web:34598b25cf6af824e559b9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
