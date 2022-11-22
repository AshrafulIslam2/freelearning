import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../UserContext/UserContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { Duser, logOut } = useContext(AuthContexts);
  console.log(Duser);
  const logoutHandeler = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div
        className={`navbar bg-base-100 ${
          toggle ? "bg-indigo-300" : "bg-white"
        } `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
          >
            <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
          </svg>
          <Link className="btn btn-ghost normal-case text-xl ">
            Free Learning
          </Link>
        </div>
        <div className="navbar-end">
          <label
            for="Toggle1"
            className="inline-flex items-center space-x-4 cursor-pointer text-gray-100 mr-2"
          >
            <span className="relative" onChange={() => setToggle(!toggle)}>
              <input id="Toggle1" type="checkbox" className="hidden peer" />
              <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
            </span>
          </label>
          {Duser?.uid ? (
            <button className="btn btn-ghost btn-circle mr-4">
              <Link to="/login" onClick={logoutHandeler}>
                Logout
              </Link>
            </button>
          ) : (
            <>
              <button className="btn btn-ghost btn-circle mr-2">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn btn-ghost btn-circle  mr-3">
                <Link to="/register">Register</Link>
              </button>
            </>
          )}

          <Link to="/profile">
            {Duser?.photoURL ? (
              <>
                <img
                  src={Duser?.photoURL}
                  alt=""
                  className="rounded-full"
                  width={20}
                  srcset=""
                />
              </>
            ) : (
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                width={20}
                className="rounded-full mr-2"
                alt=""
                srcset=""
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
