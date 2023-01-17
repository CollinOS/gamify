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
              ? "font-semibold"
              : "font-normal"
            }
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink 
            to="/profile" 
            className={({ isActive }) =>
              isActive 
              ? "font-semibold"
              : "font-normal"
            }
          >
            Profile
          </NavLink>
          <NavLink 
            to="/test" 
            className={({ isActive }) =>
              isActive 
              ? "font-semibold"
              : "font-normal"
            }
          >
            Search
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar