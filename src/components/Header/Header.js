import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="py-4 px-8 lg:px-20 lg:py-8 flex flex-col lg:flex-row justify-between w-full lg:items-center">
        <div className="nv-logo">
          <Link to="/">
            <h2 className="text-4xl lg:text-5xl text-teal-300">Crypto Cafe</h2>
          </Link>
        </div>
        <div className="nav-items ">
          <ul className="flex flex-col lg:flex-row py-8 lg:py-0">
            <li className="mr-8 text-xl hover:text-teal-300 cursor-pointer  pl-3">
              Home
            </li>
            <li className="mr-8 text-xl hover:text-teal-300 cursor-pointer  pl-3">
              Coins
            </li>
            <li className="mr-8 text-xl hover:text-teal-300 cursor-pointer  pl-3">
              Contact
            </li>
            <li className="mr-8 text-xl hover:text-teal-300 cursor-pointer  pl-3">
              About
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
