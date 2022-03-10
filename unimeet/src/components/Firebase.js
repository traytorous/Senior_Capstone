/*
Firebase functionality
*/
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore,collection,addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOj-Ut26Lov12XWL2mrkJRNP1yvNkstGU",
  authDomain: "unimeet-databas.firebaseapp.com",
  projectId: "unimeet-databas",
  storageBucket: "unimeet-databas.appspot.com",
  messagingSenderId: "811852460691",
  appId: "1:811852460691:web:7754079e4941b681005366",
  measurementId: "G-LF9QR42W1V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();

export const signInGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    localStorage.setItem("userimage",res.user.photoURL);
    localStorage.setItem("username",res.user.displayName);


  } catch (errr) {
    console.error(errr);
  }

}

{/* Getting data from the user browser. This is for testing. It should not be in production */}
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

