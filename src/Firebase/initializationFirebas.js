import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const intializationFirebase=()=>{
    initializeApp(firebaseConfig);
}

export default intializationFirebase;