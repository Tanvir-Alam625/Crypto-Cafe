import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";
const auth = getAuth(app);
const useFirebase = () => {
  const [myUser, setMyUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setMyUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // facebook
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        setMyUser(res.user);
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        setMyUser(res.user);
        console.log(res.user.displayName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // sign out function handler
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        setMyUser({});
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (myUser) => {
      setMyUser(myUser);
    });
  }, []);
  return {
    myUser,
    setMyUser,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleGithubSignIn,
    handleSignOut,
  };
};
export default useFirebase;
