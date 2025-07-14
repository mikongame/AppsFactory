// IMPORTS
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  db,
  doc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  onSnapshot,
} from "../config/firebase-config.js";

// ──────────────── USERS ────────────────

// CREATE
export const createUser = async (userData) => {
  const usersRef = collection(db, "users");
  const newUserRef = await addDoc(usersRef, {
    ...userData,
    user_name_lower: userData.user_name.toLowerCase()
  });
  return newUserRef.id;
};

// UPDATE
export const updateUser = async (userId, newData) => {
  const userRef = doc(db, "users", userId);
  const update = { ...newData };
  if (newData.user_name) update.user_name_lower = newData.user_name.toLowerCase();
  await updateDoc(userRef, update);
};

// READ
export const getUserById = async (userId) => {
  const ref = doc(db, "users", userId);
  const snap = await getDoc(ref);
  return snap.exists() ? { ...snap.data(), id: userId } : null;
};

export const getAllUsers = async () => {
  const snap = await getDocs(collection(db, "users"));
  return getArrayFromCollection(snap);
};

export const getUsersByName = async (name) => {
  const q = query(collection(db, "users"), where("user_name_lower", "==", name.toLowerCase()));
  const snap = await getDocs(q);
  return getArrayFromCollection(snap);
};

// DELETE
export const deleteUserByNameOrId = async (input) => {
  const directRef = doc(db, "users", input);
  const snap = await getDoc(directRef);
  if (snap.exists()) {
    await deleteDoc(directRef);
    return true;
  }

  let q = query(collection(db, "users"), where("user_name_lower", "==", input.toLowerCase()));
  let res = await getDocs(q);
  if (res.empty) {
    q = query(collection(db, "users"), where("user_name", "==", input));
    res = await getDocs(q);
  }

  if (res.empty) return false;
  await deleteDoc(doc(db, "users", res.docs[0].id));
  return true;
};

// ──────────────── BOOKS ────────────────

// CREATE
export const addBookToUser = async (userId, bookData) => {
  const ref = collection(db, "users", userId, "books");
  const newDoc = await addDoc(ref, bookData);
  return newDoc.id;
};

// UPDATE
export const updateBook = async (userId, bookId, newData) => {
  const ref = doc(db, "users", userId, "books", bookId);
  await updateDoc(ref, newData);
};

// READ
export const getBooksByUser = async (userId) => {
  const ref = collection(db, "users", userId, "books");
  const snap = await getDocs(ref);
  return getArrayFromCollection(snap);
};

export const getBookById = async (userId, bookId) => {
  const ref = doc(db, "users", userId, "books", bookId);
  const snap = await getDoc(ref);
  return snap.exists() ? { ...snap.data(), id: bookId } : null;
};

export const getBooksByUserName = async (name) => {
  const q = query(collection(db, "users"), where("user_name_lower", "==", name.toLowerCase()));
  const snap = await getDocs(q);
  if (snap.empty) return [];
  const userId = snap.docs[0].id;
  return getBooksByUser(userId);
};

export const getBooksAndUsersByBookTitle = async (title) => {
  const usersSnap = await getDocs(collection(db, "users"));
  const results = [];

  for (const userDoc of usersSnap.docs) {
    const booksRef = collection(db, "users", userDoc.id, "books");
    const q = query(booksRef, where("title", "==", title));
    const booksSnap = await getDocs(q);
    booksSnap.forEach(bookDoc => {
      results.push({
        user: { id: userDoc.id, ...userDoc.data() },
        book: { id: bookDoc.id, ...bookDoc.data() },
      });
    });
  }

  return results;
};

// DELETE
export const deleteBook = async (userId, bookId) => {
  const ref = doc(db, "users", userId, "books", bookId);
  await deleteDoc(ref);
};

// ──────────────── UTILS ────────────────

const getArrayFromCollection = (snapshot) => {
  return snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
};
