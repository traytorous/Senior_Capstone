/*
Firebase functionality
*/
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1jkITHyW5mWBjAbms0Yf5T0AVqy7MJc8",
  authDomain: "unimeet-9e794.firebaseapp.com",
  projectId: "unimeet-9e794",
  storageBucket: "unimeet-9e794.appspot.com",
  messagingSenderId: "250790391880",
  appId: "1:250790391880:web:af9714ae6b92ea2cdbe87d",
  measurementId: "G-9KYVD0RGST"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export let userphoto = null;

export const signInGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    userphoto = res.user.photoURL;
   
   
    {/* Debuging user key*/}
    

  }catch(err){
    console.error(err);
  }

}

export const signOutGoogle = () =>{
  signOut(auth);
  {/*  Debugging user key */}
  console.log("Signed out")
}
