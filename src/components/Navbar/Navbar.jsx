import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex nav-container">
      <Link to="/">
        <img src="./images/logo.svg" alt="" className="logo" />
      </Link>
      <nav className=" flex nav-items">
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            boxShadow: isActive ? "0 2px 0 0 #fffffff8" : "",
          })}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            boxShadow: isActive ? "0 2px 0 0 #fffffff8" : "",
          })}
        >
          COMPANY
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => ({
            boxShadow: isActive ? "0 2px 0 0 #fffffff8" : "",
          })}
        >
          GLOBAL COVERAGE
        </NavLink>
        <NavLink
          to="/social"
          style={({ isActive }) => ({
            boxShadow: isActive ? "0 2px 0 0 #fffffff8" : "",
          })}
        >
          CONTACT
        </NavLink>
        <button>
          <Link to="#">REQUEST A QUOTE</Link>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
