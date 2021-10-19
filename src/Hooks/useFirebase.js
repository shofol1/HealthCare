import intializationFirebase from "../Firebase/initializationFirebas"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
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
            console.log(res.user);
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
      // An error happened.
    });
   }
return{
    user,handleGoogle,handleLogout
}

}

export default useFirebase;