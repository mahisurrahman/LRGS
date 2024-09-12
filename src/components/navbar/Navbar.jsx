import React from "react";
import { NavLink } from "react-router-dom";
import universityLogo from "../../../public/universityLogo.png";

function Navbar() {
  const links = (
    <div className="flex justify-end gap-x-10 items-center text-xl">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "duration-500 hover:duration-500 hover:text-green-500 hover:cursor-pointeer"
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
            ? "active"
            : "duration-500 hover:duration-500 hover:text-green-500 hover:cursor-pointeer"
        }
      >
        Activities
      </NavLink>
      <NavLink
        to="/messages"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "duration-500 hover:duration-500 hover:text-green-500 hover:cursor-pointeer"
        }
      >
        Publications
      </NavLink>
      <NavLink
        to="/messages"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "duration-500 hover:duration-500 hover:text-green-500 hover:cursor-pointeer"
        }
      >
        Team
      </NavLink>
    </div>
  );
  return (
    <div className="h-[15vh] w-full bg-green-100 text-black flex items-center">
      <div className="w-full grid grid-cols-3 mx-10">
        <div className="col-span-1">
          <img src={universityLogo} className="w-72 h-60" alt="" />
        </div>
        <div className="col-span-2 flex justify-end items-center text-end">
          {links}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
