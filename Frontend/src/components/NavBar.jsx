import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    // <div className="absolute hidden h-10 w-full justify-between bg-gray-300 bg-opacity-30 backdrop-blur-md md:flex">
    <div className="bg-nav-bar-bg fixed left-1/2 top-[20px] z-10 hidden w-[90%] translate-x-[-50%] items-center justify-between gap-16 rounded-full bg-opacity-60 px-10 py-1 text-gray-500 shadow-lg backdrop-blur-md md:flex">
      <div className="flex gap-3">
        <NavLink
          to="/"
          className="hover:text-nav-bar-link-hover rounded-full p-1 transition duration-500 hover:scale-110"
        >
          Home
        </NavLink>
        <NavLink
          to="/diabetes"
          className="hover:text-nav-bar-link-hover rounded-full p-1 transition duration-500 hover:scale-110"
        >
          Diabetes
        </NavLink>
        <NavLink
          to="/bcancer"
          className="hover:text-nav-bar-link-hover rounded-full p-1 transition duration-500 hover:scale-110"
        >
          Breast Cancer
        </NavLink>
        <NavLink
          to="/diabetes"
          className="hover:text-nav-bar-link-hover rounded-full p-1 transition duration-500 hover:scale-110"
        >
          Some Cancer
        </NavLink>
        <NavLink
          to="/"
          className="hover:text-nav-bar-link-hover rounded-full p-1 transition duration-500 hover:scale-110"
        >
          About
        </NavLink>
      </div>
      <div className="flex gap-3">
        <NavLink
          to="/"
          className="hover:text-nav-bar-link-hover rounded-full p-1 transition duration-500 hover:scale-110"
        >
          Models
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
