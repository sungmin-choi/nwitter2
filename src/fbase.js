import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCmJVVvLNm5LmyvbNJGxlF_jw994_Xu5uA",
  authDomain: "nwitter2-393db.firebaseapp.com",
  projectId: "nwitter2-393db",
  storageBucket: "nwitter2-393db.appspot.com",
  messagingSenderId: "954662528787",
  appId: "1:954662528787:web:29a34afe3a3fd5779edce6"
};


initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();