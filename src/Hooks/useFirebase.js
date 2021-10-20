import intializationFirebase from "../Firebase/initializationFirebas";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

intializationFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        setError("");
      });
  };

  const handleRegistration = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUserName(name);
        setUser(res.user);
        setError("Registration Successful");
      })
      .catch((error) => {
        setError("Login failed");
      });
  };

  const handleSignInUSer = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  return {
    user,
    handleGoogle,
    handleLogout,
    error,
    handleRegistration,
    handleSignInUSer,
    setUserName,
  };
};

export default useFirebase;
