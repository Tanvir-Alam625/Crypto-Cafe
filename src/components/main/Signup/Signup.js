import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../../firebase.init";
import useFirebase from "../../../hooks/useFirebase";
import SignIn from "../SignIn/SignIn";
import GoogleIcon from "./1534129544.png";
import GithubIcon from "./25231.png";
import FacebookIcon from "./786-7860566_icons-media-youtube-computer-facebook-social-official-facebook (1).png";
const auth = getAuth(app);

//login function handler
const SignUp = () => {
  // all use state
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { handleGoogleSignIn, handleFacebookSignIn, handleGithubSignIn } =
    useFirebase();
  // react firebase
  // error message state
  const [errorE, setErrorE] = useState("");
  const [errorP, setErrorP] = useState("");
  const [errorPC, setErrorPC] = useState("");
  //sign out function handler
  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then((res) => {
  //       setUser({});
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // login form submit function
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //email validation

    if (!/(\S+@\S+\.\S+)/.test(email)) {
      setErrorE(" Please enter the valid email!!");
      return;
    }
    // password validation
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setErrorP("please password must be one spacial character!");
      return;
    }
    setErrorE("");
    setErrorP("");
    // authentication email
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        verifyEmail();
        userProfile();
        console.log(user);
      })
      .catch((error) => {
        console.error(error.code);
        setErrorE(error.message);
      });
  };
  // email auth function

  const handleEmailBlur = (event) => {
    if (/\S+@\S+\.\S+/.test(event.target.value)) {
      setErrorE("");
      setEmail(event.target.value);
    } else {
      setErrorE(" Please enter the valid email!!");
    }
  };
  // name auth function
  const handleNameBlur = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  // password auth function
  const handlePassBlur = (event) => {
    if (/(?=.*[!@#$%^&*])/.test(event.target.value)) {
      setErrorP("");
      setPassword(event.target.value);
    } else {
      setErrorP("please password must be one spacial character!");
    }
  };
  /// confirm password
  const handleConfirmPassOnChange = (event) => {
    const cPassword = event.target.value;
    if (cPassword !== password) {
      setErrorPC("Your Password Not Match!");
    } else {
      setErrorPC("");
    }
    console.log(event.target.value);
  };
  // Email verification
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("email verification");
    });
  };
  const userProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("updated profile");
      })
      .catch((error) => {
        console.log();
      });
  };

  //@@@@@@@
  // jsx
  //@@@@@@@
  return (
    <div className="flex flex-col  items-center ">
      {/* form section  */}
      <form onSubmit={handleFormSubmit} className="w-1/3 mb-8">
        <h2 className="text-4xl font-semibold text-center text-cyan-300">
          SignUp Now
        </h2>
        <input
          type="Name"
          name="Name"
          id="User Name"
          placeholder="User Name"
          className="py-2 border-2 rounded my-4 w-full px-2 "
          onBlur={handleNameBlur}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="py-2 border-2 rounded my-4 w-full px-2 "
          onBlur={handleEmailBlur}
          required
        />
        <p className="text-red-500 text-xl">{errorE}</p>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          className="py-2 border-2 rounded mb-2  w-full px-2"
          onBlur={handlePassBlur}
          required
        />
        <p className="text-red-500">{errorP}</p>
        <br />
        <input
          type="password"
          name="cpass"
          id="Cpass"
          className="py-2 border-2 rounded mb-2  w-full px-2"
          placeholder="Confirm Password"
          onChange={handleConfirmPassOnChange}
        />
        <p className="text-red-500">{errorPC}</p>
        <br />
        <p>
          Already SignUp?
          <Link
            to="/signin"
            className="cursor-pointer text-cyan-300 font-semibold  "
            element={<SignIn />}
          >
            Sign In
          </Link>
        </p>
        <button className="p-2 text-center border-2 rounded capitalize text-xl text-white bg-cyan-500 hover:bg-cyan-400 duration-150 ease-in w-full my-4">
          SignUp
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

export default SignUp;
