/*
Firebase functionality
*/
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase,ref, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB1jkITHyW5mWBjAbms0Yf5T0AVqy7MJc8",
  authDomain: "unimeet-9e794.firebaseapp.com",
  projectId: "unimeet-9e794",
  databaseURL: "https://unimeet-9e794-default-rtdb.firebaseio.com",
  storageBucket: "unimeet-9e794.appspot.com",
  messagingSenderId: "250790391880",
  appId: "1:250790391880:web:af9714ae6b92ea2cdbe87d",
  measurementId: "G-9KYVD0RGST"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();


export const signInGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    localStorage.setItem("userimage",res.user.photoURL);
    localStorage.setItem("username",res.user.displayName);


  } catch (errr) {
    console.error(errr);
  }

}

export const Userphoto = () => {
  return (
    <img className="userimage" alt="Userimage" src={localStorage.getItem("userimage")} />

  )
}
export const signOutGoogle = () => {
  localStorage.removeItem("userimage");
  localStorage.removeItem("username");
  signOut(auth);
  

}

