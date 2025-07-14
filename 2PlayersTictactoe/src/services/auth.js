import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth, db } from "./firebase-config"; // <- AQUÍ importas auth ya creado
import { doc, setDoc } from "firebase/firestore";


export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(db, "users", user.uid), {}); // crea doc vacío
  return user.uid;
};

export const signIn = async (email, password) =>
  (await signInWithEmailAndPassword(auth, email, password)).user.uid;

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

export const logout = async () => await signOut(auth);
