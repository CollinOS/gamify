import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16">
        <div>
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive 
              ? "text-amber-400 font-bold border-b b-2 border-amber-400 font-lores text-2xl tracking-wider"
              : "text-amber-400 font-semibold font-lores text-2xl tracking-wider"
            }
          >
            GAMIFY
          </NavLink>
        </div>
        <div className="flex flex-row items-center">
          <NavLink 
            to="/profile" 
            className={({ isActive }) =>
              isActive 
              ? "font-semibold border-b b-2 border-red-500"
              : "font-normal"
            }
          >
            Profile
          </NavLink>
          <div className="flex p-4"/>
          <NavLink 
            to="/test" 
            className={({ isActive }) =>
              isActive 
              ? "font-semibold border-b b-2 border-emerald-500"
              : "font-normal"
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar