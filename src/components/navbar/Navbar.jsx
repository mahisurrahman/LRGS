import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import universityLogo from "../../../public/universityLogo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Optional: for hamburger icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = (
    <div className="flex flex-col md:flex-row md:justify-end gap-y-4 md:gap-x-10 items-center text-lg md:text-xl">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-800"
            : "duration-500 hover:duration-500 hover:text-yellow-600 hover:cursor-pointer"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/activities"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-800"
            : "duration-500 hover:duration-500 hover:text-yellow-600 hover:cursor-pointer"
        }
      >
        Activities
      </NavLink>
      <NavLink
        to="/publications"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-800"
            : "duration-500 hover:duration-500 hover:text-yellow-600 hover:cursor-pointer"
        }
      >
        Publications
      </NavLink>
      <NavLink
        to="/team"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-800"
            : "duration-500 hover:duration-500 hover:text-yellow-600 hover:cursor-pointer"
        }
      >
        Team
      </NavLink>
    </div>
  );

  return (
    <div className="h-[13vh] w-full bg-gray-200 text-black flex items-center">
      <div className="w-full flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <div className="w-40 md:w-60 lg:w-64">
          <img src={universityLogo} className="w-full h-full" alt="University Logo" />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`absolute md:static top-[13vh] left-0 w-full md:w-auto bg-gray-200 md:bg-transparent md:flex items-center justify-end transition-all duration-500 ease-in-out z-20 ${
            isOpen ? "max-h-screen p-4 flex flex-col items-center justify-center duration-500 ease-in-out" : "hidden md:block duration-500 ease-in-out"
          }`}
        >
          {links}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
