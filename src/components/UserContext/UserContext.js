import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContexts = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();

const Usercontexts = ({ children }) => {
  const [Duser, SetUser] = useState();
  const [loder, setloader] = useState(true);
  const user = { displayName: "ashraful" };
  const creatuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const GitHubLogin = () => {
    return signInWithPopup(auth, provider2);
  };

  const logOut = () => {
    return signOut(auth);
  };
  const uProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      console.log("auth State change", currentUser);
      setloader(false);
    });
    return () => {
      unsuscribe();
    };
  }, []);

  const authinfo = {
    user,
    creatuser,
    loginUser,
    Duser,
    GoogleLogin,
    logOut,
    loder,
    uProfile,
    GitHubLogin,
  };
  return (
    <AuthContexts.Provider value={authinfo}>{children}</AuthContexts.Provider>
  );
};

export default Usercontexts;
