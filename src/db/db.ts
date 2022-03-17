import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCifHOeTevv5ya9jT8VbAEP00-dFHhOcHQ",
  authDomain: "typescript-project-6c96e.firebaseapp.com",
  projectId: "typescript-project-6c96e",
  storageBucket: "typescript-project-6c96e.appspot.com",
  messagingSenderId: "82999191410",
  appId: "1:82999191410:web:564ff6b1c34b04e20bdfeb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth: any = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
