import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt4Icon } from "@heroicons/react/solid";
import CustomLink from "../main/CustomLink/CustomLink";
const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="my-2">
      <nav className="py-4 px-8 lg:px-20 lg:py-8 flex  bg-white flex-col lg:flex-row justify-between w-full lg:items-center">
        <div className="nv-logo">
          <Link to="/">
            <h2 className="text-4xl lg:text-5xl bg-white z-10 text-teal-300">
              Crypto Cafe
            </h2>
          </Link>
        </div>
        <div
          className={` absolute top-[80px] w-full lg:w-auto bg-white py-6 px-3 lg:p-0 lg:static lg:mt-0 duration-300 ease-in z-30 ${
            open ? "left-[-100%]" : "left-[0px]"
          }`}
        >
          <ul className="flex flex-col lg:flex-row py-8 lg:py-0">
            <CustomLink to="/">
              <li
                onClick={() => setOpen(!open)}
                className="mr-8 mb-4 lg:mb-0 text-xl hover:text-teal-300 cursor-pointer  pl-3"
              >
                Home
              </li>
            </CustomLink>
            <CustomLink to="/coins">
              <li
                onClick={() => setOpen(!open)}
                className="mr-8 mb-4 lg:mb-0 text-xl hover:text-teal-300 cursor-pointer  pl-3"
              >
                Coins
              </li>
            </CustomLink>
            <CustomLink to="/contact">
              <li
                onClick={() => setOpen(!open)}
                className="mr-8 mb-4 lg:mb-0 text-xl hover:text-teal-300 cursor-pointer  pl-3"
              >
                Contact
              </li>
            </CustomLink>
            <CustomLink to="/about">
              <li
                onClick={() => setOpen(!open)}
                className="mr-8 mb-4 lg:mb-0 text-xl hover:text-teal-300 cursor-pointer  pl-3"
              >
                About
              </li>
            </CustomLink>
          </ul>
        </div>
        <MenuAlt4Icon
          onClick={() => setOpen(!open)}
          className=" block lg:hidden absolute right-8 top-6 h-8 w-8 text-teal-300 cursor-pointer border rounded"
        />
      </nav>
    </div>
  );
};

export default Header;
