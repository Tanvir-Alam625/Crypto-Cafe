import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../../firebase.init";
import GoogleIcon from "./1534129544.png";
import GithubIcon from "./25231.png";
const auth = getAuth(app);

const SignIn = () => {
  // all use state
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
  // email auth function

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  // password auth function
  const handlePassBlur = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  // form submit function
  const formSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        const user = auth.user;
        // setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code);
        setError(error.message);
      });
  };
  return (
    <div className="flex flex-col items-center">
      <form className="w-1/3 mb-8" onSubmit={formSubmit}>
        <h2 className="text-4xl font-semibold text-center text-cyan-300 my-8">
          SignIn Now
        </h2>
        <input
          className="py-2 border-2 rounded my-4  w-full px-2"
          type="Email"
          name="email"
          id="email"
          placeholder="email"
          onBlur={handleEmailBlur}
        />
        <br />
        <input
          className="py-2 border-2 rounded my-4  w-full px-2"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onBlur={handlePassBlur}
        />
        <br />
        <p className="text-red-500">{error}</p>
        <Link to="/reset">
          <h2 className="text-cyan-500">Forget Password?</h2>
        </Link>
        <button className="p-2 text-center border-2 rounded capitalize text-xl text-white bg-cyan-500 hover:bg-cyan-400 duration-150 ease-in w-full mt-4">
          SignIn
        </button>
      </form>
      <button
        className="p-2 text-center border-2 rounded capitalize items-center text-xl mb-2 flex text-gray-600"
        onClick={handleBtnGoogle}
      >
        <img src={GoogleIcon} alt="google" className="w-8 mr-4" />
        sign up with google
      </button>
      <br />
      <button
        className="p-2 text-center border-2 rounded capitalize items-center text-xl flex text-gray-600"
        onClick={handleGithubSignInBtn}
      >
        <img src={GithubIcon} alt="google" className="w-8 mr-4" />
        sign up with github
      </button>
    </div>
  );
};

export default SignIn;
