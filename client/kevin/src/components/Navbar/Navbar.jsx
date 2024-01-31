import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  // const [clicked, setClicked] = useState(false);

  return (
    <div className="navbar bg-base-100 scroll-smooth">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a>Details</a>
              <ul className="p-2">
                <li>
                  <Link to={"/aboutme"}>About Me</Link>
                </li>
                <li>
                  <a href="#projects">My Projects</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">KEVIN</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>Details</summary>
              <ul className="p-2">
                <li>
                  <Link to={"/aboutme"}>About Me</Link>
                </li>
                <li>
                  <a href="#projects">My Projects</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/connect"}>
          <a className="btn" onClick={() => setClicked(!clicked)}>
            Contact Me
          </a>
        </Link>
        {/* {clicked && (
          <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Feature is on progress!</span>
          </div>
        </div>
        )} */}
      </div>
    </div>
  );
}

export default Navbar;
