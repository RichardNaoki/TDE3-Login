import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyACTp8w6gf_S6K4iKjCB_Gu1jw3UUwbXnU",
  authDomain: "projeto-5b882.firebaseapp.com",
  databaseURL: "https://projeto-5b882.firebaseio.com",
  projectId: "projeto-5b882",
  storageBucket: "projeto-5b882.appspot.com",
  messagingSenderId: "829115901615",
  appId: "1:829115901615:android:dfea75c09b9cf9578d165a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);