import {initializeApp }from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

const Gprovider = new GoogleAuthProvider();
const Fbprovider=new FacebookAuthProvider()
const firebaseConfig = {
  apiKey: "AIzaSyC5hkrjxqHvvDpXHd7cUurEzeXp_SewW7k",
  authDomain: "ticketnew-f23f3.firebaseapp.com",
  projectId: "ticketnew-f23f3",
  storageBucket: "ticketnew-f23f3.appspot.com",
  messagingSenderId: "326530881310",
  appId: "1:326530881310:web:de6976c9881be115b19b0f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth,Gprovider,Fbprovider}