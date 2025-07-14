import { db } from "./firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const getTasksByUserId = async (userId) => {
  const colRef = collection(db, "users", userId, "tasks");
  const snap = await getDocs(colRef);
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addTask = async (userId, task) => {
  const colRef = collection(db, "users", userId, "tasks");
  return await addDoc(colRef, task);
};

export const deleteTask = async (userId, taskId) => {
  const taskRef = doc(db, "users", userId, "tasks", taskId);
  await deleteDoc(taskRef);
};
