import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase.init";
const auth = getAuth(app);

//login function handler
const Login = () => {
  const [user, setUser] = useState({});
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  // sign in with github function
  const handleGithubSignInBtn = () => {
    signInWithPopup(auth, providerGithub)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // sign in google function
  const handleBtnGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //sign out function handler
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        setUser({});
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex flex-col  items-center ">
      {user.uid ? (
        <div className="user-info flex flex-col justify-center">
          <img
            src={user.photoURL}
            alt="user-img"
            className="h-12 w-12 rounded-full  "
          />
          <h2>{user.displayName}</h2>
          <p>{user.email && user.email}</p>
          <button
            className="p-4 text-center border-2 rounded capitalize text-xl"
            onClick={handleSignOut}
          >
            signOut
          </button>
        </div>
      ) : (
        <>
          <button
            className="p-4 text-center border-2 rounded capitalize text-xl"
            onClick={handleBtnGoogle}
          >
            sign in with google
          </button>
          <button
            className="p-4 text-center border-2 rounded capitalize text-xl"
            onClick={handleGithubSignInBtn}
          >
            sign in with github
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
