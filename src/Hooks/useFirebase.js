import intializationFirebase from "../Firebase/initializationFirebas"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";

intializationFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState("");
    const auth = getAuth();
    const handleGoogle=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(res=>{
            setUser(res.user);
        }).catch(err=>{
            setError(err.message);
        })
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
    })
    .catch((error) => {
      
    });
  }

  const handleSignInUSer=(email,password)=>{
      console.log(email);
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      setUser(res.user)
    })
    .catch((error) => {
     
    });
  }
return{
    user,handleGoogle,handleLogout,error,handleRegistration,handleSignInUSer
}

}

export default useFirebase;