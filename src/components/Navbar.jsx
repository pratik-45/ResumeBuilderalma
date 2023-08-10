import React from "react";
import { Link } from "react-router-dom";
import alogo from "./images/alogo.jpg";
import AboutUs from "./AboutUs";

export const Navbar = () => {
  return (
    <header className="fixed flex justify-between items-center h-13 pl-4 w-screen bg-zinc-400 text-gray-800 shadow-lg">
      {/* Desktop and tablet */}
      <div className="flex items-center">
        <Link to={"/"} className="flex items-center">
          <img src={alogo} className="object-cover w-40" alt="Almabetter" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 pr-4">
          <li className="font-semibold hover:text-slate-200 cursor-pointer duration-100">
            <Link to="/templates">Templates</Link>
          </li>
          <li className="font-semibold hover:text-slate-200 cursor-pointer duration-100">
            <Link to="/my-resumes">My Resumes</Link>
          </li>
          <li className="font-semibold hover:text-slate-200 cursor-pointer duration-100">
            <AboutUs /> {/* Render the AboutUs component directly */}
          </li>
          {/* Add more li items here if needed */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
