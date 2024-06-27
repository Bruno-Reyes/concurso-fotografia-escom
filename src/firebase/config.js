// Impotarmos las funciones para usar el SDK de firebase
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
// La configuracion de firebase


const firebaseConfig = {
  apiKey: "AIzaSyDepfImNHeLTXVn8s4hyh2YV06I8mk4H6g",

  authDomain: "potent-retina-426300-h6.firebaseapp.com",

  projectId: "potent-retina-426300-h6",

  storageBucket: "potent-retina-426300-h6.appspot.com",

  messagingSenderId: "589971760838",

  appId: "1:589971760838:web:7a9c740279bdc52e2219c7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Para Bucket Storage
export const storage = getStorage(app);

export const uploadFile = async (file) => {
  const storageRef = ref(storage, uuidv4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app, "concurso");

export const uploadInfo = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "fotos"), data);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "fotos"));
  let allData = [];
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data(), id: doc.id });
  });
  return allData;
};
