import React, { useEffect, useState } from "react";
import Login from "./Login";
import Contact from "./Contact";
import AboutPage from "../components/AboutPage";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../db/db";
const auth = getAuth(app);

function Navbar({ onAboutClick }) {
  const [sticky, setSticky] = useState(false);
  const [islogin,setislongin]=useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  // useEffect(() => {
  //   if (theme === "dark") {
  //     element.classList.add("dark");
  //     document.body.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     element.classList.remove("dark");
  //     document.body.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [theme, element]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setislongin(true)
      } else {
        setislongin(false)
      }
    });
  }, [auth])
  

  const navItems = (
    <>
      <li className="hover:underline">
        <a href="/">Home</a>
      </li>
      <li className="hover:underline">
        <a href="/course/Courses">Course</a>
      </li>
      <li className="hover:underline">
        <Contact />
      </li>
      <li className="hover:underline">
        <AboutPage />
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 max-w-screen-2xl dark:bg-black dark:text-white container mx-auto md:px-20 px-4 ${
        sticky ? "bg-gray-700" : "bg-gray-800 shadow-md duration-400 ease"
      }`}
    >
      <div className="navbar">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Store.
          </Link>
        </div>
        <div className="navbar-end space-x-1">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search here"
              className="font-extralight text-pink-600 input input-ghost w-[12rem] max-w-xs border-r-gray-600 border-l-gray-600"
              style={{ color: "#FF69B4" }}
            />
          </div>

          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {islogin ? (
            ""
          ) : (
            <div>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
