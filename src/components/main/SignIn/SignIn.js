import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../../firebase.init";
import useFirebase from "../../../hooks/useFirebase";
import GoogleIcon from "./1534129544.png";
import GithubIcon from "./25231.png";
import FacebookIcon from "./786-7860566_icons-media-youtube-computer-facebook-social-official-facebook.png";

const auth = getAuth(app);

const SignIn = () => {
  // all use state
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { handleGoogleSignIn, handleFacebookSignIn, handleGithubSignIn } =
    useFirebase();
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
          autoComplete="of"
        />
        <br />
        <input
          className="py-2 border-2 rounded my-4  w-full px-2"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onBlur={handlePassBlur}
          autoComplete="of"
        />
        <br />
        <p className="text-red-500">{error}</p>
        <Link to="/reset">
          <h2 className="text-cyan-500">Forget Password?</h2>
        </Link>
        <button className="p-2 text-center border-2 rounded capitalize text-xl text-white bg-cyan-500 hover:bg-cyan-400 duration-150 ease-in w-full mt-4">
          SignIn
        </button>
        <div className="sing-with-btn my-4 flex i w-full justify-around">
          <button
            className="px-2 py-2 lg:px-6 lg:py-8 justify-center h-12 text-center border-2 rounded capitalize  text-xl mb-2 flex  items-center  text-gray-600"
            onClick={handleGoogleSignIn}
            title="sign up with google"
          >
            <img src={GoogleIcon} alt="google" className="w-8 " />
          </button>
          <br />
          <button
            className="px-2 py-2 lg:px-6 lg:py-8 justify-center h-12 border-2 rounded capitalize items-center text-xl flex text-gray-600 mb-6"
            onClick={handleGithubSignIn}
            title="sign up with github"
          >
            <img src={GithubIcon} alt="google" className="w-8 " />
          </button>
          <button
            className="px-2 py-2 lg:px-6 lg:py-8 justify-center h-12 border-2 rounded capitalize items-center text-xl flex text-gray-600"
            onClick={handleFacebookSignIn}
            title="sign up with facebook"
          >
            <img src={FacebookIcon} alt="google" className="w-8 " />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
