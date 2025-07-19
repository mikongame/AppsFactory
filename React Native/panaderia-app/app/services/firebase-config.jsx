import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_API_KEY } from '@env';

// ⚠️ Sustituye por tu propia configuración de Firebase
const firebaseConfig = {
  apiKey:  FIREBASE_API_KEY,
  authDomain: "panaderia-app-cb0da.firebaseapp.com",
  projectId: "panaderia-app-cb0da",
  storageBucket: "panaderia-app-cb0da.firebasestorage.app",
  messagingSenderId: "901985954748",
  appId: "1:901985954748:web:34598b25cf6af824e559b9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
