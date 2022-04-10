import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../../firebase.init";
const auth = getAuth(app);
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // email auth function
  const handlePassBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleResetPass = (event) => {
    event.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email send");
      })
      .catch((error) => {
        console.log(error.code);
        setError(error.message);
      });
  };
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-12">
      <form onSubmit={handleResetPass} className="w-1/3 mb-8">
        <input
          className="py-2 border-2 rounded my-4  w-full px-2"
          type="email"
          name="password"
          id="password"
          placeholder="password"
          onChange={handlePassBlur}
        />
        <br />
        <p className="text-red-500">{error}</p>
        <Link to="/signin">
          <button className="p-2 text-center border-2 rounded capitalize text-xl text-white bg-cyan-500 hover:bg-cyan-400 duration-150 ease-in w-full mt-4">
            Reset
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;
