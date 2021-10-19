import intializationFirebase from "../Firebase/initializationFirebas"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

intializationFirebase();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState("");
    const auth = getAuth();
    const handleGoogle=()=>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
       
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            }else{
                setUser("");
            }
          });
    },[])

   const handleLogout=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser("")
    }).catch((error) => {
      setError('')
    });
   }

  const handleRegistration =(email,password)=>{
    createUserWithEmailAndPassword(auth, email,password)
    .then((res) => {
      setUser(res.user);
      updateUSerName();
      setError("Login Successful")
    })
    .catch((error) => {
      setError("Login failed")
    });
  }
  const updateUSerName=(userName)=>{
    updateProfile(auth.currentUser, {
      displayName: userName
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
  
    });
  }

  const handleSignInUSer=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
return{
    user,handleGoogle,handleLogout,error,handleRegistration,handleSignInUSer,updateUSerName,error
}

}

export default useFirebase;