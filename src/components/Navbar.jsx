import React from "react";
import { Link, NavLink } from "react-router-dom";
import alogo from "./images/alogo.jpg";
// import Templates from "./Templates.jsx";
// import Myresume from "./Myresume.jsx";
// import AboutUs from "./AboutUs.jsx";

export const Navbar = () => {
  return (
    <header className=" flex justify-between items-center h-13 pl-4 w-screen bg-zinc-400 text-gray-800 shadow-lg">
      {/* Desktop and tablet */}
      <div className="flex items-center">
        <Link to={"/"} className="flex items-center">
          <img src={alogo} className="object-cover w-40" alt="Almabetter" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 pr-4">
          <li className="font-semibold hover:text-slate-200 cursor-pointer duration-100">
            <NavLink to="/Templates">Templates</NavLink>
          </li>
          <li className="font-semibold hover:text-slate-200 cursor-pointer duration-100">
            <NavLink to="/Myresumes">My Resumes</NavLink>
          </li>
          <li className="font-semibold hover:text-slate-200 cursor-pointer duration-100">
            <NavLink to="/AboutUS">About Us</NavLink>
          </li>
          {/* Add more li items here if needed */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
