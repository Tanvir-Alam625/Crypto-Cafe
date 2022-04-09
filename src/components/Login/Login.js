import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase.init";
import GoogleIcon from "./1534129544.png";
import GithubIcon from "./25231.png";
const auth = getAuth(app);

//login function handler
const Login = () => {
  // all use state
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // firebase provider
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
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // login form submit function
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const handleFormSubmit = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
    event.preventDefault();
  };
  // email auth function
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  // password auth function
  const handlePassBlur = (event) => {
    setPassword(event.target.value);
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
          {/* form section  */}
          <form onSubmit={handleFormSubmit} className="w-1/3 mb-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="py-4 border-2 rounded my-4 w-full px-2 "
              onBlur={handleEmailBlur}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              className="py-4 border-2 rounded my-4  w-full px-2"
              onBlur={handlePassBlur}
              required
            />
            <br />
            <button className="p-4 text-center border-2 rounded capitalize text-xl text-white bg-cyan-500 hover:bg-cyan-400 duration-150 ease-in w-full mt-4">
              Login
            </button>
          </form>
          <button
            className="p-4 text-center border-2 rounded capitalize items-center text-xl mb-2 flex text-gray-600"
            onClick={handleBtnGoogle}
          >
            <img src={GoogleIcon} alt="google" className="w-8 mr-4" />
            sign in with google
          </button>
          <br />
          <button
            className="p-4 text-center border-2 rounded capitalize items-center text-xl flex text-gray-600"
            onClick={handleGithubSignInBtn}
          >
            <img src={GithubIcon} alt="google" className="w-8 mr-4" />
            sign in with github
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
